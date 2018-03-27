"use strict";

const marked = require("marked");
const loaderUtils = require("loader-utils");
const fm = require('front-matter');

module.exports = function (markdown) {
    // merge params and default config
    const options = loaderUtils.getOptions(this);

    this.cacheable();

    marked.setOptions(options);
    const content = fm(markdown);

    return marked(content.body);
};
