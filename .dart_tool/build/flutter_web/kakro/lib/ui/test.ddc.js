define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter__material.src__material__app;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const colors = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const circle_avatar = packages__flutter__material.src__material__circle_avatar;
  const card = packages__flutter__material.src__material__card;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const _network_image_web = packages__flutter__src__painting___network_image_web.src__painting___network_image_web;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const test = Object.create(dart.library);
  const $_get = dartx._get;
  const $length = dartx.length;
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let MapOfString$Object = () => (MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))();
  let JSArrayOfMapOfString$Object = () => (JSArrayOfMapOfString$Object = dart.constFn(_interceptors.JSArray$(MapOfString$Object())))();
  let BuildContextAndintToAwesomeListItem = () => (BuildContextAndintToAwesomeListItem = dart.constFn(dart.fnType(test.AwesomeListItem, [framework.BuildContext, core.int])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 28,
        line: 24,
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
        column: 17,
        line: 24,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 7,
        line: 19,
        file: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "debugShowCheckedModeBanner",
        column: 7,
        line: 20,
        file: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "theme",
        column: 7,
        line: 21,
        file: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "home",
        column: 7,
        line: 24,
        file: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C4 || CT.C4,
        name: null,
        column: 16,
        line: 18,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 18,
        line: 116,
        file: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 11,
        line: 117,
        file: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C10 || CT.C10,
        name: null,
        column: 20,
        line: 115,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundColor",
        column: 9,
        line: 113,
        file: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "elevation",
        column: 9,
        line: 114,
        file: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 9,
        line: 115,
        file: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C14 || CT.C14,
        name: null,
        column: 19,
        line: 112,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        bottom: 0,
        right: 0,
        top: 0,
        left: 0
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 21,
        line: 132,
        file: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "content",
        column: 21,
        line: 133,
        file: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 21,
        line: 134,
        file: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "image",
        column: 21,
        line: 135,
        file: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C20 || CT.C20,
        name: null,
        column: 24,
        line: 131,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "shrinkWrap",
        column: 15,
        line: 125,
        file: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 15,
        line: 126,
        file: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "scrollDirection",
        column: 15,
        line: 127,
        file: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "primary",
        column: 15,
        line: 128,
        file: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "itemCount",
        column: 15,
        line: 129,
        file: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "itemBuilder",
        column: 15,
        line: 130,
        file: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C26 || CT.C26,
        name: null,
        column: 24,
        line: 124,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "offset",
        column: 13,
        line: 123,
        file: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 124,
        file: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C34 || CT.C34,
        name: null,
        column: 15,
        line: 122,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 23,
        line: 148,
        file: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "fit",
        column: 23,
        line: 149,
        file: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C38 || CT.C38,
        name: null,
        column: 25,
        line: 147,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 44,
        line: 153,
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
        column: 34,
        line: 153,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "opacity",
        column: 23,
        line: 152,
        file: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 23,
        line: 153,
        file: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C45 || CT.C45,
        name: null,
        column: 25,
        line: 151,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "decoration",
        column: 29,
        line: 160,
        file: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C49 || CT.C49,
        name: null,
        column: 38,
        line: 159,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 27,
        line: 159,
        file: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C52 || CT.C52,
        name: null,
        column: 38,
        line: 158,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 27,
        line: 172,
        file: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 27,
        line: 173,
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
        column: 36,
        line: 171,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 27,
        line: 179,
        file: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 27,
        line: 180,
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
        column: 39,
        line: 178,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "leading",
        column: 25,
        line: 158,
        file: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 25,
        line: 171,
        file: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "subtitle",
        column: 25,
        line: 178,
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
        column: 34,
        line: 157,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "offset",
        column: 23,
        line: 156,
        file: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 23,
        line: 157,
        file: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C68 || CT.C68,
        name: null,
        column: 25,
        line: 155,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 19,
        line: 146,
        file: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C72 || CT.C72,
        name: null,
        column: 28,
        line: 145,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "clipper",
        column: 17,
        line: 144,
        file: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 17,
        line: 145,
        file: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C75 || CT.C75,
        name: null,
        column: 26,
        line: 143,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 143,
        file: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C79 || CT.C79,
        name: null,
        column: 24,
        line: 142,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "offset",
        column: 13,
        line: 141,
        file: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 142,
        file: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C82 || CT.C82,
        name: null,
        column: 15,
        line: 140,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 9,
        line: 121,
        file: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C86 || CT.C86,
        name: null,
        column: 17,
        line: 120,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundColor",
        column: 7,
        line: 111,
        file: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "appBar",
        column: 7,
        line: 112,
        file: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 7,
        line: 120,
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
        column: 16,
        line: 110,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 23,
        line: 232,
        file: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 36,
        line: 232,
        file: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 51,
        line: 232,
        file: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C94 || CT.C94,
        name: null,
        column: 13,
        line: 232,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        bottom: 40,
        right: 20,
        top: 40,
        left: 20
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 26,
        line: 241,
        file: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 19,
        line: 242,
        file: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101, C102 || CT.C102], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C100 || CT.C100,
        name: null,
        column: 21,
        line: 240,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        bottom: 0,
        right: 0,
        top: 16,
        left: 0
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 28,
        line: 250,
        file: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 21,
        line: 251,
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
        column: 30,
        line: 249,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 19,
        line: 248,
        file: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 249,
        file: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C111 || CT.C111], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C109 || CT.C109,
        name: null,
        column: 21,
        line: 247,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 238,
        file: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 239,
        file: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114, C115 || CT.C115], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C113 || CT.C113,
        name: null,
        column: 24,
        line: 237,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 13,
        line: 235,
        file: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 237,
        file: null
      });
    },
    get C117() {
      return C117 = dart.constList([C118 || CT.C118, C119 || CT.C119], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C117 || CT.C117,
        name: null,
        column: 22,
        line: 234,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 234,
        file: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C121 || CT.C121,
        name: null,
        column: 13,
        line: 233,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 19,
        line: 270,
        file: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 19,
        line: 271,
        file: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 19,
        line: 272,
        file: null
      });
    },
    get C124() {
      return C124 = dart.constList([C125 || CT.C125, C126 || CT.C126, C127 || CT.C127], widget_inspector._Location);
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C124 || CT.C124,
        name: null,
        column: 28,
        line: 269,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "offset",
        column: 17,
        line: 268,
        file: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 17,
        line: 269,
        file: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130, C131 || CT.C131], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C129 || CT.C129,
        name: null,
        column: 19,
        line: 267,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 21,
        line: 280,
        file: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 21,
        line: 281,
        file: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "decoration",
        column: 21,
        line: 282,
        file: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134, C135 || CT.C135, C136 || CT.C136], widget_inspector._Location);
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C133 || CT.C133,
        name: null,
        column: 30,
        line: 279,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "elevation",
        column: 19,
        line: 278,
        file: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 279,
        file: null
      });
    },
    get C138() {
      return C138 = dart.constList([C139 || CT.C139, C140 || CT.C140], widget_inspector._Location);
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C138 || CT.C138,
        name: null,
        column: 28,
        line: 277,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "offset",
        column: 17,
        line: 276,
        file: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 17,
        line: 277,
        file: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143, C144 || CT.C144], widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C142 || CT.C142,
        name: null,
        column: 19,
        line: 275,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 266,
        file: null
      });
    },
    get C146() {
      return C146 = dart.constList([C147 || CT.C147], widget_inspector._Location);
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C146 || CT.C146,
        name: null,
        column: 18,
        line: 265,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 11,
        line: 262,
        file: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 11,
        line: 263,
        file: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 11,
        line: 264,
        file: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 265,
        file: null
      });
    },
    get C149() {
      return C149 = dart.constList([C150 || CT.C150, C151 || CT.C151, C152 || CT.C152, C153 || CT.C153], widget_inspector._Location);
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C149 || CT.C149,
        name: null,
        column: 13,
        line: 261,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 231,
        file: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C155 || CT.C155,
        name: null,
        column: 16,
        line: 230,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    },
    get C158() {
      return C158 = dart.constList([], widget_inspector._Location);
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C158 || CT.C158,
        name: null,
        column: 27,
        line: 5,
        file: "org-dartlang-app:///packages/kakro/ui/test.dart"
      });
    }
  });
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C7;
  let C8;
  let C4;
  let C3;
  test.MyApp1 = class MyApp1 extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({title: "Flutter Demo", debugShowCheckedModeBanner: false, theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.blue}), home: new test.MyHomePage.new({title: "Awesome List", $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
  };
  (test.MyApp1.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    test.MyApp1.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = test.MyApp1.prototype;
  dart.addTypeTests(test.MyApp1);
  dart.setMethodSignature(test.MyApp1, () => ({
    __proto__: dart.getMethods(test.MyApp1.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(test.MyApp1, "package:kakro/ui/test.dart");
  test.MyHomePage = class MyHomePage extends framework.StatefulWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    createState() {
      return new test._MyHomePageState.new();
    }
  };
  (test.MyHomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    test.MyHomePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = test.MyHomePage.prototype;
  dart.addTypeTests(test.MyHomePage);
  const title$ = Symbol("MyHomePage.title");
  dart.setMethodSignature(test.MyHomePage, () => ({
    __proto__: dart.getMethods(test.MyHomePage.__proto__),
    createState: dart.fnType(test._MyHomePageState, [])
  }));
  dart.setLibraryUri(test.MyHomePage, "package:kakro/ui/test.dart");
  dart.setFieldSignature(test.MyHomePage, () => ({
    __proto__: dart.getFields(test.MyHomePage.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C16;
  let C17;
  let C14;
  let C13;
  let C18;
  let C21;
  let C22;
  let C23;
  let C24;
  let C20;
  let C19;
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C26;
  let C25;
  let C35;
  let C36;
  let C34;
  let C33;
  let C39;
  let C40;
  let C38;
  let C37;
  let C43;
  let C42;
  let C41;
  let C46;
  let C47;
  let C45;
  let C44;
  let C50;
  let C49;
  let C48;
  let C53;
  let C52;
  let C51;
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
  let C70;
  let C68;
  let C67;
  let C73;
  let C72;
  let C71;
  let C76;
  let C77;
  let C75;
  let C74;
  let C80;
  let C79;
  let C78;
  let C83;
  let C84;
  let C82;
  let C81;
  let C87;
  let C86;
  let C85;
  let C90;
  let C91;
  let C92;
  let C89;
  let C88;
  test._MyHomePageState = class _MyHomePageState extends framework.State$(test.MyHomePage) {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, appBar: new app_bar.AppBar.new({backgroundColor: colors.Colors.transparent, elevation: 0.0, title: new text.Text.new(this.widget.title, {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), body: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Transform.translate({offset: new ui.Offset.new(0.0, dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.105), child: new scroll_view.ListView.builder({shrinkWrap: true, padding: C18 || CT.C18, scrollDirection: basic_types.Axis.vertical, primary: true, itemCount: this.data[$length], itemBuilder: dart.fn((content, index) => new test.AwesomeListItem.new({title: core.String._check(this.data[$_get](index)[$_get]("title")), content: core.String._check(this.data[$_get](index)[$_get]("content")), color: ui.Color._check(this.data[$_get](index)[$_get]("color")), image: core.String._check(this.data[$_get](index)[$_get]("image")), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), BuildContextAndintToAwesomeListItem()), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), new basic.Transform.translate({offset: new ui.Offset.new(0.0, -56.0), child: new container.Container.new({child: new basic.ClipPath.new({clipper: new test.MyClipper.new(), child: new basic.Stack.new({children: JSArrayOfWidget().of([new image.Image.network("https://picsum.photos/800/400?random", {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), new basic.Opacity.new({opacity: 0.2, child: new container.Container.new({color: test.COLORS[$_get](0), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), new basic.Transform.translate({offset: new ui.Offset.new(0.0, 50.0), child: new list_tile.ListTile.new({leading: new circle_avatar.CircleAvatar.new({child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, color: colors.Colors.transparent, image: new decoration_image.DecorationImage.new({fit: box_fit.BoxFit.fill, image: new _network_image_web.NetworkImage.new("https://avatars2.githubusercontent.com/u/3234592?s=460&v=4")})}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), title: new text.Text.new("Samarth Agarwal", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 24.0, letterSpacing: 2.0}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), subtitle: new text.Text.new("Lead Designer", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 12.0, letterSpacing: 2.0}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C67 || CT.C67})]), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81})]), $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), $creationLocationd_0dea112b090073317d4: C88 || CT.C88});
    }
  };
  (test._MyHomePageState.new = function() {
    this.data = JSArrayOfMapOfString$Object().of([new (IdentityMapOfString$Object()).from(["title", "Hey Flutterers, See what I did with Flutter", "content", "This is just a text description of the item", "color", test.COLORS[$_get](math.Random.new().nextInt(5)), "image", "https://picsum.photos/200?random"]), new (IdentityMapOfString$Object()).from(["title", "Hey Flutterers, See what I did with Flutter", "content", "This is just a text description of the item", "color", test.COLORS[$_get](math.Random.new().nextInt(5)), "image", "https://picsum.photos/100?random"]), new (IdentityMapOfString$Object()).from(["title", "Hey Flutterers, See what I did with Flutter", "content", "This is just a text description of the item", "color", test.COLORS[$_get](math.Random.new().nextInt(5)), "image", "https://picsum.photos/150?random"]), new (IdentityMapOfString$Object()).from(["title", "Hey Flutterers, See what I did with Flutter", "content", "This is just a text description of the item", "color", test.COLORS[$_get](math.Random.new().nextInt(5)), "image", "https://picsum.photos/125?random"]), new (IdentityMapOfString$Object()).from(["title", "Hey Flutterers, See what I did with Flutter", "content", "This is just a text description of the item", "color", test.COLORS[$_get](math.Random.new().nextInt(5)), "image", "https://picsum.photos/175?random"]), new (IdentityMapOfString$Object()).from(["title", "Hey Flutterers, See what I did with Flutter", "content", "This is just a text description of the item", "color", test.COLORS[$_get](math.Random.new().nextInt(5)), "image", "https://picsum.photos/225?random"]), new (IdentityMapOfString$Object()).from(["title", "Hey Flutterers, See what I did with Flutter", "content", "This is just a text description of the item", "color", test.COLORS[$_get](math.Random.new().nextInt(5)), "image", "https://picsum.photos/250?random"]), new (IdentityMapOfString$Object()).from(["title", "Hey Flutterers, See what I did with Flutter", "content", "This is just a text description of the item", "color", test.COLORS[$_get](math.Random.new().nextInt(5)), "image", "https://picsum.photos/350?random"]), new (IdentityMapOfString$Object()).from(["title", "Hey Flutterers, See what I did with Flutter", "content", "This is just a text description of the item", "color", test.COLORS[$_get](math.Random.new().nextInt(5)), "image", "https://picsum.photos/275?random"]), new (IdentityMapOfString$Object()).from(["title", "Hey Flutterers, See what I did with Flutter", "content", "This is just a text description of the item", "color", test.COLORS[$_get](math.Random.new().nextInt(5)), "image", "https://picsum.photos/300?random"]), new (IdentityMapOfString$Object()).from(["title", "Hey Flutterers, See what I did with Flutter", "content", "This is just a text description of the item", "color", test.COLORS[$_get](math.Random.new().nextInt(5)), "image", "https://picsum.photos/325?random"])]);
    test._MyHomePageState.__proto__.new.call(this);
    ;
  }).prototype = test._MyHomePageState.prototype;
  dart.addTypeTests(test._MyHomePageState);
  dart.setMethodSignature(test._MyHomePageState, () => ({
    __proto__: dart.getMethods(test._MyHomePageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(test._MyHomePageState, "package:kakro/ui/test.dart");
  dart.setFieldSignature(test._MyHomePageState, () => ({
    __proto__: dart.getFields(test._MyHomePageState.__proto__),
    data: dart.fieldType(core.List$(core.Map$(core.String, core.Object)))
  }));
  test.MyClipper = class MyClipper extends proxy_box.CustomClipper$(ui.Path) {
    getClip(size) {
      let p = ui.Path.new();
      p.lineTo(size.width, 0.0);
      p.lineTo(size.width, dart.notNull(size.height) / 4.75);
      p.lineTo(0.0, dart.notNull(size.height) / 3.75);
      p.close();
      return p;
    }
    shouldReclip(oldClipper) {
      proxy_box.CustomClipper._check(oldClipper);
      return true;
    }
  };
  (test.MyClipper.new = function() {
    test.MyClipper.__proto__.new.call(this);
    ;
  }).prototype = test.MyClipper.prototype;
  dart.addTypeTests(test.MyClipper);
  dart.setMethodSignature(test.MyClipper, () => ({
    __proto__: dart.getMethods(test.MyClipper.__proto__),
    getClip: dart.fnType(ui.Path, [ui.Size]),
    shouldReclip: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(test.MyClipper, "package:kakro/ui/test.dart");
  test.AwesomeListItem = class AwesomeListItem extends framework.StatefulWidget {
    get title() {
      return this[title$0];
    }
    set title(value) {
      this[title$0] = value;
    }
    get content() {
      return this[content$];
    }
    set content(value) {
      this[content$] = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      this[color$] = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      this[image$] = value;
    }
    createState() {
      return new test._AwesomeListItemState.new();
    }
  };
  (test.AwesomeListItem.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let content = opts && 'content' in opts ? opts.content : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$0] = title;
    this[content$] = content;
    this[color$] = color;
    this[image$] = image;
    test.AwesomeListItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = test.AwesomeListItem.prototype;
  dart.addTypeTests(test.AwesomeListItem);
  const title$0 = Symbol("AwesomeListItem.title");
  const content$ = Symbol("AwesomeListItem.content");
  const color$ = Symbol("AwesomeListItem.color");
  const image$ = Symbol("AwesomeListItem.image");
  dart.setMethodSignature(test.AwesomeListItem, () => ({
    __proto__: dart.getMethods(test.AwesomeListItem.__proto__),
    createState: dart.fnType(test._AwesomeListItemState, [])
  }));
  dart.setLibraryUri(test.AwesomeListItem, "package:kakro/ui/test.dart");
  dart.setFieldSignature(test.AwesomeListItem, () => ({
    __proto__: dart.getFields(test.AwesomeListItem.__proto__),
    title: dart.fieldType(core.String),
    content: dart.fieldType(core.String),
    color: dart.fieldType(ui.Color),
    image: dart.fieldType(core.String)
  }));
  let C95;
  let C96;
  let C97;
  let C94;
  let C93;
  let C98;
  let C101;
  let C102;
  let C100;
  let C99;
  let C103;
  let C106;
  let C107;
  let C105;
  let C104;
  let C110;
  let C111;
  let C109;
  let C108;
  let C114;
  let C115;
  let C113;
  let C112;
  let C118;
  let C119;
  let C117;
  let C116;
  let C122;
  let C121;
  let C120;
  let C125;
  let C126;
  let C127;
  let C124;
  let C123;
  let C130;
  let C131;
  let C129;
  let C128;
  let C134;
  let C135;
  let C136;
  let C133;
  let C132;
  let C139;
  let C140;
  let C138;
  let C137;
  let C143;
  let C144;
  let C142;
  let C141;
  let C147;
  let C146;
  let C145;
  let C150;
  let C151;
  let C152;
  let C153;
  let C149;
  let C148;
  let C156;
  let C155;
  let C154;
  test._AwesomeListItemState = class _AwesomeListItemState extends framework.State$(test.AwesomeListItem) {
    build(context) {
      return new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({width: 10.0, height: 190.0, color: this.widget.color, $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), new basic.Expanded.new({child: new basic.Padding.new({padding: C98 || CT.C98, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new text.Text.new(this.widget.title, {style: new text_style.TextStyle.new({color: colors.Colors.grey.shade800, fontSize: 18.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C99 || CT.C99}), new basic.Padding.new({padding: C103 || CT.C103, child: new text.Text.new(this.widget.content, {style: new text_style.TextStyle.new({color: colors.Colors.grey.shade500, fontSize: 12.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C104 || CT.C104}), $creationLocationd_0dea112b090073317d4: C108 || CT.C108})]), $creationLocationd_0dea112b090073317d4: C112 || CT.C112}), $creationLocationd_0dea112b090073317d4: C116 || CT.C116}), $creationLocationd_0dea112b090073317d4: C120 || CT.C120}), new container.Container.new({height: 150.0, width: 150.0, color: colors.Colors.white, child: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Transform.translate({offset: new ui.Offset.new(50.0, 0.0), child: new container.Container.new({height: 100.0, width: 100.0, color: this.widget.color, $creationLocationd_0dea112b090073317d4: C123 || CT.C123}), $creationLocationd_0dea112b090073317d4: C128 || CT.C128}), new basic.Transform.translate({offset: new ui.Offset.new(10.0, 20.0), child: new card.Card.new({elevation: 20.0, child: new container.Container.new({height: 120.0, width: 120.0, decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.white, border: box_border.Border.all({width: 10.0, color: colors.Colors.white, style: borders.BorderStyle.solid}), image: new decoration_image.DecorationImage.new({image: new _network_image_web.NetworkImage.new(this.widget.image)})}), $creationLocationd_0dea112b090073317d4: C132 || CT.C132}), $creationLocationd_0dea112b090073317d4: C137 || CT.C137}), $creationLocationd_0dea112b090073317d4: C141 || CT.C141})]), $creationLocationd_0dea112b090073317d4: C145 || CT.C145}), $creationLocationd_0dea112b090073317d4: C148 || CT.C148})]), $creationLocationd_0dea112b090073317d4: C154 || CT.C154});
    }
  };
  (test._AwesomeListItemState.new = function() {
    test._AwesomeListItemState.__proto__.new.call(this);
    ;
  }).prototype = test._AwesomeListItemState.prototype;
  dart.addTypeTests(test._AwesomeListItemState);
  dart.setMethodSignature(test._AwesomeListItemState, () => ({
    __proto__: dart.getMethods(test._AwesomeListItemState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(test._AwesomeListItemState, "package:kakro/ui/test.dart");
  let C158;
  let C157;
  test.main = function main() {
    return binding.runApp(new test.MyApp1.new({$creationLocationd_0dea112b090073317d4: C157 || CT.C157}));
  };
  dart.defineLazy(test, {
    /*test.COLORS*/get COLORS() {
      return JSArrayOfColor().of([new ui.Color.new(4293884549), new ui.Color.new(4294938803), new ui.Color.new(4294951650), new ui.Color.new(4290286335), new ui.Color.new(4290286335)]);
    },
    set COLORS(_) {}
  });
  dart.trackLibraries("packages/kakro/ui/test", {
    "package:kakro/ui/test.dart": test
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"test.ddc.js"}');
  // Exports:
  return {
    ui__test: test
  };
});

//# sourceMappingURL=test.ddc.js.map
