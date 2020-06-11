//Typings don't seem to work if pointed directly at the remote url, so using a local copy instead
// @deno-types="./typings/cheerio.d.ts"
import cheerio from "https://dev.jspm.io/cheerio@1.0.0-rc.3"; //Doesn't get typed correctly automatically, hence the explicit typecast below

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
