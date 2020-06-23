const srcFilename = "fluentInterface";
const distFilename = "emailPrep";

Deno.rename(`../dist/ts/${srcFilename}.ts`, `../dist/ts/${distFilename}.ts`);
