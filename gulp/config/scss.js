import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import cleanCss from "gulp-clean-css"; //сжатие css
import webpcss from "gulp-webpcss"; //вывод webp изображений
import autoPrefixer from "gulp-autoprefixer"; //вендорные префиксы
import groupCssMediaQueries from "gulp-group-css-media-queries"; //группировка медиа запросов

const sass = gulpSass(dartSass);

const webpcssConfig = {
  webpClass: ".webp",
  noWebpClass: ".no-webp",
};

const autoPrefixerConfig = {
  grid: true,
  cascade: true,
  overrideBrowserslist: ["last 3 versions"],
};

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: true })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(groupCssMediaQueries())
    .pipe(webpcss(webpcssConfig))
    .pipe(autoPrefixer(autoPrefixerConfig))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
};
