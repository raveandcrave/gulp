import gulp from "gulp";
import webpack from "webpack-stream";
import { filePaths } from "../config/path.js";

import { plugins } from "../config/plugins.js";

export const js = () => {
  return gulp
    .src(filePaths.src.js, { sourcemaps: true })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      webpack({
        mode: "development",
        output: {
          filename: "app.min.js",
        },
      })
    )
    .pipe(gulp.dest(filePaths.build.js))
    .pipe(plugins.browserSync.stream());
};
