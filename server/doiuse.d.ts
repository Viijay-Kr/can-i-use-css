declare module "doiuse" {
  export default function doiuse(opts = {}): {
    info(opts: {}): {
      browsers: string[][];
      features: string[][];
    };
    postcss(css: any, result: any): any;
  };
}

declare module "doiuse/lib/browsers" {
  export default class BrowserSelection {
    list(): Array<string>;
  }
}
