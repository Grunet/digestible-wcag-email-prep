import { IContainHtml } from "./htmlAdapter.ts";
import { initializeCheerio, extractHtmlContainer } from "./cheerioAdapter.ts";

function overwriteAttributes(
  this: IContainHtml,
  params: IParameters,
): IContainHtml {
  const $ = initializeCheerio(this);

  for (const [id, overrideInfo] of Object.entries(params.overrides)) {
    const $element = $("#" + id);

    for (const [attributeName, newValue] of Object.entries(overrideInfo)) {
      $element.attr(attributeName, newValue);
    }
  }

  return extractHtmlContainer($);
}

interface IParameters {
  overrides: IOverrideInfo;
}

interface IOverrideInfo {
  [id: string]: IAttributeOverrides;
}

interface IAttributeOverrides {
  [attributeName: string]: string;
}

export { overwriteAttributes } 
export type { IParameters }
