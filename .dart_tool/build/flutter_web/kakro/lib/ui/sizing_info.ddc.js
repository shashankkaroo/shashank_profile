define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/kakro/enums/device_screen_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__kakro__enums__device_screen_size) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const device_screen_size = packages__kakro__enums__device_screen_size.enums__device_screen_size;
  const sizing_info = Object.create(dart.library);
  const CT = Object.create(null);
  sizing_info.SizingInformation = class SizingInformation extends core.Object {
    get orientation() {
      return this[orientation$];
    }
    set orientation(value) {
      super.orientation = value;
    }
    get deviceType() {
      return this[deviceType$];
    }
    set deviceType(value) {
      super.deviceType = value;
    }
    get screenSize() {
      return this[screenSize$];
    }
    set screenSize(value) {
      super.screenSize = value;
    }
    get localWidgetSize() {
      return this[localWidgetSize$];
    }
    set localWidgetSize(value) {
      super.localWidgetSize = value;
    }
    toString() {
      return "Orientation:" + dart.str(this.orientation) + " DeviceType:" + dart.str(this.deviceType) + " ScreenSize:" + dart.str(this.screenSize) + " LocalWidgetSize:" + dart.str(this.localWidgetSize);
    }
  };
  (sizing_info.SizingInformation.new = function(opts) {
    let orientation = opts && 'orientation' in opts ? opts.orientation : null;
    let deviceType = opts && 'deviceType' in opts ? opts.deviceType : null;
    let screenSize = opts && 'screenSize' in opts ? opts.screenSize : null;
    let localWidgetSize = opts && 'localWidgetSize' in opts ? opts.localWidgetSize : null;
    this[orientation$] = orientation;
    this[deviceType$] = deviceType;
    this[screenSize$] = screenSize;
    this[localWidgetSize$] = localWidgetSize;
    ;
  }).prototype = sizing_info.SizingInformation.prototype;
  dart.addTypeTests(sizing_info.SizingInformation);
  const orientation$ = Symbol("SizingInformation.orientation");
  const deviceType$ = Symbol("SizingInformation.deviceType");
  const screenSize$ = Symbol("SizingInformation.screenSize");
  const localWidgetSize$ = Symbol("SizingInformation.localWidgetSize");
  dart.setLibraryUri(sizing_info.SizingInformation, "package:kakro/ui/sizing_info.dart");
  dart.setFieldSignature(sizing_info.SizingInformation, () => ({
    __proto__: dart.getFields(sizing_info.SizingInformation.__proto__),
    orientation: dart.finalFieldType(media_query.Orientation),
    deviceType: dart.finalFieldType(device_screen_size.DeviceScreenType),
    screenSize: dart.finalFieldType(ui.Size),
    localWidgetSize: dart.finalFieldType(ui.Size)
  }));
  dart.defineExtensionMethods(sizing_info.SizingInformation, ['toString']);
  dart.trackLibraries("packages/kakro/ui/sizing_info", {
    "package:kakro/ui/sizing_info.dart": sizing_info
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sizing_info.dart"],"names":[],"mappings":";;;;;;;;;;;IAIoB;;;;;;IACK;;;;;;IACZ;;;;;;IACA;;;;;;;AAWT,YAAO,AAAyG,2BAA3F,oBAAW,0BAAa,mBAAU,0BAAa,mBAAU,+BAAkB;IAClG;;;QATO;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;;EACL","file":"sizing_info.ddc.js"}');
  // Exports:
  return {
    ui__sizing_info: sizing_info
  };
});

//# sourceMappingURL=sizing_info.ddc.js.map
