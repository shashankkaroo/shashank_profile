define(['dart_sdk', 'packages/kakro/main'], function(dart_sdk, packages__kakro__main) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const main = packages__kakro__main.main;
  const main_web_entrypoint = Object.create(dart.library);
  const CT = Object.create(null);
  main_web_entrypoint.main = function main$() {
    return async.async(dart.void, function* main$() {
      yield ui.webOnlyInitializePlatform();
      main.main();
    });
  };
  dart.trackLibraries("packages/kakro/main_web_entrypoint", {
    "package:kakro/main_web_entrypoint.dart": main_web_entrypoint
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main_web_entrypoint.dart"],"names":[],"mappings":";;;;;;;;;;;AAGiB;MACf,MAAM;MACN;IACF","file":"main_web_entrypoint.ddc.js"}');
  // Exports:
  return {
    main_web_entrypoint: main_web_entrypoint
  };
});

//# sourceMappingURL=main_web_entrypoint.ddc.js.map
