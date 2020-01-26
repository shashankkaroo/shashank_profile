define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/foundation/_bitfield_web', 'packages/kakro/ui/BaseWidget', 'packages/flutter/material', 'packages/kakro/ui/sizing_info', 'packages/kakro/enums/device_screen_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/kakro/ui/FadeIn'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__foundation___bitfield_web, packages__kakro__ui__BaseWidget, packages__flutter__material, packages__kakro__ui__sizing_info, packages__kakro__enums__device_screen_size, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__kakro__ui__FadeIn) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
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
  const icons = packages__flutter__material.src__material__icons;
  const colors = packages__flutter__material.src__material__colors;
  const sizing_info = packages__kakro__ui__sizing_info.ui__sizing_info;
  const device_screen_size = packages__kakro__enums__device_screen_size.enums__device_screen_size;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const FadeIn = packages__kakro__ui__FadeIn.ui__FadeIn;
  const Contact_page = Object.create(dart.library);
  const $href = dartx.href;
  const $location = dartx.location;
  const $window = dartx.window;
  let BuildContextAndSizingInformationToMaterial = () => (BuildContextAndSizingInformationToMaterial = dart.constFn(dart.fnType(material.Material, [framework.BuildContext, sizing_info.SizingInformation])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 9,
        line: 23,
        file: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 24,
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
        line: 22,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 22,
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
        line: 21,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 23,
        line: 20,
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
        line: 20,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 11,
        line: 43,
        file: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 44,
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
        line: 42,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 9,
        line: 39,
        file: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 9,
        line: 40,
        file: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 9,
        line: 41,
        file: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 42,
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
        line: 38,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 58,
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
        column: 13,
        line: 57,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 36,
        line: 70,
        file: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "size",
        column: 43,
        line: 70,
        file: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 53,
        line: 70,
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
        column: 25,
        line: 70,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 29,
        line: 74,
        file: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 29,
        line: 75,
        file: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C29 || CT.C29,
        name: null,
        column: 34,
        line: 73,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 27,
        line: 72,
        file: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 27,
        line: 73,
        file: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C33 || CT.C33,
        name: null,
        column: 25,
        line: 71,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 23,
        line: 67,
        file: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 23,
        line: 68,
        file: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 23,
        line: 69,
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
        column: 21,
        line: 66,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 36,
        line: 84,
        file: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "size",
        column: 43,
        line: 84,
        file: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 53,
        line: 84,
        file: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C42 || CT.C42,
        name: null,
        column: 25,
        line: 84,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 29,
        line: 88,
        file: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 29,
        line: 89,
        file: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C47 || CT.C47,
        name: null,
        column: 34,
        line: 87,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 27,
        line: 86,
        file: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 27,
        line: 87,
        file: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C51 || CT.C51,
        name: null,
        column: 25,
        line: 85,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 23,
        line: 81,
        file: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 23,
        line: 82,
        file: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 23,
        line: 83,
        file: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C55 || CT.C55,
        name: null,
        column: 21,
        line: 80,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 27,
        line: 99,
        file: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 27,
        line: 100,
        file: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 27,
        line: 101,
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
        column: 31,
        line: 98,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 29,
        line: 106,
        file: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 29,
        line: 107,
        file: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C65 || CT.C65,
        name: null,
        column: 34,
        line: 105,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 27,
        line: 104,
        file: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 27,
        line: 105,
        file: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C69 || CT.C69,
        name: null,
        column: 25,
        line: 103,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 23,
        line: 95,
        file: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 23,
        line: 96,
        file: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 23,
        line: 97,
        file: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75, C76 || CT.C76], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C73 || CT.C73,
        name: null,
        column: 21,
        line: 94,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 27,
        line: 117,
        file: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 27,
        line: 118,
        file: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 27,
        line: 119,
        file: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79, C80 || CT.C80, C81 || CT.C81], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C78 || CT.C78,
        name: null,
        column: 31,
        line: 116,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 29,
        line: 126,
        file: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 29,
        line: 127,
        file: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C83 || CT.C83,
        name: null,
        column: 34,
        line: 125,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 27,
        line: 122,
        file: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 27,
        line: 125,
        file: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C87 || CT.C87,
        name: null,
        column: 25,
        line: 121,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 23,
        line: 113,
        file: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 23,
        line: 114,
        file: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 23,
        line: 115,
        file: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92, C93 || CT.C93, C94 || CT.C94], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C91 || CT.C91,
        name: null,
        column: 21,
        line: 112,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 27,
        line: 137,
        file: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 27,
        line: 138,
        file: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 27,
        line: 139,
        file: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C96 || CT.C96,
        name: null,
        column: 31,
        line: 136,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 29,
        line: 146,
        file: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 29,
        line: 147,
        file: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102, C103 || CT.C103], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C101 || CT.C101,
        name: null,
        column: 34,
        line: 145,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 27,
        line: 142,
        file: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 27,
        line: 145,
        file: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C105 || CT.C105,
        name: null,
        column: 25,
        line: 141,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 23,
        line: 133,
        file: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 23,
        line: 134,
        file: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 23,
        line: 135,
        file: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C109 || CT.C109,
        name: null,
        column: 21,
        line: 132,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 27,
        line: 158,
        file: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 27,
        line: 159,
        file: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 27,
        line: 160,
        file: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115, C116 || CT.C116, C117 || CT.C117], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C114 || CT.C114,
        name: null,
        column: 31,
        line: 157,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 29,
        line: 167,
        file: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 29,
        line: 168,
        file: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120, C121 || CT.C121], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C119 || CT.C119,
        name: null,
        column: 34,
        line: 166,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 27,
        line: 163,
        file: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 27,
        line: 166,
        file: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124, C125 || CT.C125], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C123 || CT.C123,
        name: null,
        column: 25,
        line: 162,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 23,
        line: 154,
        file: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 23,
        line: 155,
        file: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 23,
        line: 156,
        file: null
      });
    },
    get C127() {
      return C127 = dart.constList([C128 || CT.C128, C129 || CT.C129, C130 || CT.C130], widget_inspector._Location);
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C127 || CT.C127,
        name: null,
        column: 21,
        line: 153,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 27,
        line: 179,
        file: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 27,
        line: 180,
        file: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 27,
        line: 181,
        file: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133, C134 || CT.C134, C135 || CT.C135], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C132 || CT.C132,
        name: null,
        column: 31,
        line: 178,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 29,
        line: 188,
        file: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 29,
        line: 189,
        file: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138, C139 || CT.C139], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C137 || CT.C137,
        name: null,
        column: 34,
        line: 187,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 27,
        line: 184,
        file: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 27,
        line: 187,
        file: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142, C143 || CT.C143], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C141 || CT.C141,
        name: null,
        column: 25,
        line: 183,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 23,
        line: 175,
        file: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 23,
        line: 176,
        file: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 23,
        line: 177,
        file: null
      });
    },
    get C145() {
      return C145 = dart.constList([C146 || CT.C146, C147 || CT.C147, C148 || CT.C148], widget_inspector._Location);
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C145 || CT.C145,
        name: null,
        column: 21,
        line: 174,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 19,
        line: 63,
        file: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 19,
        line: 64,
        file: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 19,
        line: 65,
        file: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151, C152 || CT.C152, C153 || CT.C153], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C150 || CT.C150,
        name: null,
        column: 24,
        line: 62,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 17,
        line: 61,
        file: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 17,
        line: 62,
        file: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156, C157 || CT.C157], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C155 || CT.C155,
        name: null,
        column: 13,
        line: 60,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 56,
        file: null
      });
    },
    get C159() {
      return C159 = dart.constList([C160 || CT.C160], widget_inspector._Location);
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C159 || CT.C159,
        name: null,
        column: 16,
        line: 55,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 9,
        line: 54,
        file: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 55,
        file: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163, C164 || CT.C164], widget_inspector._Location);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C162 || CT.C162,
        name: null,
        column: 12,
        line: 53,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 11,
        line: 205,
        file: null
      });
    },
    get C166() {
      return C166 = dart.constList([C167 || CT.C167], widget_inspector._Location);
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C166 || CT.C166,
        name: null,
        column: 9,
        line: 204,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 9,
        line: 203,
        file: null
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 204,
        file: null
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 9,
        line: 234,
        file: null
      });
    },
    get C169() {
      return C169 = dart.constList([C170 || CT.C170, C171 || CT.C171, C172 || CT.C172], widget_inspector._Location);
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C169 || CT.C169,
        name: null,
        column: 12,
        line: 202,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 246,
        file: null
      });
    },
    get C174() {
      return C174 = dart.constList([C175 || CT.C175], widget_inspector._Location);
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C174 || CT.C174,
        name: null,
        column: 9,
        line: 245,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 28,
        line: 258,
        file: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "size",
        column: 35,
        line: 258,
        file: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 45,
        line: 258,
        file: null
      });
    },
    get C177() {
      return C177 = dart.constList([C178 || CT.C178, C179 || CT.C179, C180 || CT.C180], widget_inspector._Location);
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C177 || CT.C177,
        name: null,
        column: 17,
        line: 258,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 21,
        line: 262,
        file: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 21,
        line: 263,
        file: null
      });
    },
    get C182() {
      return C182 = dart.constList([C183 || CT.C183, C184 || CT.C184], widget_inspector._Location);
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C182 || CT.C182,
        name: null,
        column: 26,
        line: 261,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 19,
        line: 260,
        file: null
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 261,
        file: null
      });
    },
    get C186() {
      return C186 = dart.constList([C187 || CT.C187, C188 || CT.C188], widget_inspector._Location);
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C186 || CT.C186,
        name: null,
        column: 17,
        line: 259,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 15,
        line: 255,
        file: null
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 256,
        file: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 257,
        file: null
      });
    },
    get C190() {
      return C190 = dart.constList([C191 || CT.C191, C192 || CT.C192, C193 || CT.C193], widget_inspector._Location);
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C190 || CT.C190,
        name: null,
        column: 13,
        line: 254,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 28,
        line: 272,
        file: null
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "size",
        column: 35,
        line: 272,
        file: null
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 45,
        line: 272,
        file: null
      });
    },
    get C195() {
      return C195 = dart.constList([C196 || CT.C196, C197 || CT.C197, C198 || CT.C198], widget_inspector._Location);
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C195 || CT.C195,
        name: null,
        column: 17,
        line: 272,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 21,
        line: 276,
        file: null
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 21,
        line: 277,
        file: null
      });
    },
    get C200() {
      return C200 = dart.constList([C201 || CT.C201, C202 || CT.C202], widget_inspector._Location);
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C200 || CT.C200,
        name: null,
        column: 26,
        line: 275,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 19,
        line: 274,
        file: null
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 275,
        file: null
      });
    },
    get C204() {
      return C204 = dart.constList([C205 || CT.C205, C206 || CT.C206], widget_inspector._Location);
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C204 || CT.C204,
        name: null,
        column: 17,
        line: 273,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 15,
        line: 269,
        file: null
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 270,
        file: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 271,
        file: null
      });
    },
    get C208() {
      return C208 = dart.constList([C209 || CT.C209, C210 || CT.C210, C211 || CT.C211], widget_inspector._Location);
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C208 || CT.C208,
        name: null,
        column: 13,
        line: 268,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 19,
        line: 287,
        file: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 19,
        line: 288,
        file: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 19,
        line: 289,
        file: null
      });
    },
    get C213() {
      return C213 = dart.constList([C214 || CT.C214, C215 || CT.C215, C216 || CT.C216], widget_inspector._Location);
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C213 || CT.C213,
        name: null,
        column: 23,
        line: 286,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 21,
        line: 294,
        file: null
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 21,
        line: 295,
        file: null
      });
    },
    get C218() {
      return C218 = dart.constList([C219 || CT.C219, C220 || CT.C220], widget_inspector._Location);
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C218 || CT.C218,
        name: null,
        column: 26,
        line: 293,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 19,
        line: 292,
        file: null
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 293,
        file: null
      });
    },
    get C222() {
      return C222 = dart.constList([C223 || CT.C223, C224 || CT.C224], widget_inspector._Location);
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C222 || CT.C222,
        name: null,
        column: 17,
        line: 291,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 15,
        line: 283,
        file: null
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 284,
        file: null
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 285,
        file: null
      });
    },
    get C226() {
      return C226 = dart.constList([C227 || CT.C227, C228 || CT.C228, C229 || CT.C229], widget_inspector._Location);
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C226 || CT.C226,
        name: null,
        column: 13,
        line: 282,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 19,
        line: 305,
        file: null
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 19,
        line: 306,
        file: null
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 19,
        line: 307,
        file: null
      });
    },
    get C231() {
      return C231 = dart.constList([C232 || CT.C232, C233 || CT.C233, C234 || CT.C234], widget_inspector._Location);
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C231 || CT.C231,
        name: null,
        column: 23,
        line: 304,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 21,
        line: 314,
        file: null
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 21,
        line: 315,
        file: null
      });
    },
    get C236() {
      return C236 = dart.constList([C237 || CT.C237, C238 || CT.C238], widget_inspector._Location);
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C236 || CT.C236,
        name: null,
        column: 26,
        line: 313,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 19,
        line: 310,
        file: null
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 313,
        file: null
      });
    },
    get C240() {
      return C240 = dart.constList([C241 || CT.C241, C242 || CT.C242], widget_inspector._Location);
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C240 || CT.C240,
        name: null,
        column: 17,
        line: 309,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 15,
        line: 301,
        file: null
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 302,
        file: null
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 303,
        file: null
      });
    },
    get C244() {
      return C244 = dart.constList([C245 || CT.C245, C246 || CT.C246, C247 || CT.C247], widget_inspector._Location);
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C244 || CT.C244,
        name: null,
        column: 13,
        line: 300,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 15,
        line: 325,
        file: null
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 15,
        line: 326,
        file: null
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 15,
        line: 327,
        file: null
      });
    },
    get C249() {
      return C249 = dart.constList([C250 || CT.C250, C251 || CT.C251, C252 || CT.C252], widget_inspector._Location);
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C249 || CT.C249,
        name: null,
        column: 19,
        line: 324,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 17,
        line: 334,
        file: null
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 17,
        line: 335,
        file: null
      });
    },
    get C254() {
      return C254 = dart.constList([C255 || CT.C255, C256 || CT.C256], widget_inspector._Location);
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C254 || CT.C254,
        name: null,
        column: 22,
        line: 333,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 15,
        line: 330,
        file: null
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 333,
        file: null
      });
    },
    get C258() {
      return C258 = dart.constList([C259 || CT.C259, C260 || CT.C260], widget_inspector._Location);
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C258 || CT.C258,
        name: null,
        column: 13,
        line: 329,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 11,
        line: 321,
        file: null
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 11,
        line: 322,
        file: null
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 323,
        file: null
      });
    },
    get C262() {
      return C262 = dart.constList([C263 || CT.C263, C264 || CT.C264, C265 || CT.C265], widget_inspector._Location);
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C262 || CT.C262,
        name: null,
        column: 11,
        line: 320,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C268() {
      return C268 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 19,
        line: 346,
        file: null
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 19,
        line: 347,
        file: null
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 19,
        line: 348,
        file: null
      });
    },
    get C267() {
      return C267 = dart.constList([C268 || CT.C268, C269 || CT.C269, C270 || CT.C270], widget_inspector._Location);
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C267 || CT.C267,
        name: null,
        column: 23,
        line: 345,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 21,
        line: 355,
        file: null
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 21,
        line: 356,
        file: null
      });
    },
    get C272() {
      return C272 = dart.constList([C273 || CT.C273, C274 || CT.C274], widget_inspector._Location);
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C272 || CT.C272,
        name: null,
        column: 26,
        line: 354,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 19,
        line: 351,
        file: null
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 354,
        file: null
      });
    },
    get C276() {
      return C276 = dart.constList([C277 || CT.C277, C278 || CT.C278], widget_inspector._Location);
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C276 || CT.C276,
        name: null,
        column: 17,
        line: 350,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 15,
        line: 342,
        file: null
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 343,
        file: null
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 344,
        file: null
      });
    },
    get C280() {
      return C280 = dart.constList([C281 || CT.C281, C282 || CT.C282, C283 || CT.C283], widget_inspector._Location);
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C280 || CT.C280,
        name: null,
        column: 13,
        line: 341,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 19,
        line: 367,
        file: null
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 17,
        line: 368,
        file: null
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 19,
        line: 369,
        file: null
      });
    },
    get C285() {
      return C285 = dart.constList([C286 || CT.C286, C287 || CT.C287, C288 || CT.C288], widget_inspector._Location);
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C285 || CT.C285,
        name: null,
        column: 23,
        line: 366,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 21,
        line: 376,
        file: null
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 21,
        line: 377,
        file: null
      });
    },
    get C290() {
      return C290 = dart.constList([C291 || CT.C291, C292 || CT.C292], widget_inspector._Location);
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C290 || CT.C290,
        name: null,
        column: 26,
        line: 375,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 19,
        line: 372,
        file: null
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 375,
        file: null
      });
    },
    get C294() {
      return C294 = dart.constList([C295 || CT.C295, C296 || CT.C296], widget_inspector._Location);
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C294 || CT.C294,
        name: null,
        column: 17,
        line: 371,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 15,
        line: 363,
        file: null
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 364,
        file: null
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 365,
        file: null
      });
    },
    get C298() {
      return C298 = dart.constList([C299 || CT.C299, C300 || CT.C300, C301 || CT.C301], widget_inspector._Location);
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C298 || CT.C298,
        name: null,
        column: 13,
        line: 362,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 11,
        line: 251,
        file: null
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 11,
        line: 252,
        file: null
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 253,
        file: null
      });
    },
    get C303() {
      return C303 = dart.constList([C304 || CT.C304, C305 || CT.C305, C306 || CT.C306], widget_inspector._Location);
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C303 || CT.C303,
        name: null,
        column: 20,
        line: 250,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 13,
        line: 249,
        file: null
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 250,
        file: null
      });
    },
    get C308() {
      return C308 = dart.constList([C309 || CT.C309, C310 || CT.C310], widget_inspector._Location);
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C308 || CT.C308,
        name: null,
        column: 9,
        line: 248,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 244,
        file: null
      });
    },
    get C312() {
      return C312 = dart.constList([C313 || CT.C313], widget_inspector._Location);
    },
    get C311() {
      return C311 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C312 || CT.C312,
        name: null,
        column: 16,
        line: 243,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 243,
        file: null
      });
    },
    get C315() {
      return C315 = dart.constList([C316 || CT.C316], widget_inspector._Location);
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C315 || CT.C315,
        name: null,
        column: 12,
        line: 242,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C319() {
      return C319 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 17,
        line: 397,
        file: null
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 17,
        line: 398,
        file: null
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "fit",
        column: 17,
        line: 399,
        file: null
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 17,
        line: 400,
        file: null
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 17,
        line: 403,
        file: null
      });
    },
    get C318() {
      return C318 = dart.constList([C319 || CT.C319, C320 || CT.C320, C321 || CT.C321, C322 || CT.C322, C323 || CT.C323], widget_inspector._Location);
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C318 || CT.C318,
        name: null,
        column: 32,
        line: 396,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 396,
        file: null
      });
    },
    get C325() {
      return C325 = dart.constList([C326 || CT.C326], widget_inspector._Location);
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C325 || CT.C325,
        name: null,
        column: 15,
        line: 395,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 21,
        line: 411,
        file: null
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 21,
        line: 412,
        file: null
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 21,
        line: 416,
        file: null
      });
    },
    get C328() {
      return C328 = dart.constList([C329 || CT.C329, C330 || CT.C330, C331 || CT.C331], widget_inspector._Location);
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C328 || CT.C328,
        name: null,
        column: 32,
        line: 410,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 19,
        line: 409,
        file: null
      });
    },
    get C335() {
      return C335 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 410,
        file: null
      });
    },
    get C333() {
      return C333 = dart.constList([C334 || CT.C334, C335 || CT.C335], widget_inspector._Location);
    },
    get C332() {
      return C332 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C333 || CT.C333,
        name: null,
        column: 15,
        line: 408,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 394,
        file: null
      });
    },
    get C337() {
      return C337 = dart.constList([C338 || CT.C338], widget_inspector._Location);
    },
    get C336() {
      return C336 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C337 || CT.C337,
        name: null,
        column: 18,
        line: 393,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 393,
        file: null
      });
    },
    get C340() {
      return C340 = dart.constList([C341 || CT.C341], widget_inspector._Location);
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C340 || CT.C340,
        name: null,
        column: 9,
        line: 392,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C344() {
      return C344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 9,
        line: 391,
        file: null
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 392,
        file: null
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 9,
        line: 424,
        file: null
      });
    },
    get C343() {
      return C343 = dart.constList([C344 || CT.C344, C345 || CT.C345, C346 || CT.C346], widget_inspector._Location);
    },
    get C342() {
      return C342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C343 || CT.C343,
        name: null,
        column: 12,
        line: 390,
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
  const _contactGridMob = dart.privateName(Contact_page, "_contactGridMob");
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
  const _generateContactPic = dart.privateName(Contact_page, "_generateContactPic");
  let C22;
  let C21;
  let C20;
  let C25;
  let C26;
  let C27;
  let C24;
  let C23;
  let C30;
  let C31;
  let C29;
  let C28;
  let C34;
  let C35;
  let C33;
  let C32;
  let C38;
  let C39;
  let C40;
  let C37;
  let C36;
  let C43;
  let C44;
  let C45;
  let C42;
  let C41;
  let C48;
  let C49;
  let C47;
  let C46;
  let C52;
  let C53;
  let C51;
  let C50;
  let C56;
  let C57;
  let C58;
  let C55;
  let C54;
  let C61;
  let C62;
  let C63;
  let C60;
  let C59;
  const _launchURL = dart.privateName(Contact_page, "_launchURL");
  let C66;
  let C67;
  let C65;
  let C64;
  let C70;
  let C71;
  let C69;
  let C68;
  let C74;
  let C75;
  let C76;
  let C73;
  let C72;
  let C79;
  let C80;
  let C81;
  let C78;
  let C77;
  let C84;
  let C85;
  let C83;
  let C82;
  let C88;
  let C89;
  let C87;
  let C86;
  let C92;
  let C93;
  let C94;
  let C91;
  let C90;
  let C97;
  let C98;
  let C99;
  let C96;
  let C95;
  let C102;
  let C103;
  let C101;
  let C100;
  let C106;
  let C107;
  let C105;
  let C104;
  let C110;
  let C111;
  let C112;
  let C109;
  let C108;
  let C115;
  let C116;
  let C117;
  let C114;
  let C113;
  let C120;
  let C121;
  let C119;
  let C118;
  let C124;
  let C125;
  let C123;
  let C122;
  let C128;
  let C129;
  let C130;
  let C127;
  let C126;
  let C133;
  let C134;
  let C135;
  let C132;
  let C131;
  let C138;
  let C139;
  let C137;
  let C136;
  let C142;
  let C143;
  let C141;
  let C140;
  let C146;
  let C147;
  let C148;
  let C145;
  let C144;
  let C151;
  let C152;
  let C153;
  let C150;
  let C149;
  let C156;
  let C157;
  let C155;
  let C154;
  let C160;
  let C159;
  let C158;
  let C163;
  let C164;
  let C162;
  let C161;
  let C167;
  let C166;
  let C165;
  let C170;
  let C171;
  let C172;
  let C169;
  let C168;
  let C175;
  let C174;
  let C173;
  let C178;
  let C179;
  let C180;
  let C177;
  let C176;
  let C183;
  let C184;
  let C182;
  let C181;
  let C187;
  let C188;
  let C186;
  let C185;
  let C191;
  let C192;
  let C193;
  let C190;
  let C189;
  let C196;
  let C197;
  let C198;
  let C195;
  let C194;
  let C201;
  let C202;
  let C200;
  let C199;
  let C205;
  let C206;
  let C204;
  let C203;
  let C209;
  let C210;
  let C211;
  let C208;
  let C207;
  let C214;
  let C215;
  let C216;
  let C213;
  let C212;
  let C219;
  let C220;
  let C218;
  let C217;
  let C223;
  let C224;
  let C222;
  let C221;
  let C227;
  let C228;
  let C229;
  let C226;
  let C225;
  let C232;
  let C233;
  let C234;
  let C231;
  let C230;
  let C237;
  let C238;
  let C236;
  let C235;
  let C241;
  let C242;
  let C240;
  let C239;
  let C245;
  let C246;
  let C247;
  let C244;
  let C243;
  let C250;
  let C251;
  let C252;
  let C249;
  let C248;
  let C255;
  let C256;
  let C254;
  let C253;
  let C259;
  let C260;
  let C258;
  let C257;
  let C263;
  let C264;
  let C265;
  let C262;
  let C261;
  let C268;
  let C269;
  let C270;
  let C267;
  let C266;
  let C273;
  let C274;
  let C272;
  let C271;
  let C277;
  let C278;
  let C276;
  let C275;
  let C281;
  let C282;
  let C283;
  let C280;
  let C279;
  let C286;
  let C287;
  let C288;
  let C285;
  let C284;
  let C291;
  let C292;
  let C290;
  let C289;
  let C295;
  let C296;
  let C294;
  let C293;
  let C299;
  let C300;
  let C301;
  let C298;
  let C297;
  let C304;
  let C305;
  let C306;
  let C303;
  let C302;
  let C309;
  let C310;
  let C308;
  let C307;
  let C313;
  let C312;
  let C311;
  let C316;
  let C315;
  let C314;
  let C319;
  let C320;
  let C321;
  let C322;
  let C323;
  let C318;
  let C317;
  let C326;
  let C325;
  let C324;
  let C329;
  let C330;
  let C331;
  let C328;
  let C327;
  let C334;
  let C335;
  let C333;
  let C332;
  let C338;
  let C337;
  let C336;
  let C341;
  let C340;
  let C339;
  let C344;
  let C345;
  let C346;
  let C343;
  let C342;
  Contact_page.ContactPageState = class ContactPageState extends framework.State$(Contact_page.ContactPage) {
    build(context) {
      return new BaseWidget.BaseWidget.new({builder: dart.fn((context, sizingInformation) => new material.Material.new({child: new container.Container.new({key: this.widget.projectKey, child: framework.Widget._check(this[_getProjectsContent](sizingInformation)), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), BuildContextAndSizingInformationToMaterial()), $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
    [_getProjectsContent](sizingInformation) {
      if (dart.equals(sizingInformation.deviceType, device_screen_size.DeviceScreenType.Mobile)) {
        return this[_getContentForProjDesk](sizingInformation);
      } else {
        return this[_getContentForProjDesk](sizingInformation);
      }
    }
    [_getContentForProjDesk](sizingInformation) {
      return new container.Container.new({alignment: alignment.Alignment.center, margin: new edge_insets.EdgeInsets.only({top: 60.0}), width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.86, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([this[_buildAboutMe](this.context, sizingInformation), dart.equals(sizingInformation.deviceType, device_screen_size.DeviceScreenType.Mobile) ? this[_contactGridMob](this.context, sizingInformation) : this[_contactGrid](this.context, sizingInformation)]), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
    }
    [_contactGridMob](context, sizingInformation) {
      return new container.Container.new({height: media_query.MediaQuery.of(context).size.height, child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({child: this[_generateContactPic](sizingInformation), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), new container.Container.new({height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.4, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.email, {size: 20.0, color: new ui.Color.new(4283477952), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                        }, VoidToNull()), child: new text.Text.new("  shashankkakroo@gmail.com", {style: new text_style.TextStyle.new({fontSize: 14.0}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32})]), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.phone, {size: 20.0, color: new ui.Color.new(4283477952), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                        }, VoidToNull()), child: new text.Text.new("  +971564699985", {style: new text_style.TextStyle.new({fontSize: 14.0}), $creationLocationd_0dea112b090073317d4: C46 || CT.C46}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50})]), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new image.Image.network("https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/unnamed.png?alt=media&token=98be4c01-904e-49a8-8a17-fa172d90e697", {width: 23.0, height: 23.0, $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                          this[_launchURL]("https://join.skype.com/invite/myOA80TdcorG");
                        }, VoidToNull()), child: new text.Text.new("  shashank.kakroo", {style: new text_style.TextStyle.new({fontSize: 14.0}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68})]), $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new image.Image.network("https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/whatsapp.png?alt=media&token=bbf5ff50-8233-47d4-a2cc-c38692dd42e7", {width: 23.0, height: 23.0, $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                          this[_launchURL]("https://wa.me/971564699985");
                        }, VoidToNull()), child: new text.Text.new("  Whatsapp : +971564699985", {style: new text_style.TextStyle.new({fontSize: 14.0}), $creationLocationd_0dea112b090073317d4: C82 || CT.C82}), $creationLocationd_0dea112b090073317d4: C86 || CT.C86})]), $creationLocationd_0dea112b090073317d4: C90 || CT.C90}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new image.Image.network("https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/linkdn.png?alt=media&token=bd98e80e-673b-4dfe-95b3-d66ec009e772", {width: 23.0, height: 23.0, $creationLocationd_0dea112b090073317d4: C95 || CT.C95}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                          this[_launchURL]("https://www.linkedin.com/in/shashank-kakroo");
                        }, VoidToNull()), child: new text.Text.new("  https://www.linkedin.com/in/shashank-kakroo", {style: new text_style.TextStyle.new({fontSize: 14.0}), $creationLocationd_0dea112b090073317d4: C100 || CT.C100}), $creationLocationd_0dea112b090073317d4: C104 || CT.C104})]), $creationLocationd_0dea112b090073317d4: C108 || CT.C108}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new image.Image.network("https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/facebook.png?alt=media&token=998cf733-be63-4573-a450-b900d363e669", {width: 20.0, height: 20.0, $creationLocationd_0dea112b090073317d4: C113 || CT.C113}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                          this[_launchURL]("https://www.facebook.com/shashank.kakroo");
                        }, VoidToNull()), child: new text.Text.new("  https://www.facebook.com/shashank.kakroo", {style: new text_style.TextStyle.new({fontSize: 14.0}), $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), $creationLocationd_0dea112b090073317d4: C122 || CT.C122})]), $creationLocationd_0dea112b090073317d4: C126 || CT.C126}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new image.Image.network("https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/insta.jpeg?alt=media&token=5d7516fb-5159-4324-8c90-c0cf2ceb77fd", {width: 35.0, height: 35.0, $creationLocationd_0dea112b090073317d4: C131 || CT.C131}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                          this[_launchURL]("https://www.instagram.com/shashankkakroo");
                        }, VoidToNull()), child: new text.Text.new("  @shashankkakroo", {style: new text_style.TextStyle.new({fontSize: 14.0}), $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), $creationLocationd_0dea112b090073317d4: C140 || CT.C140})]), $creationLocationd_0dea112b090073317d4: C144 || CT.C144})]), $creationLocationd_0dea112b090073317d4: C149 || CT.C149}), $creationLocationd_0dea112b090073317d4: C154 || CT.C154})]), $creationLocationd_0dea112b090073317d4: C158 || CT.C158}), $creationLocationd_0dea112b090073317d4: C161 || CT.C161});
    }
    [_buildAboutMe](context, sizingInformation) {
      return new FadeIn.FadeIn.new(2.66, new basic.RichText.new({text: new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "Contact ", style: new text_style.TextStyle.new({fontFamily: "Lato", color: colors.Colors.black, fontWeight: ui.FontWeight.w400, fontSize: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? 36.0 : 50.0})}), new text_span.TextSpan.new({text: "Me ", style: new text_style.TextStyle.new({color: new ui.Color.new(4283477952), fontFamily: "Lato", fontWeight: ui.FontWeight.w900, fontSize: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? 36.0 : 50.0})})])}), $creationLocationd_0dea112b090073317d4: C165 || CT.C165}), "left", {$creationLocationd_0dea112b090073317d4: C168 || CT.C168});
    }
    [_launchURL](url) {
      return async.async(dart.dynamic, function* _launchURL() {
        html.document[$window][$location][$href] = core.String._check(url);
      });
    }
    [_contactGrid](context, sizingInformation) {
      return new container.Container.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({child: this[_generateContactPic](sizingInformation), $creationLocationd_0dea112b090073317d4: C173 || CT.C173}), new container.Container.new({height: dart.notNull(media_query.MediaQuery.of(context).size.width) * 0.2, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.email, {size: 30.0, color: new ui.Color.new(4283477952), $creationLocationd_0dea112b090073317d4: C176 || CT.C176}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                        }, VoidToNull()), child: new text.Text.new("  shashankkakroo@gmail.com", {style: new text_style.TextStyle.new({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C181 || CT.C181}), $creationLocationd_0dea112b090073317d4: C185 || CT.C185})]), $creationLocationd_0dea112b090073317d4: C189 || CT.C189}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.phone, {size: 30.0, color: new ui.Color.new(4283477952), $creationLocationd_0dea112b090073317d4: C194 || CT.C194}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                        }, VoidToNull()), child: new text.Text.new("  +971564699985", {style: new text_style.TextStyle.new({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C199 || CT.C199}), $creationLocationd_0dea112b090073317d4: C203 || CT.C203})]), $creationLocationd_0dea112b090073317d4: C207 || CT.C207}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new image.Image.network("https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/unnamed.png?alt=media&token=98be4c01-904e-49a8-8a17-fa172d90e697", {width: 33.0, height: 33.0, $creationLocationd_0dea112b090073317d4: C212 || CT.C212}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                          this[_launchURL]("https://join.skype.com/invite/myOA80TdcorG");
                        }, VoidToNull()), child: new text.Text.new("  shashank.kakroo", {style: new text_style.TextStyle.new({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C217 || CT.C217}), $creationLocationd_0dea112b090073317d4: C221 || CT.C221})]), $creationLocationd_0dea112b090073317d4: C225 || CT.C225}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new image.Image.network("https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/whatsapp.png?alt=media&token=bbf5ff50-8233-47d4-a2cc-c38692dd42e7", {width: 33.0, height: 33.0, $creationLocationd_0dea112b090073317d4: C230 || CT.C230}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                          this[_launchURL]("https://wa.me/971564699985");
                        }, VoidToNull()), child: new text.Text.new("  Whatsapp : +971564699985", {style: new text_style.TextStyle.new({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C235 || CT.C235}), $creationLocationd_0dea112b090073317d4: C239 || CT.C239})]), $creationLocationd_0dea112b090073317d4: C243 || CT.C243}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new image.Image.network("https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/linkdn.png?alt=media&token=bd98e80e-673b-4dfe-95b3-d66ec009e772", {width: 33.0, height: 33.0, $creationLocationd_0dea112b090073317d4: C248 || CT.C248}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                          this[_launchURL]("https://www.linkedin.com/in/shashank-kakroo");
                        }, VoidToNull()), child: new text.Text.new("  https://www.linkedin.com/in/shashank-kakroo", {style: new text_style.TextStyle.new({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C253 || CT.C253}), $creationLocationd_0dea112b090073317d4: C257 || CT.C257})]), $creationLocationd_0dea112b090073317d4: C261 || CT.C261}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new image.Image.network("https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/facebook.png?alt=media&token=998cf733-be63-4573-a450-b900d363e669", {width: 30.0, height: 30.0, $creationLocationd_0dea112b090073317d4: C266 || CT.C266}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                          this[_launchURL]("https://www.facebook.com/shashank.kakroo");
                        }, VoidToNull()), child: new text.Text.new("  https://www.facebook.com/shashank.kakroo", {style: new text_style.TextStyle.new({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C271 || CT.C271}), $creationLocationd_0dea112b090073317d4: C275 || CT.C275})]), $creationLocationd_0dea112b090073317d4: C279 || CT.C279}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new image.Image.network("https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/insta.jpeg?alt=media&token=5d7516fb-5159-4324-8c90-c0cf2ceb77fd", {width: 35.0, height: 35.0, $creationLocationd_0dea112b090073317d4: C284 || CT.C284}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                          this[_launchURL]("https://www.instagram.com/shashankkakroo");
                        }, VoidToNull()), child: new text.Text.new("  @shashankkakroo", {style: new text_style.TextStyle.new({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C289 || CT.C289}), $creationLocationd_0dea112b090073317d4: C293 || CT.C293})]), $creationLocationd_0dea112b090073317d4: C297 || CT.C297})]), $creationLocationd_0dea112b090073317d4: C302 || CT.C302}), $creationLocationd_0dea112b090073317d4: C307 || CT.C307})]), $creationLocationd_0dea112b090073317d4: C311 || CT.C311}), $creationLocationd_0dea112b090073317d4: C314 || CT.C314});
    }
    [_generateContactPic](sizingInformation) {
      return new FadeIn.FadeIn.new(2.66, new container.Container.new({child: new basic.Stack.new({children: JSArrayOfWidget().of([new container.Container.new({child: new image.Image.network("https://i.pinimg.com/originals/8b/a8/b8/8ba8b89f095d837cd54c7eb5ef31b99d.png", {color: colors.Colors.transparent, fit: box_fit.BoxFit.fill, width: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.75 : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.42, height: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.75 : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.42, $creationLocationd_0dea112b090073317d4: C317 || CT.C317}), $creationLocationd_0dea112b090073317d4: C324 || CT.C324}), new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 40.0, left: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? 80.0 : 100.0}), child: new image.Image.network("https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/IMG-20181124-WA0006-removebg-preview.png?alt=media&token=375420f9-d054-4f29-97c1-c8c559bfb680", {width: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.6 : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.42, height: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.6 : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.42, $creationLocationd_0dea112b090073317d4: C327 || CT.C327}), $creationLocationd_0dea112b090073317d4: C332 || CT.C332})]), $creationLocationd_0dea112b090073317d4: C336 || CT.C336}), $creationLocationd_0dea112b090073317d4: C339 || CT.C339}), "right", {$creationLocationd_0dea112b090073317d4: C342 || CT.C342});
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
    [_contactGridMob]: dart.fnType(framework.Widget, [framework.BuildContext, dart.dynamic]),
    [_buildAboutMe]: dart.fnType(framework.Widget, [framework.BuildContext, dart.dynamic]),
    [_launchURL]: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_contactGrid]: dart.fnType(framework.Widget, [framework.BuildContext, dart.dynamic]),
    [_generateContactPic]: dart.fnType(framework.Widget, [dart.dynamic])
  }));
  dart.setLibraryUri(Contact_page.ContactPageState, "package:kakro/ui/Contact_page.dart");
  dart.trackLibraries("packages/kakro/ui/Contact_page", {
    "package:kakro/ui/Contact_page.dart": Contact_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Contact_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASM;;;;;;;AAI8B;IAAkB;;2CAFnC;;;AAAjB;;EAA4B;;;;;;;;;;;;;MAHR,kCAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAUH;AACxB,YAAO,yCAAoB,SAAC,SAAS,sBAC5B,kCACI,kCACJ,AAAO,uDACL,0BAAoB,iBAAiB;IAGlD;0BAEsC;AACpC,UAAiC,YAA7B,AAAkB,iBAAD,aAAgC;AAClD,cAAO,8BAAuB,iBAAiB;;AAEhD,cAAO,8BAAuB,iBAAiB;;IAEnD;6BAEyC;AACvC,YAAO,yCACkB,oCACF,sCAAU,eACY,aAAvB,AAAY,AAAK,0BAAd,4BAAsB,aACpC,0CACkC,0CACrB,sBAChB,oBAAc,cAAS,iBAAiB,GACd,YAA7B,AAAkB,iBAAD,aAAgC,8CAAW,sBAAgB,cAAS,iBAAiB,IAAG,mBAAa,cAAS,iBAAiB;IAGvJ;sBAGoC,SAAS;AAC3C,YAAO,sCACiB,AAAY,AAAK,0BAAd,OAAO,sBACvB,gCACa,sBAChB,oCACS,0BAAoB,iBAAiB,4DAE9C,qCACgD,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,YACvC,yCACgC,yDACE,yCACrB,sBAChB,sCACuC,kDACE,0CACrB,sBAChB,kBAAW,0BAAa,aAAW,iBAAM,sEACzC,iDACS;iDACA,kBACL,sCACO,wCAAoB,qLAKnC,sCACuC,kDACE,0CACrB,sBAChB,kBAAW,0BAAa,aAAW,iBAAM,sEACzC,iDACS;iDACA,kBACL,2BACO,wCAAoB,qLAKnC,sCACuC,kDACE,0CACrB,sBACV,wBACJ,sJACO,cACC,+DAEV,iDACS;0BAAK,iBAAW;iDAChB,kBACL,6BACO,wCAAoB,qLAKnC,sCACuC,kDACE,0CACrB,sBACV,wBACJ,uJACO,cACC,+DAEV,iDACS;0BACL,iBAAW;iDAEN,kBACL,sCACO,wCAAoB,qLAKnC,sCACuC,kDACE,0CACrB,sBACV,wBACJ,qJACO,cACC,+DAEV,iDACS;0BACL,iBAAW;iDAEN,kBACL,yDACO,wCAAoB,2LAMnC,sCACuC,kDACE,0CACrB,sBACV,wBACJ,uJACO,cACC,iEAEV,iDACS;0BACL,iBAAW;iDAEN,kBACL,sDACO,wCAAoB,2LAMnC,sCACuC,kDACE,0CACrB,sBACV,wBACJ,qJACO,cACC,iEAEV,iDACS;0BACL,iBAAW;iDAEN,kBACL,6BACO,wCAAoB;IAUrD;oBAEkC,SAAS;AACzC,YAAO,uBACH,MACA,8BACQ,sCACgB,wBAClB,kCACQ,mBACC,0CACO,eACE,iCACS,8BAEU,YAAX,WAAlB,iBAAiB,iBAAgC,8CAC3C,OACA,UAGd,kCACQ,cACC,qCACE,iBAAM,yBACD,oBACW,8BAEU,YAAX,WAAlB,iBAAiB,iBAAgC,8CAC3C,OACA,yEAMpB;IACN;iBAEW;AAAD;QACH,AAAS,AAAO,AAAS,2CAAA,mBAAO,GAAG;MAC1C;;mBAEiC,SAAS;AACxC,YAAO,qCACI,6BACS,sBAChB,oCACS,0BAAoB,iBAAiB,8DAE9C,qCAC+C,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe,YACtC,yCAC4B,yDACE,yCACrB,sBAChB,sCACuC,kDACE,yCACrB,sBAChB,kBAAW,0BAAa,aAAW,iBAAM,wEACzC,iDACS;iDACA,kBACL,sCACO,wCAAoB,2LAKnC,sCACuC,kDACE,yCACrB,sBAChB,kBAAW,0BAAa,aAAW,iBAAM,wEACzC,iDACS;iDACA,kBACL,2BACO,wCAAoB,2LAKnC,sCACuC,kDACE,yCACrB,sBACV,wBACJ,sJACO,cACC,iEAEV,iDACS;0BAAK,iBAAW;iDAChB,kBACL,6BACO,wCAAoB,2LAKnC,sCACuC,kDACE,yCACrB,sBACV,wBACJ,uJACO,cACC,iEAEV,iDACS;0BACL,iBAAW;iDAEN,kBACL,sCACO,wCAAoB,2LAKrC,sCACqC,kDACE,yCACrB,sBACV,wBACJ,qJACO,cACC,iEAEV,iDACS;0BACL,iBAAW;iDAEN,kBACL,yDACO,wCAAoB,2LAM/B,sCACuC,kDACE,yCACrB,sBACV,wBACJ,uJACO,cACC,iEAEV,iDACS;0BACL,iBAAW;iDAEN,kBACL,sDACO,wCAAoB,2LAMnC,sCACuC,kDACE,yCACrB,sBACV,wBACJ,qJACK,cACG,iEAEV,iDACS;0BACL,iBAAW;iDAEN,kBACL,6BACO,wCAAoB;IAU7C;0BAE2B;AACzB,YAAO,uBACH,MACA,oCACS,+BACa,sBAChB,oCACiB,wBACf,wFACc,gCACF,4BACyB,YAAX,WAAlB,iBAAiB,iBAAgC,8CACjB,aAAvB,AAAY,AAAK,0BAAd,4BAAsB,OACF,aAAvB,AAAY,AAAK,0BAAd,4BAAsB,cAER,YAAX,WAAlB,iBAAiB,iBAAgC,8CACV,aAAvB,AAAY,AAAK,0BAAd,4BAAsB,OACF,aAAvB,AAAY,AAAK,0BAAd,4BAAsB,4HAEhD,qCACuB,sCAAU,YAAwC,YAAX,WAAlB,iBAAiB,iBAAgC,8CAAU,OAAK,gBAC3F,wBACX,mLACqC,YAAX,WAAlB,iBAAiB,iBACA,8CACe,aAAvB,AAAY,AAAK,0BAAd,4BAAsB,MACF,aAAvB,AAAY,AAAK,0BAAd,4BAAsB,cACJ,YAAX,WAAlB,iBAAiB,iBACD,8CACe,aAAvB,AAAY,AAAK,0BAAd,4BAAsB,MACF,aAAvB,AAAY,AAAK,0BAAd,4BAAsB,oPAKtD;IACN;;;;;EACF","file":"Contact_page.ddc.js"}');
  // Exports:
  return {
    ui__Contact_page: Contact_page
  };
});

//# sourceMappingURL=Contact_page.ddc.js.map
