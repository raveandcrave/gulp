const server = () => {
  app.plugins.browserSync.init({
    server: {
      baseDir: app.path.build.html,
    },
    logLevel: "info",
    cors: true,
    notify: true,
    port: 3030,
  });
};

export { server };
