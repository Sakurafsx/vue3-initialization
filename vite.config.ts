import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数
      imports: ["vue"],
      // 自动导入 Element Plus 相关函数
      resolvers: [ElementPlusResolver()],
      // 生成自动导入的 TypeScript 声明文件
      dts: "src/types/auto-imports.d.ts"
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver({
          // 关键配置：自动导入组件样式
          importStyle: "sass"
        })
      ],
      // 组件类型声明文件位置
      dts: "src/types/components.d.ts"
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        rewrite: (path) => path.replace(/^\/api/, ""),
        changeOrigin: true
      }
    }
  }
});
