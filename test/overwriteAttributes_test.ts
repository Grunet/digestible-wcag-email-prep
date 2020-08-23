import { assert, equal } from "https://deno.land/std@0.60.0/testing/asserts.ts";

import { prepHtml } from "../src/fluentInterface.ts";

Deno.test("Overrides 1 href correctly", (): void => {
  //Arrange
  const origHtml = `<a id="anchorId" href="www.original.org">Link Text</a>`;

  //Act
  const newHtml = prepHtml(origHtml)
    .overwriteAttributes(
      { overrides: { "anchorId": { "href": "www.modified.com" } } },
    ).getHtmlAsString();

  //Assert
  assert(
    equal(
      newHtml,
      `<html><head></head><body><a id="anchorId" href="www.modified.com">Link Text</a></body></html>`,
    ),
  ); //Cheerio 1.0+ automatically adds the html/head/body elements if missing
});
