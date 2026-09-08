"""
Crop each mission's model photo from the BIOGLOW rulebooks.

Cards are detected automatically (pale-green panels in a 2x2 grid); the photo's
vertical extent within each card is specified per mission, since the layout of
photo vs. description text varies from card to card.
"""
import os
from PIL import Image
import crop

OUT = 'missions'
os.makedirs(OUT, exist_ok=True)

def emit(page_img, card, y0, y1, name, drop_badge=True):
    """Crop a card's photo band, trim the background, and save."""
    x0, _, x1, _ = card
    box = (x0, y0, x1, y1)
    im = page_img.crop(box)
    if drop_badge:
        im = strip_badge(im)
    im = trim(im)
    im.save(os.path.join(OUT, f'{name}.png'))
    return im.size

def strip_badge(im):
    """
    Paint out the red 'no equipment constraint' badge in the top-right corner.
    It is a rules marker, not part of the model. Red label arrows are also
    present, so candidate blobs are separated and only a compact, roughly
    square one anchored in the top-right corner is removed.
    """
    px = im.load(); W, H = im.size
    S = 4
    x_from = int(W * 0.55)
    def red(c):
        r, g, b = c[:3]
        return r > 140 and g < 95 and b < 95
    cols = list(range(x_from, W, S)); rows = list(range(0, int(H * 0.6), S))
    mask = {(x, y) for y in rows for x in cols if red(px[x, y])}
    best = None
    while mask:
        seed = mask.pop(); stack = [seed]; blob = [seed]
        while stack:
            cx, cy = stack.pop()
            for dx, dy in ((S,0),(-S,0),(0,S),(0,-S),(S,S),(-S,-S),(S,-S),(-S,S)):
                n = (cx+dx, cy+dy)
                if n in mask:
                    mask.discard(n); stack.append(n); blob.append(n)
        xs = [p[0] for p in blob]; ys = [p[1] for p in blob]
        x0, x1, y0, y1 = min(xs), max(xs), min(ys), max(ys)
        w, h = x1-x0, y1-y0
        if w < 40 or h < 40:
            continue
        # The badge is near-square and sits hard against the top-right corner.
        if abs(w-h) > max(w, h) * 0.35:
            continue
        if x1 < W * 0.80 or y0 > H * 0.30:
            continue
        if best is None or len(blob) > best[0]:
            best = (len(blob), x0, y0, x1, y1)
    if best is None:
        return im
    _, x0, y0, x1, y1 = best
    pad = 14
    bg = px[2, 2]
    for y in range(max(0, y0-pad), min(H, y1+pad+1)):
        for x in range(max(0, x0-pad), min(W, x1+pad+1)):
            px[x, y] = bg
    return im

def trim(im, tol=42, margin=24):
    """Trim uniform background, leaving a small even margin."""
    px = im.load(); W, H = im.size
    # Sample several background points; the card body has a slight gradient.
    samples = [px[2, 2], px[W - 3, 2], px[2, H - 3], px[W - 3, H - 3]]
    def diff(c):
        return min(abs(c[0]-b[0]) + abs(c[1]-b[1]) + abs(c[2]-b[2])
                   for b in samples)
    minx, miny, maxx, maxy = W, H, 0, 0
    for y in range(H):
        for x in range(W):
            if diff(px[x, y][:3]) > tol:
                if x < minx: minx = x
                if x > maxx: maxx = x
                if y < miny: miny = y
                if y > maxy: maxy = y
    if minx > maxx:
        return im
    return im.crop((max(0, minx - margin), max(0, miny - margin),
                    min(W, maxx + margin), min(H, maxy + margin)))
