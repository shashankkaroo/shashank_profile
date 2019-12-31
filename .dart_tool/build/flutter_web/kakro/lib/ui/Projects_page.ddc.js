define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/material', 'packages/kakro/ui/BaseWidget', 'packages/kakro/ui/sizing_info', 'packages/kakro/enums/device_screen_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/kakro/ui/FadeIn', 'packages/url_launcher/url_launcher'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__foundation___bitfield_web, packages__flutter__material, packages__kakro__ui__BaseWidget, packages__kakro__ui__sizing_info, packages__kakro__enums__device_screen_size, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__kakro__ui__FadeIn, packages__url_launcher__url_launcher) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const colors = packages__flutter__material.src__material__colors;
  const material = packages__flutter__material.src__material__material;
  const card = packages__flutter__material.src__material__card;
  const icons = packages__flutter__material.src__material__icons;
  const BaseWidget = packages__kakro__ui__BaseWidget.ui__BaseWidget;
  const sizing_info = packages__kakro__ui__sizing_info.ui__sizing_info;
  const device_screen_size = packages__kakro__enums__device_screen_size.enums__device_screen_size;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const FadeIn = packages__kakro__ui__FadeIn.ui__FadeIn;
  const url_launcher = packages__url_launcher__url_launcher.url_launcher;
  const Projects_page = Object.create(dart.library);
  const $_get = dartx._get;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let MapOfString$Object = () => (MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))();
  let JSArrayOfMapOfString$Object = () => (JSArrayOfMapOfString$Object = dart.constFn(_interceptors.JSArray$(MapOfString$Object())))();
  let BuildContextAndSizingInformationToMaterial = () => (BuildContextAndSizingInformationToMaterial = dart.constFn(dart.fnType(material.Material, [framework.BuildContext, sizing_info.SizingInformation])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let MapOfString$ObjectToCard = () => (MapOfString$ObjectToCard = dart.constFn(dart.fnType(card.Card, [MapOfString$Object()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 9,
        line: 93,
        file: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 94,
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
        line: 92,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 92,
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
        line: 91,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 23,
        line: 90,
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
        line: 90,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 19,
        line: 101,
        file: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C11 || CT.C11,
        name: null,
        column: 14,
        line: 101,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 11,
        line: 113,
        file: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 114,
        file: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C14 || CT.C14,
        name: null,
        column: 16,
        line: 112,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 9,
        line: 109,
        file: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 9,
        line: 110,
        file: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 9,
        line: 111,
        file: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 112,
        file: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C18 || CT.C18,
        name: null,
        column: 12,
        line: 108,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 11,
        line: 125,
        file: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C24 || CT.C24,
        name: null,
        column: 9,
        line: 124,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 9,
        line: 123,
        file: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 124,
        file: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 9,
        line: 154,
        file: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C27 || CT.C27,
        name: null,
        column: 12,
        line: 122,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 65,
        line: 179,
        file: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C32 || CT.C32,
        name: null,
        column: 56,
        line: 179,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 43,
        line: 179,
        file: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C35 || CT.C35,
        name: null,
        column: 38,
        line: 179,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 45,
        line: 190,
        file: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 43,
        line: 191,
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
        column: 39,
        line: 190,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 45,
        line: 198,
        file: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 43,
        line: 199,
        file: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C42 || CT.C42,
        name: null,
        column: 39,
        line: 198,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 59,
        line: 219,
        file: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 53,
        line: 220,
        file: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "size",
        column: 53,
        line: 221,
        file: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C46 || CT.C46,
        name: null,
        column: 62,
        line: 218,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 55,
        line: 218,
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
        column: 58,
        line: 217,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 51,
        line: 212,
        file: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 51,
        line: 213,
        file: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 51,
        line: 215,
        file: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 51,
        line: 217,
        file: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C54 || CT.C54,
        name: null,
        column: 56,
        line: 211,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 49,
        line: 211,
        file: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C60 || CT.C60,
        name: null,
        column: 54,
        line: 210,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 47,
        line: 207,
        file: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 47,
        line: 210,
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
        column: 50,
        line: 206,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 43,
        line: 205,
        file: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 43,
        line: 206,
        file: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C67 || CT.C67,
        name: null,
        column: 39,
        line: 204,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 45,
        line: 225,
        file: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 43,
        line: 226,
        file: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C71 || CT.C71,
        name: null,
        column: 39,
        line: 225,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 37,
        line: 188,
        file: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 37,
        line: 189,
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
        column: 57,
        line: 187,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 49,
        line: 187,
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
        column: 40,
        line: 187,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 33,
        line: 184,
        file: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "decoration",
        column: 33,
        line: 185,
        file: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 33,
        line: 187,
        file: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C82 || CT.C82,
        name: null,
        column: 42,
        line: 183,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "filter",
        column: 31,
        line: 181,
        file: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 31,
        line: 183,
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
        column: 27,
        line: 180,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 25,
        line: 178,
        file: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C91 || CT.C91,
        name: null,
        column: 30,
        line: 177,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 23,
        line: 174,
        file: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 23,
        line: 175,
        file: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 23,
        line: 176,
        file: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 23,
        line: 177,
        file: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96, C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C94 || CT.C94,
        name: null,
        column: 28,
        line: 173,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "elevation",
        column: 21,
        line: 171,
        file: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 21,
        line: 172,
        file: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 21,
        line: 173,
        file: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101, C102 || CT.C102, C103 || CT.C103], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C100 || CT.C100,
        name: null,
        column: 26,
        line: 170,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "spacing",
        column: 17,
        line: 167,
        file: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "runSpacing",
        column: 17,
        line: 168,
        file: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 169,
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
        column: 20,
        line: 166,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "constraints",
        column: 13,
        line: 162,
        file: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 166,
        file: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C110 || CT.C110,
        name: null,
        column: 16,
        line: 161,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 9,
        line: 159,
        file: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 9,
        line: 160,
        file: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 161,
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
        column: 12,
        line: 158,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    }
  });
  Projects_page.ProjectsPage = class ProjectsPage extends framework.StatefulWidget {
    get projectKey() {
      return this[projectKey$];
    }
    set projectKey(value) {
      this[projectKey$] = value;
    }
    createState() {
      return new Projects_page.ProjectsPageState.new();
    }
  };
  (Projects_page.ProjectsPage.new = function(projectKey, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[projectKey$] = projectKey;
    Projects_page.ProjectsPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = Projects_page.ProjectsPage.prototype;
  dart.addTypeTests(Projects_page.ProjectsPage);
  const projectKey$ = Symbol("ProjectsPage.projectKey");
  dart.setMethodSignature(Projects_page.ProjectsPage, () => ({
    __proto__: dart.getMethods(Projects_page.ProjectsPage.__proto__),
    createState: dart.fnType(Projects_page.ProjectsPageState, [])
  }));
  dart.setLibraryUri(Projects_page.ProjectsPage, "package:kakro/ui/Projects_page.dart");
  dart.setFieldSignature(Projects_page.ProjectsPage, () => ({
    __proto__: dart.getFields(Projects_page.ProjectsPage.__proto__),
    projectKey: dart.fieldType(key.Key)
  }));
  dart.defineLazy(Projects_page.ProjectsPage, {
    /*Projects_page.ProjectsPage.routeName*/get routeName() {
      return "/projects";
    }
  });
  const _getProjectsContent = dart.privateName(Projects_page, "_getProjectsContent");
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
  let C12;
  let C11;
  let C10;
  const _getContentForProjDesk = dart.privateName(Projects_page, "_getContentForProjDesk");
  const _buildAboutMe = dart.privateName(Projects_page, "_buildAboutMe");
  const _projectsGrid = dart.privateName(Projects_page, "_projectsGrid");
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C20;
  let C21;
  let C22;
  let C18;
  let C17;
  let C25;
  let C24;
  let C23;
  let C28;
  let C29;
  let C30;
  let C27;
  let C26;
  let C33;
  let C32;
  let C31;
  let C36;
  let C35;
  let C34;
  let C39;
  let C40;
  let C38;
  let C37;
  let C43;
  let C44;
  let C42;
  let C41;
  const _launchURL = dart.privateName(Projects_page, "_launchURL");
  let C47;
  let C48;
  let C49;
  let C46;
  let C45;
  let C52;
  let C51;
  let C50;
  let C55;
  let C56;
  let C57;
  let C58;
  let C54;
  let C53;
  let C61;
  let C60;
  let C59;
  let C64;
  let C65;
  let C63;
  let C62;
  let C68;
  let C69;
  let C67;
  let C66;
  let C72;
  let C73;
  let C71;
  let C70;
  let C76;
  let C77;
  let C75;
  let C74;
  let C80;
  let C79;
  let C78;
  let C83;
  let C84;
  let C85;
  let C82;
  let C81;
  let C88;
  let C89;
  let C87;
  let C86;
  let C92;
  let C91;
  let C90;
  let C95;
  let C96;
  let C97;
  let C98;
  let C94;
  let C93;
  let C101;
  let C102;
  let C103;
  let C100;
  let C99;
  let C106;
  let C107;
  let C108;
  let C105;
  let C104;
  let C111;
  let C112;
  let C110;
  let C109;
  let C115;
  let C116;
  let C117;
  let C114;
  let C113;
  Projects_page.ProjectsPageState = class ProjectsPageState extends framework.State$(Projects_page.ProjectsPage) {
    get projectList() {
      return this[projectList];
    }
    set projectList(value) {
      super.projectList = value;
    }
    build(context) {
      return new BaseWidget.BaseWidget.new({builder: dart.fn((context, sizingInformation) => new material.Material.new({child: new container.Container.new({key: this.widget.projectKey, child: framework.Widget._check(this[_getProjectsContent](sizingInformation)), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), BuildContextAndSizingInformationToMaterial()), $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
    [_getProjectsContent](sizingInformation) {
      if (dart.equals(sizingInformation.deviceType, device_screen_size.DeviceScreenType.Mobile)) {
        return new text.Text.new("Mobile", {$creationLocationd_0dea112b090073317d4: C10 || CT.C10});
      } else {
        return this[_getContentForProjDesk](sizingInformation);
      }
    }
    [_getContentForProjDesk](sizingInformation) {
      return new container.Container.new({alignment: alignment.Alignment.center, margin: new edge_insets.EdgeInsets.only({top: 60.0}), width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.86, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([this[_buildAboutMe](this.context, sizingInformation), this[_projectsGrid](this.context, sizingInformation)]), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
    }
    [_buildAboutMe](context, sizingInformation) {
      return new FadeIn.FadeIn.new(2.66, new basic.RichText.new({text: new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "My ", style: new text_style.TextStyle.new({fontFamily: "Lato", color: colors.Colors.black, fontWeight: ui.FontWeight.w400, fontSize: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? 36.0 : 50.0})}), new text_span.TextSpan.new({text: "Projects ", style: new text_style.TextStyle.new({color: new ui.Color.new(4283477952), fontFamily: "Lato", fontWeight: ui.FontWeight.w900, fontSize: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? 36.0 : 50.0})})])}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), "left", {$creationLocationd_0dea112b090073317d4: C26 || CT.C26});
    }
    [_projectsGrid](context, sizingInformation) {
      return new container.Container.new({alignment: alignment.Alignment.center, margin: new edge_insets.EdgeInsets.only({top: 20.0}), child: new basic.ConstrainedBox.new({constraints: new box.BoxConstraints.new({minHeight: media_query.MediaQuery.of(context).size.height, minWidth: media_query.MediaQuery.of(context).size.width}), child: new basic.Wrap.new({spacing: 10.0, runSpacing: 10.0, children: this.projectList[$map](card.Card, dart.fn(i => new card.Card.new({elevation: 0.0, color: colors.Colors.white, child: new container.Container.new({alignment: alignment.Alignment.center, height: dart.notNull(media_query.MediaQuery.of(context).size.width) * 0.32, width: dart.notNull(media_query.MediaQuery.of(context).size.width) * 0.415, child: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Positioned.fill({child: new image.Image.network(core.String._check(i[$_get]("image")), {$creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), new basic.BackdropFilter.new({filter: new ui.ImageFilter.blur({sigmaX: 10.0, sigmaY: 10.0}), child: new container.Container.new({padding: new edge_insets.EdgeInsets.all(20.0), decoration: new box_decoration.BoxDecoration.new({color: ui.Color._check(i[$_get]("color"))}), child: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new(core.String._check(i[$_get]("title")), {style: new text_style.TextStyle.new({color: ui.Color._check(i[$_get]("txtColor")), fontSize: 48.0, fontFamily: "Lato", fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), new text.Text.new(core.String._check(i[$_get]("text")), {style: new text_style.TextStyle.new({color: ui.Color._check(i[$_get]("txtColor")), fontSize: 28.0, fontFamily: "Lato"}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 10.0, bottom: 10.0}), child: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                                    this[_launchURL](i[$_get]("storeLink"));
                                  }, VoidToNull()), child: new basic.ClipOval.new({child: new container.Container.new({color: new ui.Color.new(4283477952), height: 56.0, width: 56.0, child: new basic.Center.new({child: new icon.Icon.new(icons.Icons.link, {color: colors.Colors.white, size: 35.0, $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), new text.Text.new(core.String._check(i[$_get]("techUsed")), {style: new text_style.TextStyle.new({color: ui.Color._check(i[$_get]("txtColor")), fontSize: 20.0, fontFamily: "Lato"}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70})]), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), $creationLocationd_0dea112b090073317d4: C86 || CT.C86})]), $creationLocationd_0dea112b090073317d4: C90 || CT.C90}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), $creationLocationd_0dea112b090073317d4: C99 || CT.C99}), MapOfString$ObjectToCard()))[$toList](), $creationLocationd_0dea112b090073317d4: C104 || CT.C104}), $creationLocationd_0dea112b090073317d4: C109 || CT.C109}), $creationLocationd_0dea112b090073317d4: C113 || CT.C113});
    }
    [_launchURL](url) {
      return async.async(dart.dynamic, function* _launchURL() {
        if (dart.test(yield url_launcher.canLaunch(core.String._check(url)))) {
          yield url_launcher.launch(core.String._check(url));
        } else {
          dart.throw("Could not launch " + dart.str(url));
        }
      });
    }
  };
  (Projects_page.ProjectsPageState.new = function() {
    this[projectList] = JSArrayOfMapOfString$Object().of([new (IdentityMapOfString$Object()).from(["title", "Artbandhu", "image", "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/Screen%20Shot%202019-12-30%20at%204.25.43%20PM.png?alt=media&token=03697eb1-6809-4f88-bf3c-3bfd482bea2d", "text", "Social Art Feed Application for local artist and community", "techUsed", " < Flutter, Native Android, Firebase, iOS /> ", "storeLink", "https://play.google.com/store/apps/details?id=com.artbandhu.Artbandhu", "color", colors.Colors.amber.shade50.withOpacity(0.9), "txtColor", colors.Colors.orange]), new (IdentityMapOfString$Object()).from(["title", "Home Workouts", "image", "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/Screen%20Shot%202019-12-30%20at%204.26.44%20PM.png?alt=media&token=7813e058-2b3a-4912-b6b1-4aa931b2b8a0", "text", "Home Workouts and Fitness Application", "techUsed", " < Native Android, Firebase, Cloud Messaging /> ", "storeLink", "https://play.google.com/store/apps/details?id=com.kakroo.shashank.fitapp", "color", colors.Colors.lime.shade100.withOpacity(0.9), "txtColor", colors.Colors.green.shade700]), new (IdentityMapOfString$Object()).from(["title", "Gulf VPN", "image", "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/Screen%20Shot%202019-12-30%20at%204.27.03%20PM.png?alt=media&token=e71d7c82-f4b1-4494-b6ca-3c04b93dad68", "text", "Android Open VPN Client", "techUsed", " < Native Android, Firebase, Cloud Messaging, Open VPN /> ", "storeLink", "https://play.google.com/store/apps/details?id=free.vpn.unblock.proxy.gulfVPN", "color", colors.Colors.lightBlueAccent.shade100.withOpacity(0.9), "txtColor", colors.Colors.blue.shade700]), new (IdentityMapOfString$Object()).from(["title", "My Android", "image", "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/Screen%20Shot%202019-12-30%20at%204.26.56%20PM.png?alt=media&token=7622e292-763d-40b2-b724-a8b675e13472", "text", "Android Utility Application", "techUsed", "< Native Android, Firebase, Cloud Messaging />", "storeLink", "https://play.google.com/store/apps/details?id=com.innovationm.myandroid", "color", colors.Colors.yellowAccent.shade100.withOpacity(0.9), "txtColor", colors.Colors.deepOrangeAccent.shade400]), new (IdentityMapOfString$Object()).from(["title", "MOCI, Qatar", "image", "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/Screen%20Shot%202019-12-30%20at%204.27.11%20PM.png?alt=media&token=b53da951-1b07-48c6-88bc-9b1fa58ac057", "text", "Municipality & Management App", "techUsed", "< Kony, Native Android, Firebase, Cloud Messaging />", "storeLink", "https://play.google.com/store/apps/details?id=com.mbt.mbt", "color", colors.Colors.lightGreenAccent.shade100.withOpacity(0.9), "txtColor", colors.Colors.lightGreenAccent.shade700]), new (IdentityMapOfString$Object()).from(["title", "Ooredoo, Qatar", "image", "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/Screen%20Shot%202019-12-30%20at%204.27.35%20PM.png?alt=media&token=e552110c-1c42-49d5-a2a6-237c99df1040", "text", "Mobile Recharge Application", "techUsed", "< Kony, Native Android, Firebase, Cloud Messaging />", "storeLink", "https://play.google.com/store/apps/details?id=qa.ooredoo.android", "color", colors.Colors.deepOrangeAccent.shade100.withOpacity(0.9), "txtColor", colors.Colors.deepOrangeAccent.shade700])]);
    Projects_page.ProjectsPageState.__proto__.new.call(this);
    ;
  }).prototype = Projects_page.ProjectsPageState.prototype;
  dart.addTypeTests(Projects_page.ProjectsPageState);
  const projectList = Symbol("ProjectsPageState.projectList");
  dart.setMethodSignature(Projects_page.ProjectsPageState, () => ({
    __proto__: dart.getMethods(Projects_page.ProjectsPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_getProjectsContent]: dart.fnType(dart.dynamic, [sizing_info.SizingInformation]),
    [_getContentForProjDesk]: dart.fnType(dart.dynamic, [sizing_info.SizingInformation]),
    [_buildAboutMe]: dart.fnType(framework.Widget, [framework.BuildContext, dart.dynamic]),
    [_projectsGrid]: dart.fnType(framework.Widget, [framework.BuildContext, dart.dynamic]),
    [_launchURL]: dart.fnType(dart.dynamic, [dart.dynamic])
  }));
  dart.setLibraryUri(Projects_page.ProjectsPageState, "package:kakro/ui/Projects_page.dart");
  dart.setFieldSignature(Projects_page.ProjectsPageState, () => ({
    __proto__: dart.getFields(Projects_page.ProjectsPageState.__proto__),
    projectList: dart.finalFieldType(core.List$(core.Map$(core.String, core.Object)))
  }));
  dart.trackLibraries("packages/kakro/ui/Projects_page", {
    "package:kakro/ui/Projects_page.dart": Projects_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Projects_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAWM;;;;;;;AAI+B;IAAmB;;6CAFpC;;;AAAlB;;EAA6B;;;;;;;;;;;;;MAHT,oCAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"Projects_page.ddc.js"}');
  // Exports:
  return {
    ui__Projects_page: Projects_page
  };
});

//# sourceMappingURL=Projects_page.ddc.js.map
