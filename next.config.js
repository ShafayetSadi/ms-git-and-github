import { existsSync, readFileSync, readdirSync } from "fs";
import path from "path";

const courseJsonPath = path.join(process.cwd(), "course.json");
const buffer = readFileSync(courseJsonPath);
const course = JSON.parse(buffer);
const BASE_URL = course?.productionBaseUrl || "";
const lessonsPath = path.join(process.cwd(), "lessons");

function addWatchDependencies(compilation, dir) {
  if (!existsSync(dir)) {
    return;
  }

  compilation.contextDependencies.add(dir);

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      addWatchDependencies(compilation, fullPath);
    } else if (entry.name.endsWith(".md") || entry.name === "meta.json") {
      compilation.fileDependencies.add(fullPath);
    }
  }
}

class WatchLessonsPlugin {
  apply(compiler) {
    compiler.hooks.afterCompile.tap("WatchLessonsPlugin", (compilation) => {
      compilation.fileDependencies.add(courseJsonPath);
      addWatchDependencies(compilation, lessonsPath);
    });
  }
}

const config = {
  output: "export",
  basePath: BASE_URL,
  env: {
    BASE_URL,
  },
  webpack: (webpackConfig, { dev }) => {
    if (dev) {
      webpackConfig.plugins.push(new WatchLessonsPlugin());
    }

    return webpackConfig;
  },
};

export default config;
