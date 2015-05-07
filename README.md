# folio

My portfolio website.


## Setup

Clone the repo, and install dependencies:

```
npm install
npm run bower
```


## Development

In two terminal tabs, run the following commands:

```
npm start
jekyll serve
```

View the site at [http://localhost:4000/](http://localhost:4000/)


### CSS

The site uses [PostCSS](https://github.com/postcss/postcss) for post-processing and concatenation of separate CSS files.

The [SuitCSS](https://suitcss.github.io/) component naming conventions are followed.


#### CSS Linting

There are two ways that the CSS is linted.

##### PostCSS BEM Linter

The first uses [PostCSS BEM Linter](https://github.com/necolas/postcss-bem-linter), and is set up to run via gulp when the CSS changes.


##### SCSS Lint

The second method to lint the CSS uses the [scss-lint](https://github.com/brigade/scss-lint) tool.

Because this has a Ruby dependency it isn't run automatically by Gulp, but can be run manually.

Firstly, ensure you have the `scss-lint` tool installed locally:

```
gem install scss-lint
```

To lint the CSS, run:

```
gulp lint-css-scss
```

This is a fairly permissive set of rules. To run a more strict check that will generate a number of errors, run:

```
gulp lint-css-scss-dev
```


#### SCSS

SCSS is used to generate the grid, using [CSS Wizardry grids](http://csswizardry.com/csswizardry-grids/)

This doesn't happen at runtime, so to parse the SCSS manually run:

```
gulp compile-sass
```


### JavaScript

The JS uses [Browserify](http://browserify.org/) to keep files separated and to protect scope.

JSHint and JSCS rules are used to keep JS consistent.

These are all run automatically via Gulp when any JS file is saved.


### Gulp

Gulp tasks have been separated into individual files using [node-require-directory](https://github.com/troygoode/node-require-directory)


### Fonts

The main heading font is [Raleway](https://www.theleagueofmoveabletype.com/raleway)

Webfont versions have been downloaded from [fontpro](http://fontpro.com/raleway-font-16024)


### SVG Sprite

The site uses an Icomoon SVG Sprite for certain icons

To update:

1. Visit the [icomoon app](https://icomoon.io/)
2. Upload the json file - `src/_src/images/icomoon/selection.json`
3. Select new icons, download new SVG zip
4. Overwrite files in `src/_src/images/icomoon` with zip contents
5. Copy sprite.svg file to `src/assets/images/sprite.svg`


## Posts

When adding a new portfolio project or lab, the following images need prepping:

 - featured.jpg - ratio 5:1 - roughly 2000x400
 - thumb-desktop.jpg - ratio 8:6 - roughy 1024x768
 - thumb-mobile.jpg - ratio 4:6 - roughly 400x600
 - desktop images
 - mobile images


## Back-end

The site uses [Jekyll](http://jekyllrb.com/) to build static templates, so the first step is to install it (see their website for instructions):

```
gem install jekyll
```

To compile the static templates, run:

```
jekyll build
```

