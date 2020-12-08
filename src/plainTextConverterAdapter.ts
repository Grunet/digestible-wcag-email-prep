// This is the last typing file before the 6.0.0 major version break
// @deno-types="https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/7046815a55ef35f365e065557b405eb2f76eff67/types/html-to-text/index.d.ts"
import htmlToText from "https://dev.jspm.io/html-to-text@5.1.1";

import { IContainHtml } from "./htmlAdapter.ts";

function convertHtmltoPlainText(htmlContainer: IContainHtml): string {
  const html = htmlContainer.getHtmlAsString();

  return htmlToText.fromString(html);
}

export { convertHtmltoPlainText };
