class HtmlAdapter implements IContainHtml {
  constructor(html: string) {
    this.__html = html;
  }

  private __html: string;

  public getHtmlAsString(): string {
    return this.__html;
  }
}

function setupHtmlContainer(html: string): IContainHtml {
  return new HtmlAdapter(html);
}

interface IContainHtml {
  getHtmlAsString: () => string;
}

export { setupHtmlContainer, IContainHtml };
