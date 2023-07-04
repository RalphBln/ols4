
import { build } from "esbuild";

let define = {}
for (const k in process.env) { define[`process.env.${k}`] = JSON.stringify(process.env[k]) }

console.log('### Building ols4_widgets.js')
build({
	entryPoints: ["src/widgets/index.ts"],
	bundle: true,
	platform: 'browser',
	outfile: "dist_widgets/ols4_widgets.js",
	define,
	plugins: [
	],
	logLevel: 'info',
	sourcemap: 'inline'
});

console.log('### Building ols4_widgets.min.js')
build({
	entryPoints: ["src/widgets/index.ts"],
	bundle: true,
	platform: 'browser',
	outfile: "dist_widgets/ols4_widgets.min.js",
	define,
	plugins: [
	],
	logLevel: 'info',
	minify: true,
	sourcemap: false
});


