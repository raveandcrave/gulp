import { filePaths } from "../config/path.js";

const server = () => {
  app.plugins.browserSync.init({
    server: {
      baseDir: filePaths.build.html,
    },
    logLevel: "info",
    cors: true,
    notify: true,
    port: 3030,
  });
};

export { server };
