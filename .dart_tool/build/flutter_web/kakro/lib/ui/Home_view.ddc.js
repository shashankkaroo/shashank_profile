define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/kakro/ui/BaseWidget', 'packages/flutter/material', 'packages/kakro/ui/About_page', 'packages/kakro/ui/Projects_page', 'packages/kakro/ui/Contact_page', 'packages/kakro/ui/sizing_info', 'packages/kakro/enums/device_screen_size', 'packages/flutter/src/animation/animation', 'packages/flutter/src/painting/_network_image_web', 'packages/kakro/ui/FadeIn'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__kakro__ui__BaseWidget, packages__flutter__material, packages__kakro__ui__About_page, packages__kakro__ui__Projects_page, packages__kakro__ui__Contact_page, packages__kakro__ui__sizing_info, packages__kakro__enums__device_screen_size, packages__flutter__src__animation__animation, packages__flutter__src__painting___network_image_web, packages__kakro__ui__FadeIn) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const preferred_size = packages__flutter__src__widgets__actions.src__widgets__preferred_size;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const scrollable = packages__flutter__src__widgets__actions.src__widgets__scrollable;
  const bottom_navigation_bar_item = packages__flutter__src__widgets__actions.src__widgets__bottom_navigation_bar_item;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const BaseWidget = packages__kakro__ui__BaseWidget.ui__BaseWidget;
  const material = packages__flutter__material.src__material__material;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const floating_action_button = packages__flutter__material.src__material__floating_action_button;
  const bottom_navigation_bar = packages__flutter__material.src__material__bottom_navigation_bar;
  const theme = packages__flutter__material.src__material__theme;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const material_button = packages__flutter__material.src__material__material_button;
  const About_page = packages__kakro__ui__About_page.ui__About_page;
  const Projects_page = packages__kakro__ui__Projects_page.ui__Projects_page;
  const Contact_page = packages__kakro__ui__Contact_page.ui__Contact_page;
  const sizing_info = packages__kakro__ui__sizing_info.ui__sizing_info;
  const device_screen_size = packages__kakro__enums__device_screen_size.enums__device_screen_size;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const FadeIn = packages__kakro__ui__FadeIn.ui__FadeIn;
  const Home_view = Object.create(dart.library);
  const $href = dartx.href;
  const $location = dartx.location;
  const $window = dartx.window;
  let StateOfStatefulWidget = () => (StateOfStatefulWidget = dart.constFn(framework.State$(framework.StatefulWidget)))();
  let GlobalKeyOfStateOfStatefulWidget = () => (GlobalKeyOfStateOfStatefulWidget = dart.constFn(framework.GlobalKey$(StateOfStatefulWidget())))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndSizingInformationToMaterial = () => (BuildContextAndSizingInformationToMaterial = dart.constFn(dart.fnType(material.Material, [framework.BuildContext, sizing_info.SizingInformation])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let intTodynamic = () => (intTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "sizingInformation",
        column: 33,
        line: 42,
        file: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "aboutKey",
        column: 52,
        line: 42,
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
        column: 25,
        line: 42,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "projectKey",
        column: 38,
        line: 43,
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
        column: 25,
        line: 43,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "projectKey",
        column: 37,
        line: 44,
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
        column: 25,
        line: 44,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 23,
        line: 41,
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
        column: 28,
        line: 40,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 21,
        line: 40,
        file: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C14 || CT.C14,
        name: null,
        column: 26,
        line: 39,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 19,
        line: 38,
        file: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 39,
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
        column: 21,
        line: 37,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundColor",
        column: 15,
        line: 31,
        file: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "appBar",
        column: 15,
        line: 32,
        file: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "bottomNavigationBar",
        column: 15,
        line: 33,
        file: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "floatingActionButton",
        column: 15,
        line: 35,
        file: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 15,
        line: 37,
        file: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C21 || CT.C21,
        name: null,
        column: 18,
        line: 30,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 30,
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
        column: 14,
        line: 29,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 23,
        line: 28,
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
        column: 12,
        line: 28,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 34,
        line: 67,
        file: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C34 || CT.C34,
        name: null,
        column: 26,
        line: 67,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 13,
        line: 61,
        file: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mini",
        column: 9,
        line: 65,
        file: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "hoverElevation",
        column: 9,
        line: 66,
        file: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 67,
        file: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C37 || CT.C37,
        name: null,
        column: 11,
        line: 60,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: text.Text.prototype,
        key: null,
        textWidthBasis: null,
        semanticsLabel: null,
        maxLines: null,
        textScaleFactor: null,
        overflow: null,
        softWrap: null,
        locale: null,
        textDirection: null,
        textAlign: null,
        strutStyle: null,
        style: null,
        textSpan: null,
        data: "About"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: icon_data.IconData.prototype,
        matchTextDirection: false,
        fontPackage: null,
        fontFamily: "MaterialIcons",
        codePoint: 59475
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: icon.Icon.prototype,
        key: null,
        textDirection: null,
        semanticLabel: null,
        color: null,
        size: null,
        icon: C46 || CT.C46
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        backgroundColor: null,
        title: C44 || CT.C44,
        activeIcon: C45 || CT.C45,
        icon: C45 || CT.C45
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: text.Text.prototype,
        key: null,
        textWidthBasis: null,
        semanticsLabel: null,
        maxLines: null,
        textScaleFactor: null,
        overflow: null,
        softWrap: null,
        locale: null,
        textDirection: null,
        textAlign: null,
        strutStyle: null,
        style: null,
        textSpan: null,
        data: "Projects"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: icon_data.IconData.prototype,
        matchTextDirection: true,
        fontPackage: null,
        fontFamily: "MaterialIcons",
        codePoint: 59501
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: icon.Icon.prototype,
        key: null,
        textDirection: null,
        semanticLabel: null,
        color: null,
        size: null,
        icon: C50 || CT.C50
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        backgroundColor: null,
        title: C48 || CT.C48,
        activeIcon: C49 || CT.C49,
        icon: C49 || CT.C49
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: text.Text.prototype,
        key: null,
        textWidthBasis: null,
        semanticsLabel: null,
        maxLines: null,
        textScaleFactor: null,
        overflow: null,
        softWrap: null,
        locale: null,
        textDirection: null,
        textAlign: null,
        strutStyle: null,
        style: null,
        textSpan: null,
        data: "Contact Me"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: icon_data.IconData.prototype,
        matchTextDirection: true,
        fontPackage: null,
        fontFamily: "MaterialIcons",
        codePoint: 57575
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: icon.Icon.prototype,
        key: null,
        textDirection: null,
        semanticLabel: null,
        color: null,
        size: null,
        icon: C54 || CT.C54
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        backgroundColor: null,
        title: C52 || CT.C52,
        activeIcon: C53 || CT.C53,
        icon: C53 || CT.C53
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C47 || CT.C47, C51 || CT.C51], bottom_navigation_bar_item.BottomNavigationBarItem);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "items",
        column: 13,
        line: 94,
        file: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "currentIndex",
        column: 13,
        line: 108,
        file: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 13,
        line: 109,
        file: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "selectedItemColor",
        column: 13,
        line: 110,
        file: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C56 || CT.C56,
        name: null,
        column: 11,
        line: 93,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 9,
        line: 122,
        file: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 9,
        line: 123,
        file: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C62 || CT.C62,
        name: null,
        column: 14,
        line: 121,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "titleSpacing",
        column: 7,
        line: 117,
        file: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "centerTitle",
        column: 7,
        line: 118,
        file: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 7,
        line: 121,
        file: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundColor",
        column: 7,
        line: 130,
        file: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "elevation",
        column: 7,
        line: 131,
        file: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "actions",
        column: 7,
        line: 132,
        file: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C66 || CT.C66,
        name: null,
        column: 12,
        line: 116,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 15,
        line: 145,
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
        column: 20,
        line: 144,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 13,
        line: 143,
        file: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 144,
        file: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 13,
        line: 147,
        file: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "focusColor",
        column: 13,
        line: 150,
        file: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "autofocus",
        column: 13,
        line: 151,
        file: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79, C80 || CT.C80, C81 || CT.C81, C82 || CT.C82], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C77 || CT.C77,
        name: null,
        column: 11,
        line: 142,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 11,
        line: 141,
        file: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 142,
        file: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 11,
        line: 153,
        file: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C84 || CT.C84,
        name: null,
        column: 7,
        line: 140,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 15,
        line: 159,
        file: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C89 || CT.C89,
        name: null,
        column: 20,
        line: 158,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 13,
        line: 157,
        file: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 158,
        file: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "focusColor",
        column: 13,
        line: 161,
        file: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 13,
        line: 162,
        file: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94, C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C92 || CT.C92,
        name: null,
        column: 11,
        line: 156,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 11,
        line: 155,
        file: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 156,
        file: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 11,
        line: 166,
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
        column: 7,
        line: 154,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 15,
        line: 172,
        file: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C103 || CT.C103,
        name: null,
        column: 20,
        line: 171,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 13,
        line: 170,
        file: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 171,
        file: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "focusColor",
        column: 13,
        line: 174,
        file: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 13,
        line: 175,
        file: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107, C108 || CT.C108, C109 || CT.C109, C110 || CT.C110], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C106 || CT.C106,
        name: null,
        column: 11,
        line: 169,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 11,
        line: 168,
        file: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 169,
        file: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 11,
        line: 179,
        file: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113, C114 || CT.C114, C115 || CT.C115], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C112 || CT.C112,
        name: null,
        column: 7,
        line: 167,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    }
  });
  Home_view.HomeView = class HomeView extends framework.StatefulWidget {
    createState() {
      return new Home_view._HomeViewState.new();
    }
  };
  (Home_view.HomeView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    Home_view.HomeView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = Home_view.HomeView.prototype;
  dart.addTypeTests(Home_view.HomeView);
  dart.setMethodSignature(Home_view.HomeView, () => ({
    __proto__: dart.getMethods(Home_view.HomeView.__proto__),
    createState: dart.fnType(Home_view._HomeViewState, [])
  }));
  dart.setLibraryUri(Home_view.HomeView, "package:kakro/ui/Home_view.dart");
  const _selectedIndex = dart.privateName(Home_view, "_selectedIndex");
  const _buildAppBar = dart.privateName(Home_view, "_buildAppBar");
  const _buildBottomNavigation = dart.privateName(Home_view, "_buildBottomNavigation");
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
  let C15;
  let C14;
  let C13;
  let C18;
  let C19;
  let C17;
  let C16;
  let C22;
  let C23;
  let C24;
  let C25;
  let C26;
  let C21;
  let C20;
  let C29;
  let C28;
  let C27;
  let C32;
  let C31;
  let C30;
  const _launchURL = dart.privateName(Home_view, "_launchURL");
  let C35;
  let C34;
  let C33;
  let C38;
  let C39;
  let C40;
  let C41;
  let C37;
  let C36;
  let C44;
  let C46;
  let C45;
  let C43;
  let C48;
  let C50;
  let C49;
  let C47;
  let C52;
  let C54;
  let C53;
  let C51;
  let C42;
  let C57;
  let C58;
  let C59;
  let C60;
  let C56;
  let C55;
  let C63;
  let C64;
  let C62;
  let C61;
  const _buildActions = dart.privateName(Home_view, "_buildActions");
  let C67;
  let C68;
  let C69;
  let C70;
  let C71;
  let C72;
  let C66;
  let C65;
  let C75;
  let C74;
  let C73;
  let C78;
  let C79;
  let C80;
  let C81;
  let C82;
  let C77;
  let C76;
  let C85;
  let C86;
  let C87;
  let C84;
  let C83;
  let C90;
  let C89;
  let C88;
  let C93;
  let C94;
  let C95;
  let C96;
  let C92;
  let C91;
  let C99;
  let C100;
  let C101;
  let C98;
  let C97;
  let C104;
  let C103;
  let C102;
  let C107;
  let C108;
  let C109;
  let C110;
  let C106;
  let C105;
  let C113;
  let C114;
  let C115;
  let C112;
  let C111;
  Home_view._HomeViewState = class _HomeViewState extends framework.State$(Home_view.HomeView) {
    build(context) {
      return new BaseWidget.BaseWidget.new({builder: dart.fn((context, sizingInformation) => new material.Material.new({child: new scaffold.Scaffold.new({backgroundColor: colors.Colors.transparent, appBar: preferred_size.PreferredSizeWidget._check(this[_buildAppBar](context, sizingInformation)), bottomNavigationBar: this[_buildBottomNavigation](context, sizingInformation), floatingActionButton: framework.Widget._check(this.buildFloatingButton(context, sizingInformation)), body: new container.Container.new({height: media_query.MediaQuery.of(context).size.height, child: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new About_page.AboutMe.new(sizingInformation, this.aboutKey, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new Projects_page.ProjectsPage.new(this.projectKey, {$creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new Contact_page.ContactPage.new(this.contactKey, {$creationLocationd_0dea112b090073317d4: C7 || CT.C7})]), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), BuildContextAndSizingInformationToMaterial()), $creationLocationd_0dea112b090073317d4: C30 || CT.C30});
    }
    [_launchURL](url) {
      return async.async(dart.dynamic, function* _launchURL() {
        html.document[$window][$location][$href] = core.String._check(url);
      });
    }
    buildFloatingButton(context, sizingInformation) {
      return dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? new floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => {
          core.print("on pressed");
          this[_launchURL]("https://wa.me/971564699985");
        }, VoidToNull()), mini: false, hoverElevation: 5.0, child: new image.Image.network("https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/whatsapp.png?alt=media&token=bbf5ff50-8233-47d4-a2cc-c38692dd42e7", {$creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}) : null;
    }
    returnSelectedTab(_selectedIndex) {
      if (dart.equals(_selectedIndex, 0)) {
        scrollable.Scrollable.ensureVisible(this.aboutKey.currentContext, {duration: new core.Duration.new({milliseconds: 400}), curve: curves.Curves.easeInOut});
      } else if (dart.equals(_selectedIndex, 1)) {
        scrollable.Scrollable.ensureVisible(this.projectKey.currentContext, {alignment: 0.0, duration: new core.Duration.new({milliseconds: 400}), curve: curves.Curves.easeInOut});
      } else {
        scrollable.Scrollable.ensureVisible(this.contactKey.currentContext, {alignment: 0.0, duration: new core.Duration.new({milliseconds: 400}), curve: curves.Curves.easeInOut});
      }
    }
    [_buildBottomNavigation](context, sizingInformation) {
      return dart.equals(sizingInformation.deviceType, device_screen_size.DeviceScreenType.Desktop) ? null : new bottom_navigation_bar.BottomNavigationBar.new({items: C42 || CT.C42, currentIndex: this[_selectedIndex], onTap: dart.fn(index => this.returnSelectedTab(index), intTodynamic()), selectedItemColor: theme.Theme.of(context).accentColor, $creationLocationd_0dea112b090073317d4: C55 || CT.C55});
    }
    [_buildAppBar](context, sizingInformation) {
      return new app_bar.AppBar.new({titleSpacing: 10.0, centerTitle: dart.equals(sizingInformation.deviceType, device_screen_size.DeviceScreenType.Mobile) ? true : false, title: new text.Text.new("Shashank Kakroo", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, letterSpacing: 2.0, fontFamily: "ReemKufi", color: colors.Colors.black, fontSize: 35.0}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), backgroundColor: colors.Colors.transparent, elevation: 0.0, actions: dart.equals(sizingInformation.deviceType, device_screen_size.DeviceScreenType.Desktop) ? this[_buildActions]() : null, $creationLocationd_0dea112b090073317d4: C65 || CT.C65});
    }
    [_buildActions]() {
      return JSArrayOfWidget().of([new FadeIn.FadeIn.new(2.0, new material_button.MaterialButton.new({padding: new edge_insets.EdgeInsets.only({right: 50.0}), child: new text.Text.new("About Me", {$creationLocationd_0dea112b090073317d4: C73 || CT.C73}), onPressed: dart.fn(() => {
            this.returnSelectedTab(0);
          }, VoidToNull()), focusColor: colors.Colors.greenAccent, autofocus: true, $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), "right", {$creationLocationd_0dea112b090073317d4: C83 || CT.C83}), new FadeIn.FadeIn.new(2.33, new material_button.MaterialButton.new({padding: new edge_insets.EdgeInsets.only({right: 50.0}), child: new text.Text.new("Projects", {$creationLocationd_0dea112b090073317d4: C88 || CT.C88}), focusColor: colors.Colors.greenAccent, onPressed: dart.fn(() => {
            this.returnSelectedTab(1);
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), "right", {$creationLocationd_0dea112b090073317d4: C97 || CT.C97}), new FadeIn.FadeIn.new(2.66, new material_button.MaterialButton.new({padding: new edge_insets.EdgeInsets.only({right: 50.0}), child: new text.Text.new("Contact Me", {$creationLocationd_0dea112b090073317d4: C102 || CT.C102}), focusColor: colors.Colors.greenAccent, onPressed: dart.fn(() => {
            this.returnSelectedTab(2);
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C105 || CT.C105}), "right", {$creationLocationd_0dea112b090073317d4: C111 || CT.C111})]);
    }
  };
  (Home_view._HomeViewState.new = function() {
    this[_selectedIndex] = 0;
    this.aboutKey = GlobalKeyOfStateOfStatefulWidget().new();
    this.projectKey = GlobalKeyOfStateOfStatefulWidget().new();
    this.contactKey = GlobalKeyOfStateOfStatefulWidget().new();
    Home_view._HomeViewState.__proto__.new.call(this);
    ;
  }).prototype = Home_view._HomeViewState.prototype;
  dart.addTypeTests(Home_view._HomeViewState);
  dart.setMethodSignature(Home_view._HomeViewState, () => ({
    __proto__: dart.getMethods(Home_view._HomeViewState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_launchURL]: dart.fnType(dart.dynamic, [dart.dynamic]),
    buildFloatingButton: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic]),
    returnSelectedTab: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_buildBottomNavigation]: dart.fnType(framework.Widget, [framework.BuildContext, sizing_info.SizingInformation]),
    [_buildAppBar]: dart.fnType(framework.Widget, [framework.BuildContext, sizing_info.SizingInformation]),
    [_buildActions]: dart.fnType(core.List$(framework.Widget), [])
  }));
  dart.setLibraryUri(Home_view._HomeViewState, "package:kakro/ui/Home_view.dart");
  dart.setFieldSignature(Home_view._HomeViewState, () => ({
    __proto__: dart.getFields(Home_view._HomeViewState.__proto__),
    [_selectedIndex]: dart.fieldType(core.int),
    aboutKey: dart.finalFieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget))),
    projectKey: dart.finalFieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget))),
    contactKey: dart.finalFieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget)))
  }));
  dart.trackLibraries("packages/kakro/ui/Home_view", {
    "package:kakro/ui/Home_view.dart": Home_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Home_view.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAekC;IAAgB;;;QAFlC;;AAAQ,sDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAaX;AACxB,YAAO,yCAAoB,SAAC,SAAS,sBAC5B,kCACI,4CACqB,6EAChB,mBAAa,OAAO,EAAE,iBAAiB,yBAE3C,6BAAuB,OAAO,EAAE,iBAAiB,iDAEjD,yBAAoB,OAAO,EAAE,iBAAiB,UAC5C,qCACiB,AAAY,AAAK,0BAAd,OAAO,sBACtB,+DACE,gCACa,sBAChB,2BAAQ,iBAAiB,EAAE,uEAC3B,mCAAa,yEACb,iCAAY;IAOlC;iBAEW;AAAD;QAEH,AAAS,AAAO,AAAS,2CAAA,mBAAO,GAAG;MAC1C;;wBAEoB,SAAS;AAC3B,YAAqC,aAAX,WAAlB,iBAAiB,iBAAgC,8CACnD,gEACa;UACT,WAAM;UACN,iBAAW;gCAEX,uBACU,YACC,wBAAQ,mQAEvB;IACR;sBAEkB;AAChB,UAAmB,YAAf,cAAc,EAAI;QACT,oCAAc,AAAS,yCACpB,qCAAuB,cAAoB;YACpD,KAAmB,YAAf,cAAc,EAAI;QAChB,oCAAc,AAAW,4CACrB,eACD,qCAAuB,cACnB;;QAEP,oCAAc,AAAW,4CACrB,eACD,qCAAuB,cACnB;;IAEtB;6BAGiB,SAA2B;AAC1C,YAAqC,aAA7B,AAAkB,iBAAD,aAAgC,+CACnD,OACA,uFAegB,6BACP,QAAC,SAAU,uBAAkB,KAAK,uCAChB,AAAY,eAAT,OAAO;IAE7C;mBAGiB,SAA2B;AAC1C,YAAO,uCACS,mBAC4B,YAA7B,AAAkB,iBAAD,aAAgC,8CACxD,OACA,cACC,kBACL,2BACO,0CACoB,mCACR,iBACH,mBACE,+BACJ,kFAEQ,sCACb,cAC4B,YAA7B,AAAkB,iBAAD,aAAgC,+CACrD,wBACA;IAEV;;AAGE,YAAe,uBACb,sBACI,KACA,iDACsB,wCAAY,eACzB,kBACL,iFAES;YACT,uBAAkB;wCAED,sCACR,+DAEb,mEACJ,sBACI,MACA,iDACsB,wCAAY,eACzB,kBACL,kFAEiB,sCACR;YACT,uBAAkB;qFAGtB,mEACJ,sBACI,MACA,iDACsB,wCAAY,eACzB,kBACL,sFAEiB,sCACR;YACT,uBAAkB;uFAGtB;IAER;;;IAjKI,uBAAiB;IAEf,gBAAe;IACf,kBAAiB;IACjB,kBAAiB;;;EA8JzB","file":"Home_view.ddc.js"}');
  // Exports:
  return {
    ui__Home_view: Home_view
  };
});

//# sourceMappingURL=Home_view.ddc.js.map
