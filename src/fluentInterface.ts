import { setupHtmlContainer, IContainHtml } from "./htmlAdapter.ts";
import {
  overwriteSlots,
  IParameters as IOverwriteSlotsParameters,
} from "./overwriteSlots.ts";
import {
  overwriteAttributes,
  IParameters as IOverwriteAttributesParameters,
} from "./overwriteAttributes.ts";

class FluentHtmlContainer {
  constructor(html: string) {
    this.__htmlContainer = setupHtmlContainer(html);
  }

  private __htmlContainer: IContainHtml;

  public getHtmlAsString(): string {
    return this.__htmlContainer.getHtmlAsString();
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
}

function prepHtml(html: string): FluentHtmlContainer {
  return new FluentHtmlContainer(html);
}

export { prepHtml };
