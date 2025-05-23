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

#### Headings

The main heading font is [Raleway](https://www.theleagueofmoveabletype.com/raleway)

Webfont versions have been downloaded from [fontpro](http://fontpro.com/raleway-font-16024)

...apart from the WOFF and WOFF2 files that have been manually converted:

* [https://everythingfonts.com/ttf-to-woff](https://everythingfonts.com/ttf-to-woff)
* [https://everythingfonts.com/ttf-to-woff2](https://everythingfonts.com/ttf-to-woff2)

#### Body

The main body font is [EB Garamond](https://www.fontsquirrel.com/fonts/eb-garamond)

This has been downloaded from and converted with Font Squirrel


## Posts

When adding a new portfolio project or lab, the following images need prepping:

* featured.jpg - ratio 5:1 - roughly 2000x400
* thumb-desktop.jpg - ratio 8:6 - roughly 1024x768
* thumb-mobile.jpg - ratio 4:6 - roughly 400x600
* desktop images
* mobile images


## Updating dependencies

To check for outdated packages:

```
yarn outdated
```

To update packages:

```
yarn upgrade-interactive --latest
```

or

```
npx npm-check-updates -u
```
