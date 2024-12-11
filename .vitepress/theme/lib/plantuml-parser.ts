'use strict';

import type {LangType, PlantumlOptions} from './types.ts';

import * as plantUmlEncoder from 'plantuml-encoder';
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
    // console.log(umlContent)

    const imageFormat = pluginOptions?.imageFormat || 'svg';
    const server = pluginOptions?.server || 'https://www.plantuml.com/plantuml';
    //console.log(encodeURIComponent(umlContent))
    //console.log(unescape(encodeURIComponent(umlContent)))
    //console.log(decodeURIComponent(encodeURIComponent(umlContent)))
    //const zippedCode = deflate.zip_deflate(unescape(encodeURIComponent(umlContent)), 9);
    //const base64Encoded = deflate.encode64(zippedCode);
    // const base64Encoded = "AqXCpavCJrLGAaWiIiqhKLAevb800hXmSaPcJegXaeADJL1gSabYNdfEgfqTI0b88HHmWLcrM3GQ0Ss3oTPoeSd5WurrIIn9J4ei1feAL0fKn0MJLD3LrLQ0S1Ii59xsj3wVrVAqVzcJ7GtFb_S2kKydh7usRUUppLEvkE0cEq9T1JJ7KK5NJzSEOO2DJMPkGNvH2T3r23kGr1Y2rIGc9wSM5zlP0G00"
    return `${server}/${imageFormat}/${plantUmlEncoder.encode(umlContent)}`;
  }
};

export default {
  functions
};
