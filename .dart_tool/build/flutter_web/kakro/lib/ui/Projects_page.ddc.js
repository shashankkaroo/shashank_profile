define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/material', 'packages/kakro/ui/BaseWidget', 'packages/kakro/ui/sizing_info', 'packages/kakro/enums/device_screen_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/kakro/ui/FadeIn'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__foundation___bitfield_web, packages__flutter__material, packages__kakro__ui__BaseWidget, packages__kakro__ui__sizing_info, packages__kakro__enums__device_screen_size, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__kakro__ui__FadeIn) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
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
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const text$ = packages__flutter__src__widgets__actions.src__widgets__text;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const colors = packages__flutter__material.src__material__colors;
  const material = packages__flutter__material.src__material__material;
  const card = packages__flutter__material.src__material__card;
  const chip = packages__flutter__material.src__material__chip;
  const BaseWidget = packages__kakro__ui__BaseWidget.ui__BaseWidget;
  const sizing_info = packages__kakro__ui__sizing_info.ui__sizing_info;
  const device_screen_size = packages__kakro__enums__device_screen_size.enums__device_screen_size;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const FadeIn = packages__kakro__ui__FadeIn.ui__FadeIn;
  const Projects_page = Object.create(dart.library);
  const $isOdd = dartx.isOdd;
  const $indexOf = dartx.indexOf;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $href = dartx.href;
  const $location = dartx.location;
  const $window = dartx.window;
  const $split = dartx.split;
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let MapOfString$Object = () => (MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))();
  let JSArrayOfMapOfString$Object = () => (JSArrayOfMapOfString$Object = dart.constFn(_interceptors.JSArray$(MapOfString$Object())))();
  let BuildContextAndSizingInformationToMaterial = () => (BuildContextAndSizingInformationToMaterial = dart.constFn(dart.fnType(material.Material, [framework.BuildContext, sizing_info.SizingInformation])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))();
  let MapOfString$ObjectToCard = () => (MapOfString$ObjectToCard = dart.constFn(dart.fnType(card.Card, [MapOfString$Object()])))();
  let StringToPadding = () => (StringToPadding = dart.constFn(dart.fnType(basic.Padding, [core.String])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 9,
        line: 155,
        file: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 156,
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
        line: 154,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 154,
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
        line: 153,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 23,
        line: 152,
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
        line: 152,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 11,
        line: 175,
        file: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 176,
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
        line: 174,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 9,
        line: 171,
        file: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 9,
        line: 172,
        file: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 9,
        line: 173,
        file: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 174,
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
        line: 170,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 11,
        line: 189,
        file: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 190,
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
        column: 16,
        line: 188,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 9,
        line: 185,
        file: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 9,
        line: 186,
        file: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 9,
        line: 187,
        file: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 188,
        file: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C25 || CT.C25,
        name: null,
        column: 12,
        line: 184,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 11,
        line: 201,
        file: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C31 || CT.C31,
        name: null,
        column: 9,
        line: 200,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 9,
        line: 199,
        file: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 200,
        file: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 9,
        line: 230,
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
        column: 12,
        line: 198,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 37,
        line: 260,
        file: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C39 || CT.C39,
        name: null,
        column: 35,
        line: 259,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 47,
        line: 273,
        file: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 47,
        line: 275,
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
        column: 45,
        line: 272,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 37,
        line: 266,
        file: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 37,
        line: 270,
        file: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C46 || CT.C46,
        name: null,
        column: 35,
        line: 265,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 29,
        line: 257,
        file: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C50 || CT.C50,
        name: null,
        column: 32,
        line: 256,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 25,
        line: 249,
        file: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 25,
        line: 250,
        file: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 25,
        line: 251,
        file: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 25,
        line: 255,
        file: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 25,
        line: 256,
        file: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C53 || CT.C53,
        name: null,
        column: 28,
        line: 248,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "elevation",
        column: 21,
        line: 246,
        file: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 21,
        line: 247,
        file: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 21,
        line: 248,
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
        column: 26,
        line: 245,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "runSpacing",
        column: 17,
        line: 243,
        file: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 244,
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
        column: 20,
        line: 242,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "constraints",
        column: 13,
        line: 238,
        file: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 242,
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
        column: 16,
        line: 237,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 9,
        line: 235,
        file: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 9,
        line: 236,
        file: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 237,
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
        column: 12,
        line: 234,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 17,
        line: 303,
        file: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 17,
        line: 306,
        file: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 17,
        line: 309,
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
        column: 13,
        line: 302,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 39,
        line: 319,
        file: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C83 || CT.C83,
        name: null,
        column: 30,
        line: 319,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "left",
        column: 17,
        line: 311,
        file: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "top",
        column: 17,
        line: 312,
        file: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 17,
        line: 313,
        file: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 17,
        line: 316,
        file: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 17,
        line: 319,
        file: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88, C89 || CT.C89, C90 || CT.C90, C91 || CT.C91], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C86 || CT.C86,
        name: null,
        column: 13,
        line: 310,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 301,
        file: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C93 || CT.C93,
        name: null,
        column: 16,
        line: 300,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 9,
        line: 294,
        file: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 9,
        line: 297,
        file: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 300,
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
        column: 12,
        line: 293,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 19,
        line: 337,
        file: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textAlign",
        column: 17,
        line: 338,
        file: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 17,
        line: 339,
        file: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102, C103 || CT.C103, C104 || CT.C104], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C101 || CT.C101,
        name: null,
        column: 13,
        line: 337,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 28,
        line: 342,
        file: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textAlign",
        column: 19,
        line: 343,
        file: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 19,
        line: 344,
        file: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107, C108 || CT.C108, C109 || CT.C109], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C106 || CT.C106,
        name: null,
        column: 22,
        line: 342,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 15,
        line: 341,
        file: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 342,
        file: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C111 || CT.C111,
        name: null,
        column: 13,
        line: 340,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 28,
        line: 348,
        file: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textAlign",
        column: 19,
        line: 349,
        file: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 19,
        line: 350,
        file: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116, C117 || CT.C117, C118 || CT.C118], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C115 || CT.C115,
        name: null,
        column: 22,
        line: 348,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 15,
        line: 347,
        file: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 348,
        file: null
      });
    },
    get C120() {
      return C120 = dart.constList([C121 || CT.C121, C122 || CT.C122], widget_inspector._Location);
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C120 || CT.C120,
        name: null,
        column: 13,
        line: 346,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 28,
        line: 356,
        file: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textAlign",
        column: 19,
        line: 357,
        file: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 19,
        line: 358,
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
        column: 22,
        line: 356,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 15,
        line: 355,
        file: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 356,
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
        column: 13,
        line: 354,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 11,
        line: 334,
        file: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 11,
        line: 335,
        file: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 336,
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
        column: 16,
        line: 333,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 7,
        line: 326,
        file: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 9,
        line: 327,
        file: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 9,
        line: 330,
        file: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 333,
        file: null
      });
    },
    get C138() {
      return C138 = dart.constList([C139 || CT.C139, C140 || CT.C140, C141 || CT.C141, C142 || CT.C142], widget_inspector._Location);
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C138 || CT.C138,
        name: null,
        column: 12,
        line: 325,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 15,
        line: 371,
        file: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 372,
        file: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145, C146 || CT.C146], widget_inspector._Location);
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C144 || CT.C144,
        name: null,
        column: 25,
        line: 370,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 18,
        line: 383,
        file: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149], widget_inspector._Location);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C148 || CT.C148,
        name: null,
        column: 13,
        line: 383,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 11,
        line: 380,
        file: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 381,
        file: null
      });
    },
    get C151() {
      return C151 = dart.constList([C152 || CT.C152, C153 || CT.C153], widget_inspector._Location);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C151 || CT.C151,
        name: null,
        column: 16,
        line: 379,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 9,
        line: 377,
        file: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 9,
        line: 378,
        file: null
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 379,
        file: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156, C157 || CT.C157, C158 || CT.C158], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C155 || CT.C155,
        name: null,
        column: 12,
        line: 376,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 21,
        line: 391,
        file: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 27,
        line: 391,
        file: null
      });
    },
    get C160() {
      return C160 = dart.constList([C161 || CT.C161, C162 || CT.C162], widget_inspector._Location);
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C160 || CT.C160,
        name: null,
        column: 16,
        line: 391,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 9,
        line: 390,
        file: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 391,
        file: null
      });
    },
    get C164() {
      return C164 = dart.constList([C165 || CT.C165, C166 || CT.C166], widget_inspector._Location);
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C164 || CT.C164,
        name: null,
        column: 12,
        line: 389,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 9,
        line: 397,
        file: null
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 9,
        line: 398,
        file: null
      });
    },
    get C168() {
      return C168 = dart.constList([C169 || CT.C169, C170 || CT.C170], widget_inspector._Location);
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C168 || CT.C168,
        name: null,
        column: 14,
        line: 396,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "label",
        column: 7,
        line: 396,
        file: null
      });
    },
    get C172() {
      return C172 = dart.constList([C173 || CT.C173], widget_inspector._Location);
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C172 || CT.C172,
        name: null,
        column: 12,
        line: 395,
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
  const _getContentForProjMob = dart.privateName(Projects_page, "_getContentForProjMob");
  const _getContentForProjDesk = dart.privateName(Projects_page, "_getContentForProjDesk");
  const _buildAboutMe = dart.privateName(Projects_page, "_buildAboutMe");
  const _projectsGrid = dart.privateName(Projects_page, "_projectsGrid");
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
  let C23;
  let C21;
  let C20;
  let C26;
  let C27;
  let C28;
  let C29;
  let C25;
  let C24;
  let C32;
  let C31;
  let C30;
  let C35;
  let C36;
  let C37;
  let C34;
  let C33;
  const _sectionImage = dart.privateName(Projects_page, "_sectionImage");
  const _sectionData = dart.privateName(Projects_page, "_sectionData");
  let C40;
  let C39;
  let C38;
  let C43;
  let C44;
  let C42;
  let C41;
  let C47;
  let C48;
  let C46;
  let C45;
  let C51;
  let C50;
  let C49;
  let C54;
  let C55;
  let C56;
  let C57;
  let C58;
  let C53;
  let C52;
  let C61;
  let C62;
  let C63;
  let C60;
  let C59;
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
  const _launchURL = dart.privateName(Projects_page, "_launchURL");
  let C79;
  let C80;
  let C81;
  let C78;
  let C77;
  let C84;
  let C83;
  let C82;
  let C87;
  let C88;
  let C89;
  let C90;
  let C91;
  let C86;
  let C85;
  let C94;
  let C93;
  let C92;
  let C97;
  let C98;
  let C99;
  let C96;
  let C95;
  let C102;
  let C103;
  let C104;
  let C101;
  let C100;
  let C107;
  let C108;
  let C109;
  let C106;
  let C105;
  let C112;
  let C113;
  let C111;
  let C110;
  let C116;
  let C117;
  let C118;
  let C115;
  let C114;
  let C121;
  let C122;
  let C120;
  let C119;
  const _buildSkillsContainerHeading = dart.privateName(Projects_page, "_buildSkillsContainerHeading");
  let C125;
  let C126;
  let C127;
  let C124;
  let C123;
  let C130;
  let C131;
  let C129;
  let C128;
  const _buildSkills = dart.privateName(Projects_page, "_buildSkills");
  let C134;
  let C135;
  let C136;
  let C133;
  let C132;
  let C139;
  let C140;
  let C141;
  let C142;
  let C138;
  let C137;
  const _buildSkillChip = dart.privateName(Projects_page, "_buildSkillChip");
  let C145;
  let C146;
  let C144;
  let C143;
  let C149;
  let C148;
  let C147;
  let C152;
  let C153;
  let C151;
  let C150;
  let C156;
  let C157;
  let C158;
  let C155;
  let C154;
  let C161;
  let C162;
  let C160;
  let C159;
  let C165;
  let C166;
  let C164;
  let C163;
  let C169;
  let C170;
  let C168;
  let C167;
  let C173;
  let C172;
  let C171;
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
        return this[_getContentForProjMob](sizingInformation);
      } else {
        return this[_getContentForProjDesk](sizingInformation);
      }
    }
    [_getContentForProjMob](sizingInformation) {
      return new container.Container.new({alignment: alignment.Alignment.center, margin: new edge_insets.EdgeInsets.only({top: 60.0}), width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.86, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([this[_buildAboutMe](this.context, sizingInformation), this[_projectsGrid](this.context, sizingInformation)]), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
    }
    [_getContentForProjDesk](sizingInformation) {
      return new container.Container.new({alignment: alignment.Alignment.center, margin: new edge_insets.EdgeInsets.only({top: 60.0}), width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.86, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([this[_buildAboutMe](this.context, sizingInformation), this[_projectsGrid](this.context, sizingInformation)]), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24});
    }
    [_buildAboutMe](context, sizingInformation) {
      return new FadeIn.FadeIn.new(2.66, new basic.RichText.new({text: new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "My ", style: new text_style.TextStyle.new({fontFamily: "Lato", color: colors.Colors.black, fontWeight: ui.FontWeight.w400, fontSize: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? 36.0 : 50.0})}), new text_span.TextSpan.new({text: "Projects ", style: new text_style.TextStyle.new({color: new ui.Color.new(4283477952), fontFamily: "Lato", fontWeight: ui.FontWeight.w900, fontSize: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? 36.0 : 50.0})})])}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), "left", {$creationLocationd_0dea112b090073317d4: C33 || CT.C33});
    }
    [_projectsGrid](context, sizingInformation) {
      return new container.Container.new({alignment: alignment.Alignment.center, margin: new edge_insets.EdgeInsets.only({top: 35.0}), child: new basic.ConstrainedBox.new({constraints: new box.BoxConstraints.new({minHeight: media_query.MediaQuery.of(context).size.height, minWidth: media_query.MediaQuery.of(context).size.width}), child: new basic.Wrap.new({runSpacing: 30.0, children: this.projectList[$map](card.Card, dart.fn(i => new card.Card.new({elevation: 0.0, color: colors.Colors.transparent, child: new container.Container.new({alignment: alignment.Alignment.center, margin: new edge_insets.EdgeInsets.only({top: 30.0}), height: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? null : dart.notNull(media_query.MediaQuery.of(context).size.width) * 0.3, width: media_query.MediaQuery.of(context).size.width, child: new container.Container.new({child: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? new basic.Column.new({children: JSArrayOfWidget().of([framework.Widget._check(this[_sectionImage](i, sizingInformation)), framework.Widget._check(this[_sectionData](i, sizingInformation))]), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}) : new basic.Row.new({mainAxisAlignment: this.projectList[$indexOf](i)[$isOdd] ? flex.MainAxisAlignment.end : flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([framework.Widget._check(this.projectList[$indexOf](i)[$isOdd] ? new container.Container.new({margin: new edge_insets.EdgeInsets.only({right: 50.0}), child: framework.Widget._check(this[_sectionData](i, sizingInformation)), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}) : this[_sectionImage](i, sizingInformation)), framework.Widget._check(this.projectList[$indexOf](i)[$isOdd] ? this[_sectionImage](i, sizingInformation) : this[_sectionData](i, sizingInformation))]), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), MapOfString$ObjectToCard()))[$toList](), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), $creationLocationd_0dea112b090073317d4: C72 || CT.C72});
    }
    [_launchURL](url) {
      return async.async(dart.dynamic, function* _launchURL() {
        html.document[$window][$location][$href] = core.String._check(url);
      });
    }
    [_sectionImage](i, sizingInformation) {
      return new container.Container.new({height: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.8 : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.3, width: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? media_query.MediaQuery.of(this.context).size.width : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.3, child: new basic.Stack.new({children: JSArrayOfWidget().of([new container.Container.new({height: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.52 : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.22, width: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? null : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.18, color: ui.Color._check(dart.dsend(i, '_get', ["color"])), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), new basic.Positioned.new({left: 40.0, top: 35.0, height: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.8 : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.25, width: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? null : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.25, child: new image.Image.network(core.String._check(dart.dsend(i, '_get', ["image"])), {$creationLocationd_0dea112b090073317d4: C82 || CT.C82}), $creationLocationd_0dea112b090073317d4: C85 || CT.C85})]), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), $creationLocationd_0dea112b090073317d4: C95 || CT.C95});
    }
    [_sectionData](i, sizingInformation) {
      return new container.Container.new({margin: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? new edge_insets.EdgeInsets.only({top: 20.0}) : null, height: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? null : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.3, width: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? media_query.MediaQuery.of(this.context).size.width : dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.45, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new text$.Text.new(core.String._check(dart.dsend(i, '_get', ["title"])), {textAlign: ui.TextAlign.start, style: new text_style.TextStyle.new({fontSize: 22.0, wordSpacing: 3.0}), $creationLocationd_0dea112b090073317d4: C100 || CT.C100}), new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 5.0}), child: new text$.Text.new(core.String._check(dart.dsend(i, '_get', ["text"])), {textAlign: ui.TextAlign.start, style: new text_style.TextStyle.new({fontSize: 15.0, wordSpacing: 2.0}), $creationLocationd_0dea112b090073317d4: C105 || CT.C105}), $creationLocationd_0dea112b090073317d4: C110 || CT.C110}), new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 15.0}), child: new text$.Text.new(core.String._check(dart.dsend(i, '_get', ["summary"])), {textAlign: ui.TextAlign.start, style: new text_style.TextStyle.new({fontSize: 14.0, color: colors.Colors.black54, wordSpacing: 2.0}), $creationLocationd_0dea112b090073317d4: C114 || CT.C114}), $creationLocationd_0dea112b090073317d4: C119 || CT.C119}), this[_buildSkillsContainerHeading]("Responsibilities"), new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 5.0}), child: new text$.Text.new(core.String._check(dart.dsend(i, '_get', ["summary2"])), {textAlign: ui.TextAlign.start, style: new text_style.TextStyle.new({fontSize: 14.0, color: colors.Colors.black54, wordSpacing: 2.0}), $creationLocationd_0dea112b090073317d4: C123 || CT.C123}), $creationLocationd_0dea112b090073317d4: C128 || CT.C128}), this[_buildSkills](this.context, i, sizingInformation)]), $creationLocationd_0dea112b090073317d4: C132 || CT.C132}), $creationLocationd_0dea112b090073317d4: C137 || CT.C137});
    }
    [_buildSkills](context, i, sizingInformation) {
      let tech = core.String._check(dart.dsend(i, '_get', ["techUsed"]));
      let widgets = tech[$split](",")[$map](basic.Padding, dart.fn(skill => new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 8.0}), child: this[_buildSkillChip](context, skill), $creationLocationd_0dea112b090073317d4: C143 || CT.C143}), StringToPadding()))[$toList]();
      return new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 12.0}), width: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? null : dart.notNull(media_query.MediaQuery.of(context).size.width) * 0.5, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([this[_buildSkillsContainerHeading]("Skills Used"), new basic.Wrap.new({children: widgets, $creationLocationd_0dea112b090073317d4: C147 || CT.C147})]), $creationLocationd_0dea112b090073317d4: C150 || CT.C150}), $creationLocationd_0dea112b090073317d4: C154 || CT.C154});
    }
    [_buildSkillsContainerHeading](text) {
      return new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 10.0}), child: new text$.Text.new(text, {style: new text_style.TextStyle.new({fontSize: 16.0, wordSpacing: 3.0}), $creationLocationd_0dea112b090073317d4: C159 || CT.C159}), $creationLocationd_0dea112b090073317d4: C163 || CT.C163});
    }
    [_buildSkillChip](context, label) {
      return new chip.Chip.new({label: new text$.Text.new(label, {style: new text_style.TextStyle.new({fontSize: 10.0}), $creationLocationd_0dea112b090073317d4: C167 || CT.C167}), $creationLocationd_0dea112b090073317d4: C171 || CT.C171});
    }
  };
  (Projects_page.ProjectsPageState.new = function() {
    this[projectList] = JSArrayOfMapOfString$Object().of([new (IdentityMapOfString$Object()).from(["title", "Artbandhu - Career Discovery Platform", "image", "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/artbandhu.png?alt=media&token=3d5c3831-6f00-4522-be71-3db8f4ced9a1", "text", "Social Art Feed Application for local artist and community", "summary", "Artbandhu app helps millions of creative professionals/artist succeed with upskilling and on-demand creative jobs & monetization opportunities, around the world", "summary2", "Worked on front end for the app with Dart and Flutter \nSocial Logins using firebase authentication \nUsed Firebase storage for file uploads \nEnsuring project quality and timely resolution of issues.", "techUsed", "Flutter, Dart, Firebase Authentication, Firebase Storage, Native Android, iOS ", "storeLink", "https://play.google.com/store/apps/details?id=com.artbandhu.Artbandhu", "color", colors.Colors.amber.shade50.withOpacity(0.9), "txtColor", colors.Colors.orange]), new (IdentityMapOfString$Object()).from(["title", "FitApp - Home Workouts Guide", "text", "Home Workout application with Tips for weight loss", "summary2", "Designed and developed front end for the app with Native Android, Java \nUsed Firebase Storage and Firebase Database for application data\nFirebase Cloud messaging for Implementing Push Notifications\nWorked end to end from designing to app upload process", "summary", "Home Workouts and Fitness Application helps to improve fitness and health by providing programs specific to body parts and exercise routines of indivisuals", "image", "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/fit.png?alt=media&token=096b9613-65ae-4e7b-aa9c-b41594e1cd3f", "techUsed", " Native Android, Java, Firebase, Firebase Cloud Messaging, Firebase Storage, Firebase Database", "storeLink", "https://play.google.com/store/apps/details?id=com.kakroo.shashank.fitapp", "color", colors.Colors.lime.shade100.withOpacity(0.9), "txtColor", colors.Colors.green.shade700]), new (IdentityMapOfString$Object()).from(["title", "Gulf VPN", "text", "Open VPN Client for Android", "summary2", "Designed and developed front end for the app with Native Android\nImplemented Open VPN SDK for android\nWorked on google in app purchase", "summary", "Gulf VPN with help of Open VPN SDK provides users access to more than 100 remote servers for securing their connections", "image", "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/vpn.png?alt=media&token=444b6163-a138-4653-aae0-15ed03a4ff08", "techUsed", " Native Android, Java, Firebase, Firebase Cloud Messaging, Firebase Storage, Open VPN", "storeLink", "https://play.google.com/store/apps/details?id=free.vpn.unblock.proxy.gulfVPN", "color", colors.Colors.lightBlueAccent.shade100.withOpacity(0.9), "txtColor", colors.Colors.blue.shade700]), new (IdentityMapOfString$Object()).from(["title", "My Android", "summary", "My Android application helps you with all details related to your android device such as RAM, Memory Utilized, Internet Compumption etc", "summary2", "Designed and developed front end for the app with Native Android\nEnsuring project quality and timely resolution of issues.", "image", "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/myandroid.png?alt=media&token=b1ce4864-4d5c-45e9-81de-14ee5c3c6ab8", "text", "Android Utility Application", "techUsed", " Native Android, Java, Firebase, Firebase Cloud Messaging, Firebase Storage", "storeLink", "https://play.google.com/store/apps/details?id=com.innovationm.myandroid", "color", colors.Colors.yellowAccent.shade100.withOpacity(0.9), "txtColor", colors.Colors.deepOrangeAccent.shade200]), new (IdentityMapOfString$Object()).from(["title", "Abu Dhabi Commercial Bank - PROCASH", "text", "ADCB Coorporate Banking Applicaton", "summary", "This application is the ADCB's Coorporate Banking Applicaton, enabling coorporates to do trasaction Initiations, request approvals and give account insights ", "summary2", "Configured Kony services  over Kony fabric that collaborates with backend services\nWorked on Biometrics integration on mobile\nWorked on transaction initiation module from front end\nWritten android native code and implemented with Kony as FFI", "image", "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/procash.png?alt=media&token=a63567af-ab05-40c2-a925-58eac5527a9c", "techUsed", "Kony Vizualizer 7.x, Kony Mobile Fabric & Middleware, Native Android", "storeLink", "https://play.google.com/store/apps/details?id=com.adcbapp.ProCashLite&hl=en", "color", colors.Colors.lightGreenAccent.shade100.withOpacity(0.9), "txtColor", colors.Colors.lightGreenAccent.shade700]), new (IdentityMapOfString$Object()).from(["title", "Ooredoo, Qatar", "text", "HRMS Mobile Application", "summary2", "Configured Kony services  over Kony fabric that collaborates with backend services\nWritten Java pre-processors and post -processors\n.Worked on Android push notification implementation with Kony\nWritten android native code and implemented with Kony as FFI.", "image", "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/ooredoo.png?alt=media&token=d0fb7c7b-9226-4135-a035-0abb3a03af56", "summary", "This application is HRMS application targeted for Ooredoo Qatar employees which is an implementation of their oracle based portal.", "techUsed", "Kony Vizualizer 8.x, Kony Mobile Fabric & Middleware, Native Android, Firebase Cloud Messaging", "storeLink", "https://play.google.com/store/apps/details?id=qa.ooredoo.android", "color", colors.Colors.deepOrangeAccent.shade100.withOpacity(0.9), "txtColor", colors.Colors.deepOrangeAccent.shade700]), new (IdentityMapOfString$Object()).from(["title", "Ministry of Economy and Commerce B2C– Qatar", "summary", "This application is a B2C app for businesses and citizens of Qatar. This app provides a platform for businesses to register and carry all taxation related transactions. For citizens this app acts as a medium of information to understand their quota of food grains allotted along with and knowing the daily rates", "summary2", "Worked on Kony JSON services  over Kony fabric\nWritten Java pre-processors and post -processors\nWorked on Integration of ArGis Native Maps with Kony Application\nIntegration of JavaScript based Maps SDK with Kony Application.", "image", "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/qatar.png?alt=media&token=35f7d8b1-ebfc-4f90-90ac-3267cb1bda59", "text", "B2C App for Businesses and Citizens of Qatar", "techUsed", "Kony Vizualizer 7.x, Kony Mobile Fabric & Middleware, Native Android, Firebase Cloud Messaging, ArGis Native Maps", "storeLink", "https://play.google.com/store/apps/details?id=com.mbt.mbt&hl=en", "color", colors.Colors.purpleAccent.shade100.withOpacity(0.9), "txtColor", colors.Colors.purpleAccent.shade700]), new (IdentityMapOfString$Object()).from(["title", "QR Employee – Qatar Rail, Qatar", "summary", "This application is HRMS application targeted for Qatar Rail employees, which is an implementation of their SharePoint based portal and ERP System.Developed for Mobile (Android, IOS Platform) and desktop", "summary2", "Configured Kony services  over Kony fabric that collaborates with backend services\nWritten Java pre-processors and post -processors\n.Worked on Android push notification implementation with Kony\nWritten android native code and implemented with Kony as FFI.", "image", "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/145-1458097_qatar-rail-logo-png.png?alt=media&token=97405e91-501c-484e-981a-5f14a344ea43", "text", "HRMS application targeted for Qatar Rail employees", "techUsed", "Kony Vizualizer 7.x, Kony Mobile Fabric & Middleware, Native Android", "storeLink", "https://play.google.com/store/apps/details?id=com.mbt.mbt&hl=en", "color", colors.Colors.red.shade300.withOpacity(0.9), "txtColor", colors.Colors.lightGreenAccent.shade700])]);
    Projects_page.ProjectsPageState.__proto__.new.call(this);
    ;
  }).prototype = Projects_page.ProjectsPageState.prototype;
  dart.addTypeTests(Projects_page.ProjectsPageState);
  const projectList = Symbol("ProjectsPageState.projectList");
  dart.setMethodSignature(Projects_page.ProjectsPageState, () => ({
    __proto__: dart.getMethods(Projects_page.ProjectsPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_getProjectsContent]: dart.fnType(dart.dynamic, [sizing_info.SizingInformation]),
    [_getContentForProjMob]: dart.fnType(dart.dynamic, [sizing_info.SizingInformation]),
    [_getContentForProjDesk]: dart.fnType(dart.dynamic, [sizing_info.SizingInformation]),
    [_buildAboutMe]: dart.fnType(framework.Widget, [framework.BuildContext, dart.dynamic]),
    [_projectsGrid]: dart.fnType(framework.Widget, [framework.BuildContext, dart.dynamic]),
    [_launchURL]: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_sectionImage]: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic]),
    [_sectionData]: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic]),
    [_buildSkills]: dart.fnType(framework.Widget, [framework.BuildContext, dart.dynamic, dart.dynamic]),
    [_buildSkillsContainerHeading]: dart.fnType(framework.Widget, [core.String]),
    [_buildSkillChip]: dart.fnType(framework.Widget, [framework.BuildContext, core.String])
  }));
  dart.setLibraryUri(Projects_page.ProjectsPageState, "package:kakro/ui/Projects_page.dart");
  dart.setFieldSignature(Projects_page.ProjectsPageState, () => ({
    __proto__: dart.getFields(Projects_page.ProjectsPageState.__proto__),
    projectList: dart.finalFieldType(core.List$(core.Map$(core.String, core.Object)))
  }));
  dart.trackLibraries("packages/kakro/ui/Projects_page", {
    "package:kakro/ui/Projects_page.dart": Projects_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Projects_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"Projects_page.ddc.js"}');
  // Exports:
  return {
    ui__Projects_page: Projects_page
  };
});

//# sourceMappingURL=Projects_page.ddc.js.map
