import path from "path";

import { defineConfig } from "vite";
import dts from "vite-dts";

const isExternal = (id: string) => !id.startsWith(".") && !path.isAbsolute(id);

export default defineConfig(
	() => ({
		build: {
			lib: {
				entry: path.resolve(__dirname, "src/index.ts"),
				formats: ["es", "cjs"],
			},

			rollupOptions: {
				external: isExternal,
				output: { sourcemapExcludeSources: true },
			},
			minify: false,
			sourcemap: true,
			target: "esnext",
		},
		plugins: [dts()],
	}),
);
