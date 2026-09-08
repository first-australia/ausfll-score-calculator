"""Crop the model photo out of each mission card."""
from PIL import Image

def cards(im):
    """Bounding boxes of the pale-green mission cards, in reading order."""
    W,H=im.size; px=im.load()
    def is_card(c):
        r,g,b=c
        pale = 205<g<250 and 195<r<245 and 175<b<230 and g>=r>b
        head = 90<g<185 and r<115 and b<95 and g-r>25 and g-b>25
        return pale or head
    S=8
    mask=[[is_card(px[x,y]) for x in range(0,W,S)] for y in range(0,H,S)]
    mw=len(mask[0]); mh=len(mask)
    seen=[[False]*mw for _ in range(mh)]; out=[]
    for y in range(mh):
        for x in range(mw):
            if mask[y][x] and not seen[y][x]:
                st=[(x,y)]; seen[y][x]=True; pts=[]
                while st:
                    cx,cy=st.pop(); pts.append((cx,cy))
                    for dx,dy in((1,0),(-1,0),(0,1),(0,-1)):
                        nx,ny=cx+dx,cy+dy
                        if 0<=nx<mw and 0<=ny<mh and mask[ny][nx] and not seen[ny][nx]:
                            seen[ny][nx]=True; st.append((nx,ny))
                if len(pts)>2000:
                    xs=[p[0] for p in pts]; ys=[p[1] for p in pts]
                    out.append((min(xs)*S,min(ys)*S,max(xs)*S+S,max(ys)*S+S))
    out.sort(key=lambda b:(b[1],b[0]))
    return out

def content_rows(im, box, pad=18):
    """Rows inside a card that carry ink, as (y, count) at 4px steps."""
    px=im.load(); x0,y0,x1,y1=box
    return [(y,sum(1 for x in range(x0+pad,x1-pad,3) if sum(px[x,y])<430))
            for y in range(y0,y1,4)]

def photo_box(im, box):
    """
    The model photo region of a card: the tall run of content between the
    header and the first scoring/description text. Photo rows are dense and
    contiguous; text lines are thin bands separated by clean gaps.
    """
    x0,y0,x1,y1=box
    rows=content_rows(im,box)
    # Skip the header: find first row with ink after a blank stretch below y0.
    start=None
    for i,(y,c) in enumerate(rows):
        if y<y0+140: continue
        if c>4:
            start=y; break
    if start is None: return None
    # Walk down; stop at the first gap of >=60px of near-blank rows, which
    # separates the photo from the text beneath it.
    last=start; gap=0; end=start
    for y,c in rows:
        if y<=start: continue
        if c>4:
            if gap>=60: break
            end=y; gap=0
        else:
            gap+=4
    return (x0,start,x1,end)

def ink_bands(im, box, gap=40, thresh=4):
    """Contiguous vertical bands of ink inside a card."""
    rows=content_rows(im,box); bands=[]; cur=None
    for y,c in rows:
        if c>thresh:
            if cur is None: cur=[y,y]
            else: cur[1]=y
        else:
            if cur and y-cur[1]>gap:
                bands.append(tuple(cur)); cur=None
    if cur: bands.append(tuple(cur))
    return bands

def tight_bbox(im, box, bg_tol=26):
    """Shrink a box to the non-background content inside it."""
    px=im.load(); x0,y0,x1,y1=box
    # background = the card's pale green, sampled from a corner inside the box
    bg=px[x0+6,y0+6]
    def differs(c):
        return (abs(c[0]-bg[0])+abs(c[1]-bg[1])+abs(c[2]-bg[2]))>bg_tol
    minx,miny,maxx,maxy=x1,y1,x0,y0
    for y in range(y0,y1,2):
        for x in range(x0,x1,2):
            if differs(px[x,y]):
                if x<minx:minx=x
                if x>maxx:maxx=x
                if y<miny:miny=y
                if y>maxy:maxy=y
    if minx>maxx: return box
    return (minx,miny,maxx,maxy)
