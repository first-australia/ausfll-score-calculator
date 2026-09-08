"""Generate mission model images for both 2026 BIOGLOW editions."""
import glob, os
from PIL import Image
import build, crop

FOUNDERS = [
 ('fpage9-09.png', 0,  405, 1180, 'm01'),
 ('fpage9-09.png', 1,  470, 1310, 'm02'),
 ('fpage9-09.png', 2, 2015, 2640, 'm03'),
 ('fpage9-09.png', 3, 1915, 2440, 'm04'),
 ('fpage10-10.png',0,  410, 1175, 'm05'),
 ('fpage10-10.png',1,  475, 1190, 'm06'),
 ('fpage10-10.png',2, 1908, 2532, 'm07'),
 ('fpage10-10.png',3, 1915, 2790, 'm08'),
 ('fpage11-11.png',0,  410, 1180, 'm09'),
 ('fpage11-11.png',1,  425, 1170, 'm10'),
 ('fpage11-11.png',2, 1995, 2710, 'm11'),
 ('fpage11-11.png',3, 1915, 2665, 'm12'),
 ('fpage12-12.png',0,  440,  965, 'm13'),
 ('fpage12-12.png',1,  585, 1090, 'm14'),
 ('fpage12-12.png',2, 1955, 2645, 'm15'),
]

FUTURE = {3:(1430,150,3450,2200,'m01'),
          4:(1600,250,3450,2200,'m02'),
          5:(1700,600,3200,2060,'m03'),
          6:(1450,240,3350,2060,'m04'),
          7:(1600,360,3100,2170,'m05'),
          8:(1430,560,3450,2260,'m06')}

def run():
    os.makedirs('out/founders', exist_ok=True)
    os.makedirs('out/future', exist_ok=True)
    cache = {}
    for f, ci, y0, y1, name in FOUNDERS:
        if f not in cache:
            im = Image.open(f).convert('RGB')
            cache[f] = (im, crop.cards(im))
        im, boxes = cache[f]
        x0, _, x1, _ = boxes[ci]
        c = im.crop((x0, y0, x1, y1))
        c = build.strip_badge(c)
        c = build.trim(c)
        c.save(f'out/founders/{name}.png')
        print('founders', name, c.size)
    for p, (x0, y0, x1, y1, name) in FUTURE.items():
        f = glob.glob(f'ftpage{p}-*.png')[0]
        c = Image.open(f).convert('RGB').crop((x0, y0, x1, y1))
        c = build.trim(c)
        c.save(f'out/future/{name}.png')
        print('future', name, c.size)

if __name__ == '__main__':
    run()
