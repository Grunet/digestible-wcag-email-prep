import { assert, equal } from "https://deno.land/std/testing/asserts.ts";

import { prepHtml } from "../dist/ts/emailPrep.ts";

Deno.test("Can call methods from the copy under /dist/ts", (): void => {
  //Arrange
  const origHtml = `<div>Some content</div>`;

  //Act
  const newHtml = prepHtml(origHtml)
    .getHtmlAsString();

  //Assert
  assert(
    equal(
      newHtml,
      `<div>Some content</div>`,
    ),
  );
});
