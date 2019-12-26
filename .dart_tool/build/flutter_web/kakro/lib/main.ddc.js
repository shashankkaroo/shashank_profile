define(['dart_sdk', 'packages/flutter/material', 'packages/kakro/ui/Home_view', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__material, packages__kakro__ui__Home_view, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter__material.src__material__app;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const Home_view = packages__kakro__ui__Home_view.ui__Home_view;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const main = Object.create(dart.library);
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
        column: 17,
        line: 23,
        file: "org-dartlang-app:///packages/kakro/main.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 7,
        line: 15,
        file: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "debugShowCheckedModeBanner",
        column: 7,
        line: 16,
        file: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "theme",
        column: 7,
        line: 17,
        file: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "home",
        column: 7,
        line: 23,
        file: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C3 || CT.C3,
        name: null,
        column: 16,
        line: 14,
        file: "org-dartlang-app:///packages/kakro/main.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 23,
        line: 6,
        file: "org-dartlang-app:///packages/kakro/main.dart"
      });
    }
  });
  let C1;
  let C0;
  let C4;
  let C5;
  let C6;
  let C7;
  let C3;
  let C2;
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({title: "Shashank Kakroo", debugShowCheckedModeBanner: false, theme: theme_data.ThemeData.new({brightness: ui.Brightness.light, primaryColorBrightness: ui.Brightness.light, accentColorBrightness: ui.Brightness.light, fontFamily: "Lato"}), home: new Home_view.HomeView.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C2 || CT.C2});
    }
  };
  (main.MyApp.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:kakro/main.dart");
  let C8;
  main.main = function main$() {
    return binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C8 || CT.C8}));
  };
  dart.trackLibraries("packages/kakro/main", {
    "package:kakro/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAW4B;AAExB,YAAW,iCACF,+CACqB,cACrB,sCACoB,6CACY,4CACD,iCACtB,gBAEN;IAEd;;;;;;EACF;;;;;;;;;AApBe,0BAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
