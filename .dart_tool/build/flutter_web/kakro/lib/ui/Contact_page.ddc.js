define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/foundation/_bitfield_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__foundation___bitfield_web) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const Contact_page = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 21,
        line: 15,
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
        column: 16,
        line: 15,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 9,
        line: 12,
        file: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 9,
        line: 13,
        file: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 9,
        line: 14,
        file: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 15,
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
        column: 12,
        line: 11,
        file: "org-dartlang-app:///packages/kakro/ui/Contact_page.dart"
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
  Contact_page.ContactPage = class ContactPage extends framework.StatelessWidget {
    get contactKey() {
      return this[contactKey$];
    }
    set contactKey(value) {
      this[contactKey$] = value;
    }
    build(context) {
      return new container.Container.new({key: this.contactKey, height: media_query.MediaQuery.of(context).size.height, width: media_query.MediaQuery.of(context).size.width, child: new text.Text.new("Contact_page", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
  };
  (Contact_page.ContactPage.new = function(contactKey, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[contactKey$] = contactKey;
    Contact_page.ContactPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = Contact_page.ContactPage.prototype;
  dart.addTypeTests(Contact_page.ContactPage);
  const contactKey$ = Symbol("ContactPage.contactKey");
  dart.setMethodSignature(Contact_page.ContactPage, () => ({
    __proto__: dart.getMethods(Contact_page.ContactPage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Contact_page.ContactPage, "package:kakro/ui/Contact_page.dart");
  dart.setFieldSignature(Contact_page.ContactPage, () => ({
    __proto__: dart.getFields(Contact_page.ContactPage.__proto__),
    contactKey: dart.fieldType(key.Key)
  }));
  dart.defineLazy(Contact_page.ContactPage, {
    /*Contact_page.ContactPage.routeName*/get routeName() {
      return "/contact";
    }
  });
  dart.trackLibraries("packages/kakro/ui/Contact_page", {
    "package:kakro/ui/Contact_page.dart": Contact_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Contact_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIM;;;;;;UAKsB;AACxB,YAAO,mCACE,yBACc,AAAY,AAAK,0BAAd,OAAO,sBACX,AAAY,AAAK,0BAAd,OAAO,qBACrB,kBAAK;IAGlB;;2CAXiB;;;AAAjB;;EAA4B;;;;;;;;;;;;;MAHR,kCAAS","file":"Contact_page.ddc.js"}');
  // Exports:
  return {
    ui__Contact_page: Contact_page
  };
});

//# sourceMappingURL=Contact_page.ddc.js.map
