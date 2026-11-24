import { defineConfig } from "vite";

export default defineConfig({
  // This repository is a project site: https://yangyun-66.github.io/1120/.
  base: process.env.GITHUB_ACTIONS ? "/1120/" : "/",
});
