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
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const BaseWidget = packages__kakro__ui__BaseWidget.ui__BaseWidget;
  const material = packages__flutter__material.src__material__material;
  const colors = packages__flutter__material.src__material__colors;
  const card = packages__flutter__material.src__material__card;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const sizing_info = packages__kakro__ui__sizing_info.ui__sizing_info;
  const device_screen_size = packages__kakro__enums__device_screen_size.enums__device_screen_size;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const FadeIn = packages__kakro__ui__FadeIn.ui__FadeIn;
  const Projects_page = Object.create(dart.library);
  const $toString = dartx.toString;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let BuildContextAndSizingInformationToMaterial = () => (BuildContextAndSizingInformationToMaterial = dart.constFn(dart.fnType(material.Material, [framework.BuildContext, sizing_info.SizingInformation])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let intToCard = () => (intToCard = dart.constFn(dart.fnType(card.Card, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 9,
        line: 26,
        file: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 27,
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
        line: 25,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 25,
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
        line: 24,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 23,
        line: 23,
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
        line: 23,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 19,
        line: 34,
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
        line: 34,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 11,
        line: 46,
        file: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 47,
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
        line: 45,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 9,
        line: 43,
        file: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 9,
        line: 44,
        file: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 45,
        file: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C18 || CT.C18,
        name: null,
        column: 12,
        line: 41,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 11,
        line: 58,
        file: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C23 || CT.C23,
        name: null,
        column: 9,
        line: 57,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 9,
        line: 56,
        file: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 57,
        file: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "direction",
        column: 9,
        line: 87,
        file: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C26 || CT.C26,
        name: null,
        column: 12,
        line: 55,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 29,
        line: 124,
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
        column: 32,
        line: 123,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 25,
        line: 123,
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
        column: 30,
        line: 122,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 23,
        line: 120,
        file: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 23,
        line: 121,
        file: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 23,
        line: 122,
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
        column: 28,
        line: 119,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 21,
        line: 116,
        file: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 21,
        line: 119,
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
        column: 26,
        line: 115,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 115,
        file: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 19,
        line: 129,
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
        column: 24,
        line: 114,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "elevation",
        column: 17,
        line: 111,
        file: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 17,
        line: 112,
        file: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 17,
        line: 113,
        file: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 17,
        line: 114,
        file: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52, C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C50 || CT.C50,
        name: null,
        column: 22,
        line: 110,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 102,
        file: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C56 || CT.C56,
        name: null,
        column: 16,
        line: 99,
        file: "org-dartlang-app:///packages/kakro/ui/Projects_page.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "constraints",
        column: 9,
        line: 92,
        file: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 99,
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
        column: 12,
        line: 91,
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
  let C18;
  let C17;
  let C24;
  let C23;
  let C22;
  let C27;
  let C28;
  let C29;
  let C26;
  let C25;
  let C32;
  let C31;
  let C30;
  let C35;
  let C34;
  let C33;
  let C38;
  let C39;
  let C40;
  let C37;
  let C36;
  let C43;
  let C44;
  let C42;
  let C41;
  let C47;
  let C48;
  let C46;
  let C45;
  let C51;
  let C52;
  let C53;
  let C54;
  let C50;
  let C49;
  let C57;
  let C56;
  let C55;
  let C60;
  let C61;
  let C59;
  let C58;
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
      return new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 60.0}), width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.84, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([this[_buildAboutMe](this.context, sizingInformation), this[_projectsGrid](this.context, sizingInformation)]), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
    }
    [_buildAboutMe](context, sizingInformation) {
      return new FadeIn.FadeIn.new(2.66, new basic.RichText.new({text: new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "My ", style: new text_style.TextStyle.new({fontFamily: "Lato", color: colors.Colors.black, fontWeight: ui.FontWeight.w400, fontSize: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? 36.0 : 50.0})}), new text_span.TextSpan.new({text: "Projects ", style: new text_style.TextStyle.new({color: new ui.Color.new(4283477952), fontFamily: "Lato", fontWeight: ui.FontWeight.w900, fontSize: dart.equals(dart.dload(sizingInformation, 'deviceType'), device_screen_size.DeviceScreenType.Mobile) ? 36.0 : 50.0})})])}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), "left", {$creationLocationd_0dea112b090073317d4: C25 || CT.C25});
    }
    [_projectsGrid](context, sizingInformation) {
      return new basic.ConstrainedBox.new({constraints: new box.BoxConstraints.new({minHeight: media_query.MediaQuery.of(context).size.height, minWidth: media_query.MediaQuery.of(context).size.width, maxWidth: media_query.MediaQuery.of(context).size.width}), child: new basic.Wrap.new({children: JSArrayOfint().of([1, 2, 3, 4, 5, 6])[$map](card.Card, dart.fn(i => new card.Card.new({elevation: 0.0, color: colors.Colors.white, margin: new edge_insets.EdgeInsets.all(20.0), child: new material.Material.new({child: new ink_well.InkWell.new({onTap: dart.fn(() => {
                  core.print("none");
                }, VoidToNull()), child: new container.Container.new({height: 350.0, width: dart.notNull(media_query.MediaQuery.of(context).size.width) * 0.39, child: new basic.Center.new({child: new text.Text.new(dart.toString(i), {$creationLocationd_0dea112b090073317d4: C30 || CT.C30}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), intToCard()))[$toList](), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58});
    }
  };
  (Projects_page.ProjectsPageState.new = function() {
    this[projectList] = [];
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
    [_projectsGrid]: dart.fnType(framework.Widget, [framework.BuildContext, dart.dynamic])
  }));
  dart.setLibraryUri(Projects_page.ProjectsPageState, "package:kakro/ui/Projects_page.dart");
  dart.setFieldSignature(Projects_page.ProjectsPageState, () => ({
    __proto__: dart.getFields(Projects_page.ProjectsPageState.__proto__),
    projectList: dart.finalFieldType(core.List)
  }));
  dart.trackLibraries("packages/kakro/ui/Projects_page", {
    "package:kakro/ui/Projects_page.dart": Projects_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Projects_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUM;;;;;;;AAI+B;IAAmB;;6CAFpC;;;AAAlB;;EAA6B;;;;;;;;;;;;;MAHT,oCAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASvB;;;;;;UAGoB;AACxB,YAAO,yCAAoB,SAAC,SAAS,sBAC5B,kCACI,kCACJ,AAAO,uDACL,0BAAoB,iBAAiB;IAGlD;0BAEsC;AACpC,UAAiC,YAA7B,AAAkB,iBAAD,aAAgC;AACnD,cAAO,mBAAK;;AAEZ,cAAO,8BAAuB,iBAAiB;;IAEnD;6BAEyC;AACvC,YAAO,sCAEgB,sCAAU,eACY,aAAvB,AAAY,AAAK,0BAAd,4BAAsB,aACpC,0CACkC,yCACrB,sBAChB,oBAAc,cAAS,iBAAiB,GACxC,oBAAc,cAAS,iBAAiB;IAGlD;oBAEkC,SAAS;AACzC,YAAO,uBACH,MACA,8BACQ,sCACgB,wBAClB,kCACQ,cACC,0CACO,eACE,iCACS,8BAEU,YAAX,WAAlB,iBAAiB,iBAAgC,8CAC3C,OACA,UAGd,kCACQ,oBACC,qCACE,iBAAM,yBACD,oBACW,8BAEU,YAAX,WAAlB,iBAAiB,iBAAgC,8CAC3C,OACA,uEAMpB;IACN;oBAEkC,SAAS;AACzC,YAAO,4CACU,uCACW,AAAY,AAAK,0BAAd,OAAO,yBACX,AAAY,AAAK,0BAAd,OAAO,wBACV,AAAY,AAAK,0BAAd,OAAO,uBAI1B,8BAGO,AAOR,AAuBC,mBA7BD,GACA,GACA,GACA,GACA,GACA,qBACI,QAAC,KACE,8BACM,YACG,6BACK,+BAAI,cAChB,kCACE,iCACE;kBACL,WAAM;yCAED,qCACG,cACiC,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe,aACpC,6BACE,kBACH,cAAF,CAAC,+OAKK;IAI9B;;;IAlHM,oBAAc;;;EAmHtB","file":"Projects_page.ddc.js"}');
  // Exports:
  return {
    ui__Projects_page: Projects_page
  };
});

//# sourceMappingURL=Projects_page.ddc.js.map
