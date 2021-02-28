import { assert, equal } from "https://deno.land/std@0.60.0/testing/asserts.ts";

import { prepHtml } from "../src/fluentInterface.ts";

Deno.test(
  "Removes elements with inline styles containing 'display: none'",
  (): void => {
    //Arrange
    const origHtml = `
    <div>Visible Text</div>
    <div style="display: none;">Hidden Text</div>
  `;

    //Act
    const newHtml = prepHtml(origHtml).removeHiddenElements().getHtmlAsString();

    //Assert
    assert(equal(newHtml.includes("Hidden Text"), false)); //Cheerio 1.0+ automatically adds the html/head/body elements if missing
  },
);
