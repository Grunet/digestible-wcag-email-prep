import { IContainHtml } from "./htmlAdapter.ts";
import { initializeCheerio, extractHtmlContainer } from "./cheerioAdapter.ts";

function overwriteSlots(
  this: IContainHtml,
  params: IParameters,
): IContainHtml {
  const $ = initializeCheerio(this);

  for (
    const [slotName, replacementContent] of Object.entries(params.overrides)
  ) {
    $("slot[name=" + slotName + "]").replaceWith(replacementContent);
  }

  return extractHtmlContainer($);
}

interface IParameters {
  overrides: IOverrideInfo;
}

interface IOverrideInfo {
  [slotName: string]: string;
}

export { overwriteSlots, IParameters };
