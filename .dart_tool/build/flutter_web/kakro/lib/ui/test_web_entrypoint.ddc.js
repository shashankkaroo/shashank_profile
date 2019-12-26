define(['dart_sdk', 'packages/kakro/ui/test'], function(dart_sdk, packages__kakro__ui__test) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const test = packages__kakro__ui__test.ui__test;
  const test_web_entrypoint = Object.create(dart.library);
  const CT = Object.create(null);
  test_web_entrypoint.main = function main() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyInitializePlatform();
      test.main();
    });
  };
  dart.trackLibraries("packages/kakro/ui/test_web_entrypoint", {
    "package:kakro/ui/test_web_entrypoint.dart": test_web_entrypoint
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["test_web_entrypoint.dart"],"names":[],"mappings":";;;;;;;;;;;AAGiB;MACf,MAAM;MACN;IACF","file":"test_web_entrypoint.ddc.js"}');
  // Exports:
  return {
    ui__test_web_entrypoint: test_web_entrypoint
  };
});

//# sourceMappingURL=test_web_entrypoint.ddc.js.map
