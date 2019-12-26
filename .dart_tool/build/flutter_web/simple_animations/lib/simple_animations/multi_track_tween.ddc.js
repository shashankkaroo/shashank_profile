define(['dart_sdk', 'packages/flutter/src/animation/animation'], function(dart_sdk, packages__flutter__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tween_sequence = packages__flutter__src__animation__animation.src__animation__tween_sequence;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const multi_track_tween = Object.create(dart.library);
  const $length = dartx.length;
  const $where = dartx.where;
  const $map = dartx.map;
  const $reduce = dartx.reduce;
  const $forEach = dartx.forEach;
  const $toList = dartx.toList;
  const $add = dartx.add;
  const $_set = dartx._set;
  let LinkedMapOfString$_TweenData = () => (LinkedMapOfString$_TweenData = dart.constFn(_js_helper.LinkedMap$(core.String, multi_track_tween._TweenData)))();
  let TrackTobool = () => (TrackTobool = dart.constFn(dart.fnType(core.bool, [multi_track_tween.Track])))();
  let _TrackItemToint = () => (_TrackItemToint = dart.constFn(dart.fnType(core.int, [multi_track_tween._TrackItem])))();
  let intAndintToint = () => (intAndintToint = dart.constFn(dart.fnType(core.int, [core.int, core.int])))();
  let TrackToNull = () => (TrackToNull = dart.constFn(dart.fnType(core.Null, [multi_track_tween.Track])))();
  let _TrackItemToTweenSequenceItem = () => (_TrackItemToTweenSequenceItem = dart.constFn(dart.fnType(tween_sequence.TweenSequenceItem, [multi_track_tween._TrackItem])))();
  let LinkedMapOfString$dynamic = () => (LinkedMapOfString$dynamic = dart.constFn(_js_helper.LinkedMap$(core.String, dart.dynamic)))();
  let StringAnd_TweenDataToNull = () => (StringAnd_TweenDataToNull = dart.constFn(dart.fnType(core.Null, [core.String, multi_track_tween._TweenData])))();
  let JSArrayOf_TrackItem = () => (JSArrayOf_TrackItem = dart.constFn(_interceptors.JSArray$(multi_track_tween._TrackItem)))();
  const CT = Object.create(null);
  const _tracksToTween = dart.privateName(multi_track_tween, "_tracksToTween");
  const _maxDuration = dart.privateName(multi_track_tween, "_maxDuration");
  const _computeMaxDuration = dart.privateName(multi_track_tween, "_computeMaxDuration");
  const _computeTrackTweens = dart.privateName(multi_track_tween, "_computeTrackTweens");
  multi_track_tween.MultiTrackTween = class MultiTrackTween extends tween.Animatable$(core.Map$(core.String, dart.dynamic)) {
    [_computeMaxDuration](tracks) {
      tracks[$forEach](dart.fn(track => {
        let trackDuration = track.items[$map](core.int, dart.fn(item => item.duration.inMilliseconds, _TrackItemToint()))[$reduce](dart.fn((sum, item) => dart.notNull(sum) + dart.notNull(item), intAndintToint()));
        this[_maxDuration] = math.max(core.int, this[_maxDuration], trackDuration);
      }, TrackToNull()));
    }
    [_computeTrackTweens](tracks) {
      tracks[$forEach](dart.fn(track => {
        let trackDuration = track.items[$map](core.int, dart.fn(item => item.duration.inMilliseconds, _TrackItemToint()))[$reduce](dart.fn((sum, item) => dart.notNull(sum) + dart.notNull(item), intAndintToint()));
        let sequenceItems = track.items[$map](tween_sequence.TweenSequenceItem, dart.fn(item => new tween_sequence.TweenSequenceItem.new({tween: item.tween, weight: dart.notNull(item.duration.inMilliseconds) / dart.notNull(this[_maxDuration])}), _TrackItemToTweenSequenceItem()))[$toList]();
        if (dart.notNull(trackDuration) < dart.notNull(this[_maxDuration])) {
          sequenceItems[$add](new tween_sequence.TweenSequenceItem.new({tween: new tween.ConstantTween.new(null), weight: (dart.notNull(this[_maxDuration]) - dart.notNull(trackDuration)) / dart.notNull(this[_maxDuration])}));
        }
        let sequence = new tween_sequence.TweenSequence.new(sequenceItems);
        this[_tracksToTween][$_set](track.name, new multi_track_tween._TweenData.new({tween: sequence, maxTime: dart.notNull(trackDuration) / dart.notNull(this[_maxDuration])}));
      }, TrackToNull()));
    }
    get duration() {
      return new core.Duration.new({milliseconds: this[_maxDuration]});
    }
    transform(t) {
      let result = new (LinkedMapOfString$dynamic()).new();
      this[_tracksToTween][$forEach](dart.fn((name, tweenData) => {
        let tTween = math.max(core.double, 0.0, math.min(core.double, t, dart.notNull(tweenData.maxTime) - 0.0001));
        result[$_set](name, tweenData.tween.transform(tTween));
      }, StringAnd_TweenDataToNull()));
      return result;
    }
  };
  (multi_track_tween.MultiTrackTween.new = function(tracks) {
    this[_tracksToTween] = new (LinkedMapOfString$_TweenData()).new();
    this[_maxDuration] = 0;
    if (!(tracks != null && dart.notNull(tracks[$length]) > 0)) dart.assertFailed("Add a List<Track> to configure the tween.", "org-dartlang-app:///packages/simple_animations/simple_animations/multi_track_tween.dart", 36, 16, "tracks != null && tracks.length > 0");
    if (!(tracks[$where](dart.fn(track => track.items[$length] === 0, TrackTobool()))[$length] === 0)) dart.assertFailed("Each Track needs at least one added Tween by using the add()-method.", "org-dartlang-app:///packages/simple_animations/simple_animations/multi_track_tween.dart", 38, 16, "tracks.where((track) => track.items.length == 0).length == 0");
    multi_track_tween.MultiTrackTween.__proto__.new.call(this);
    this[_computeMaxDuration](tracks);
    this[_computeTrackTweens](tracks);
  }).prototype = multi_track_tween.MultiTrackTween.prototype;
  dart.addTypeTests(multi_track_tween.MultiTrackTween);
  dart.setMethodSignature(multi_track_tween.MultiTrackTween, () => ({
    __proto__: dart.getMethods(multi_track_tween.MultiTrackTween.__proto__),
    [_computeMaxDuration]: dart.fnType(dart.void, [core.List$(multi_track_tween.Track)]),
    [_computeTrackTweens]: dart.fnType(dart.void, [core.List$(multi_track_tween.Track)]),
    transform: dart.fnType(core.Map$(core.String, dart.dynamic), [core.double])
  }));
  dart.setGetterSignature(multi_track_tween.MultiTrackTween, () => ({
    __proto__: dart.getGetters(multi_track_tween.MultiTrackTween.__proto__),
    duration: core.Duration
  }));
  dart.setLibraryUri(multi_track_tween.MultiTrackTween, "package:simple_animations/simple_animations/multi_track_tween.dart");
  dart.setFieldSignature(multi_track_tween.MultiTrackTween, () => ({
    __proto__: dart.getFields(multi_track_tween.MultiTrackTween.__proto__),
    [_tracksToTween]: dart.finalFieldType(core.Map$(core.String, multi_track_tween._TweenData)),
    [_maxDuration]: dart.fieldType(core.int)
  }));
  const _is_Track_default = Symbol('_is_Track_default');
  multi_track_tween.Track$ = dart.generic(T => {
    let AnimatableOfT = () => (AnimatableOfT = dart.constFn(tween.Animatable$(T)))();
    class Track extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get items() {
        return this[items];
      }
      set items(value) {
        super.items = value;
      }
      add(duration, tween, opts) {
        AnimatableOfT()._check(tween);
        let curve = opts && 'curve' in opts ? opts.curve : null;
        this.items[$add](new multi_track_tween._TrackItem.new(duration, tween, {curve: curve}));
        return this;
      }
    }
    (Track.new = function(name) {
      this[items] = JSArrayOf_TrackItem().of([]);
      this[name$] = name;
      if (!(name != null)) dart.assertFailed("Track name must not be null.", "org-dartlang-app:///packages/simple_animations/simple_animations/multi_track_tween.dart", 116, 29, "name != null");
      ;
    }).prototype = Track.prototype;
    dart.addTypeTests(Track);
    Track.prototype[_is_Track_default] = true;
    const name$ = Symbol("Track.name");
    const items = Symbol("Track.items");
    dart.setMethodSignature(Track, () => ({
      __proto__: dart.getMethods(Track.__proto__),
      add: dart.fnType(multi_track_tween.Track$(T), [core.Duration, core.Object], {curve: curves.Curve})
    }));
    dart.setLibraryUri(Track, "package:simple_animations/simple_animations/multi_track_tween.dart");
    dart.setFieldSignature(Track, () => ({
      __proto__: dart.getFields(Track.__proto__),
      name: dart.finalFieldType(core.String),
      items: dart.finalFieldType(core.List$(multi_track_tween._TrackItem))
    }));
    return Track;
  });
  multi_track_tween.Track = multi_track_tween.Track$();
  dart.addTypeTests(multi_track_tween.Track, _is_Track_default);
  const _is__TrackItem_default = Symbol('_is__TrackItem_default');
  multi_track_tween._TrackItem$ = dart.generic(T => {
    let AnimatableOfT = () => (AnimatableOfT = dart.constFn(tween.Animatable$(T)))();
    class _TrackItem extends core.Object {
      get tween() {
        return this[tween$];
      }
      set tween(value) {
        this[tween$] = AnimatableOfT()._check(value);
      }
    }
    (_TrackItem.new = function(duration, _tween, opts) {
      let curve = opts && 'curve' in opts ? opts.curve : null;
      this[tween$] = null;
      this.duration = duration;
      if (!(duration != null)) dart.assertFailed("Please set a duration.", "org-dartlang-app:///packages/simple_animations/simple_animations/multi_track_tween.dart", 136, 16, "duration != null");
      if (!(_tween != null)) dart.assertFailed("Please set a tween.", "org-dartlang-app:///packages/simple_animations/simple_animations/multi_track_tween.dart", 137, 16, "_tween != null");
      if (curve != null) {
        this.tween = _tween.chain(new tween.CurveTween.new({curve: curve}));
      } else {
        this.tween = _tween;
      }
    }).prototype = _TrackItem.prototype;
    dart.addTypeTests(_TrackItem);
    _TrackItem.prototype[_is__TrackItem_default] = true;
    const tween$ = Symbol("_TrackItem.tween");
    dart.setLibraryUri(_TrackItem, "package:simple_animations/simple_animations/multi_track_tween.dart");
    dart.setFieldSignature(_TrackItem, () => ({
      __proto__: dart.getFields(_TrackItem.__proto__),
      duration: dart.finalFieldType(core.Duration),
      tween: dart.fieldType(tween.Animatable$(T))
    }));
    return _TrackItem;
  });
  multi_track_tween._TrackItem = multi_track_tween._TrackItem$();
  dart.addTypeTests(multi_track_tween._TrackItem, _is__TrackItem_default);
  const _is__TweenData_default = Symbol('_is__TweenData_default');
  multi_track_tween._TweenData$ = dart.generic(T => {
    class _TweenData extends core.Object {}
    (_TweenData.new = function(opts) {
      let tween = opts && 'tween' in opts ? opts.tween : null;
      let maxTime = opts && 'maxTime' in opts ? opts.maxTime : null;
      this.tween = tween;
      this.maxTime = maxTime;
      ;
    }).prototype = _TweenData.prototype;
    dart.addTypeTests(_TweenData);
    _TweenData.prototype[_is__TweenData_default] = true;
    dart.setLibraryUri(_TweenData, "package:simple_animations/simple_animations/multi_track_tween.dart");
    dart.setFieldSignature(_TweenData, () => ({
      __proto__: dart.getFields(_TweenData.__proto__),
      tween: dart.finalFieldType(tween.Animatable$(T)),
      maxTime: dart.finalFieldType(core.double)
    }));
    return _TweenData;
  });
  multi_track_tween._TweenData = multi_track_tween._TweenData$();
  dart.addTypeTests(multi_track_tween._TweenData, _is__TweenData_default);
  dart.trackLibraries("packages/simple_animations/simple_animations/multi_track_tween", {
    "package:simple_animations/simple_animations/multi_track_tween.dart": multi_track_tween
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["multi_track_tween.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0BA2CuC;MACnC,AAAO,MAAD,WAAS,QAAC;AACR,4BAAgB,AAAM,AACvB,AACA,KAFsB,uBAClB,QAAC,QAAS,AAAK,AAAS,IAAV,uDACX,SAAC,KAAK,SAAa,aAAJ,GAAG,iBAAG,IAAI;QACrC,qBAAe,mBAAI,oBAAc,aAAa;;IAElD;0BAEqC;MACnC,AAAO,MAAD,WAAS,QAAC;AACR,4BAAgB,AAAM,AACvB,AACA,KAFsB,uBAClB,QAAC,QAAS,AAAK,AAAS,IAAV,uDACX,SAAC,KAAK,SAAa,aAAJ,GAAG,iBAAG,IAAI;AAE/B,4BAAgB,AAAM,AACvB,AAGA,KAJsB,+CAClB,QAAC,QAAS,iDACJ,AAAK,IAAD,gBAC0B,aAA7B,AAAK,AAAS,IAAV,yCAA2B;AAG/C,YAAkB,aAAd,aAAa,iBAAG;UAClB,AAAc,aAAD,OAAK,iDACP,4BAAc,eACkB,CAAjB,aAAb,mCAAe,aAAa,kBAAI;;AAGzC,uBAAW,qCAAc,aAAa;QAE5C,AAAc,4BAAC,AAAM,KAAD,OAChB,6CAAkB,QAAQ,WAAyB,aAAd,aAAa,iBAAG;;IAE7D;;AAqBE,YAAO,sCAAuB;IAChC;cAGsC;AACT,mBAAS;MACpC,AAAe,+BAAQ,SAAC,MAAM;AACf,qBAAS,sBAAI,KAAG,sBAAI,CAAC,EAAoB,aAAlB,AAAU,SAAD,YAAW;QACxD,AAAM,MAAA,QAAC,IAAI,EAAI,AAAU,AAAM,SAAP,iBAAiB,MAAM;;AAEjD,YAAO,OAAM;IACf;;oDAzE4B;IAHtB,uBAAiB;IACnB,qBAAe;UAGN,AAAe,MAAT,IAAI,QAAsB,aAAd,AAAO,MAAD,aAAU,sBACrC;UACG,AAAO,AAA0C,AAAO,MAAlD,SAAO,QAAC,SAAU,AAAM,AAAM,AAAO,KAAd,oBAAiB,gCAAa,sBAC9D;AAJV;IAKE,0BAAoB,MAAM;IAC1B,0BAAoB,MAAM;EAC5B;;;;;;;;;;;;;;;;;;;;;;MAuEa;;;;;;MACU;;;;;;UAWD,UAAwB;;YAAc;QAC1D,AAAM,iBAAI,qCAAW,QAAQ,EAAE,KAAK,UAAS,KAAK;AAClD,cAAO;MACT;;0BAZW;MAFY,cAAQ;MAEpB;YAAe,IAAI,IAAI,yBAAM;;IAA+B;;;;;;;;;;;;;;;;;;;;;;;MAiBzD;;;;;;;+BAEE,UAAwB;UAAe;MAFzC;MAEE;YACH,QAAQ,IAAI,yBAAM;YAClB,MAAM,IAAI,yBAAM;AAC3B,UAAI,KAAK,IAAI;QACX,aAAQ,AAAO,MAAD,OAAO,iCAAkB,KAAK;;QAE5C,aAAQ,MAAM;;IAElB;;;;;;;;;;;;;;;;;;UAOiB;UAAY;MAAZ;MAAY;;IAAS","file":"multi_track_tween.ddc.js"}');
  // Exports:
  return {
    simple_animations__multi_track_tween: multi_track_tween
  };
});

//# sourceMappingURL=multi_track_tween.ddc.js.map
