define(['dart_sdk', 'packages/flutter_test/flutter_test', 'packages/kakro/main', 'packages/flutter/src/widgets/actions', 'packages/flutter/material'], function(dart_sdk, packages__flutter_test__flutter_test, packages__kakro__main, packages__flutter__src__widgets__actions, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_tester = packages__flutter_test__flutter_test.src__widget_tester;
  const finders = packages__flutter_test__flutter_test.src__finders;
  const matchers = packages__flutter_test__flutter_test.src__matchers;
  const main = packages__kakro__main.main;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icons = packages__flutter__material.src__material__icons;
  const widget_test = Object.create(dart.library);
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let WidgetTesterToFutureOfNull = () => (WidgetTesterToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [widget_tester.WidgetTester])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 29,
        line: 16,
        file: "org-dartlang-app:///test/widget_test.dart"
      });
    }
  });
  let C1;
  let C0;
  widget_test.main = function main$() {
    widget_tester.testWidgets("Counter increments smoke test", dart.fn(tester => async.async(core.Null, function*() {
      yield tester.pumpWidget(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}));
      widget_tester.expect(finders.find.text("0"), matchers.findsOneWidget);
      widget_tester.expect(finders.find.text("1"), matchers.findsNothing);
      yield tester.tap(finders.find.byIcon(icons.Icons.add));
      yield tester.pump();
      widget_tester.expect(finders.find.text("0"), matchers.findsNothing);
      widget_tester.expect(finders.find.text("1"), matchers.findsOneWidget);
    }), WidgetTesterToFutureOfNull()));
  };
  dart.trackLibraries("test/widget_test", {
    "org-dartlang-app:///test/widget_test.dart": widget_test
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["widget_test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAaE,0BAAY,iCAAiC,QAAc;MAEzD,MAAM,AAAO,MAAD,YAAY;MAGxB,qBAAO,AAAK,kBAAK,MAAM;MACvB,qBAAO,AAAK,kBAAK,MAAM;MAGvB,MAAM,AAAO,MAAD,KAAK,AAAK,oBAAa;MACnC,MAAM,AAAO,MAAD;MAGZ,qBAAO,AAAK,kBAAK,MAAM;MACvB,qBAAO,AAAK,kBAAK,MAAM;IACxB;EACH","file":"widget_test.ddc.js"}');
  // Exports:
  return {
    test__widget_test: widget_test
  };
});

//# sourceMappingURL=widget_test.ddc.js.map
