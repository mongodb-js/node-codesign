interface CodesignOpts {
  identity: string;
  appPath: string;
  entitlements: string;
}
declare function codesign(opts: CodesignOpts, done: (err?: Error) => void): void;
export = codesign;
