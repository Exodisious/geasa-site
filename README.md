# geasa.com.au

Static site. No build step, no dependencies. Edit the HTML directly.

## Deploy (GitHub Pages)

1. New public repo, e.g. `geasa-site`. Push the CONTENTS of this folder to the
   root of `main`, not the folder itself. `index.html` must sit at the top level.
2. Settings > Pages > Source: Deploy from a branch, branch `main`, folder `/ (root)`. Save.
3. The Custom domain field appears after saving. It should already read
   `geasa.com.au` from the CNAME file in this repo.
4. Tick Enforce HTTPS once the certificate provisions.

## DNS at VentraIP

Four A records on host `@`:

    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153

One CNAME. Note the trailing dot, VentraIP requires it:

    Host: www    Points to: <your-github-username>.github.io.

Leave the NS records alone.

## Before it goes live

- Set up `hello@geasa.com.au` as a forwarder at VentraIP, or change the address.

Live links already wired in:

    https://exodisious.itch.io/fracture
    https://exodisious.itch.io/hall-of-echoes
    https://bsky.app/profile/exodisious.bsky.social

## Adding a screenshot

Drop it in `img/`, keep it under about 400 KB, then use the `.still` block:

    <div class="still">
      <img src="img/yourfile.jpg" alt="Description">
      <p class="cap">Caption</p>
    </div>

Inside a `.second` section it will render desaturated automatically.

## Design notes

The page is ordered by in-world chronology rather than by release order:
First Age, the interval, Second Age. The palette warms at the top and cools
toward the bottom, and the Second Age screenshots are desaturated in CSS.
The interval between the two games is real vertical space with a measured
rule, and it is the one element the page is meant to be remembered by.

## Files

    index.html                             the whole site
    img/                                   artwork
    favicon.png / apple-touch-icon.png     icons
    CNAME                                  custom domain for Pages
