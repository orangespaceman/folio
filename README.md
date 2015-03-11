# folio

Updated portfolio website, 7 years in the making...


## Setup

Clone the repo

Run:

```
npm install
npm run bower
```


## Development

Run:

```
npm start
```


### CSS

The site uses [PostCSS](https://github.com/postcss/postcss) for post-processing and concatenation


#### SCSS

SCSS is used to generate the grid, using [CSS Wizardry grids](http://csswizardry.com/csswizardry-grids/)

This doesn't happen at runtime, so to parse the SCSS run:

```
gulp compile-sass
```


### JS

TBC

JSHint and JSCS rules are used to keep JS consistent


### Gulp

Gulp tasks have been separated into individual files using [node-require-directory](https://github.com/troygoode/node-require-directory)


### Fonts

The main heading font is [Raleway](https://www.theleagueofmoveabletype.com/raleway)

Webfont versions have been downloaded from [fontpro](http://fontpro.com/raleway-font-16024)


## Back-end

TBC


## Deployment

TBC
