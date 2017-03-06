'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

// Custom config section starts here
const loaderConfig = [{
  test: /\.hbs/,
  loader: "handlebars-template-loader"
}];


build.configureWebpack.mergeConfig({
  additionalConfiguration: (generatedConfiguration) => {
    generatedConfiguration.module.loaders.push([
      { test: /\.hbs/, loader: "handlebars-template-loader" }
    ]);

    return generatedConfiguration;

  }
});

build.initialize(gulp);
