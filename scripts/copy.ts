//deno run --unstable --allow-read=.,..\src\ --allow-write=..\dist\ .\copy.ts

import { copy } from "https://deno.land/std@0.57.0/fs/copy.ts";

await copy("../src/", "../dist/ts/", { overwrite: true });