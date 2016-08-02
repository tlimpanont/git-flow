import gulp from 'gulp';
import help from 'gulp-help';
import conventionalChangelog from 'gulp-conventional-changelog'
import config from '../config';

// provide help through "gulp help" -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
help(gulp);

gulp.task('changelog', function () {

  return gulp.src(config.files.changelogMD, { buffer: false })
    .pipe(
      conventionalChangelog(
        { preset: 'angular', releaseCount: 0 },
        {},
        { noMerges: undefined, merges: undefined}
    ))
    .pipe(gulp.dest(config.folders.root));
});
