import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

import { filePaths } from "../config/path.js";

const versionNumberConfig = {
  value: "%DT%",
  append: {
    key: "_v",
    cover: 0,
    to: ["css", "js"],
  },
  output: {
    file: "gulp/version.json",
  },
};

export const html = () => {
  return app.gulp
    .src(filePaths.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(fileInclude())
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(webpHtmlNosvg())
    .pipe(versionNumber(versionNumberConfig))
    .pipe(app.gulp.dest(filePaths.build.html))
    .pipe(app.plugins.browserSync.stream());
};
