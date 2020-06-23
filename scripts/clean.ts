//deno run --allow-read=.,../dist/ --allow-write=../dist/ ./clean.ts

Deno.remove("../dist/", { recursive: true });
