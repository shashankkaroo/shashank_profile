define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const matcher = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/matcher/matcher", {
    "package:matcher/matcher.dart": matcher
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"matcher.ddc.js"}');
  // Exports:
  return {
    matcher: matcher
  };
});

//# sourceMappingURL=matcher.ddc.js.map
