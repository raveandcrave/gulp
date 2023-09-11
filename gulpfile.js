import gulp from "gulp";

import { path } from "./gulp/config/path.js";

//common plugins
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  path,
  gulp,
  plugins,
};

//tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task("default", dev);
