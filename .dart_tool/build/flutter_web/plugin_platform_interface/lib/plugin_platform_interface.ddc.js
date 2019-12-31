define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const plugin_platform_interface = Object.create(dart.library);
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  const CT = Object.create(null);
  const _instanceToken = dart.privateName(plugin_platform_interface, "_instanceToken");
  plugin_platform_interface.PlatformInterface = class PlatformInterface extends core.Object {
    static verifyToken(instance, token) {
      if (plugin_platform_interface.MockPlatformInterfaceMixin.is(instance)) {
        let assertionsEnabled = false;
        if (!dart.test(dart.fn(() => {
          assertionsEnabled = true;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/plugin_platform_interface/plugin_platform_interface.dart", 62, 14, "() {\n        assertionsEnabled = true;\n        return true;\n      }()");
        if (!assertionsEnabled) {
          dart.throw(new core.AssertionError.new("`MockPlatformInterfaceMixin` is not intended for use in release builds."));
        }
        return;
      }
      if (!core.identical(token, instance[_instanceToken])) {
        dart.throw(new core.AssertionError.new("Platform interfaces must not be implemented with `implements`"));
      }
    }
  };
  (plugin_platform_interface.PlatformInterface.new = function(opts) {
    let token = opts && 'token' in opts ? opts.token : null;
    this[_instanceToken] = token;
    ;
  }).prototype = plugin_platform_interface.PlatformInterface.prototype;
  dart.addTypeTests(plugin_platform_interface.PlatformInterface);
  dart.setLibraryUri(plugin_platform_interface.PlatformInterface, "package:plugin_platform_interface/plugin_platform_interface.dart");
  dart.setFieldSignature(plugin_platform_interface.PlatformInterface, () => ({
    __proto__: dart.getFields(plugin_platform_interface.PlatformInterface.__proto__),
    [_instanceToken]: dart.finalFieldType(core.Object)
  }));
  plugin_platform_interface.MockPlatformInterfaceMixin = class MockPlatformInterfaceMixin extends core.Object {};
  (plugin_platform_interface.MockPlatformInterfaceMixin.new = function() {
    ;
  }).prototype = plugin_platform_interface.MockPlatformInterfaceMixin.prototype;
  dart.addTypeTests(plugin_platform_interface.MockPlatformInterfaceMixin);
  plugin_platform_interface.MockPlatformInterfaceMixin[dart.implements] = () => [plugin_platform_interface.PlatformInterface];
  dart.setLibraryUri(plugin_platform_interface.MockPlatformInterfaceMixin, "package:plugin_platform_interface/plugin_platform_interface.dart");
  dart.trackLibraries("packages/plugin_platform_interface/plugin_platform_interface", {
    "package:plugin_platform_interface/plugin_platform_interface.dart": plugin_platform_interface
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["plugin_platform_interface.dart"],"names":[],"mappings":";;;;;;;;;;uBA0D4C,UAAiB;AACzD,UAAa,wDAAT,QAAQ;AACL,gCAAoB;uBAClB,AAGN;UAFC,oBAAoB;AACpB,gBAAO;;AAET,aAAK,iBAAiB;UACpB,WAAM,4BACF;;AAEN;;AAEF,0BAAe,KAAK,EAAE,AAAS,QAAD;QAC5B,WAAM,4BACF;;IAER;;;QAhCoC;IAAyB,uBAAE,KAAK;;;;;;;;;;;;EAkDE","file":"plugin_platform_interface.ddc.js"}');
  // Exports:
  return {
    plugin_platform_interface: plugin_platform_interface
  };
});

//# sourceMappingURL=plugin_platform_interface.ddc.js.map
