'use strict';

import type {LangType, PlantumlOptions} from './types.ts';

import deflate from './deflate';

enum SelectorEnum {
  IMG = 'diagram-m',
  MODAL = 'data-diagram-modal',
  PLANTUML = 'data-diagram-plantuml',
  MERMAID = 'data-diagram-mermaid'
}
const functions = {
  options: {
    showController: false
  } as PlantumlOptions,

  initialize(options: PlantumlOptions): void {
    if (options) this.options = Object.assign(this.options, options);
  },

  getOptions(langName: LangType) {
    return this.options?.[langName] ? Object.assign({}, this.options, this.options?.[langName]) : this.options;
  },

  getMarkup(code: string, diagramName: string, langName: LangType): string {
    const opt = this.getOptions(langName);
    const srcVal = this.generateSource(code, diagramName, opt);
    const img = `<div data-${opt.imageFormat || 'svg'}="${SelectorEnum.PLANTUML}" class="${SelectorEnum.IMG}"><img src="${srcVal}" alt="uml diagram"></div>`;
    return img;
  },

  generateSource(umlCode: string, diagramName: string, pluginOptions: PlantumlOptions): string {
    let umlContent = umlCode;
    if (!umlCode.startsWith('@start')) {
      umlContent = `@start${diagramName}\n${umlCode}\n@end${diagramName}`;
    }
    const imageFormat = pluginOptions?.imageFormat || 'svg';
    const server = pluginOptions?.server || 'https://www.plantuml.com/plantuml';
    const zippedCode = deflate.zip_deflate(umlContent, 9);
    const base64Encoded = deflate.encode64(zippedCode);
    return `${server}/${imageFormat}/${base64Encoded}`;
  }
};

export default {
  functions
};
