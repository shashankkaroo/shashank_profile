define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const spacer = packages__flutter__src__widgets__actions.src__widgets__spacer;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const responsive_grid = Object.create(dart.library);
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $length = dartx.length;
  const $modulo = dartx['%'];
  const $floor = dartx.floor;
  const $ceil = dartx.ceil;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let ResponsiveGridColToNull = () => (ResponsiveGridColToNull = dart.constFn(dart.fnType(core.Null, [responsive_grid.ResponsiveGridCol])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let BuildContextAndintToSizedBox = () => (BuildContextAndintToSizedBox = dart.constFn(dart.fnType(basic.SizedBox, [framework.BuildContext, core.int])))();
  let BuildContextAndintTo_ResponsiveGridListItem = () => (BuildContextAndintTo_ResponsiveGridListItem = dart.constFn(dart.fnType(responsive_grid._ResponsiveGridListItem, [framework.BuildContext, core.int])))();
  let BuildContextAndBoxConstraintsToWidget = () => (BuildContextAndBoxConstraintsToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints])))();
  let WidgetToNull = () => (WidgetToNull = dart.constFn(dart.fnType(core.Null, [framework.Widget])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: responsive_grid._GridTier.prototype,
        [_name$]: "_GridTier.xs",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: responsive_grid._GridTier.prototype,
        [_name$]: "_GridTier.sm",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: responsive_grid._GridTier.prototype,
        [_name$]: "_GridTier.md",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: responsive_grid._GridTier.prototype,
        [_name$]: "_GridTier.lg",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: responsive_grid._GridTier.prototype,
        [_name$]: "_GridTier.xl",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], responsive_grid._GridTier);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "flex",
        column: 13,
        line: 81,
        file: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C7 || CT.C7,
        name: null,
        column: 20,
        line: 80,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 85,
        file: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C10 || CT.C10,
        name: null,
        column: 18,
        line: 84,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "flex",
        column: 11,
        line: 99,
        file: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C13 || CT.C13,
        name: null,
        column: 18,
        line: 98,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 9,
        line: 103,
        file: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C16 || CT.C16,
        name: null,
        column: 16,
        line: 102,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 108,
        file: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C19 || CT.C19,
        name: null,
        column: 12,
        line: 107,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "flex",
        column: 7,
        line: 133,
        file: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 134,
        file: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C22 || CT.C22,
        name: null,
        column: 12,
        line: 132,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C26() {
      return C26 = dart.constList([], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C26 || CT.C26,
        name: null,
        column: 42,
        line: 159,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 19,
        line: 189,
        file: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C28 || CT.C28,
        name: null,
        column: 24,
        line: 188,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "itemWidth",
        column: 19,
        line: 201,
        file: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "spacing",
        column: 19,
        line: 202,
        file: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "squareCells",
        column: 19,
        line: 203,
        file: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 19,
        line: 204,
        file: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C31 || CT.C31,
        name: null,
        column: 24,
        line: 200,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "itemCount",
        column: 15,
        line: 186,
        file: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "separatorBuilder",
        column: 15,
        line: 187,
        file: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "itemBuilder",
        column: 15,
        line: 192,
        file: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C37 || CT.C37,
        name: null,
        column: 27,
        line: 185,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 13,
        line: 210,
        file: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C42 || CT.C42,
        name: null,
        column: 20,
        line: 209,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "itemWidth",
        column: 15,
        line: 222,
        file: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "spacing",
        column: 15,
        line: 223,
        file: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "squareCells",
        column: 15,
        line: 224,
        file: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 225,
        file: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C45 || CT.C45,
        name: null,
        column: 22,
        line: 221,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 15,
        line: 229,
        file: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C51 || CT.C51,
        name: null,
        column: 22,
        line: 228,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 234,
        file: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C54 || CT.C54,
        name: null,
        column: 18,
        line: 233,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 7,
        line: 158,
        file: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C57 || CT.C57,
        name: null,
        column: 12,
        line: 157,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 7,
        line: 253,
        file: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 7,
        line: 254,
        file: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 255,
        file: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C60 || CT.C60,
        name: null,
        column: 12,
        line: 252,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 7,
        line: 263,
        file: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C65 || CT.C65,
        name: null,
        column: 14,
        line: 262,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 9,
        line: 268,
        file: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 9,
        line: 269,
        file: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 270,
        file: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C68 || CT.C68,
        name: null,
        column: 16,
        line: 267,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 9,
        line: 273,
        file: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C73 || CT.C73,
        name: null,
        column: 16,
        line: 272,
        file: "org-dartlang-app:///packages/responsive_grid/responsive_grid.dart"
      });
    }
  });
  const _name$ = dart.privateName(responsive_grid, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  responsive_grid._GridTier = class _GridTier extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (responsive_grid._GridTier.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = responsive_grid._GridTier.prototype;
  dart.addTypeTests(responsive_grid._GridTier);
  dart.setLibraryUri(responsive_grid._GridTier, "package:responsive_grid/responsive_grid.dart");
  dart.setFieldSignature(responsive_grid._GridTier, () => ({
    __proto__: dart.getFields(responsive_grid._GridTier.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(responsive_grid._GridTier, ['toString']);
  responsive_grid._GridTier.xs = C0 || CT.C0;
  responsive_grid._GridTier.sm = C1 || CT.C1;
  responsive_grid._GridTier.md = C2 || CT.C2;
  responsive_grid._GridTier.lg = C3 || CT.C3;
  responsive_grid._GridTier.xl = C4 || CT.C4;
  responsive_grid._GridTier.values = C5 || CT.C5;
  let C8;
  let C7;
  let C6;
  let C11;
  let C10;
  let C9;
  let C14;
  let C13;
  let C12;
  let C17;
  let C16;
  let C15;
  let C20;
  let C19;
  let C18;
  responsive_grid.ResponsiveGridRow = class ResponsiveGridRow extends framework.StatelessWidget {
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    build(context) {
      let rows = JSArrayOfWidget().of([]);
      let accumulatedWidth = 0;
      let cols = JSArrayOfWidget().of([]);
      this.children[$forEach](dart.fn(col => {
        let colWidth = col.currentConfig(context);
        if (accumulatedWidth + dart.notNull(colWidth) > dart.notNull(responsive_grid._totalSegments)) {
          if (accumulatedWidth < dart.notNull(responsive_grid._totalSegments)) {
            cols[$add](new spacer.Spacer.new({flex: dart.notNull(responsive_grid._totalSegments) - accumulatedWidth, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}));
          }
          rows[$add](new basic.Row.new({children: cols, $creationLocationd_0dea112b090073317d4: C9 || CT.C9}));
          cols = JSArrayOfWidget().of([]);
          accumulatedWidth = 0;
        }
        cols[$add](col);
        accumulatedWidth = accumulatedWidth + dart.notNull(colWidth);
      }, ResponsiveGridColToNull()));
      if (accumulatedWidth >= 0) {
        if (accumulatedWidth < dart.notNull(responsive_grid._totalSegments)) {
          cols[$add](new spacer.Spacer.new({flex: dart.notNull(responsive_grid._totalSegments) - accumulatedWidth, $creationLocationd_0dea112b090073317d4: C12 || CT.C12}));
        }
        rows[$add](new basic.Row.new({children: cols, $creationLocationd_0dea112b090073317d4: C15 || CT.C15}));
      }
      return new basic.Column.new({children: rows, $creationLocationd_0dea112b090073317d4: C18 || CT.C18});
    }
  };
  (responsive_grid.ResponsiveGridRow.new = function(opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[children$] = children;
    responsive_grid.ResponsiveGridRow.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = responsive_grid.ResponsiveGridRow.prototype;
  dart.addTypeTests(responsive_grid.ResponsiveGridRow);
  const children$ = Symbol("ResponsiveGridRow.children");
  dart.setMethodSignature(responsive_grid.ResponsiveGridRow, () => ({
    __proto__: dart.getMethods(responsive_grid.ResponsiveGridRow.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(responsive_grid.ResponsiveGridRow, "package:responsive_grid/responsive_grid.dart");
  dart.setFieldSignature(responsive_grid.ResponsiveGridRow, () => ({
    __proto__: dart.getFields(responsive_grid.ResponsiveGridRow.__proto__),
    children: dart.finalFieldType(core.List$(responsive_grid.ResponsiveGridCol))
  }));
  const _config = dart.privateName(responsive_grid, "_config");
  let C23;
  let C24;
  let C22;
  let C21;
  responsive_grid.ResponsiveGridCol = class ResponsiveGridCol extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    currentConfig(context) {
      return this[_config][$_get](responsive_grid._currentSize(context).index);
    }
    build(context) {
      return new basic.Expanded.new({flex: this.currentConfig(context), child: this.child, $creationLocationd_0dea112b090073317d4: C21 || CT.C21});
    }
  };
  (responsive_grid.ResponsiveGridCol.new = function(opts) {
    let t0, t0$, t0$0, t0$1;
    let xs = opts && 'xs' in opts ? opts.xs : 12;
    let sm = opts && 'sm' in opts ? opts.sm : null;
    let md = opts && 'md' in opts ? opts.md : null;
    let lg = opts && 'lg' in opts ? opts.lg : null;
    let xl = opts && 'xl' in opts ? opts.xl : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_config] = ListOfint().new(5);
    this[child$] = child;
    responsive_grid.ResponsiveGridCol.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    this[_config][$_set](responsive_grid._GridTier.xs.index, xs);
    this[_config][$_set](responsive_grid._GridTier.sm.index, (t0 = sm, t0 == null ? this[_config][$_get](responsive_grid._GridTier.xs.index) : t0));
    this[_config][$_set](responsive_grid._GridTier.md.index, (t0$ = md, t0$ == null ? this[_config][$_get](responsive_grid._GridTier.sm.index) : t0$));
    this[_config][$_set](responsive_grid._GridTier.lg.index, (t0$0 = lg, t0$0 == null ? this[_config][$_get](responsive_grid._GridTier.md.index) : t0$0));
    this[_config][$_set](responsive_grid._GridTier.xl.index, (t0$1 = xl, t0$1 == null ? this[_config][$_get](responsive_grid._GridTier.lg.index) : t0$1));
  }).prototype = responsive_grid.ResponsiveGridCol.prototype;
  dart.addTypeTests(responsive_grid.ResponsiveGridCol);
  const child$ = Symbol("ResponsiveGridCol.child");
  dart.setMethodSignature(responsive_grid.ResponsiveGridCol, () => ({
    __proto__: dart.getMethods(responsive_grid.ResponsiveGridCol.__proto__),
    currentConfig: dart.fnType(core.int, [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(responsive_grid.ResponsiveGridCol, "package:responsive_grid/responsive_grid.dart");
  dart.setFieldSignature(responsive_grid.ResponsiveGridCol, () => ({
    __proto__: dart.getFields(responsive_grid.ResponsiveGridCol.__proto__),
    [_config]: dart.finalFieldType(core.List$(core.int)),
    child: dart.finalFieldType(framework.Widget)
  }));
  let C26;
  let C25;
  let C29;
  let C28;
  let C27;
  let C32;
  let C33;
  let C34;
  let C35;
  let C31;
  let C30;
  let C38;
  let C39;
  let C40;
  let C37;
  let C36;
  let C43;
  let C42;
  let C41;
  let C46;
  let C47;
  let C48;
  let C49;
  let C45;
  let C44;
  let C52;
  let C51;
  let C50;
  let C55;
  let C54;
  let C53;
  let C58;
  let C57;
  let C56;
  responsive_grid.ResponsiveGridList = class ResponsiveGridList extends framework.StatelessWidget {
    get desiredItemWidth() {
      return this[desiredItemWidth$];
    }
    set desiredItemWidth(value) {
      super.desiredItemWidth = value;
    }
    get minSpacing() {
      return this[minSpacing$];
    }
    set minSpacing(value) {
      super.minSpacing = value;
    }
    get children() {
      return this[children$0];
    }
    set children(value) {
      super.children = value;
    }
    get squareCells() {
      return this[squareCells$];
    }
    set squareCells(value) {
      super.squareCells = value;
    }
    get scroll() {
      return this[scroll$];
    }
    set scroll(value) {
      super.scroll = value;
    }
    build(context) {
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
          if (this.children[$length] === 0) return new container.Container.new({$creationLocationd_0dea112b090073317d4: C25 || CT.C25});
          let width = constraints.maxWidth;
          let N = (dart.notNull(width) - dart.notNull(this.minSpacing)) / (dart.notNull(this.desiredItemWidth) + dart.notNull(this.minSpacing));
          let n = null;
          let spacing = null;
          let itemWidth = null;
          if (N[$modulo](1) === 0) {
            n = N[$floor]();
            spacing = this.minSpacing;
            itemWidth = this.desiredItemWidth;
          } else {
            n = N[$floor]();
            let dw = dart.notNull(width) - (dart.notNull(n) * (dart.notNull(this.desiredItemWidth) + dart.notNull(this.minSpacing)) + dart.notNull(this.minSpacing));
            itemWidth = dart.notNull(this.desiredItemWidth) + dw / dart.notNull(n) * (dart.notNull(this.desiredItemWidth) / (dart.notNull(this.desiredItemWidth) + dart.notNull(this.minSpacing)));
            spacing = (dart.notNull(width) - dart.notNull(itemWidth) * dart.notNull(n)) / (dart.notNull(n) + 1);
          }
          if (dart.test(this.scroll)) {
            return new scroll_view.ListView.separated({itemCount: (dart.notNull(this.children[$length]) / dart.notNull(n))[$ceil](), separatorBuilder: dart.fn((context, index) => new basic.SizedBox.new({height: this.minSpacing, $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), BuildContextAndintToSizedBox()), itemBuilder: dart.fn((context, index) => {
                if (dart.notNull(index) * dart.notNull(n) >= dart.notNull(this.children[$length])) return null;
                let rowChildren = JSArrayOfWidget().of([]);
                for (let i = dart.notNull(index) * dart.notNull(n); i < (dart.notNull(index) + 1) * dart.notNull(n); i = i + 1) {
                  if (i >= dart.notNull(this.children[$length])) break;
                  rowChildren[$add](this.children[$_get](i));
                }
                return new responsive_grid._ResponsiveGridListItem.new({itemWidth: itemWidth, spacing: spacing, squareCells: this.squareCells, children: rowChildren, $creationLocationd_0dea112b090073317d4: C30 || CT.C30});
              }, BuildContextAndintTo_ResponsiveGridListItem()), $creationLocationd_0dea112b090073317d4: C36 || CT.C36});
          } else {
            let rows = JSArrayOfWidget().of([]);
            rows[$add](new basic.SizedBox.new({height: this.minSpacing, $creationLocationd_0dea112b090073317d4: C41 || CT.C41}));
            for (let j = 0; j < (dart.notNull(this.children[$length]) / dart.notNull(n))[$ceil](); j = j + 1) {
              let rowChildren = JSArrayOfWidget().of([]);
              for (let i = j * dart.notNull(n); i < (j + 1) * dart.notNull(n); i = i + 1) {
                if (i >= dart.notNull(this.children[$length])) break;
                rowChildren[$add](this.children[$_get](i));
              }
              rows[$add](new responsive_grid._ResponsiveGridListItem.new({itemWidth: itemWidth, spacing: spacing, squareCells: this.squareCells, children: rowChildren, $creationLocationd_0dea112b090073317d4: C44 || CT.C44}));
              rows[$add](new basic.SizedBox.new({height: this.minSpacing, $creationLocationd_0dea112b090073317d4: C50 || CT.C50}));
            }
            return new basic.Column.new({children: rows, $creationLocationd_0dea112b090073317d4: C53 || CT.C53});
          }
        }, BuildContextAndBoxConstraintsToWidget()), $creationLocationd_0dea112b090073317d4: C56 || CT.C56});
    }
  };
  (responsive_grid.ResponsiveGridList.new = function(opts) {
    let desiredItemWidth = opts && 'desiredItemWidth' in opts ? opts.desiredItemWidth : null;
    let minSpacing = opts && 'minSpacing' in opts ? opts.minSpacing : null;
    let squareCells = opts && 'squareCells' in opts ? opts.squareCells : false;
    let scroll = opts && 'scroll' in opts ? opts.scroll : true;
    let children = opts && 'children' in opts ? opts.children : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[desiredItemWidth$] = desiredItemWidth;
    this[minSpacing$] = minSpacing;
    this[squareCells$] = squareCells;
    this[scroll$] = scroll;
    this[children$0] = children;
    responsive_grid.ResponsiveGridList.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = responsive_grid.ResponsiveGridList.prototype;
  dart.addTypeTests(responsive_grid.ResponsiveGridList);
  const desiredItemWidth$ = Symbol("ResponsiveGridList.desiredItemWidth");
  const minSpacing$ = Symbol("ResponsiveGridList.minSpacing");
  const children$0 = Symbol("ResponsiveGridList.children");
  const squareCells$ = Symbol("ResponsiveGridList.squareCells");
  const scroll$ = Symbol("ResponsiveGridList.scroll");
  dart.setMethodSignature(responsive_grid.ResponsiveGridList, () => ({
    __proto__: dart.getMethods(responsive_grid.ResponsiveGridList.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(responsive_grid.ResponsiveGridList, "package:responsive_grid/responsive_grid.dart");
  dart.setFieldSignature(responsive_grid.ResponsiveGridList, () => ({
    __proto__: dart.getFields(responsive_grid.ResponsiveGridList.__proto__),
    desiredItemWidth: dart.finalFieldType(core.double),
    minSpacing: dart.finalFieldType(core.double),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    squareCells: dart.finalFieldType(core.bool),
    scroll: dart.finalFieldType(core.bool)
  }));
  const _buildChildren = dart.privateName(responsive_grid, "_buildChildren");
  let C61;
  let C62;
  let C63;
  let C60;
  let C59;
  let C66;
  let C65;
  let C64;
  let C69;
  let C70;
  let C71;
  let C68;
  let C67;
  let C74;
  let C73;
  let C72;
  responsive_grid._ResponsiveGridListItem = class _ResponsiveGridListItem extends framework.StatelessWidget {
    build(context) {
      return new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.start, mainAxisAlignment: flex.MainAxisAlignment.start, children: this[_buildChildren](), $creationLocationd_0dea112b090073317d4: C59 || CT.C59});
    }
    [_buildChildren]() {
      let list = JSArrayOfWidget().of([]);
      list[$add](new basic.SizedBox.new({width: this.spacing, $creationLocationd_0dea112b090073317d4: C64 || CT.C64}));
      this.children[$forEach](dart.fn(child => {
        list[$add](new basic.SizedBox.new({width: this.itemWidth, height: dart.test(this.squareCells) ? this.itemWidth : null, child: child, $creationLocationd_0dea112b090073317d4: C67 || CT.C67}));
        list[$add](new basic.SizedBox.new({width: this.spacing, $creationLocationd_0dea112b090073317d4: C72 || CT.C72}));
      }, WidgetToNull()));
      return list;
    }
  };
  (responsive_grid._ResponsiveGridListItem.new = function(opts) {
    let itemWidth = opts && 'itemWidth' in opts ? opts.itemWidth : null;
    let spacing = opts && 'spacing' in opts ? opts.spacing : null;
    let squareCells = opts && 'squareCells' in opts ? opts.squareCells : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.itemWidth = itemWidth;
    this.spacing = spacing;
    this.squareCells = squareCells;
    this.children = children;
    responsive_grid._ResponsiveGridListItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = responsive_grid._ResponsiveGridListItem.prototype;
  dart.addTypeTests(responsive_grid._ResponsiveGridListItem);
  dart.setMethodSignature(responsive_grid._ResponsiveGridListItem, () => ({
    __proto__: dart.getMethods(responsive_grid._ResponsiveGridListItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildChildren]: dart.fnType(core.List$(framework.Widget), [])
  }));
  dart.setLibraryUri(responsive_grid._ResponsiveGridListItem, "package:responsive_grid/responsive_grid.dart");
  dart.setFieldSignature(responsive_grid._ResponsiveGridListItem, () => ({
    __proto__: dart.getFields(responsive_grid._ResponsiveGridListItem.__proto__),
    spacing: dart.finalFieldType(core.double),
    itemWidth: dart.finalFieldType(core.double),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    squareCells: dart.finalFieldType(core.bool)
  }));
  responsive_grid.initScaling = function initScaling(context) {
    let mq = media_query.MediaQuery.of(context);
    responsive_grid._width = dart.notNull(mq.size.width) < dart.notNull(mq.size.height) ? mq.size.width : mq.size.height;
    responsive_grid._scalingFactor = dart.notNull(responsive_grid._width) / dart.notNull(responsive_grid._refWidth);
    core.print("width => " + dart.str(responsive_grid._width));
  };
  responsive_grid.scale = function scale(dimension) {
    if (responsive_grid._width == null) {
      dart.throw(core.Exception.new("You must call init() before any use of scale()"));
    }
    return dart.notNull(dimension) * dart.notNull(responsive_grid._scalingFactor);
  };
  responsive_grid._currentSize = function _currentSize(context) {
    let mediaQueryData = media_query.MediaQuery.of(context);
    let width = mediaQueryData.size.width;
    if (dart.notNull(width) < 576) {
      return responsive_grid._GridTier.xs;
    } else if (dart.notNull(width) < 768) {
      return responsive_grid._GridTier.sm;
    } else if (dart.notNull(width) < 992) {
      return responsive_grid._GridTier.md;
    } else if (dart.notNull(width) < 1200) {
      return responsive_grid._GridTier.lg;
    } else {
      return responsive_grid._GridTier.xl;
    }
  };
  dart.defineLazy(responsive_grid, {
    /*responsive_grid._scalingMargin*/get _scalingMargin() {
      return 5.0;
    },
    set _scalingMargin(_) {},
    /*responsive_grid._refWidth*/get _refWidth() {
      return 375.0;
    },
    set _refWidth(_) {},
    /*responsive_grid._scalingFactor*/get _scalingFactor() {
      return null;
    },
    set _scalingFactor(_) {},
    /*responsive_grid._width*/get _width() {
      return null;
    },
    set _width(_) {},
    /*responsive_grid._totalSegments*/get _totalSegments() {
      return 12;
    },
    set _totalSegments(_) {}
  });
  dart.trackLibraries("packages/responsive_grid/responsive_grid", {
    "package:responsive_grid/responsive_grid.dart": responsive_grid
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["responsive_grid.dart"],"names":[],"mappings":"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","file":"responsive_grid.ddc.js"}');
  // Exports:
  return {
    responsive_grid: responsive_grid
  };
});

//# sourceMappingURL=responsive_grid.ddc.js.map
