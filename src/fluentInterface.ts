import { IContainHtml, setupHtmlContainer } from "./htmlAdapter.ts";
import { convertHtmltoPlainText } from "./plainTextConverterAdapter.ts";
import {
  IParameters as IOverwriteSlotsParameters,
  overwriteSlots,
} from "./overwriteSlots.ts";
import {
  IParameters as IOverwriteAttributesParameters,
  overwriteAttributes,
} from "./overwriteAttributes.ts";
import { removeHiddenElements } from "./filterHtml.ts";

class FluentHtmlContainer {
  constructor(html: string) {
    this.__htmlContainer = setupHtmlContainer(html);
  }

  private __htmlContainer: IContainHtml;

  public getHtmlAsString(): string {
    return this.__htmlContainer.getHtmlAsString();
  }

  public getHtmlAsPlainText(): string {
    return convertHtmltoPlainText(this.__htmlContainer);
  }

  public overwriteSlots(
    params: IOverwriteSlotsParameters,
  ): FluentHtmlContainer {
    const newHtmlContainer = overwriteSlots.call(this.__htmlContainer, params);

    return new FluentHtmlContainer(newHtmlContainer.getHtmlAsString());
  }

  public overwriteAttributes(
    params: IOverwriteAttributesParameters,
  ): FluentHtmlContainer {
    const newHtmlContainer = overwriteAttributes.call(
      this.__htmlContainer,
      params,
    );

    return new FluentHtmlContainer(newHtmlContainer.getHtmlAsString());
  }

  public removeHiddenElements(): FluentHtmlContainer {
    const newHtmlContainer = removeHiddenElements.call(this.__htmlContainer);

    return new FluentHtmlContainer(newHtmlContainer.getHtmlAsString());
  }
}

function prepHtml(html: string): FluentHtmlContainer {
  return new FluentHtmlContainer(html);
}

export { prepHtml };
