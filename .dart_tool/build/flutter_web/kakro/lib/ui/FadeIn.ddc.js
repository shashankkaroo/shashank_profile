define(['dart_sdk', 'packages/simple_animations/simple_animations/multi_track_tween', 'packages/flutter/src/animation/animation', 'packages/simple_animations/simple_animations/controlled_animation', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__simple_animations__simple_animations__multi_track_tween, packages__flutter__src__animation__animation, packages__simple_animations__simple_animations__controlled_animation, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const multi_track_tween = packages__simple_animations__simple_animations__multi_track_tween.simple_animations__multi_track_tween;
  const tween$ = packages__flutter__src__animation__animation.src__animation__tween;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const controlled_animation = packages__simple_animations__simple_animations__controlled_animation.simple_animations__controlled_animation;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const FadeIn = Object.create(dart.library);
  const $round = dartx.round;
  let JSArrayOfTrack = () => (JSArrayOfTrack = dart.constFn(_interceptors.JSArray$(multi_track_tween.Track)))();
  let BuildContextAndWidgetAnddynamicToOpacity = () => (BuildContextAndWidgetAnddynamicToOpacity = dart.constFn(dart.fnType(basic.Opacity, [framework.BuildContext, framework.Widget, dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "offset",
        column: 13,
        line: 49,
        file: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 57,
        line: 49,
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
        column: 26,
        line: 48,
        file: "org-dartlang-app:///packages/kakro/ui/FadeIn.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "opacity",
        column: 9,
        line: 47,
        file: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 48,
        file: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C5 || CT.C5,
        name: null,
        column: 56,
        line: 46,
        file: "org-dartlang-app:///packages/kakro/ui/FadeIn.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delay",
        column: 7,
        line: 42,
        file: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "duration",
        column: 7,
        line: 43,
        file: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "tween",
        column: 7,
        line: 44,
        file: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 45,
        file: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builderWithChild",
        column: 7,
        line: 46,
        file: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C9 || CT.C9,
        name: null,
        column: 12,
        line: 41,
        file: "org-dartlang-app:///packages/kakro/ui/FadeIn.dart"
      });
    }
  });
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C5;
  let C4;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C9;
  let C8;
  FadeIn.FadeIn = class FadeIn extends framework.StatelessWidget {
    get delay() {
      return this[delay$];
    }
    set delay(value) {
      super.delay = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get direction() {
      return this[direction$];
    }
    set direction(value) {
      super.direction = value;
    }
    build(context) {
      let tween = null;
      if (this.direction === "right") {
        tween = new multi_track_tween.MultiTrackTween.new(JSArrayOfTrack().of([new multi_track_tween.Track.new("opacity").add(new core.Duration.new({milliseconds: 500}), new tween$.Tween.new({begin: 0.0, end: 1.0})), new multi_track_tween.Track.new("translateX").add(new core.Duration.new({milliseconds: 500}), new tween$.Tween.new({begin: 130.0, end: 0.0}), {curve: curves.Curves.easeOut})]));
      } else {
        tween = new multi_track_tween.MultiTrackTween.new(JSArrayOfTrack().of([new multi_track_tween.Track.new("opacity").add(new core.Duration.new({milliseconds: 500}), new tween$.Tween.new({begin: 0.0, end: 1.0})), new multi_track_tween.Track.new("translateX").add(new core.Duration.new({milliseconds: 500}), new tween$.Tween.new({begin: 0.0, end: 3.0}), {curve: curves.Curves.easeOut})]));
      }
      return new controlled_animation.ControlledAnimation.new({delay: new core.Duration.new({milliseconds: (300 * dart.notNull(this.delay))[$round]()}), duration: core.Duration._check(dart.dload(tween, 'duration')), tween: tween$.Animatable._check(tween), child: this.child, builderWithChild: dart.fn((context, child, animation) => new basic.Opacity.new({opacity: core.double._check(dart.dsend(animation, '_get', ["opacity"])), child: new basic.Transform.translate({offset: new ui.Offset.new(core.double._check(dart.dsend(animation, '_get', ["translateX"])), 0.0), child: child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), BuildContextAndWidgetAnddynamicToOpacity()), $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
    }
  };
  (FadeIn.FadeIn.new = function(delay, child, direction, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[delay$] = delay;
    this[child$] = child;
    this[direction$] = direction;
    FadeIn.FadeIn.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = FadeIn.FadeIn.prototype;
  dart.addTypeTests(FadeIn.FadeIn);
  const delay$ = Symbol("FadeIn.delay");
  const child$ = Symbol("FadeIn.child");
  const direction$ = Symbol("FadeIn.direction");
  dart.setMethodSignature(FadeIn.FadeIn, () => ({
    __proto__: dart.getMethods(FadeIn.FadeIn.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(FadeIn.FadeIn, "package:kakro/ui/FadeIn.dart");
  dart.setFieldSignature(FadeIn.FadeIn, () => ({
    __proto__: dart.getFields(FadeIn.FadeIn.__proto__),
    delay: dart.finalFieldType(core.double),
    child: dart.finalFieldType(framework.Widget),
    direction: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/kakro/ui/FadeIn", {
    "package:kakro/ui/FadeIn.dart": FadeIn
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["FadeIn.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMe;;;;;;IACA;;;;;;IACA;;;;;;UAKa;AAEpB;AACJ,UAAQ,AAAU,mBAAG;QAEnB,QAAQ,0CAAgB,qBACE,AACK,gCADC,eACG,qCAAuB,OACnB,6BAAa,UAAU,QACpC,AAAoB,gCAAd,kBACF,qCAAuB,OACvB,6BAAa,YAAY,eACX;;QAI1C,QAAQ,0CAAgB,qBACE,AACK,gCADC,eACG,qCAAuB,OACnB,6BAAa,UAAU,QACpC,AAAoB,gCAAd,kBACF,qCAAuB,OACvB,6BAAa,UAAU,eACT;;AAIhD,YAAO,0DACE,qCAAqC,CAAb,AAAI,mBAAE,yDACrB,WAAN,KAAK,gDACR,KAAK,UACL,8BACW,SAAC,SAAS,OAAO,cAAc,mDAC7B,WAAT,SAAS,WAAC,qBACF,uCACL,qCAAgB,WAAT,SAAS,WAAC,iBAAe,aAAW,KAAK;IAGlE;;gCAzCY,OAAY,OAAY;;IAAxB;IAAY;IAAY;AAApC;;EAA8C","file":"FadeIn.ddc.js"}');
  // Exports:
  return {
    ui__FadeIn: FadeIn
  };
});

//# sourceMappingURL=FadeIn.ddc.js.map
