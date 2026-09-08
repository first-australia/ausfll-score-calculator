# Mission image extraction

Crops the model photo out of each mission in the FLL rulebook PDFs, for upload
to Firebase as the `image` on each `Mission`.

Each output is the mission model with its part labels, and nothing else: no
scoring rows, no description text, and the red "no equipment constraint" badge
is painted out.

## Usage

Requires [poppler](https://poppler.freedesktop.org) (`brew install poppler`)
and Pillow.

```sh
python3 -m venv venv && ./venv/bin/pip install Pillow

# Render the mission pages of each rulebook to PNG at 300dpi.
# Founders is portrait with a 2x2 card grid; Future is landscape, one mission
# per page with the photo on the right.
for p in 9 10 11 12; do
  pdftoppm -f $p -l $p -r 300 -png bioglow-founders-edition.pdf fpage$p
done
for p in 3 4 5 6 7 8; do
  pdftoppm -f $p -l $p -r 300 -png bioglow-future-edition.pdf ftpage$p
done

./venv/bin/python generate.py   # writes out/founders/*.png and out/future/*.png
```

## Adapting to a new season

`crop.py` finds the pale-green mission cards automatically. What changes each
year is `generate.py`'s spec: the y-range of the photo band within each card,
because the balance of photo vs. description text varies card by card.

To find those numbers, print the ink bands per card and pick the run that holds
the photo and its labels but stops before the description paragraph:

```python
from PIL import Image
import crop
im = Image.open('fpage9-09.png').convert('RGB')
for i, b in enumerate(crop.cards(im)):
    print(i, b, crop.ink_bands(im, b))
```

Always eyeball the results as a contact sheet before uploading. Label text
clipped mid-word and description paragraphs bleeding in at the bottom are the
two failure modes, and both are obvious in a grid and invisible in a file list.
