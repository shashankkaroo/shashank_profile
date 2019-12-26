define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/kakro/ui/sizing_info', 'packages/kakro/utils/ui_utils', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__kakro__ui__sizing_info, packages__kakro__utils__ui_utils, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const sizing_info = packages__kakro__ui__sizing_info.ui__sizing_info;
  const ui_utils = packages__kakro__utils__ui_utils.utils__ui_utils;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const BaseWidget = Object.create(dart.library);
  let BuildContextAndBoxConstraintsToWidget = () => (BuildContextAndBoxConstraintsToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 26,
        line: 14,
        file: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 12,
        line: 14,
        file: "org-dartlang-app:///packages/kakro/ui/BaseWidget.dart"
      });
    }
  });
  let C2;
  let C1;
  let C0;
  BaseWidget.BaseWidget = class BaseWidget extends framework.StatelessWidget {
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    build(context) {
      let mediaQuery = media_query.MediaQuery.of(context);
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, boxSizing) => {
          let sizingInformation = new sizing_info.SizingInformation.new({orientation: mediaQuery.orientation, deviceType: ui_utils.getDeviceType(mediaQuery), screenSize: mediaQuery.size, localWidgetSize: new ui.Size.new(boxSizing.maxWidth, boxSizing.maxHeight)});
          return this.builder(context, sizingInformation);
        }, BuildContextAndBoxConstraintsToWidget()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (BaseWidget.BaseWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[builder$] = builder;
    BaseWidget.BaseWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = BaseWidget.BaseWidget.prototype;
  dart.addTypeTests(BaseWidget.BaseWidget);
  const builder$ = Symbol("BaseWidget.builder");
  dart.setMethodSignature(BaseWidget.BaseWidget, () => ({
    __proto__: dart.getMethods(BaseWidget.BaseWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(BaseWidget.BaseWidget, "package:kakro/ui/BaseWidget.dart");
  dart.setFieldSignature(BaseWidget.BaseWidget, () => ({
    __proto__: dart.getFields(BaseWidget.BaseWidget.__proto__),
    builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, sizing_info.SizingInformation]))
  }));
  dart.trackLibraries("packages/kakro/ui/BaseWidget", {
    "package:kakro/ui/BaseWidget.dart": BaseWidget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["BaseWidget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMiE;;;;;;UAKrC;AACpB,uBAAwB,0BAAG,OAAO;AACtC,YAAO,gDAAuB,SAAC,SAAS;AAClC,kCAAoB,oDACT,AAAW,UAAD,0BACX,uBAAc,UAAU,eACxB,AAAW,UAAD,wBACL,gBAAK,AAAU,SAAD,WAAW,AAAU,SAAD;AAGrD,gBAAO,cAAQ,OAAO,EAAE,iBAAiB;;IAE7C;;;QAfsB;QAAU;;;AAAY,yDAAW,GAAG;;EAAC","file":"BaseWidget.ddc.js"}');
  // Exports:
  return {
    ui__BaseWidget: BaseWidget
  };
});

//# sourceMappingURL=BaseWidget.ddc.js.map
