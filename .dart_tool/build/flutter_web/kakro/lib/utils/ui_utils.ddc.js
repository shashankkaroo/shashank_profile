define(['dart_sdk', 'packages/kakro/enums/device_screen_size'], function(dart_sdk, packages__kakro__enums__device_screen_size) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const device_screen_size = packages__kakro__enums__device_screen_size.enums__device_screen_size;
  const ui_utils = Object.create(dart.library);
  const CT = Object.create(null);
  ui_utils.getDeviceType = function getDeviceType(mediaQuery) {
    let orientation = mediaQuery.orientation;
    let deviceWidth = 0.0;
    deviceWidth = mediaQuery.size.width;
    if (dart.notNull(deviceWidth) > 950) {
      return device_screen_size.DeviceScreenType.Desktop;
    }
    if (dart.notNull(deviceWidth) > 600) {
      return device_screen_size.DeviceScreenType.Tablet;
    }
    return device_screen_size.DeviceScreenType.Mobile;
  };
  dart.trackLibraries("packages/kakro/utils/ui_utils", {
    "package:kakro/utils/ui_utils.dart": ui_utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ui_utils.dart"],"names":[],"mappings":";;;;;;;;kDAI8C;AACxC,sBAAc,AAAW,UAAD;AACrB,sBAAc;IACrB,cAAc,AAAW,AAAK,UAAN;AAExB,QAAgB,aAAZ,WAAW,IAAG;AAChB,YAAwB;;AAE1B,QAAgB,aAAZ,WAAW,IAAG;AAChB,YAAwB;;AAE1B,UAAwB;EAC1B","file":"ui_utils.ddc.js"}');
  // Exports:
  return {
    utils__ui_utils: ui_utils
  };
});

//# sourceMappingURL=ui_utils.ddc.js.map
