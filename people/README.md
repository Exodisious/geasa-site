[README.md](https://github.com/user-attachments/files/31542660/README.md)
# Adding a character to /people

1. Drop three images into `img/people/`:
   - `<name>-scene.jpg`      concept scene, native resolution
   - `<name>-scene-w.jpg`    same image, max 1200px wide
   - `<name>-sheet.jpg`      specification sheet, native resolution
   - `<name>-sheet-w.jpg`    same sheet, max 1200px wide
   - `<name>-card.jpg`       crop of the scene, roughly 9:7, for the index

2. Copy `people/stahlwall.html` to `people/<name>.html` and replace:
   the title, the meta description, the og tags, the h1, the sub line,
   the image paths, the write-up, and the story.

3. In `people/index.html`, swap that character's `<div class="pending">`
   for an `<a class="card">` block copied from Stahlwall's.

Nothing else changes. `people.css` and `zoom.js` are shared.
