import { assert, equal } from "https://deno.land/std@0.60.0/testing/asserts.ts";

import { prepHtml } from "../src/fluentInterface.ts";

Deno.test("Overrides 1 slot correctly", (): void => {
  //Arrange
  const origHtml =
    `<slot name="nameOfTargetSlot">default placeholder content</slot>`;

  //Act
  const newHtml = prepHtml(origHtml)
    .overwriteSlots(
      { overrides: { "nameOfTargetSlot": `<div>New Content</div>` } },
    ).getHtmlAsString();

  //Assert
  assert(
    equal(
      newHtml,
      `<html><head></head><body><div>New Content</div></body></html>`,
    ),
  ); //Cheerio 1.0+ automatically adds the html/head/body elements if missing
});
