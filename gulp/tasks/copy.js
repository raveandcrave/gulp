import { filePaths } from "../config/path.js";

export const copy = () => {
  return app.gulp
    .src(filePaths.src.files)
    .pipe(app.gulp.dest(filePaths.build.files));
};
