// This typing probably be pinned to a specific version in case breaking changes are made to it
// @deno-types="https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/html-to-text/index.d.ts"
import htmlToText from "https://dev.jspm.io/html-to-text@5.1.1";

import { IContainHtml } from "./htmlAdapter.ts";

function convertHtmltoPlainText(htmlContainer: IContainHtml): string {
  const html = htmlContainer.getHtmlAsString();

  return htmlToText.fromString(html);
}

export { convertHtmltoPlainText };
