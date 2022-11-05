// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path3, { resolve as resolve3 } from "path";

// utils/plugins/make-manifest.ts
import * as fs from "fs";
import * as path from "path";

// utils/log.ts
function colorLog(message, type) {
  let color = type || COLORS.FgBlack;
  switch (type) {
    case "success":
      color = COLORS.FgGreen;
      break;
    case "info":
      color = COLORS.FgBlue;
      break;
    case "error":
      color = COLORS.FgRed;
      break;
    case "warning":
      color = COLORS.FgYellow;
      break;
  }
  console.log(color, message);
}
var COLORS = {
  Reset: "\x1B[0m",
  Bright: "\x1B[1m",
  Dim: "\x1B[2m",
  Underscore: "\x1B[4m",
  Blink: "\x1B[5m",
  Reverse: "\x1B[7m",
  Hidden: "\x1B[8m",
  FgBlack: "\x1B[30m",
  FgRed: "\x1B[31m",
  FgGreen: "\x1B[32m",
  FgYellow: "\x1B[33m",
  FgBlue: "\x1B[34m",
  FgMagenta: "\x1B[35m",
  FgCyan: "\x1B[36m",
  FgWhite: "\x1B[37m",
  BgBlack: "\x1B[40m",
  BgRed: "\x1B[41m",
  BgGreen: "\x1B[42m",
  BgYellow: "\x1B[43m",
  BgBlue: "\x1B[44m",
  BgMagenta: "\x1B[45m",
  BgCyan: "\x1B[46m",
  BgWhite: "\x1B[47m"
};

// utils/manifest-parser/index.ts
var ManifestParser = class {
  constructor() {
  }
  static convertManifestToString(manifest2) {
    return JSON.stringify(manifest2, null, 2);
  }
};
var manifest_parser_default = ManifestParser;

// utils/plugins/make-manifest.ts
var __vite_injected_original_dirname = "/home/marcin/Dokumenty/WebProgramming/anti-filter-bubble/frontend/utils/plugins";
var { resolve } = path;
var outDir = resolve(__vite_injected_original_dirname, "..", "..", "public");
function makeManifest(manifest2) {
  return {
    name: "make-manifest",
    buildEnd() {
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
      }
      const manifestPath = resolve(outDir, "manifest.json");
      fs.writeFileSync(
        manifestPath,
        manifest_parser_default.convertManifestToString(manifest2)
      );
      colorLog(`Manifest file copy complete: ${manifestPath}`, "success");
    }
  };
}

// utils/plugins/custom-dynamic-import.ts
function customDynamicImport() {
  return {
    name: "custom-dynamic-import",
    renderDynamicImport() {
      return {
        left: `
        {
          const dynamicImport = (path) => import(path);
          dynamicImport(
          `,
        right: ")}"
      };
    }
  };
}

// utils/plugins/add-hmr.ts
import * as path2 from "path";
import { readFileSync } from "fs";
var __vite_injected_original_dirname2 = "/home/marcin/Dokumenty/WebProgramming/anti-filter-bubble/frontend/utils/plugins";
var isDev = process.env.__DEV__ === "true";
var DUMMY_CODE = `export default function(){};`;
function getInjectionCode(fileName) {
  return readFileSync(
    path2.resolve(__vite_injected_original_dirname2, "..", "reload", "injections", fileName),
    { encoding: "utf8" }
  );
}
function addHmr(config) {
  const { background = false, view = true } = config || {};
  const idInBackgroundScript = "virtual:reload-on-update-in-background-script";
  const idInView = "virtual:reload-on-update-in-view";
  const scriptHmrCode = isDev ? getInjectionCode("script.js") : DUMMY_CODE;
  const viewHmrCode = isDev ? getInjectionCode("view.js") : DUMMY_CODE;
  return {
    name: "add-hmr",
    resolveId(id) {
      if (id === idInBackgroundScript || id === idInView) {
        return getResolvedId(id);
      }
    },
    load(id) {
      if (id === getResolvedId(idInBackgroundScript)) {
        return background ? scriptHmrCode : DUMMY_CODE;
      }
      if (id === getResolvedId(idInView)) {
        return view ? viewHmrCode : DUMMY_CODE;
      }
    }
  };
}
function getResolvedId(id) {
  return "\0" + id;
}

// package.json
var package_default = {
  name: "anti-filter-bubble",
  version: "0.0.1",
  description: "chrome anti bubble extension",
  repository: {
    type: "git",
    url: "https://github.com/ai-cyborgs/akai-code.git"
  },
  scripts: {
    build: "tsc --noEmit && vite build",
    "build:hmr": "rollup --config utils/reload/rollup.config.ts",
    wss: "node utils/reload/initReloadServer.js",
    dev: "npm run build:hmr && (npm run wss & nodemon)",
    test: "jest"
  },
  type: "module",
  dependencies: {
    react: "18.2.0",
    "react-dom": "18.2.0",
    "react-toggle-button": "^2.2.0"
  },
  devDependencies: {
    "@rollup/plugin-typescript": "^8.5.0",
    "@testing-library/react": "13.4.0",
    "@types/chrome": "0.0.197",
    "@types/jest": "29.0.3",
    "@types/node": "18.7.23",
    "@types/react": "18.0.21",
    "@types/react-dom": "18.0.6",
    "@types/ws": "^8.5.3",
    "@typescript-eslint/eslint-plugin": "5.38.1",
    "@typescript-eslint/parser": "5.38.1",
    "@vitejs/plugin-react": "2.1.0",
    chokidar: "^3.5.3",
    eslint: "8.24.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "4.2.1",
    "eslint-plugin-react": "7.31.8",
    "fs-extra": "10.1.0",
    jest: "29.0.3",
    "jest-environment-jsdom": "29.0.3",
    nodemon: "2.0.20",
    prettier: "2.7.1",
    rollup: "2.79.1",
    sass: "1.55.0",
    "ts-jest": "29.0.2",
    "ts-loader": "9.4.1",
    typescript: "4.8.3",
    vite: "3.1.3",
    ws: "8.9.0"
  }
};

// manifest.ts
var manifest = {
  manifest_version: 3,
  name: package_default.name,
  version: package_default.version,
  description: package_default.description,
  options_page: "src/pages/options/index.html",
  permissions: ["activeTab", "tabs"],
  background: { service_worker: "src/pages/background/index.js" },
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: "icon-34.png"
  },
  chrome_url_overrides: {
    newtab: "src/pages/newtab/index.html"
  },
  icons: {
    "128": "icon-128.png"
  },
  content_scripts: [
    {
      matches: ["https://twitter.com/*"],
      js: ["src/pages/content/index.js"],
      run_at: "document_start",
      css: ["assets/css/contentStyle.chunk.css"]
    }
  ],
  devtools_page: "src/pages/devtools/index.html",
  web_accessible_resources: [
    {
      resources: [
        "assets/js/*.js",
        "assets/css/*.css",
        "icon-128.png",
        "icon-34.png"
      ],
      matches: ["*://*/*"]
    }
  ]
};
var manifest_default = manifest;

// vite.config.ts
var __vite_injected_original_dirname3 = "/home/marcin/Dokumenty/WebProgramming/anti-filter-bubble/frontend";
var root = resolve3(__vite_injected_original_dirname3, "src");
var pagesDir = resolve3(root, "pages");
var assetsDir = resolve3(root, "assets");
var outDir2 = resolve3(__vite_injected_original_dirname3, "dist");
var publicDir = resolve3(__vite_injected_original_dirname3, "public");
var isDev2 = process.env.__DEV__ === "true";
var enableHmrInBackgroundScript = true;
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": pagesDir
    }
  },
  plugins: [
    react(),
    makeManifest(manifest_default),
    customDynamicImport(),
    addHmr({ background: enableHmrInBackgroundScript, view: true })
  ],
  publicDir,
  build: {
    outDir: outDir2,
    sourcemap: isDev2,
    rollupOptions: {
      input: {
        devtools: resolve3(pagesDir, "devtools", "index.html"),
        panel: resolve3(pagesDir, "panel", "index.html"),
        content: resolve3(pagesDir, "content", "index.ts"),
        background: resolve3(pagesDir, "background", "index.ts"),
        contentStyle: resolve3(pagesDir, "content", "style.scss"),
        popup: resolve3(pagesDir, "popup", "index.html"),
        newtab: resolve3(pagesDir, "newtab", "index.html"),
        options: resolve3(pagesDir, "options", "index.html")
      },
      output: {
        entryFileNames: "src/pages/[name]/index.js",
        chunkFileNames: isDev2 ? "assets/js/[name].js" : "assets/js/[name].[hash].js",
        assetFileNames: (assetInfo) => {
          const { dir, name: _name } = path3.parse(assetInfo.name);
          const assetFolder = getLastElement(dir.split("/"));
          const name = assetFolder + firstUpperCase(_name);
          return `assets/[ext]/${name}.chunk.[ext]`;
        }
      }
    }
  }
});
function getLastElement(array) {
  const length = array.length;
  const lastIndex = length - 1;
  return array[lastIndex];
}
function firstUpperCase(str) {
  const firstAlphabet = new RegExp(/( |^)[a-z]/, "g");
  return str.toLowerCase().replace(firstAlphabet, (L) => L.toUpperCase());
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidXRpbHMvcGx1Z2lucy9tYWtlLW1hbmlmZXN0LnRzIiwgInV0aWxzL2xvZy50cyIsICJ1dGlscy9tYW5pZmVzdC1wYXJzZXIvaW5kZXgudHMiLCAidXRpbHMvcGx1Z2lucy9jdXN0b20tZHluYW1pYy1pbXBvcnQudHMiLCAidXRpbHMvcGx1Z2lucy9hZGQtaG1yLnRzIiwgIm1hbmlmZXN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvbWFyY2luL0Rva3VtZW50eS9XZWJQcm9ncmFtbWluZy9hbnRpLWZpbHRlci1idWJibGUvZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL21hcmNpbi9Eb2t1bWVudHkvV2ViUHJvZ3JhbW1pbmcvYW50aS1maWx0ZXItYnViYmxlL2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL21hcmNpbi9Eb2t1bWVudHkvV2ViUHJvZ3JhbW1pbmcvYW50aS1maWx0ZXItYnViYmxlL2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBwYXRoLCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IG1ha2VNYW5pZmVzdCBmcm9tIFwiLi91dGlscy9wbHVnaW5zL21ha2UtbWFuaWZlc3RcIjtcbmltcG9ydCBjdXN0b21EeW5hbWljSW1wb3J0IGZyb20gXCIuL3V0aWxzL3BsdWdpbnMvY3VzdG9tLWR5bmFtaWMtaW1wb3J0XCI7XG5pbXBvcnQgYWRkSG1yIGZyb20gXCIuL3V0aWxzL3BsdWdpbnMvYWRkLWhtclwiO1xuaW1wb3J0IG1hbmlmZXN0IGZyb20gXCIuL21hbmlmZXN0XCI7XG5cbmNvbnN0IHJvb3QgPSByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIik7XG5jb25zdCBwYWdlc0RpciA9IHJlc29sdmUocm9vdCwgXCJwYWdlc1wiKTtcbmNvbnN0IGFzc2V0c0RpciA9IHJlc29sdmUocm9vdCwgXCJhc3NldHNcIik7XG5jb25zdCBvdXREaXIgPSByZXNvbHZlKF9fZGlybmFtZSwgXCJkaXN0XCIpO1xuY29uc3QgcHVibGljRGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsIFwicHVibGljXCIpO1xuXG5jb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Ll9fREVWX18gPT09IFwidHJ1ZVwiO1xuXG4vLyBFTkFCTEUgSE1SIElOIEJBQ0tHUk9VTkQgU0NSSVBUXG5jb25zdCBlbmFibGVIbXJJbkJhY2tncm91bmRTY3JpcHQgPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQHNyY1wiOiByb290LFxuICAgICAgXCJAYXNzZXRzXCI6IGFzc2V0c0RpcixcbiAgICAgIFwiQHBhZ2VzXCI6IHBhZ2VzRGlyLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIG1ha2VNYW5pZmVzdChtYW5pZmVzdCksXG4gICAgY3VzdG9tRHluYW1pY0ltcG9ydCgpLFxuICAgIGFkZEhtcih7IGJhY2tncm91bmQ6IGVuYWJsZUhtckluQmFja2dyb3VuZFNjcmlwdCwgdmlldzogdHJ1ZSB9KSxcbiAgXSxcbiAgcHVibGljRGlyLFxuICBidWlsZDoge1xuICAgIG91dERpcixcbiAgICBzb3VyY2VtYXA6IGlzRGV2LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIGRldnRvb2xzOiByZXNvbHZlKHBhZ2VzRGlyLCBcImRldnRvb2xzXCIsIFwiaW5kZXguaHRtbFwiKSxcbiAgICAgICAgcGFuZWw6IHJlc29sdmUocGFnZXNEaXIsIFwicGFuZWxcIiwgXCJpbmRleC5odG1sXCIpLFxuICAgICAgICBjb250ZW50OiByZXNvbHZlKHBhZ2VzRGlyLCBcImNvbnRlbnRcIiwgXCJpbmRleC50c1wiKSxcbiAgICAgICAgYmFja2dyb3VuZDogcmVzb2x2ZShwYWdlc0RpciwgXCJiYWNrZ3JvdW5kXCIsIFwiaW5kZXgudHNcIiksXG4gICAgICAgIGNvbnRlbnRTdHlsZTogcmVzb2x2ZShwYWdlc0RpciwgXCJjb250ZW50XCIsIFwic3R5bGUuc2Nzc1wiKSxcbiAgICAgICAgcG9wdXA6IHJlc29sdmUocGFnZXNEaXIsIFwicG9wdXBcIiwgXCJpbmRleC5odG1sXCIpLFxuICAgICAgICBuZXd0YWI6IHJlc29sdmUocGFnZXNEaXIsIFwibmV3dGFiXCIsIFwiaW5kZXguaHRtbFwiKSxcbiAgICAgICAgb3B0aW9uczogcmVzb2x2ZShwYWdlc0RpciwgXCJvcHRpb25zXCIsIFwiaW5kZXguaHRtbFwiKSxcbiAgICAgIH0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwic3JjL3BhZ2VzL1tuYW1lXS9pbmRleC5qc1wiLFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogaXNEZXZcbiAgICAgICAgICA/IFwiYXNzZXRzL2pzL1tuYW1lXS5qc1wiXG4gICAgICAgICAgOiBcImFzc2V0cy9qcy9bbmFtZV0uW2hhc2hdLmpzXCIsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBkaXIsIG5hbWU6IF9uYW1lIH0gPSBwYXRoLnBhcnNlKGFzc2V0SW5mby5uYW1lKTtcbiAgICAgICAgICBjb25zdCBhc3NldEZvbGRlciA9IGdldExhc3RFbGVtZW50KGRpci5zcGxpdChcIi9cIikpO1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBhc3NldEZvbGRlciArIGZpcnN0VXBwZXJDYXNlKF9uYW1lKTtcbiAgICAgICAgICByZXR1cm4gYGFzc2V0cy9bZXh0XS8ke25hbWV9LmNodW5rLltleHRdYDtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBnZXRMYXN0RWxlbWVudDxUPihhcnJheTogQXJyYXlMaWtlPFQ+KTogVCB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgY29uc3QgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMTtcbiAgcmV0dXJuIGFycmF5W2xhc3RJbmRleF07XG59XG5cbmZ1bmN0aW9uIGZpcnN0VXBwZXJDYXNlKHN0cjogc3RyaW5nKSB7XG4gIGNvbnN0IGZpcnN0QWxwaGFiZXQgPSBuZXcgUmVnRXhwKC8oIHxeKVthLXpdLywgXCJnXCIpO1xuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZShmaXJzdEFscGhhYmV0LCAoTCkgPT4gTC50b1VwcGVyQ2FzZSgpKTtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvbWFyY2luL0Rva3VtZW50eS9XZWJQcm9ncmFtbWluZy9hbnRpLWZpbHRlci1idWJibGUvZnJvbnRlbmQvdXRpbHMvcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbWFyY2luL0Rva3VtZW50eS9XZWJQcm9ncmFtbWluZy9hbnRpLWZpbHRlci1idWJibGUvZnJvbnRlbmQvdXRpbHMvcGx1Z2lucy9tYWtlLW1hbmlmZXN0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL21hcmNpbi9Eb2t1bWVudHkvV2ViUHJvZ3JhbW1pbmcvYW50aS1maWx0ZXItYnViYmxlL2Zyb250ZW5kL3V0aWxzL3BsdWdpbnMvbWFrZS1tYW5pZmVzdC50c1wiO2ltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGNvbG9yTG9nIGZyb20gXCIuLi9sb2dcIjtcbmltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgTWFuaWZlc3RQYXJzZXIgZnJvbSBcIi4uL21hbmlmZXN0LXBhcnNlclwiO1xuXG5jb25zdCB7IHJlc29sdmUgfSA9IHBhdGg7XG5cbmNvbnN0IG91dERpciA9IHJlc29sdmUoX19kaXJuYW1lLCBcIi4uXCIsIFwiLi5cIiwgXCJwdWJsaWNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VNYW5pZmVzdChcbiAgbWFuaWZlc3Q6IGNocm9tZS5ydW50aW1lLk1hbmlmZXN0VjNcbik6IFBsdWdpbk9wdGlvbiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJtYWtlLW1hbmlmZXN0XCIsXG4gICAgYnVpbGRFbmQoKSB7XG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMob3V0RGlyKSkge1xuICAgICAgICBmcy5ta2RpclN5bmMob3V0RGlyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFuaWZlc3RQYXRoID0gcmVzb2x2ZShvdXREaXIsIFwibWFuaWZlc3QuanNvblwiKTtcblxuICAgICAgZnMud3JpdGVGaWxlU3luYyhcbiAgICAgICAgbWFuaWZlc3RQYXRoLFxuICAgICAgICBNYW5pZmVzdFBhcnNlci5jb252ZXJ0TWFuaWZlc3RUb1N0cmluZyhtYW5pZmVzdClcbiAgICAgICk7XG5cbiAgICAgIGNvbG9yTG9nKGBNYW5pZmVzdCBmaWxlIGNvcHkgY29tcGxldGU6ICR7bWFuaWZlc3RQYXRofWAsIFwic3VjY2Vzc1wiKTtcbiAgICB9LFxuICB9O1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tYXJjaW4vRG9rdW1lbnR5L1dlYlByb2dyYW1taW5nL2FudGktZmlsdGVyLWJ1YmJsZS9mcm9udGVuZC91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbWFyY2luL0Rva3VtZW50eS9XZWJQcm9ncmFtbWluZy9hbnRpLWZpbHRlci1idWJibGUvZnJvbnRlbmQvdXRpbHMvbG9nLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL21hcmNpbi9Eb2t1bWVudHkvV2ViUHJvZ3JhbW1pbmcvYW50aS1maWx0ZXItYnViYmxlL2Zyb250ZW5kL3V0aWxzL2xvZy50c1wiO3R5cGUgQ29sb3JUeXBlID0gXCJzdWNjZXNzXCIgfCBcImluZm9cIiB8IFwiZXJyb3JcIiB8IFwid2FybmluZ1wiIHwga2V5b2YgdHlwZW9mIENPTE9SUztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3JMb2cobWVzc2FnZTogc3RyaW5nLCB0eXBlPzogQ29sb3JUeXBlKSB7XG4gIGxldCBjb2xvcjogc3RyaW5nID0gdHlwZSB8fCBDT0xPUlMuRmdCbGFjaztcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwic3VjY2Vzc1wiOlxuICAgICAgY29sb3IgPSBDT0xPUlMuRmdHcmVlbjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJpbmZvXCI6XG4gICAgICBjb2xvciA9IENPTE9SUy5GZ0JsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgIGNvbG9yID0gQ09MT1JTLkZnUmVkO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIndhcm5pbmdcIjpcbiAgICAgIGNvbG9yID0gQ09MT1JTLkZnWWVsbG93O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBjb25zb2xlLmxvZyhjb2xvciwgbWVzc2FnZSk7XG59XG5cbmNvbnN0IENPTE9SUyA9IHtcbiAgUmVzZXQ6IFwiXFx4MWJbMG1cIixcbiAgQnJpZ2h0OiBcIlxceDFiWzFtXCIsXG4gIERpbTogXCJcXHgxYlsybVwiLFxuICBVbmRlcnNjb3JlOiBcIlxceDFiWzRtXCIsXG4gIEJsaW5rOiBcIlxceDFiWzVtXCIsXG4gIFJldmVyc2U6IFwiXFx4MWJbN21cIixcbiAgSGlkZGVuOiBcIlxceDFiWzhtXCIsXG4gIEZnQmxhY2s6IFwiXFx4MWJbMzBtXCIsXG4gIEZnUmVkOiBcIlxceDFiWzMxbVwiLFxuICBGZ0dyZWVuOiBcIlxceDFiWzMybVwiLFxuICBGZ1llbGxvdzogXCJcXHgxYlszM21cIixcbiAgRmdCbHVlOiBcIlxceDFiWzM0bVwiLFxuICBGZ01hZ2VudGE6IFwiXFx4MWJbMzVtXCIsXG4gIEZnQ3lhbjogXCJcXHgxYlszNm1cIixcbiAgRmdXaGl0ZTogXCJcXHgxYlszN21cIixcbiAgQmdCbGFjazogXCJcXHgxYls0MG1cIixcbiAgQmdSZWQ6IFwiXFx4MWJbNDFtXCIsXG4gIEJnR3JlZW46IFwiXFx4MWJbNDJtXCIsXG4gIEJnWWVsbG93OiBcIlxceDFiWzQzbVwiLFxuICBCZ0JsdWU6IFwiXFx4MWJbNDRtXCIsXG4gIEJnTWFnZW50YTogXCJcXHgxYls0NW1cIixcbiAgQmdDeWFuOiBcIlxceDFiWzQ2bVwiLFxuICBCZ1doaXRlOiBcIlxceDFiWzQ3bVwiLFxufSBhcyBjb25zdDtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvbWFyY2luL0Rva3VtZW50eS9XZWJQcm9ncmFtbWluZy9hbnRpLWZpbHRlci1idWJibGUvZnJvbnRlbmQvdXRpbHMvbWFuaWZlc3QtcGFyc2VyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9tYXJjaW4vRG9rdW1lbnR5L1dlYlByb2dyYW1taW5nL2FudGktZmlsdGVyLWJ1YmJsZS9mcm9udGVuZC91dGlscy9tYW5pZmVzdC1wYXJzZXIvaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbWFyY2luL0Rva3VtZW50eS9XZWJQcm9ncmFtbWluZy9hbnRpLWZpbHRlci1idWJibGUvZnJvbnRlbmQvdXRpbHMvbWFuaWZlc3QtcGFyc2VyL2luZGV4LnRzXCI7dHlwZSBNYW5pZmVzdCA9IGNocm9tZS5ydW50aW1lLk1hbmlmZXN0VjM7XG5cbmNsYXNzIE1hbmlmZXN0UGFyc2VyIHtcbiAgLyoqIFNJTkdMRVRPTiAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuXG4gIHN0YXRpYyBjb252ZXJ0TWFuaWZlc3RUb1N0cmluZyhtYW5pZmVzdDogTWFuaWZlc3QpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShtYW5pZmVzdCwgbnVsbCwgMik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuaWZlc3RQYXJzZXI7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL21hcmNpbi9Eb2t1bWVudHkvV2ViUHJvZ3JhbW1pbmcvYW50aS1maWx0ZXItYnViYmxlL2Zyb250ZW5kL3V0aWxzL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL21hcmNpbi9Eb2t1bWVudHkvV2ViUHJvZ3JhbW1pbmcvYW50aS1maWx0ZXItYnViYmxlL2Zyb250ZW5kL3V0aWxzL3BsdWdpbnMvY3VzdG9tLWR5bmFtaWMtaW1wb3J0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL21hcmNpbi9Eb2t1bWVudHkvV2ViUHJvZ3JhbW1pbmcvYW50aS1maWx0ZXItYnViYmxlL2Zyb250ZW5kL3V0aWxzL3BsdWdpbnMvY3VzdG9tLWR5bmFtaWMtaW1wb3J0LnRzXCI7aW1wb3J0IHsgUGx1Z2luT3B0aW9uIH0gZnJvbSBcInZpdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VzdG9tRHluYW1pY0ltcG9ydCgpOiBQbHVnaW5PcHRpb24ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IFwiY3VzdG9tLWR5bmFtaWMtaW1wb3J0XCIsXG4gICAgcmVuZGVyRHluYW1pY0ltcG9ydCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IGBcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IGR5bmFtaWNJbXBvcnQgPSAocGF0aCkgPT4gaW1wb3J0KHBhdGgpO1xuICAgICAgICAgIGR5bmFtaWNJbXBvcnQoXG4gICAgICAgICAgYCxcbiAgICAgICAgcmlnaHQ6IFwiKX1cIixcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvbWFyY2luL0Rva3VtZW50eS9XZWJQcm9ncmFtbWluZy9hbnRpLWZpbHRlci1idWJibGUvZnJvbnRlbmQvdXRpbHMvcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbWFyY2luL0Rva3VtZW50eS9XZWJQcm9ncmFtbWluZy9hbnRpLWZpbHRlci1idWJibGUvZnJvbnRlbmQvdXRpbHMvcGx1Z2lucy9hZGQtaG1yLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL21hcmNpbi9Eb2t1bWVudHkvV2ViUHJvZ3JhbW1pbmcvYW50aS1maWx0ZXItYnViYmxlL2Zyb250ZW5kL3V0aWxzL3BsdWdpbnMvYWRkLWhtci50c1wiO2ltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcblxuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5fX0RFVl9fID09PSBcInRydWVcIjtcblxuY29uc3QgRFVNTVlfQ09ERSA9IGBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe307YDtcblxuZnVuY3Rpb24gZ2V0SW5qZWN0aW9uQ29kZShmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHJlYWRGaWxlU3luYyhcbiAgICBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uXCIsIFwicmVsb2FkXCIsIFwiaW5qZWN0aW9uc1wiLCBmaWxlTmFtZSksXG4gICAgeyBlbmNvZGluZzogXCJ1dGY4XCIgfVxuICApO1xufVxuXG50eXBlIENvbmZpZyA9IHtcbiAgYmFja2dyb3VuZD86IGJvb2xlYW47XG4gIHZpZXc/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkSG1yKGNvbmZpZz86IENvbmZpZyk6IFBsdWdpbk9wdGlvbiB7XG4gIGNvbnN0IHsgYmFja2dyb3VuZCA9IGZhbHNlLCB2aWV3ID0gdHJ1ZSB9ID0gY29uZmlnIHx8IHt9O1xuICBjb25zdCBpZEluQmFja2dyb3VuZFNjcmlwdCA9IFwidmlydHVhbDpyZWxvYWQtb24tdXBkYXRlLWluLWJhY2tncm91bmQtc2NyaXB0XCI7XG4gIGNvbnN0IGlkSW5WaWV3ID0gXCJ2aXJ0dWFsOnJlbG9hZC1vbi11cGRhdGUtaW4tdmlld1wiO1xuXG4gIGNvbnN0IHNjcmlwdEhtckNvZGUgPSBpc0RldiA/IGdldEluamVjdGlvbkNvZGUoXCJzY3JpcHQuanNcIikgOiBEVU1NWV9DT0RFO1xuICBjb25zdCB2aWV3SG1yQ29kZSA9IGlzRGV2ID8gZ2V0SW5qZWN0aW9uQ29kZShcInZpZXcuanNcIikgOiBEVU1NWV9DT0RFO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJhZGQtaG1yXCIsXG4gICAgcmVzb2x2ZUlkKGlkKSB7XG4gICAgICBpZiAoaWQgPT09IGlkSW5CYWNrZ3JvdW5kU2NyaXB0IHx8IGlkID09PSBpZEluVmlldykge1xuICAgICAgICByZXR1cm4gZ2V0UmVzb2x2ZWRJZChpZCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBsb2FkKGlkKSB7XG4gICAgICBpZiAoaWQgPT09IGdldFJlc29sdmVkSWQoaWRJbkJhY2tncm91bmRTY3JpcHQpKSB7XG4gICAgICAgIHJldHVybiBiYWNrZ3JvdW5kID8gc2NyaXB0SG1yQ29kZSA6IERVTU1ZX0NPREU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpZCA9PT0gZ2V0UmVzb2x2ZWRJZChpZEluVmlldykpIHtcbiAgICAgICAgcmV0dXJuIHZpZXcgPyB2aWV3SG1yQ29kZSA6IERVTU1ZX0NPREU7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVzb2x2ZWRJZChpZDogc3RyaW5nKSB7XG4gIHJldHVybiBcIlxcMFwiICsgaWQ7XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL21hcmNpbi9Eb2t1bWVudHkvV2ViUHJvZ3JhbW1pbmcvYW50aS1maWx0ZXItYnViYmxlL2Zyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9tYXJjaW4vRG9rdW1lbnR5L1dlYlByb2dyYW1taW5nL2FudGktZmlsdGVyLWJ1YmJsZS9mcm9udGVuZC9tYW5pZmVzdC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9tYXJjaW4vRG9rdW1lbnR5L1dlYlByb2dyYW1taW5nL2FudGktZmlsdGVyLWJ1YmJsZS9mcm9udGVuZC9tYW5pZmVzdC50c1wiO2ltcG9ydCBwYWNrYWdlSnNvbiBmcm9tIFwiLi9wYWNrYWdlLmpzb25cIjtcblxuY29uc3QgbWFuaWZlc3Q6IGNocm9tZS5ydW50aW1lLk1hbmlmZXN0VjMgPSB7XG4gIG1hbmlmZXN0X3ZlcnNpb246IDMsXG4gIG5hbWU6IHBhY2thZ2VKc29uLm5hbWUsXG4gIHZlcnNpb246IHBhY2thZ2VKc29uLnZlcnNpb24sXG4gIGRlc2NyaXB0aW9uOiBwYWNrYWdlSnNvbi5kZXNjcmlwdGlvbixcbiAgb3B0aW9uc19wYWdlOiBcInNyYy9wYWdlcy9vcHRpb25zL2luZGV4Lmh0bWxcIixcbiAgcGVybWlzc2lvbnM6IFtcImFjdGl2ZVRhYlwiLCBcInRhYnNcIl0sXG4gIGJhY2tncm91bmQ6IHsgc2VydmljZV93b3JrZXI6IFwic3JjL3BhZ2VzL2JhY2tncm91bmQvaW5kZXguanNcIiB9LFxuICBhY3Rpb246IHtcbiAgICBkZWZhdWx0X3BvcHVwOiBcInNyYy9wYWdlcy9wb3B1cC9pbmRleC5odG1sXCIsXG4gICAgZGVmYXVsdF9pY29uOiBcImljb24tMzQucG5nXCIsXG4gIH0sXG4gIGNocm9tZV91cmxfb3ZlcnJpZGVzOiB7XG4gICAgbmV3dGFiOiBcInNyYy9wYWdlcy9uZXd0YWIvaW5kZXguaHRtbFwiLFxuICB9LFxuICBpY29uczoge1xuICAgIFwiMTI4XCI6IFwiaWNvbi0xMjgucG5nXCIsXG4gIH0sXG4gIGNvbnRlbnRfc2NyaXB0czogW1xuICAgIHtcbiAgICAgIG1hdGNoZXM6IFtcImh0dHBzOi8vdHdpdHRlci5jb20vKlwiXSxcbiAgICAgIGpzOiBbXCJzcmMvcGFnZXMvY29udGVudC9pbmRleC5qc1wiXSxcbiAgICAgIHJ1bl9hdDogXCJkb2N1bWVudF9zdGFydFwiLFxuICAgICAgY3NzOiBbXCJhc3NldHMvY3NzL2NvbnRlbnRTdHlsZS5jaHVuay5jc3NcIl0sXG4gICAgfSxcbiAgXSxcbiAgZGV2dG9vbHNfcGFnZTogXCJzcmMvcGFnZXMvZGV2dG9vbHMvaW5kZXguaHRtbFwiLFxuICB3ZWJfYWNjZXNzaWJsZV9yZXNvdXJjZXM6IFtcbiAgICB7XG4gICAgICByZXNvdXJjZXM6IFtcbiAgICAgICAgXCJhc3NldHMvanMvKi5qc1wiLFxuICAgICAgICBcImFzc2V0cy9jc3MvKi5jc3NcIixcbiAgICAgICAgXCJpY29uLTEyOC5wbmdcIixcbiAgICAgICAgXCJpY29uLTM0LnBuZ1wiLFxuICAgICAgXSxcbiAgICAgIG1hdGNoZXM6IFtcIio6Ly8qLypcIl0sXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hbmlmZXN0O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxWCxTQUFTLG9CQUFvQjtBQUNsWixPQUFPLFdBQVc7QUFDbEIsT0FBT0EsU0FBUSxXQUFBQyxnQkFBZTs7O0FDRnFZLFlBQVksUUFBUTtBQUN2YixZQUFZLFVBQVU7OztBQ0NQLFNBQVIsU0FBMEIsU0FBaUIsTUFBa0I7QUFDbEUsTUFBSSxRQUFnQixRQUFRLE9BQU87QUFFbkMsVUFBUSxNQUFNO0FBQUEsSUFDWixLQUFLO0FBQ0gsY0FBUSxPQUFPO0FBQ2Y7QUFBQSxJQUNGLEtBQUs7QUFDSCxjQUFRLE9BQU87QUFDZjtBQUFBLElBQ0YsS0FBSztBQUNILGNBQVEsT0FBTztBQUNmO0FBQUEsSUFDRixLQUFLO0FBQ0gsY0FBUSxPQUFPO0FBQ2Y7QUFBQSxFQUNKO0FBRUEsVUFBUSxJQUFJLE9BQU8sT0FBTztBQUM1QjtBQUVBLElBQU0sU0FBUztBQUFBLEVBQ2IsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsS0FBSztBQUFBLEVBQ0wsWUFBWTtBQUFBLEVBQ1osT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUFBLEVBQ1QsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUNYOzs7QUM3Q0EsSUFBTSxpQkFBTixNQUFxQjtBQUFBLEVBR1gsY0FBYztBQUFBLEVBQUM7QUFBQSxFQUV2QixPQUFPLHdCQUF3QkMsV0FBNEI7QUFDekQsV0FB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QUFBLFFBQ2hELFlBQVlBLFNBQVEsVUFBVSxjQUFjLFVBQVU7QUFBQSxRQUN0RCxjQUFjQSxTQUFRLFVBQVUsV0FBVyxZQUFZO0FBQUEsUUFDdkQsT0FBT0EsU0FBUSxVQUFVLFNBQVMsWUFBWTtBQUFBLFFBQzlDLFFBQVFBLFNBQVEsVUFBVSxVQUFVLFlBQVk7QUFBQSxRQUNoRCxTQUFTQSxTQUFRLFVBQVUsV0FBVyxZQUFZO0FBQUEsTUFDcEQ7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQkcsU0FDWix3QkFDQTtBQUFBLFFBQ0osZ0JBQWdCLENBQUMsY0FBYztBQUM3QixnQkFBTSxFQUFFLEtBQUssTUFBTSxNQUFNLElBQUlDLE1BQUssTUFBTSxVQUFVLElBQUk7QUFDdEQsZ0JBQU0sY0FBYyxlQUFlLElBQUksTUFBTSxHQUFHLENBQUM7QUFDakQsZ0JBQU0sT0FBTyxjQUFjLGVBQWUsS0FBSztBQUMvQyxpQkFBTyxnQkFBZ0I7QUFBQSxRQUN6QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7QUFFRCxTQUFTLGVBQWtCLE9BQXdCO0FBQ2pELFFBQU0sU0FBUyxNQUFNO0FBQ3JCLFFBQU0sWUFBWSxTQUFTO0FBQzNCLFNBQU8sTUFBTTtBQUNmO0FBRUEsU0FBUyxlQUFlLEtBQWE7QUFDbkMsUUFBTSxnQkFBZ0IsSUFBSSxPQUFPLGNBQWMsR0FBRztBQUNsRCxTQUFPLElBQUksWUFBWSxFQUFFLFFBQVEsZUFBZSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUM7QUFDeEU7IiwKICAibmFtZXMiOiBbInBhdGgiLCAicmVzb2x2ZSIsICJtYW5pZmVzdCIsICJtYW5pZmVzdCIsICJwYXRoIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInJlc29sdmUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAib3V0RGlyIiwgImlzRGV2IiwgInBhdGgiXQp9Cg==
