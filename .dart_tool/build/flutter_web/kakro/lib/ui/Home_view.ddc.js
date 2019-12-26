define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/kakro/ui/BaseWidget', 'packages/flutter/material', 'packages/kakro/ui/About_page', 'packages/kakro/ui/Projects_page', 'packages/kakro/ui/Contact_page', 'packages/kakro/ui/sizing_info', 'packages/flutter/src/animation/animation', 'packages/kakro/enums/device_screen_size', 'packages/flutter/src/painting/_network_image_web', 'packages/kakro/ui/FadeIn'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__kakro__ui__BaseWidget, packages__flutter__material, packages__kakro__ui__About_page, packages__kakro__ui__Projects_page, packages__kakro__ui__Contact_page, packages__kakro__ui__sizing_info, packages__flutter__src__animation__animation, packages__kakro__enums__device_screen_size, packages__flutter__src__painting___network_image_web, packages__kakro__ui__FadeIn) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
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
  const scrollable = packages__flutter__src__widgets__actions.src__widgets__scrollable;
  const bottom_navigation_bar_item = packages__flutter__src__widgets__actions.src__widgets__bottom_navigation_bar_item;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const BaseWidget = packages__kakro__ui__BaseWidget.ui__BaseWidget;
  const material = packages__flutter__material.src__material__material;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const bottom_navigation_bar = packages__flutter__material.src__material__bottom_navigation_bar;
  const theme = packages__flutter__material.src__material__theme;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const material_button = packages__flutter__material.src__material__material_button;
  const About_page = packages__kakro__ui__About_page.ui__About_page;
  const Projects_page = packages__kakro__ui__Projects_page.ui__Projects_page;
  const Contact_page = packages__kakro__ui__Contact_page.ui__Contact_page;
  const sizing_info = packages__kakro__ui__sizing_info.ui__sizing_info;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const device_screen_size = packages__kakro__enums__device_screen_size.enums__device_screen_size;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const FadeIn = packages__kakro__ui__FadeIn.ui__FadeIn;
  const Home_view = Object.create(dart.library);
  let StateOfStatefulWidget = () => (StateOfStatefulWidget = dart.constFn(framework.State$(framework.StatefulWidget)))();
  let GlobalKeyOfStateOfStatefulWidget = () => (GlobalKeyOfStateOfStatefulWidget = dart.constFn(framework.GlobalKey$(StateOfStatefulWidget())))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndSizingInformationToMaterial = () => (BuildContextAndSizingInformationToMaterial = dart.constFn(dart.fnType(material.Material, [framework.BuildContext, sizing_info.SizingInformation])))();
  let intTodynamic = () => (intTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "sizingInformation",
        column: 28,
        line: 37,
        file: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "aboutKey",
        column: 47,
        line: 37,
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
        column: 20,
        line: 37,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "projectKey",
        column: 34,
        line: 38,
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
        column: 21,
        line: 38,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "contactKey",
        column: 32,
        line: 39,
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
        column: 20,
        line: 39,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 19,
        line: 36,
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
        column: 24,
        line: 35,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 17,
        line: 35,
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
        line: 34,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 17,
        line: 33,
        file: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 34,
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
        line: 32,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundColor",
        column: 15,
        line: 28,
        file: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "appBar",
        column: 15,
        line: 29,
        file: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "bottomNavigationBar",
        column: 15,
        line: 30,
        file: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 15,
        line: 32,
        file: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C21 || CT.C21,
        name: null,
        column: 18,
        line: 27,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 27,
        file: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C27 || CT.C27,
        name: null,
        column: 14,
        line: 26,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 23,
        line: 25,
        file: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C30 || CT.C30,
        name: null,
        column: 12,
        line: 25,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
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
    get C36() {
      return C36 = dart.const({
        __proto__: icon_data.IconData.prototype,
        matchTextDirection: false,
        fontPackage: null,
        fontFamily: "MaterialIcons",
        codePoint: 59475
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: icon.Icon.prototype,
        key: null,
        textDirection: null,
        semanticLabel: null,
        color: null,
        size: null,
        icon: C36 || CT.C36
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        backgroundColor: null,
        title: C34 || CT.C34,
        activeIcon: C35 || CT.C35,
        icon: C35 || CT.C35
      });
    },
    get C38() {
      return C38 = dart.const({
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
    get C40() {
      return C40 = dart.const({
        __proto__: icon_data.IconData.prototype,
        matchTextDirection: true,
        fontPackage: null,
        fontFamily: "MaterialIcons",
        codePoint: 59501
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: icon.Icon.prototype,
        key: null,
        textDirection: null,
        semanticLabel: null,
        color: null,
        size: null,
        icon: C40 || CT.C40
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        backgroundColor: null,
        title: C38 || CT.C38,
        activeIcon: C39 || CT.C39,
        icon: C39 || CT.C39
      });
    },
    get C42() {
      return C42 = dart.const({
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
    get C44() {
      return C44 = dart.const({
        __proto__: icon_data.IconData.prototype,
        matchTextDirection: true,
        fontPackage: null,
        fontFamily: "MaterialIcons",
        codePoint: 57575
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: icon.Icon.prototype,
        key: null,
        textDirection: null,
        semanticLabel: null,
        color: null,
        size: null,
        icon: C44 || CT.C44
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        backgroundColor: null,
        title: C42 || CT.C42,
        activeIcon: C43 || CT.C43,
        icon: C43 || CT.C43
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C37 || CT.C37, C41 || CT.C41], bottom_navigation_bar_item.BottomNavigationBarItem);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "items",
        column: 13,
        line: 63,
        file: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "currentIndex",
        column: 13,
        line: 77,
        file: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 13,
        line: 78,
        file: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "selectedItemColor",
        column: 13,
        line: 79,
        file: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C46 || CT.C46,
        name: null,
        column: 11,
        line: 62,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 9,
        line: 91,
        file: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 9,
        line: 92,
        file: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C52 || CT.C52,
        name: null,
        column: 14,
        line: 90,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "titleSpacing",
        column: 7,
        line: 86,
        file: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "centerTitle",
        column: 7,
        line: 87,
        file: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 7,
        line: 90,
        file: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundColor",
        column: 7,
        line: 99,
        file: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "elevation",
        column: 7,
        line: 100,
        file: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "actions",
        column: 7,
        line: 101,
        file: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60, C61 || CT.C61, C62 || CT.C62], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C56 || CT.C56,
        name: null,
        column: 12,
        line: 85,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 15,
        line: 114,
        file: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C64 || CT.C64,
        name: null,
        column: 20,
        line: 113,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 13,
        line: 112,
        file: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 113,
        file: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 13,
        line: 116,
        file: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "focusColor",
        column: 13,
        line: 119,
        file: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "autofocus",
        column: 13,
        line: 120,
        file: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C67 || CT.C67,
        name: null,
        column: 11,
        line: 111,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 11,
        line: 110,
        file: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 111,
        file: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 11,
        line: 122,
        file: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C74 || CT.C74,
        name: null,
        column: 7,
        line: 109,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 15,
        line: 128,
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
        column: 20,
        line: 127,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 13,
        line: 126,
        file: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 127,
        file: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "focusColor",
        column: 13,
        line: 130,
        file: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 13,
        line: 131,
        file: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84, C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C82 || CT.C82,
        name: null,
        column: 11,
        line: 125,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 11,
        line: 124,
        file: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 125,
        file: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 11,
        line: 135,
        file: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90, C91 || CT.C91], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C88 || CT.C88,
        name: null,
        column: 7,
        line: 123,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 15,
        line: 141,
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
        column: 20,
        line: 140,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 13,
        line: 139,
        file: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 140,
        file: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "focusColor",
        column: 13,
        line: 143,
        file: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 13,
        line: 144,
        file: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98, C99 || CT.C99, C100 || CT.C100], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C96 || CT.C96,
        name: null,
        column: 11,
        line: 138,
        file: "org-dartlang-app:///packages/kakro/ui/Home_view.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 11,
        line: 137,
        file: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 138,
        file: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 11,
        line: 148,
        file: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103, C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C102 || CT.C102,
        name: null,
        column: 7,
        line: 136,
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
  let C21;
  let C20;
  let C28;
  let C27;
  let C26;
  let C31;
  let C30;
  let C29;
  let C34;
  let C36;
  let C35;
  let C33;
  let C38;
  let C40;
  let C39;
  let C37;
  let C42;
  let C44;
  let C43;
  let C41;
  let C32;
  let C47;
  let C48;
  let C49;
  let C50;
  let C46;
  let C45;
  let C53;
  let C54;
  let C52;
  let C51;
  const _buildActions = dart.privateName(Home_view, "_buildActions");
  let C57;
  let C58;
  let C59;
  let C60;
  let C61;
  let C62;
  let C56;
  let C55;
  let C65;
  let C64;
  let C63;
  let C68;
  let C69;
  let C70;
  let C71;
  let C72;
  let C67;
  let C66;
  let C75;
  let C76;
  let C77;
  let C74;
  let C73;
  let C80;
  let C79;
  let C78;
  let C83;
  let C84;
  let C85;
  let C86;
  let C82;
  let C81;
  let C89;
  let C90;
  let C91;
  let C88;
  let C87;
  let C94;
  let C93;
  let C92;
  let C97;
  let C98;
  let C99;
  let C100;
  let C96;
  let C95;
  let C103;
  let C104;
  let C105;
  let C102;
  let C101;
  Home_view._HomeViewState = class _HomeViewState extends framework.State$(Home_view.HomeView) {
    build(context) {
      return new BaseWidget.BaseWidget.new({builder: dart.fn((context, sizingInformation) => new material.Material.new({child: new scaffold.Scaffold.new({backgroundColor: colors.Colors.transparent, appBar: preferred_size.PreferredSizeWidget._check(this[_buildAppBar](context, sizingInformation)), bottomNavigationBar: this[_buildBottomNavigation](context, sizingInformation), body: new container.Container.new({height: media_query.MediaQuery.of(context).size.height, child: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new About_page.AboutMe.new(sizingInformation, this.aboutKey, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new Projects_page.ProjectsPage.new(this.projectKey, {$creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new Contact_page.ContactPage.new(this.contactKey, {$creationLocationd_0dea112b090073317d4: C7 || CT.C7})]), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), BuildContextAndSizingInformationToMaterial()), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
    returnSelectedTab(_selectedIndex) {
      if (dart.equals(_selectedIndex, 0)) {
        scrollable.Scrollable.ensureVisible(this.aboutKey.currentContext, {duration: new core.Duration.new({milliseconds: 550}), curve: curves.Curves.easeInOut});
      } else if (dart.equals(_selectedIndex, 1)) {
        scrollable.Scrollable.ensureVisible(this.projectKey.currentContext, {alignment: 0.0, duration: new core.Duration.new({milliseconds: 550}), curve: curves.Curves.easeInOut});
      } else {
        scrollable.Scrollable.ensureVisible(this.contactKey.currentContext, {alignment: 0.0, duration: new core.Duration.new({milliseconds: 550}), curve: curves.Curves.easeInOut});
      }
    }
    [_buildBottomNavigation](context, sizingInformation) {
      return dart.equals(sizingInformation.deviceType, device_screen_size.DeviceScreenType.Desktop) ? null : new bottom_navigation_bar.BottomNavigationBar.new({items: C32 || CT.C32, currentIndex: this[_selectedIndex], onTap: dart.fn(index => this.returnSelectedTab(index), intTodynamic()), selectedItemColor: theme.Theme.of(context).accentColor, $creationLocationd_0dea112b090073317d4: C45 || CT.C45});
    }
    [_buildAppBar](context, sizingInformation) {
      return new app_bar.AppBar.new({titleSpacing: 10.0, centerTitle: dart.equals(sizingInformation.deviceType, device_screen_size.DeviceScreenType.Mobile) ? true : false, title: new text.Text.new("Shashank Kakroo", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, letterSpacing: 2.0, fontFamily: "ReemKufi", color: colors.Colors.black, fontSize: 35.0}), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), backgroundColor: colors.Colors.transparent, elevation: 0.0, actions: dart.equals(sizingInformation.deviceType, device_screen_size.DeviceScreenType.Desktop) ? this[_buildActions]() : null, $creationLocationd_0dea112b090073317d4: C55 || CT.C55});
    }
    [_buildActions]() {
      return JSArrayOfWidget().of([new FadeIn.FadeIn.new(2.0, new material_button.MaterialButton.new({padding: new edge_insets.EdgeInsets.only({right: 50.0}), child: new text.Text.new("About Me", {$creationLocationd_0dea112b090073317d4: C63 || CT.C63}), onPressed: dart.fn(() => {
            this.returnSelectedTab(0);
          }, VoidToNull()), focusColor: colors.Colors.greenAccent, autofocus: true, $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), "right", {$creationLocationd_0dea112b090073317d4: C73 || CT.C73}), new FadeIn.FadeIn.new(2.33, new material_button.MaterialButton.new({padding: new edge_insets.EdgeInsets.only({right: 50.0}), child: new text.Text.new("Projects", {$creationLocationd_0dea112b090073317d4: C78 || CT.C78}), focusColor: colors.Colors.greenAccent, onPressed: dart.fn(() => {
            this.returnSelectedTab(1);
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), "right", {$creationLocationd_0dea112b090073317d4: C87 || CT.C87}), new FadeIn.FadeIn.new(2.66, new material_button.MaterialButton.new({padding: new edge_insets.EdgeInsets.only({right: 50.0}), child: new text.Text.new("Contact Me", {$creationLocationd_0dea112b090073317d4: C92 || CT.C92}), focusColor: colors.Colors.greenAccent, onPressed: dart.fn(() => {
            this.returnSelectedTab(2);
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C95 || CT.C95}), "right", {$creationLocationd_0dea112b090073317d4: C101 || CT.C101})]);
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
  }, '{"version":3,"sourceRoot":"","sources":["Home_view.dart"],"names":[],"mappings":"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","file":"Home_view.ddc.js"}');
  // Exports:
  return {
    ui__Home_view: Home_view
  };
});

//# sourceMappingURL=Home_view.ddc.js.map
