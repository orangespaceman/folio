# folio

My portfolio website.

## Setup

Clone the repo, and install dependencies:

```
yarn
```

The site uses [Jekyll](http://jekyllrb.com/) to build static templates, so the next step is to install it (see their website for further instructions):

```
gem install jekyll
```

## Development

In two terminal tabs, run the following commands:

```
yarn run watch
jekyll serve
```

View the site at [http://localhost:4000/](http://localhost:4000/)

### CSS

The site uses [PostCSS](https://github.com/postcss/postcss) for post-processing and concatenation of CSS files.

The [SuitCSS](https://suitcss.github.io/) component naming conventions are followed.

#### CSS Linting

To lint the CSS:

```
yarn run lint:css
```

### JavaScript

The JS uses [Webpack](https://webpack.github.io/) to keep files separated and to protect scope.

ESLint is used to keep JS consistent.

#### JavaScript Linting

To lint the JS:

```
yarn run lint:js
```

### Fonts

The main heading font is [Raleway](https://www.theleagueofmoveabletype.com/raleway)

Webfont versions have been downloaded from [fontpro](http://fontpro.com/raleway-font-16024)

...apart from the WOFF and WOFF2 files that have been manually converted:

* [https://everythingfonts.com/ttf-to-woff](https://everythingfonts.com/ttf-to-woff)
* [https://everythingfonts.com/ttf-to-woff2](https://everythingfonts.com/ttf-to-woff2)

### SVG Sprite

The site uses an Icomoon SVG Sprite for certain icons

To update:

1. Visit the [icomoon app](https://icomoon.io/)
2. Upload the json file - `src/assets/icomoon/selection.json`
3. Select new icons, download new SVG zip
4. Overwrite files in `src/assets/icomoon` with zip contents
5. Copy sprite.svg file to `src/assets/images/sprite.svg`

## Posts

When adding a new portfolio project or lab, the following images need prepping:

* featured.jpg - ratio 5:1 - roughly 2000x400
* thumb-desktop.jpg - ratio 8:6 - roughy 1024x768
* thumb-mobile.jpg - ratio 4:6 - roughly 400x600
* desktop images
* mobile images
