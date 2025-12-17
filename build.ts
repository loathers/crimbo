import esbuild, { Plugin } from "esbuild";

// @ts-expect-error No types for this module
const { default: babel } = (await import("esbuild-plugin-babel")) as {
  default: () => Plugin;
};

const watch = process.argv.some((arg) => ["--watch", "-w"].includes(arg));

const context = await esbuild.context({
  bundle: true,
  platform: "node",
  target: "rhino1.8.0",
  external: ["kolmafia"],
  define: {
    "process.env.GITHUB_SHA": `"${
      process.env?.["GITHUB_SHA"] ?? "CustomBuild"
    }"`,
    "process.env.GITHUB_REF_NAME": `"${
      process.env?.["GITHUB_REF_NAME"] ?? "CustomBuild"
    }"`,
    "process.env.GITHUB_REPOSITORY": `"${
      process.env?.["GITHUB_REPOSITORY"] ?? "CustomBuild"
    }"`,
  },
  entryPoints: {
    "scripts/crimbo/crimbo": "src/main.ts",
  },
  entryNames: "[dir]/[name]",
  outdir: "dist",
  plugins: [babel() as Plugin],
});

await context.rebuild();

if (watch) {
  await context.watch();
} else {
  context.dispose();
}
