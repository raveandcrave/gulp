import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber"; //обработка ошибок
import notify from "gulp-notify"; //уведомления в консоль и в систему
import browserSync from "browser-sync";

export const plugins = {
  replace,
  plumber,
  notify,
  browserSync,
};
