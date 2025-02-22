import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  };
});
