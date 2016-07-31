'use strict';

import gulp from 'gulp';
import config from '../config';
import help from 'gulp-help';
import bump from 'gulp-bump';
import conventionalRecommendedBump from 'conventional-recommended-bump';

// provide help through "gulp help" -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
help(gulp);

gulp.task('bump', function (done) {
  /**
   * Bumping version number and tagging the repository with it.
   * Please read http://semver.org/
   *
   * To bump the version numbers accordingly after you did a patch,
   * introduced a feature or made a backwards-incompatible release.
   */

  conventionalRecommendedBump({ preset: 'angular' }, function (err, importance) {
    // Get all the files to bump version in
    gulp.src([config.files.packageJSON])
      .pipe(bump({ type: importance }))
      .pipe(gulp.dest(config.folders.root));

    done();
  });
});
