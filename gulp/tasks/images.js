import { filePaths } from "../config/path.js";

export const js = () => {
  return gulp
    .src(filePaths.src.images)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "IMAGES",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(gulp.dest(filePaths.build.images))
    .pipe(plugins.browserSync.stream());
};
