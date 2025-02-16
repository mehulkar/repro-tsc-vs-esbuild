import { build as esbuild } from "esbuild";

async function main(entrypointFile) {
  await esbuild({
    entryPoints: [entrypointFile],
    bundle: true,
    outfile: "./dist/index.js",
    target: "node20",
    platform: "node",
    loader: {
      ".node": "file",
    },
  });
}

main(process.argv[2]).then(console.log).catch(console.errors);
