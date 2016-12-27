'use strict';

import gulp   from 'gulp';
import config  from '../config';

gulp.task('copyDependencies', function() {
  return gulp.src(config.scripts.dependencies)
        .pipe(gulp.dest(config.scripts.dest));
});
