//deno run --allow-read=.,..\dist\ --allow-write=..\dist\ .\renameEntryPoint.ts

Deno.rename("../dist/ts/fluentInterface.ts", "../dist/ts/emailPrep.ts");
