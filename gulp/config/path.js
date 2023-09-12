import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    files: `${buildFolder}/files/`,

    js: `${buildFolder}/js/`,
    images: `${buildFolder}/images/`,
    fonts: `${buildFolder}/fonts/`,
    static: `${buildFolder}/static/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,

    files: `${srcFolder}/files/**/*.*`,
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/images/**/*.svg`,
    static: `${srcFolder}/static/**/*.*`,
    svgIcons: `${srcFolder}/icons/*.svg`,
    fontFacesFile: `${srcFolder}/scss/config/fonts.scss`,
    fonts: `${srcFolder}/fonts/`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,

    files: `${srcFolder}/files/**/*.*`,
    js: `${srcFolder}/js/**/*.js`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
    static: `${srcFolder}/static/**/*.*`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
};
