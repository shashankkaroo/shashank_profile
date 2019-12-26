define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const device_screen_size = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: device_screen_size.DeviceScreenType.prototype,
        [_name$]: "DeviceScreenType.Mobile",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: device_screen_size.DeviceScreenType.prototype,
        [_name$]: "DeviceScreenType.Tablet",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: device_screen_size.DeviceScreenType.prototype,
        [_name$]: "DeviceScreenType.Desktop",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], device_screen_size.DeviceScreenType);
    }
  });
  const _name$ = dart.privateName(device_screen_size, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  device_screen_size.DeviceScreenType = class DeviceScreenType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (device_screen_size.DeviceScreenType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = device_screen_size.DeviceScreenType.prototype;
  dart.addTypeTests(device_screen_size.DeviceScreenType);
  dart.setLibraryUri(device_screen_size.DeviceScreenType, "package:kakro/enums/device_screen_size.dart");
  dart.setFieldSignature(device_screen_size.DeviceScreenType, () => ({
    __proto__: dart.getFields(device_screen_size.DeviceScreenType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(device_screen_size.DeviceScreenType, ['toString']);
  device_screen_size.DeviceScreenType.Mobile = C0 || CT.C0;
  device_screen_size.DeviceScreenType.Tablet = C1 || CT.C1;
  device_screen_size.DeviceScreenType.Desktop = C2 || CT.C2;
  device_screen_size.DeviceScreenType.values = C3 || CT.C3;
  dart.trackLibraries("packages/kakro/enums/device_screen_size", {
    "package:kakro/enums/device_screen_size.dart": device_screen_size
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["device_screen_size.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAAgD;;6DAA3C;;;;EAA2C","file":"device_screen_size.ddc.js"}');
  // Exports:
  return {
    enums__device_screen_size: device_screen_size
  };
});

//# sourceMappingURL=device_screen_size.ddc.js.map
