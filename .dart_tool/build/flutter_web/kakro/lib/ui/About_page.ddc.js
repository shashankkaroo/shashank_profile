define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/widgets/actions', 'packages/kakro/ui/sizing_info', 'packages/flutter/src/animation/animation', 'packages/kakro/enums/device_screen_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/kakro/ui/FadeIn', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__widgets__actions, packages__kakro__ui__sizing_info, packages__flutter__src__animation__animation, packages__kakro__enums__device_screen_size, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__kakro__ui__FadeIn, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const text$ = packages__flutter__src__widgets__actions.src__widgets__text;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const sizing_info = packages__kakro__ui__sizing_info.ui__sizing_info;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const device_screen_size = packages__kakro__enums__device_screen_size.enums__device_screen_size;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const _network_image_web = packages__flutter__src__painting___network_image_web.src__painting___network_image_web;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const FadeIn = packages__kakro__ui__FadeIn.ui__FadeIn;
  const circle_avatar = packages__flutter__material.src__material__circle_avatar;
  const colors = packages__flutter__material.src__material__colors;
  const chip = packages__flutter__material.src__material__chip;
  const About_page = Object.create(dart.library);
  const $add = dartx.add;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let JSArrayOfMapOfString$String = () => (JSArrayOfMapOfString$String = dart.constFn(_interceptors.JSArray$(MapOfString$String())))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))();
  let StringToPadding = () => (StringToPadding = dart.constFn(dart.fnType(basic.Padding, [core.String])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 9,
        line: 88,
        file: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 9,
        line: 89,
        file: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 90,
        file: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 12,
        line: 87,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 23,
        line: 117,
        file: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C6 || CT.C6,
        name: null,
        column: 21,
        line: 116,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 25,
        line: 120,
        file: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 25,
        line: 121,
        file: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C9 || CT.C9,
        name: null,
        column: 21,
        line: 119,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 23,
        line: 123,
        file: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 23,
        line: 124,
        file: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C13 || CT.C13,
        name: null,
        column: 21,
        line: 122,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 29,
        line: 131,
        file: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 29,
        line: 132,
        file: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C17 || CT.C17,
        name: null,
        column: 34,
        line: 130,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 27,
        line: 129,
        file: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 27,
        line: 130,
        file: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C21 || CT.C21,
        name: null,
        column: 25,
        line: 128,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 25,
        line: 127,
        file: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 25,
        line: 128,
        file: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 25,
        line: 138,
        file: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C25 || CT.C25,
        name: null,
        column: 21,
        line: 126,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 19,
        line: 114,
        file: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 19,
        line: 115,
        file: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C30 || CT.C30,
        name: null,
        column: 24,
        line: 113,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 17,
        line: 111,
        file: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 17,
        line: 112,
        file: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 17,
        line: 113,
        file: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C34 || CT.C34,
        name: null,
        column: 13,
        line: 110,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 11,
        line: 106,
        file: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 11,
        line: 107,
        file: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 108,
        file: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C39 || CT.C39,
        name: null,
        column: 16,
        line: 105,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 9,
        line: 104,
        file: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 105,
        file: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C44 || CT.C44,
        name: null,
        column: 12,
        line: 103,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 23,
        line: 159,
        file: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C48 || CT.C48,
        name: null,
        column: 21,
        line: 158,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 25,
        line: 162,
        file: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 25,
        line: 163,
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
        column: 21,
        line: 161,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 23,
        line: 165,
        file: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 23,
        line: 166,
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
        column: 21,
        line: 164,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 29,
        line: 173,
        file: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 29,
        line: 174,
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
        column: 34,
        line: 172,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 27,
        line: 171,
        file: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 27,
        line: 172,
        file: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C63 || CT.C63,
        name: null,
        column: 25,
        line: 170,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 25,
        line: 169,
        file: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 25,
        line: 170,
        file: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 25,
        line: 180,
        file: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C67 || CT.C67,
        name: null,
        column: 21,
        line: 168,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 19,
        line: 156,
        file: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 19,
        line: 157,
        file: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C72 || CT.C72,
        name: null,
        column: 24,
        line: 155,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 17,
        line: 154,
        file: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 17,
        line: 155,
        file: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C76 || CT.C76,
        name: null,
        column: 13,
        line: 153,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 11,
        line: 150,
        file: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 11,
        line: 151,
        file: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 152,
        file: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C80 || CT.C80,
        name: null,
        column: 16,
        line: 149,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 9,
        line: 148,
        file: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 149,
        file: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C85 || CT.C85,
        name: null,
        column: 13,
        line: 147,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "radius",
        column: 21,
        line: 198,
        file: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundColor",
        column: 21,
        line: 199,
        file: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundImage",
        column: 21,
        line: 200,
        file: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91, C92 || CT.C92], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C89 || CT.C89,
        name: null,
        column: 26,
        line: 197,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "turns",
        column: 19,
        line: 196,
        file: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 197,
        file: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C94 || CT.C94,
        name: null,
        column: 15,
        line: 195,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 21,
        line: 206,
        file: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 21,
        line: 207,
        file: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 21,
        line: 208,
        file: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C98 || CT.C98,
        name: null,
        column: 32,
        line: 205,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 19,
        line: 204,
        file: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 205,
        file: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C103 || CT.C103,
        name: null,
        column: 15,
        line: 203,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 194,
        file: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C107 || CT.C107,
        name: null,
        column: 18,
        line: 193,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 193,
        file: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C110 || CT.C110,
        name: null,
        column: 9,
        line: 192,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 9,
        line: 191,
        file: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 192,
        file: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 9,
        line: 213,
        file: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114, C115 || CT.C115, C116 || CT.C116], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C113 || CT.C113,
        name: null,
        column: 12,
        line: 190,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 11,
        line: 220,
        file: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C118 || CT.C118,
        name: null,
        column: 9,
        line: 219,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 9,
        line: 218,
        file: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 219,
        file: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 9,
        line: 249,
        file: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122, C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C121 || CT.C121,
        name: null,
        column: 12,
        line: 217,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 13,
        line: 256,
        file: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textAlign",
        column: 13,
        line: 257,
        file: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 13,
        line: 260,
        file: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128, C129 || CT.C129], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C126 || CT.C126,
        name: null,
        column: 9,
        line: 255,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 9,
        line: 254,
        file: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 255,
        file: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 9,
        line: 261,
        file: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132, C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C131 || CT.C131,
        name: null,
        column: 12,
        line: 253,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 13,
        line: 268,
        file: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textAlign",
        column: 13,
        line: 269,
        file: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 13,
        line: 272,
        file: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137, C138 || CT.C138, C139 || CT.C139], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C136 || CT.C136,
        name: null,
        column: 9,
        line: 267,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 9,
        line: 266,
        file: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 267,
        file: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 9,
        line: 274,
        file: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142, C143 || CT.C143, C144 || CT.C144], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C141 || CT.C141,
        name: null,
        column: 12,
        line: 265,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 11,
        line: 283,
        file: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 284,
        file: null
      });
    },
    get C146() {
      return C146 = dart.constList([C147 || CT.C147, C148 || CT.C148], widget_inspector._Location);
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C146 || CT.C146,
        name: null,
        column: 14,
        line: 282,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 7,
        line: 279,
        file: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 282,
        file: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151, C152 || CT.C152], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C150 || CT.C150,
        name: null,
        column: 12,
        line: 278,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 14,
        line: 291,
        file: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 28,
        line: 291,
        file: null
      });
    },
    get C154() {
      return C154 = dart.constList([C155 || CT.C155, C156 || CT.C156], widget_inspector._Location);
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C154 || CT.C154,
        name: null,
        column: 9,
        line: 291,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 26,
        line: 292,
        file: null
      });
    },
    get C158() {
      return C158 = dart.constList([C159 || CT.C159], widget_inspector._Location);
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C158 || CT.C158,
        name: null,
        column: 18,
        line: 292,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 40,
        line: 296,
        file: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 11,
        line: 297,
        file: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162, C163 || CT.C163], widget_inspector._Location);
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C161 || CT.C161,
        name: null,
        column: 22,
        line: 296,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 42,
        line: 298,
        file: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 11,
        line: 299,
        file: null
      });
    },
    get C165() {
      return C165 = dart.constList([C166 || CT.C166, C167 || CT.C167], widget_inspector._Location);
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C165 || CT.C165,
        name: null,
        column: 24,
        line: 298,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 39,
        line: 300,
        file: null
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 11,
        line: 301,
        file: null
      });
    },
    get C169() {
      return C169 = dart.constList([C170 || CT.C170, C171 || CT.C171], widget_inspector._Location);
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C169 || CT.C169,
        name: null,
        column: 21,
        line: 300,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 28,
        line: 303,
        file: null
      });
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174], widget_inspector._Location);
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C173 || CT.C173,
        name: null,
        column: 20,
        line: 303,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 15,
        line: 315,
        file: null
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 316,
        file: null
      });
    },
    get C176() {
      return C176 = dart.constList([C177 || CT.C177, C178 || CT.C178], widget_inspector._Location);
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C176 || CT.C176,
        name: null,
        column: 25,
        line: 314,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 18,
        line: 331,
        file: null
      });
    },
    get C180() {
      return C180 = dart.constList([C181 || CT.C181], widget_inspector._Location);
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C180 || CT.C180,
        name: null,
        column: 13,
        line: 331,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 11,
        line: 328,
        file: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 329,
        file: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184, C185 || CT.C185], widget_inspector._Location);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C183 || CT.C183,
        name: null,
        column: 16,
        line: 327,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 9,
        line: 321,
        file: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 9,
        line: 324,
        file: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 327,
        file: null
      });
    },
    get C187() {
      return C187 = dart.constList([C188 || CT.C188, C189 || CT.C189, C190 || CT.C190], widget_inspector._Location);
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C187 || CT.C187,
        name: null,
        column: 12,
        line: 320,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 17,
        line: 337,
        file: null
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 9,
        line: 338,
        file: null
      });
    },
    get C192() {
      return C192 = dart.constList([C193 || CT.C193, C194 || CT.C194], widget_inspector._Location);
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C192 || CT.C192,
        name: null,
        column: 12,
        line: 337,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 9,
        line: 344,
        file: null
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 9,
        line: 345,
        file: null
      });
    },
    get C196() {
      return C196 = dart.constList([C197 || CT.C197, C198 || CT.C198], widget_inspector._Location);
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C196 || CT.C196,
        name: null,
        column: 14,
        line: 343,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "label",
        column: 7,
        line: 343,
        file: null
      });
    },
    get C200() {
      return C200 = dart.constList([C201 || CT.C201], widget_inspector._Location);
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C200 || CT.C200,
        name: null,
        column: 12,
        line: 342,
        file: "org-dartlang-app:///packages/kakro/ui/About_page.dart"
      });
    }
  });
  About_page.AboutMe = class AboutMe extends framework.StatefulWidget {
    get sizingInformation() {
      return this[sizingInformation$];
    }
    set sizingInformation(value) {
      this[sizingInformation$] = value;
    }
    get aboutKey() {
      return this[aboutKey$];
    }
    set aboutKey(value) {
      this[aboutKey$] = value;
    }
    createState() {
      return new About_page.AboutTabState.new(this.sizingInformation);
    }
  };
  (About_page.AboutMe.new = function(sizingInformation, aboutKey, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[sizingInformation$] = null;
    this[aboutKey$] = null;
    About_page.AboutMe.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    this.sizingInformation = sizingInformation;
    this.aboutKey = key.Key._check(aboutKey);
  }).prototype = About_page.AboutMe.prototype;
  dart.addTypeTests(About_page.AboutMe);
  const sizingInformation$ = Symbol("AboutMe.sizingInformation");
  const aboutKey$ = Symbol("AboutMe.aboutKey");
  dart.setMethodSignature(About_page.AboutMe, () => ({
    __proto__: dart.getMethods(About_page.AboutMe.__proto__),
    createState: dart.fnType(About_page.AboutTabState, [])
  }));
  dart.setLibraryUri(About_page.AboutMe, "package:kakro/ui/About_page.dart");
  dart.setFieldSignature(About_page.AboutMe, () => ({
    __proto__: dart.getFields(About_page.AboutMe.__proto__),
    sizingInformation: dart.fieldType(sizing_info.SizingInformation),
    aboutKey: dart.fieldType(key.Key)
  }));
  const _getContentForAboutMe = dart.privateName(About_page, "_getContentForAboutMe");
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  const _buildContentForAboutMeDesk = dart.privateName(About_page, "_buildContentForAboutMeDesk");
  const _buildContentForAboutMeMobile = dart.privateName(About_page, "_buildContentForAboutMeMobile");
  const _generateProfilePic = dart.privateName(About_page, "_generateProfilePic");
  const _buildAboutMe = dart.privateName(About_page, "_buildAboutMe");
  let C7;
  let C6;
  let C5;
  const _buildSubHeading = dart.privateName(About_page, "_buildSubHeading");
  let C10;
  let C11;
  let C9;
  let C8;
  const _buildIntro = dart.privateName(About_page, "_buildIntro");
  let C14;
  let C15;
  let C13;
  let C12;
  const _createExperience = dart.privateName(About_page, "_createExperience");
  const _buildSkills = dart.privateName(About_page, "_buildSkills");
  let C18;
  let C19;
  let C17;
  let C16;
  let C22;
  let C23;
  let C21;
  let C20;
  let C26;
  let C27;
  let C28;
  let C25;
  let C24;
  let C31;
  let C32;
  let C30;
  let C29;
  let C35;
  let C36;
  let C37;
  let C34;
  let C33;
  let C40;
  let C41;
  let C42;
  let C39;
  let C38;
  let C45;
  let C46;
  let C44;
  let C43;
  let C49;
  let C48;
  let C47;
  let C52;
  let C53;
  let C51;
  let C50;
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
  let C63;
  let C62;
  let C68;
  let C69;
  let C70;
  let C67;
  let C66;
  let C73;
  let C74;
  let C72;
  let C71;
  let C77;
  let C78;
  let C76;
  let C75;
  let C81;
  let C82;
  let C83;
  let C80;
  let C79;
  let C86;
  let C87;
  let C85;
  let C84;
  let C90;
  let C91;
  let C92;
  let C89;
  let C88;
  let C95;
  let C96;
  let C94;
  let C93;
  let C99;
  let C100;
  let C101;
  let C98;
  let C97;
  let C104;
  let C105;
  let C103;
  let C102;
  let C108;
  let C107;
  let C106;
  let C111;
  let C110;
  let C109;
  let C114;
  let C115;
  let C116;
  let C113;
  let C112;
  let C119;
  let C118;
  let C117;
  let C122;
  let C123;
  let C124;
  let C121;
  let C120;
  let C127;
  let C128;
  let C129;
  let C126;
  let C125;
  let C132;
  let C133;
  let C134;
  let C131;
  let C130;
  let C137;
  let C138;
  let C139;
  let C136;
  let C135;
  let C142;
  let C143;
  let C144;
  let C141;
  let C140;
  const _getExperienceList = dart.privateName(About_page, "_getExperienceList");
  let C147;
  let C148;
  let C146;
  let C145;
  let C151;
  let C152;
  let C150;
  let C149;
  let C155;
  let C156;
  let C154;
  let C153;
  let C159;
  let C158;
  let C157;
  let C162;
  let C163;
  let C161;
  let C160;
  let C166;
  let C167;
  let C165;
  let C164;
  let C170;
  let C171;
  let C169;
  let C168;
  let C174;
  let C173;
  let C172;
  const _buildSkillChip = dart.privateName(About_page, "_buildSkillChip");
  let C177;
  let C178;
  let C176;
  let C175;
  const _buildSkillsContainerHeading = dart.privateName(About_page, "_buildSkillsContainerHeading");
  let C181;
  let C180;
  let C179;
  let C184;
  let C185;
  let C183;
  let C182;
  let C188;
  let C189;
  let C190;
  let C187;
  let C186;
  let C193;
  let C194;
  let C192;
  let C191;
  let C197;
  let C198;
  let C196;
  let C195;
  let C201;
  let C200;
  let C199;
  const State_SingleTickerProviderStateMixin$ = class State_SingleTickerProviderStateMixin extends framework.State$(About_page.AboutMe) {};
  (State_SingleTickerProviderStateMixin$.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(About_page.AboutMe)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$, ticker_provider.SingleTickerProviderStateMixin$(About_page.AboutMe));
  About_page.AboutTabState = class AboutTabState extends State_SingleTickerProviderStateMixin$ {
    get sizingInformation() {
      return this[sizingInformation$0];
    }
    set sizingInformation(value) {
      this[sizingInformation$0] = value;
    }
    get rotationController() {
      return this[rotationController];
    }
    set rotationController(value) {
      this[rotationController] = value;
    }
    get skills() {
      return this[skills];
    }
    set skills(value) {
      super.skills = value;
    }
    get experience() {
      return this[experience];
    }
    set experience(value) {
      super.experience = value;
    }
    initState() {
      this.rotationController = new animation_controller.AnimationController.new({vsync: this, duration: new core.Duration.new({seconds: 200})});
      this.rotationController.forward();
      super.initState();
    }
    build(context) {
      return new container.Container.new({height: dart.equals(this.sizingInformation.deviceType, device_screen_size.DeviceScreenType.Desktop) ? media_query.MediaQuery.of(context).size.height : null, key: this.widget.aboutKey, child: framework.Widget._check(this[_getContentForAboutMe](this.sizingInformation, context)), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    [_getContentForAboutMe](sizingInformation, context) {
      if (dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Desktop)) {
        return this[_buildContentForAboutMeDesk](sizingInformation, context);
      } else {
        return this[_buildContentForAboutMeMobile](sizingInformation, context);
      }
    }
    [_buildContentForAboutMeMobile](sizingInformation, context) {
      return new container.Container.new({margin: new edge_insets.EdgeInsets.all(10.0), child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([this[_generateProfilePic](), new container.Container.new({width: media_query.MediaQuery.of(framework.BuildContext._check(context)).size.width, margin: new edge_insets.EdgeInsets.only({top: 10.0}), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new container.Container.new({child: this[_buildAboutMe](framework.BuildContext._check(context)), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 17.0}), child: this[_buildSubHeading](framework.BuildContext._check(context)), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 25.0}), child: this[_buildIntro](framework.BuildContext._check(context)), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new FadeIn.FadeIn.new(3.32, new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 25.0}), child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([this[_createExperience](context), this[_buildSkills](framework.BuildContext._check(context))]), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), "left", {$creationLocationd_0dea112b090073317d4: C24 || CT.C24})]), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33})]), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43});
    }
    [_buildContentForAboutMeDesk](sizingInformation, context) {
      return new container.Container.new({margin: new edge_insets.EdgeInsets.all(60.0), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new container.Container.new({width: dart.notNull(media_query.MediaQuery.of(framework.BuildContext._check(context)).size.width) * 0.5, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new container.Container.new({child: this[_buildAboutMe](framework.BuildContext._check(context)), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 17.0}), child: this[_buildSubHeading](framework.BuildContext._check(context)), $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 25.0}), child: this[_buildIntro](framework.BuildContext._check(context)), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), new FadeIn.FadeIn.new(3.32, new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 25.0}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([this[_createExperience](context), this[_buildSkills](framework.BuildContext._check(context))]), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), "left", {$creationLocationd_0dea112b090073317d4: C66 || CT.C66})]), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), this[_generateProfilePic]()]), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), $creationLocationd_0dea112b090073317d4: C84 || CT.C84});
    }
    [_generateProfilePic]() {
      return new FadeIn.FadeIn.new(2.66, new container.Container.new({child: new basic.Stack.new({children: JSArrayOfWidget().of([new transitions.RotationTransition.new({turns: this.rotationController, child: new circle_avatar.CircleAvatar.new({radius: dart.equals(this.sizingInformation.deviceType, device_screen_size.DeviceScreenType.Mobile) ? dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.35 : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.17, backgroundColor: colors.Colors.transparent, backgroundImage: new _network_image_web.NetworkImage.new("https://previews.123rf.com/images/topform8/topform81303/topform8130300021/18425293-mass-media-doodles-set.jpg"), $creationLocationd_0dea112b090073317d4: C88 || CT.C88}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), new container.Container.new({margin: new edge_insets.EdgeInsets.only({left: 35.0, top: 34.0}), child: new image.Image.network("https://firebasestorage.googleapis.com/v0/b/fitapp-fitness.appspot.com/o/IMG_20191201_184554-removebg-preview.png?alt=media&token=4b491acb-3850-48cd-b0a0-28bcf9d082b8", {width: dart.equals(this.sizingInformation.deviceType, device_screen_size.DeviceScreenType.Mobile) ? dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.6 : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.32, height: dart.equals(this.sizingInformation.deviceType, device_screen_size.DeviceScreenType.Mobile) ? dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.6 : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.32, $creationLocationd_0dea112b090073317d4: C97 || CT.C97}), $creationLocationd_0dea112b090073317d4: C102 || CT.C102})]), $creationLocationd_0dea112b090073317d4: C106 || CT.C106}), $creationLocationd_0dea112b090073317d4: C109 || CT.C109}), "right", {$creationLocationd_0dea112b090073317d4: C112 || CT.C112});
    }
    [_buildAboutMe](context) {
      return new FadeIn.FadeIn.new(2.66, new basic.RichText.new({text: new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "About ", style: new text_style.TextStyle.new({fontFamily: "Lato", color: colors.Colors.black, fontWeight: ui.FontWeight.w400, fontSize: dart.equals(this.sizingInformation.deviceType, device_screen_size.DeviceScreenType.Mobile) ? 36.0 : 50.0})}), new text_span.TextSpan.new({text: "Me", style: new text_style.TextStyle.new({color: new ui.Color.new(4283477952), fontFamily: "Lato", fontWeight: ui.FontWeight.w900, fontSize: dart.equals(this.sizingInformation.deviceType, device_screen_size.DeviceScreenType.Mobile) ? 36.0 : 50.0})})])}), $creationLocationd_0dea112b090073317d4: C117 || CT.C117}), "left", {$creationLocationd_0dea112b090073317d4: C120 || CT.C120});
    }
    [_buildSubHeading](context) {
      return new FadeIn.FadeIn.new(2.66, new text$.Text.new("Mobile Application Developer,\nfrom Abu Dhabi, United Arab Emiretes", {textAlign: dart.equals(this.sizingInformation.deviceType, device_screen_size.DeviceScreenType.Mobile) ? ui.TextAlign.center : ui.TextAlign.start, style: new text_style.TextStyle.new({fontSize: 18.0, wordSpacing: 3.0}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), "left", {$creationLocationd_0dea112b090073317d4: C130 || CT.C130});
    }
    [_buildIntro](context) {
      return new FadeIn.FadeIn.new(2.99, new text$.Text.new("Mobile Application Developer,from Abu Dhabi, United Arab Emiretes, I' am Shashank Kakroo, Mobile Application Developer,from Abu Dhabi, United Arab Emiretes I' am Shashank Kakroo, Mobile Application Developer, from Abu Dhabi, United Arab EmiretesI' am Shashank Kakroo, Mobile Application Developer,from Abu Dhabi, United Arab Emiretes, I' am Shashank Kakroo, Mobile Application Developer, from Abu Dhabi, United Arab Emiretes , I' am Shashank Kakroo, Mobile Application Developer,\nfrom Abu Dhabi, United Arab Emiretes, I' am Shashank Kakroo, Mobile Application Developer, from Abu Dhabi, United Arab Emiretes , I' am Shashank Kakroo, Mobile Application Developer,\nfrom Abu Dhabi, United Arab Emiretes", {textAlign: dart.equals(this.sizingInformation.deviceType, device_screen_size.DeviceScreenType.Mobile) ? ui.TextAlign.justify : ui.TextAlign.start, style: new text_style.TextStyle.new({fontSize: 14.0, color: colors.Colors.black54, wordSpacing: 2.0}), $creationLocationd_0dea112b090073317d4: C135 || CT.C135}), "left", {$creationLocationd_0dea112b090073317d4: C140 || CT.C140});
    }
    [_createExperience](context) {
      return new container.Container.new({width: dart.equals(this.sizingInformation.deviceType, device_screen_size.DeviceScreenType.Mobile) ? media_query.MediaQuery.of(framework.BuildContext._check(context)).size.width : dart.notNull(media_query.MediaQuery.of(framework.BuildContext._check(context)).size.width) * 0.3, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: this[_getExperienceList](), $creationLocationd_0dea112b090073317d4: C145 || CT.C145}), $creationLocationd_0dea112b090073317d4: C149 || CT.C149});
    }
    [_getExperienceList]() {
      let exp = JSArrayOfWidget().of([]);
      let a = new text$.Text.new("Experience", {style: new text_style.TextStyle.new({fontSize: 18.0, wordSpacing: 3.0}), $creationLocationd_0dea112b090073317d4: C153 || CT.C153});
      let pad = new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 10.0}), $creationLocationd_0dea112b090073317d4: C157 || CT.C157});
      exp[$add](a);
      exp[$add](pad);
      for (let i = 0; i < dart.notNull(this.experience[$length]); i = i + 1) {
        let title = new text$.Text.new(this.experience[$_get](i)[$_get]("title"), {style: new text_style.TextStyle.new({fontSize: 15.0, wordSpacing: 2.0}), $creationLocationd_0dea112b090073317d4: C160 || CT.C160});
        let company = new text$.Text.new(this.experience[$_get](i)[$_get]("company"), {style: new text_style.TextStyle.new({fontSize: 14.0, wordSpacing: 2.0}), $creationLocationd_0dea112b090073317d4: C164 || CT.C164});
        let text = new text$.Text.new(this.experience[$_get](i)[$_get]("text"), {style: new text_style.TextStyle.new({fontSize: 14.0, color: colors.Colors.black54, wordSpacing: 2.0}), $creationLocationd_0dea112b090073317d4: C168 || CT.C168});
        let pad = new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 10.0}), $creationLocationd_0dea112b090073317d4: C172 || CT.C172});
        exp[$add](title);
        exp[$add](company);
        exp[$add](text);
        exp[$add](pad);
      }
      return exp;
    }
    [_buildSkills](context) {
      let widgets = this.skills[$map](basic.Padding, dart.fn(skill => new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 8.0}), child: this[_buildSkillChip](context, skill), $creationLocationd_0dea112b090073317d4: C175 || CT.C175}), StringToPadding()))[$toList]();
      return new container.Container.new({margin: dart.equals(this.sizingInformation.deviceType, device_screen_size.DeviceScreenType.Mobile) ? new edge_insets.EdgeInsets.only({top: 12.0}) : new edge_insets.EdgeInsets.only({top: 0.0}), width: dart.equals(this.sizingInformation.deviceType, device_screen_size.DeviceScreenType.Mobile) ? media_query.MediaQuery.of(context).size.width : dart.notNull(media_query.MediaQuery.of(context).size.width) * 0.2, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([this[_buildSkillsContainerHeading](), new basic.Wrap.new({children: widgets, $creationLocationd_0dea112b090073317d4: C179 || CT.C179})]), $creationLocationd_0dea112b090073317d4: C182 || CT.C182}), $creationLocationd_0dea112b090073317d4: C186 || CT.C186});
    }
    [_buildSkillsContainerHeading]() {
      return new text$.Text.new("What Skills I Have", {style: new text_style.TextStyle.new({fontSize: 18.0, wordSpacing: 3.0}), $creationLocationd_0dea112b090073317d4: C191 || CT.C191});
    }
    [_buildSkillChip](context, label) {
      return new chip.Chip.new({label: new text$.Text.new(label, {style: new text_style.TextStyle.new({fontSize: 10.0}), $creationLocationd_0dea112b090073317d4: C195 || CT.C195}), $creationLocationd_0dea112b090073317d4: C199 || CT.C199});
    }
    createState() {
      return null;
    }
  };
  (About_page.AboutTabState.new = function(sizingInformation) {
    this[sizingInformation$0] = null;
    this[rotationController] = null;
    this[skills] = JSArrayOfString().of(["Cross platform development", "Android", "Flutter", "Dart", "Firebase", "Kony Visualizer", "Kony Mobile Fabric", "Java", "JavaScript", "GIT", "SVN", "JIRA"]);
    this[experience] = JSArrayOfMapOfString$String().of([new (IdentityMapOfString$String()).from(["title", "System Analyst", "company", "Abu Dhabi Commencial Bank", "text", "Mobile Application Developer - Kony"]), new (IdentityMapOfString$String()).from(["title", "Flutter & Android Developer", "company", "Freelancing", "text", "Worked on part time projects for flutter and android native"]), new (IdentityMapOfString$String()).from(["title", "Software Engineer", "company", "GFI Informatique India Pvt Ltd.", "text", "Kony Application Developer"]), new (IdentityMapOfString$String()).from(["title", "Software Engineer", "company", "InnovationM", "text", "Android Developer"]), new (IdentityMapOfString$String()).from(["title", "Associate Engineer", "company", "InfoStretch", "text", "Developer"])]);
    About_page.AboutTabState.__proto__.new.call(this);
    this.sizingInformation = sizingInformation;
  }).prototype = About_page.AboutTabState.prototype;
  dart.addTypeTests(About_page.AboutTabState);
  const sizingInformation$0 = Symbol("AboutTabState.sizingInformation");
  const rotationController = Symbol("AboutTabState.rotationController");
  const skills = Symbol("AboutTabState.skills");
  const experience = Symbol("AboutTabState.experience");
  dart.setMethodSignature(About_page.AboutTabState, () => ({
    __proto__: dart.getMethods(About_page.AboutTabState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_getContentForAboutMe]: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic]),
    [_buildContentForAboutMeMobile]: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic]),
    [_buildContentForAboutMeDesk]: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic]),
    [_generateProfilePic]: dart.fnType(framework.Widget, []),
    [_buildAboutMe]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildSubHeading]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildIntro]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_createExperience]: dart.fnType(framework.Widget, [dart.dynamic]),
    [_getExperienceList]: dart.fnType(core.List$(framework.Widget), []),
    [_buildSkills]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildSkillsContainerHeading]: dart.fnType(framework.Widget, []),
    [_buildSkillChip]: dart.fnType(framework.Widget, [framework.BuildContext, core.String]),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(About_page.AboutTabState, "package:kakro/ui/About_page.dart");
  dart.setFieldSignature(About_page.AboutTabState, () => ({
    __proto__: dart.getFields(About_page.AboutTabState.__proto__),
    sizingInformation: dart.fieldType(sizing_info.SizingInformation),
    rotationController: dart.fieldType(animation_controller.AnimationController),
    skills: dart.finalFieldType(core.List$(core.String)),
    experience: dart.finalFieldType(core.List$(core.Map$(core.String, core.String)))
  }));
  dart.defineLazy(About_page.AboutTabState, {
    /*About_page.AboutTabState.routeName*/get routeName() {
      return "/about";
    }
  });
  dart.trackLibraries("packages/kakro/ui/About_page", {
    "package:kakro/ui/About_page.dart": About_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["About_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"About_page.ddc.js"}');
  // Exports:
  return {
    ui__About_page: About_page
  };
});

//# sourceMappingURL=About_page.ddc.js.map
