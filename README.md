# Yujie Hou — Academic Homepage

An English-only academic homepage for **Yujie Hou**, designed for the GitHub account **sapphireh**. The page has a fixed white background and a restrained green accent.

## Files

- `index.html`: profile, interests, news, publications, education, experience, and research repositories.
- `cv.html`: printable CV with the same confirmed personal details.
- `styles.css`: responsive screen and print styles.
- `script.js`: BibTeX copying and the CV print action. Core content and native expandable summaries also work without JavaScript.
- `assets/favicon.svg`: initials-based favicon.
- `assets/papers/`: original paper figures, with sources and figure numbers documented in `SOURCES.md`; thumbnails link to the full-size images.
- `assets/yujie-hou.jpg`: the owner-selected profile photograph; display framing is controlled by CSS.
- `.nojekyll`: serves the site as static files on GitHub Pages.
- `SOURCES.md`: content provenance and unresolved optional profile fields.

There are no build dependencies, analytics, tracking scripts, remote fonts, or API keys. All page assets are local.

## Preview locally

Open `index.html` directly, or serve this folder:

```sh
python -m http.server 8432 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:8432/`. The clipboard API works on localhost or HTTPS. When unavailable, the site selects the citation for manual copying.

## Publish to GitHub Pages

The intended repository is **`sapphireh/sapphireh.github.io`**. The expected address after a successful deployment is **`https://sapphireh.github.io/`**. A local copy does not mean this address has been deployed.

1. Sign in to GitHub as `sapphireh` and create a public repository named `sapphireh.github.io`, or use that repository if it already exists.
2. Upload `index.html`, `cv.html`, `styles.css`, `script.js`, `.nojekyll`, and the `assets` folder to the repository root. Do not upload `output/` or `.playwright-cli/`.
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, then **main** and **/(root)**, and save.
5. Wait for the Pages deployment to complete and check **Visit site**.

For Git users, after creating an empty repository, run from this directory:

```sh
git init -b main
git add index.html cv.html styles.css script.js assets .nojekyll .gitignore README.md SOURCES.md
git commit -m "Build Yujie Hou academic homepage"
git remote add origin https://github.com/sapphireh/sapphireh.github.io.git
git push -u origin main
```

Use the owner account or a collaborator with repository write access. Do not publish to a different account merely because it is connected locally.

GitHub documentation:

- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Content updates

Edit the corresponding sections in `index.html`. Keep education, employment, interests, and publications in `cv.html` consistent. Add only confirmed personal information. The homepage displays the photograph supplied by the owner; CSS controls the framing while the original image remains intact.

To save a PDF of the CV, open `cv.html` and choose **Print / Save as PDF**. The print layout removes navigation and interactive controls.
