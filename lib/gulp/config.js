'use strict';

let extensions = {
  javascript: '.js'
};

let folders = {
  root: '.',
  dist: './dist',
  src: './src',
  srcPkg: './gulp',
  nodeModules: './node_modules',
  bowerComponents: './bower_components',
  jspmPackages: './jspm_packages'
};

let globs = {
  any: '/**/*',
  scripts: {
    javascript: '/**/*' + extensions.javascript
  }
};

let files = {
  any: '*',
  packageJSON: folders.root + '/package.json',
  changelogMD: folders.root + '/CHANGELOG.md'
};

let javascript = {
  src: [
    folders.src + globs.scripts.javascript
  ],
  srcPkg: [
    folders.src + globs.scripts.javascript,
    folders.srcPkg + globs.scripts.javascript,
    files.gulpfile
  ],
  dest: folders.dist
};

export default {
  extensions,
  folders,
  globs,
  files,
  javascript
};
