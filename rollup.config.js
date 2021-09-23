import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import {terser} from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";

const pkg = require("./package.json");
const date = (new Date()).toDateString();

const banner = `/**
 * ${pkg.name} v${pkg.version} build ${date}
 * ${pkg.homepage}
 * Copyright ${date.slice(-4)} ${[pkg.author.name, ...pkg.contributors].join(", ")}
 */`;

const production = (process.env.NODE_ENV === "production");
const globals = {
	"jquery": "jQuery",
};

export default [{

	// Main bundle.
	input: "out/src/js/index.js",
	external: Object.keys(globals),
	plugins: [resolve(), commonjs()].concat(production ? [babel(), terser()] : []),
	output: {
		file: pkg.main,
		format: "iife",
		globals,
		banner
	}

}];
