// This typing can be switched to a more updated version once https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34036 is fixed
// @deno-types="https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/deab75bde42b5a82aeb951f5a2edaa09922853f4/types/cheerio/index.d.ts"
import cheerio from "https://dev.jspm.io/cheerio@1.0.0-rc.3";

import { setupHtmlContainer, IContainHtml } from "./htmlAdapter.ts";

function initializeCheerio(htmlContainer: IContainHtml): CheerioStatic {
  const html = htmlContainer.getHtmlAsString();
  const $ = (cheerio as CheerioAPI).load(html);

  return $;
}

function extractHtmlContainer($: CheerioStatic): IContainHtml {
  const modifiedHtml: string = $.html();

  return setupHtmlContainer(modifiedHtml);
}

export { initializeCheerio, extractHtmlContainer };
