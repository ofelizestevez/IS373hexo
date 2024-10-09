'use strict';

const util = require('hexo-util');

// Regular expression to match .md links in HTML
const regex = /<a href="([^"]*?\.md)">([^<]+)<\/a>/g;

hexo.extend.filter.register('after_post_render', function(data) {
  data.content = data.content.replace(regex, (match, link, text) => {
    // Remove the .md extension for the link
    const htmlLink = `<a href="${link.slice(0, -3)}.html">${text}</a>`;
    return htmlLink;
  });
});