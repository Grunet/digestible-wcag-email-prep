import { assert, equal } from "https://deno.land/std@0.60.0/testing/asserts.ts";

import { prepHtml } from "../src/fluentInterface.ts";

Deno.test("Converts an html paragraph into a plain text sentence", (): void => {
  //Arrange
  const html = `<p>This is a simple sentence.</p>`;

  //Act
  const plainText = prepHtml(html)
    .getHtmlAsPlainText();

  //Assert
  assert(
    equal(
      plainText,
      `This is a simple sentence.`,
    ),
  );
});
