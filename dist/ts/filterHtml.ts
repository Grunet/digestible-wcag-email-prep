import { IContainHtml } from "./htmlAdapter.ts";
import { extractHtmlContainer, initializeCheerio } from "./cheerioAdapter.ts";

function removeHiddenElements(this: IContainHtml): IContainHtml {
  const $ = initializeCheerio(this);

  $('*[style*="display: none"]').remove();

  return extractHtmlContainer($);
}

export { removeHiddenElements };
