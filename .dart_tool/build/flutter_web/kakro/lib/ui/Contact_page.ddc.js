define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/foundation/_bitfield_web', 'packages/kakro/ui/BaseWidget', 'packages/flutter/material', 'packages/kakro/ui/sizing_info', 'packages/kakro/enums/device_screen_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/kakro/ui/FadeIn'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__foundation___bitfield_web, packages__kakro__ui__BaseWidget, packages__flutter__material, packages__kakro__ui__sizing_info, packages__kakro__enums__device_screen_size, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__kakro__ui__FadeIn) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const BaseWidget = packages__kakro__ui__BaseWidget.ui__BaseWidget;
  const material = packages__flutter__material.src__material__material;
  const colors = packages__flutter__material.src__material__colors;
  const icons = packages__flutter__material.src__material__icons;
  const sizing_info = packages__kakro__ui__sizing_info.ui__sizing_info;
  const device_screen_size = packages__kakro__enums__device_screen_size.enums__device_screen_size;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const FadeIn = packages__kakro__ui__FadeIn.ui__FadeIn;
  const Contact_page = Object.create(dart.library);
  let BuildContextAndSizingInformationToMaterial = () => (BuildContextAndSizingInformationToMaterial = dart.constFn(dart.fnType(material.Material, [framework.BuildContext, sizing_info.SizingInformation])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 9,
        line: 22,
        file: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 23,
        file: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 18,
        line: 21,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 21,
        file: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C5 || CT.C5,
        name: null,
        column: 14,
        line: 20,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 23,
        line: 19,
        file: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C8 || CT.C8,
        name: null,
        column: 12,
        line: 19,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 11,
        line: 42,
        file: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 43,
        file: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C11 || CT.C11,
        name: null,
        column: 16,
        line: 41,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 9,
        line: 38,
        file: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 9,
        line: 39,
        file: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 9,
        line: 40,
        file: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 41,
        file: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C15 || CT.C15,
        name: null,
        column: 12,
        line: 37,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 11,
        line: 54,
        file: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C21 || CT.C21,
        name: null,
        column: 9,
        line: 53,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 9,
        line: 52,
        file: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 53,
        file: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 9,
        line: 83,
        file: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C24 || CT.C24,
        name: null,
        column: 12,
        line: 51,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 91,
        file: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C29 || CT.C29,
        name: null,
        column: 9,
        line: 90,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 28,
        line: 100,
        file: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "size",
        column: 35,
        line: 100,
        file: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 45,
        line: 100,
        file: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C32 || CT.C32,
        name: null,
        column: 17,
        line: 100,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 21,
        line: 104,
        file: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 21,
        line: 105,
        file: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C37 || CT.C37,
        name: null,
        column: 26,
        line: 103,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 19,
        line: 102,
        file: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 103,
        file: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C41 || CT.C41,
        name: null,
        column: 17,
        line: 101,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 15,
        line: 97,
        file: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 98,
        file: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 99,
        file: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C45 || CT.C45,
        name: null,
        column: 13,
        line: 96,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 28,
        line: 114,
        file: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "size",
        column: 35,
        line: 114,
        file: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 45,
        line: 114,
        file: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C50 || CT.C50,
        name: null,
        column: 17,
        line: 114,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 21,
        line: 118,
        file: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 21,
        line: 119,
        file: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C55 || CT.C55,
        name: null,
        column: 26,
        line: 117,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 19,
        line: 116,
        file: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 117,
        file: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C59 || CT.C59,
        name: null,
        column: 17,
        line: 115,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 15,
        line: 111,
        file: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 112,
        file: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 113,
        file: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C63 || CT.C63,
        name: null,
        column: 13,
        line: 110,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 95,
        file: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C68 || CT.C68,
        name: null,
        column: 20,
        line: 94,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 94,
        file: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C71 || CT.C71,
        name: null,
        column: 9,
        line: 93,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 89,
        file: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C74 || CT.C74,
        name: null,
        column: 16,
        line: 88,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 88,
        file: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C77 || CT.C77,
        name: null,
        column: 12,
        line: 87,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 17,
        line: 138,
        file: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 17,
        line: 139,
        file: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "fit",
        column: 17,
        line: 140,
        file: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 17,
        line: 141,
        file: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 17,
        line: 144,
        file: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82, C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C80 || CT.C80,
        name: null,
        column: 32,
        line: 137,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 137,
        file: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C87 || CT.C87,
        name: null,
        column: 15,
        line: 136,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 21,
        line: 152,
        file: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 21,
        line: 153,
        file: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 21,
        line: 157,
        file: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92, C93 || CT.C93], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C90 || CT.C90,
        name: null,
        column: 32,
        line: 151,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 19,
        line: 150,
        file: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 151,
        file: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C95 || CT.C95,
        name: null,
        column: 15,
        line: 149,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 135,
        file: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C99 || CT.C99,
        name: null,
        column: 18,
        line: 134,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 134,
        file: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C102 || CT.C102,
        name: null,
        column: 9,
        line: 133,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 9,
        line: 132,
        file: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 133,
        file: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 9,
        line: 165,
        file: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106, C107 || CT.C107, C108 || CT.C108], widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C105 || CT.C105,
        name: null,
        column: 12,
        line: 131,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    }
  });
  Contact_page.ContactPage = class ContactPage extends framework.StatefulWidget {
    get projectKey() {
      return this[projectKey$];
    }
    set projectKey(value) {
      this[projectKey$] = value;
    }
    createState() {
      return new Contact_page.ContactPageState.new();
    }
  };
  (Contact_page.ContactPage.new = function(projectKey, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[projectKey$] = projectKey;
    Contact_page.ContactPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = Contact_page.ContactPage.prototype;
  dart.addTypeTests(Contact_page.ContactPage);
  const projectKey$ = Symbol("ContactPage.projectKey");
  dart.setMethodSignature(Contact_page.ContactPage, () => ({
    __proto__: dart.getMethods(Contact_page.ContactPage.__proto__),
    createState: dart.fnType(Contact_page.ContactPageState, [])
  }));
  dart.setLibraryUri(Contact_page.ContactPage, "package:kakro/ui/Contact_page.dart");
  dart.setFieldSignature(Contact_page.ContactPage, () => ({
    __proto__: dart.getFields(Contact_page.ContactPage.__proto__),
    projectKey: dart.fieldType(key.Key)
  }));
  dart.defineLazy(Contact_page.ContactPage, {
    /*Contact_page.ContactPage.routeName*/get routeName() {
      return "/contact";
    }
  });
  const _getProjectsContent = dart.privateName(Contact_page, "_getProjectsContent");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C5;
  let C4;
  let C9;
  let C8;
  let C7;
  const _getContentForProjDesk = dart.privateName(Contact_page, "_getContentForProjDesk");
  const _buildAboutMe = dart.privateName(Contact_page, "_buildAboutMe");
  const _contactGrid = dart.privateName(Contact_page, "_contactGrid");
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C17;
  let C18;
  let C19;
  let C15;
  let C14;
  let C22;
  let C21;
  let C20;
  let C25;
  let C26;
  let C27;
  let C24;
  let C23;
  const _generateContactPic = dart.privateName(Contact_page, "_generateContactPic");
  let C30;
  let C29;
  let C28;
  let C33;
  let C34;
  let C35;
  let C32;
  let C31;
  let C38;
  let C39;
  let C37;
  let C36;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C47;
  let C48;
  let C45;
  let C44;
  let C51;
  let C52;
  let C53;
  let C50;
  let C49;
  let C56;
  let C57;
  let C55;
  let C54;
  let C60;
  let C61;
  let C59;
  let C58;
  let C64;
  let C65;
  let C66;
  let C63;
  let C62;
  let C69;
  let C68;
  let C67;
  let C72;
  let C71;
  let C70;
  let C75;
  let C74;
  let C73;
  let C78;
  let C77;
  let C76;
  let C81;
  let C82;
  let C83;
  let C84;
  let C85;
  let C80;
  let C79;
  let C88;
  let C87;
  let C86;
  let C91;
  let C92;
  let C93;
  let C90;
  let C89;
  let C96;
  let C97;
  let C95;
  let C94;
  let C100;
  let C99;
  let C98;
  let C103;
  let C102;
  let C101;
  let C106;
  let C107;
  let C108;
  let C105;
  let C104;
  Contact_page.ContactPageState = class ContactPageState extends framework.State$(Contact_page.ContactPage) {
    build(context) {
      return new BaseWidget.BaseWidget.new({builder: dart.fn((context, sizingInformation) => new material.Material.new({child: new container.Container.new({key: this.widget.projectKey, child: framework.Widget._check(this[_getProjectsContent](sizingInformation)), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), BuildContextAndSizingInformationToMaterial()), $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
    [_getProjectsContent](sizingInformation) {
      if (dart.equals(sizingInformation.deviceType, device_screen_size.DeviceScreenType.Mobile)) {
      } else {
        return this[_getContentForProjDesk](sizingInformation);
      }
    }
    [_getContentForProjDesk](sizingInformation) {
      return new container.Container.new({alignment: alignment.Alignment.center, margin: new edge_insets.EdgeInsets.only({top: 60.0}), width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.86, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([this[_buildAboutMe](this.context, sizingInformation), this[_contactGrid](this.context, sizingInformation)]), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
    }
    [_buildAboutMe](context, sizingInformation) {
      return new FadeIn.FadeIn.new(2.66, new basic.RichText.new({text: new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "Contact ", style: new text_style.TextStyle.new({fontFamily: "Lato", color: colors.Colors.black, fontWeight: ui.FontWeight.w400, fontSize: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? 36.0 : 50.0})}), new text_span.TextSpan.new({text: "Me ", style: new text_style.TextStyle.new({color: new ui.Color.new(4283477952), fontFamily: "Lato", fontWeight: ui.FontWeight.w900, fontSize: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? 36.0 : 50.0})})])}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), "left", {$creationLocationd_0dea112b090073317d4: C23 || CT.C23});
    }
    [_contactGrid](context, sizingInformation) {
      return new container.Container.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({child: this[_generateContactPic](sizingInformation), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), new container.Container.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.email, {size: 30.0, color: new ui.Color.new(4283477952), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                        }, VoidToNull()), child: new text.Text.new("  shashankkakroo@gmail.com", {style: new text_style.TextStyle.new({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40})]), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.phone, {size: 30.0, color: new ui.Color.new(4283477952), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                        }, VoidToNull()), child: new text.Text.new("  +971564699985", {style: new text_style.TextStyle.new({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58})]), $creationLocationd_0dea112b090073317d4: C62 || CT.C62})]), $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70})]), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), $creationLocationd_0dea112b090073317d4: C76 || CT.C76});
    }
    [_generateContactPic](sizingInformation) {
      return new FadeIn.FadeIn.new(2.66, new container.Container.new({child: new basic.Stack.new({children: JSArrayOfWidget().of([new container.Container.new({child: new image.Image.network("https://i.pinimg.com/originals/8b/a8/b8/8ba8b89f095d837cd54c7eb5ef31b99d.png", {color: colors.Colors.transparent, fit: box_fit.BoxFit.fill, width: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.6 : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.42, height: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.6 : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.42, $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 40.0, left: 100.0}), child: new image.Image.network("https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/IMG-20181124-WA0006-removebg-preview.png?alt=media&token=375420f9-d054-4f29-97c1-c8c559bfb680", {width: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.6 : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.42, height: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.6 : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.42, $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), $creationLocationd_0dea112b090073317d4: C94 || CT.C94})]), $creationLocationd_0dea112b090073317d4: C98 || CT.C98}), $creationLocationd_0dea112b090073317d4: C101 || CT.C101}), "right", {$creationLocationd_0dea112b090073317d4: C104 || CT.C104});
    }
  };
  (Contact_page.ContactPageState.new = function() {
    Contact_page.ContactPageState.__proto__.new.call(this);
    ;
  }).prototype = Contact_page.ContactPageState.prototype;
  dart.addTypeTests(Contact_page.ContactPageState);
  dart.setMethodSignature(Contact_page.ContactPageState, () => ({
    __proto__: dart.getMethods(Contact_page.ContactPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_getProjectsContent]: dart.fnType(dart.dynamic, [sizing_info.SizingInformation]),
    [_getContentForProjDesk]: dart.fnType(dart.dynamic, [sizing_info.SizingInformation]),
    [_buildAboutMe]: dart.fnType(framework.Widget, [framework.BuildContext, dart.dynamic]),
    [_contactGrid]: dart.fnType(framework.Widget, [framework.BuildContext, dart.dynamic]),
    [_generateContactPic]: dart.fnType(framework.Widget, [dart.dynamic])
  }));
  dart.setLibraryUri(Contact_page.ContactPageState, "package:kakro/ui/Contact_page.dart");
  dart.trackLibraries("packages/kakro/ui/Contact_page", {
    "package:kakro/ui/Contact_page.dart": Contact_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Contact_page.dart"],"names":[],"mappings":"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","file":"Contact_page.ddc.js"}');
  // Exports:
  return {
    ui__Contact_page: Contact_page
  };
});

//# sourceMappingURL=Contact_page.ddc.js.map
