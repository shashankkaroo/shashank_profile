define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const time$ = Object.create(dart.library);
  const $modulo = dartx['%'];
  const $truncate = dartx.truncate;
  const $_get = dartx._get;
  const $clamp = dartx.clamp;
  let VoidToDateTime = () => (VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(time$.systemTime, VoidToDateTime());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 1000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 1000000
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 60000000
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 3600000000.0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 86400000000.0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 604800000000.0
      });
    },
    get C8() {
      return C8 = dart.constList([0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], core.int);
    }
  });
  let C0;
  const _time = dart.privateName(time$, "_time");
  time$.Clock = class Clock extends core.Object {
    now() {
      return this[_time]();
    }
    agoBy(duration) {
      return this.now().subtract(duration);
    }
    fromNowBy(duration) {
      return this.now().add(duration);
    }
    ago(opts) {
      let days = opts && 'days' in opts ? opts.days : 0;
      let hours = opts && 'hours' in opts ? opts.hours : 0;
      let minutes = opts && 'minutes' in opts ? opts.minutes : 0;
      let seconds = opts && 'seconds' in opts ? opts.seconds : 0;
      let milliseconds = opts && 'milliseconds' in opts ? opts.milliseconds : 0;
      let microseconds = opts && 'microseconds' in opts ? opts.microseconds : 0;
      return this.agoBy(new core.Duration.new({days: days, hours: hours, minutes: minutes, seconds: seconds, milliseconds: milliseconds, microseconds: microseconds}));
    }
    fromNow(opts) {
      let days = opts && 'days' in opts ? opts.days : 0;
      let hours = opts && 'hours' in opts ? opts.hours : 0;
      let minutes = opts && 'minutes' in opts ? opts.minutes : 0;
      let seconds = opts && 'seconds' in opts ? opts.seconds : 0;
      let milliseconds = opts && 'milliseconds' in opts ? opts.milliseconds : 0;
      let microseconds = opts && 'microseconds' in opts ? opts.microseconds : 0;
      return this.fromNowBy(new core.Duration.new({days: days, hours: hours, minutes: minutes, seconds: seconds, milliseconds: milliseconds, microseconds: microseconds}));
    }
    microsAgo(micros) {
      return this.ago({microseconds: micros});
    }
    microsFromNow(micros) {
      return this.fromNow({microseconds: micros});
    }
    millisAgo(millis) {
      return this.ago({milliseconds: millis});
    }
    millisFromNow(millis) {
      return this.fromNow({milliseconds: millis});
    }
    secondsAgo(seconds) {
      return this.ago({seconds: seconds});
    }
    secondsFromNow(seconds) {
      return this.fromNow({seconds: seconds});
    }
    minutesAgo(minutes) {
      return this.ago({minutes: minutes});
    }
    minutesFromNow(minutes) {
      return this.fromNow({minutes: minutes});
    }
    hoursAgo(hours) {
      return this.ago({hours: hours});
    }
    hoursFromNow(hours) {
      return this.fromNow({hours: hours});
    }
    daysAgo(days) {
      return this.ago({days: days});
    }
    daysFromNow(days) {
      return this.fromNow({days: days});
    }
    weeksAgo(weeks) {
      return this.ago({days: 7 * dart.notNull(weeks)});
    }
    weeksFromNow(weeks) {
      return this.fromNow({days: 7 * dart.notNull(weeks)});
    }
    monthsAgo(months) {
      let time = this.now();
      let m = (dart.notNull(time.month) - dart.notNull(months) - 1)[$modulo](12) + 1;
      let y = dart.notNull(time.year) - ((dart.notNull(months) + 12 - dart.notNull(time.month)) / 12)[$truncate]();
      let d = time$.clampDayOfMonth({year: y, month: m, day: time.day});
      return new core.DateTime.new(y, m, d, time.hour, time.minute, time.second, time.millisecond);
    }
    monthsFromNow(months) {
      let time = this.now();
      let m = (dart.notNull(time.month) + dart.notNull(months) - 1)[$modulo](12) + 1;
      let y = dart.notNull(time.year) + ((dart.notNull(months) + dart.notNull(time.month) - 1) / 12)[$truncate]();
      let d = time$.clampDayOfMonth({year: y, month: m, day: time.day});
      return new core.DateTime.new(y, m, d, time.hour, time.minute, time.second, time.millisecond);
    }
    yearsAgo(years) {
      let time = this.now();
      let y = dart.notNull(time.year) - dart.notNull(years);
      let d = time$.clampDayOfMonth({year: y, month: time.month, day: time.day});
      return new core.DateTime.new(y, time.month, d, time.hour, time.minute, time.second, time.millisecond);
    }
    yearsFromNow(years) {
      return this.yearsAgo(-dart.notNull(years));
    }
  };
  (time$.Clock.new = function(timeFunc) {
    if (timeFunc === void 0) timeFunc = C0 || CT.C0;
    this[_time] = timeFunc;
    ;
  }).prototype = time$.Clock.prototype;
  (time$.Clock.fixed = function(time) {
    this[_time] = dart.fn(() => time, VoidToDateTime());
    ;
  }).prototype = time$.Clock.prototype;
  dart.addTypeTests(time$.Clock);
  dart.setMethodSignature(time$.Clock, () => ({
    __proto__: dart.getMethods(time$.Clock.__proto__),
    now: dart.fnType(core.DateTime, []),
    agoBy: dart.fnType(core.DateTime, [core.Duration]),
    fromNowBy: dart.fnType(core.DateTime, [core.Duration]),
    ago: dart.fnType(core.DateTime, [], {days: core.int, hours: core.int, microseconds: core.int, milliseconds: core.int, minutes: core.int, seconds: core.int}),
    fromNow: dart.fnType(core.DateTime, [], {days: core.int, hours: core.int, microseconds: core.int, milliseconds: core.int, minutes: core.int, seconds: core.int}),
    microsAgo: dart.fnType(core.DateTime, [core.int]),
    microsFromNow: dart.fnType(core.DateTime, [core.int]),
    millisAgo: dart.fnType(core.DateTime, [core.int]),
    millisFromNow: dart.fnType(core.DateTime, [core.int]),
    secondsAgo: dart.fnType(core.DateTime, [core.int]),
    secondsFromNow: dart.fnType(core.DateTime, [core.int]),
    minutesAgo: dart.fnType(core.DateTime, [core.int]),
    minutesFromNow: dart.fnType(core.DateTime, [core.int]),
    hoursAgo: dart.fnType(core.DateTime, [core.int]),
    hoursFromNow: dart.fnType(core.DateTime, [core.int]),
    daysAgo: dart.fnType(core.DateTime, [core.int]),
    daysFromNow: dart.fnType(core.DateTime, [core.int]),
    weeksAgo: dart.fnType(core.DateTime, [core.int]),
    weeksFromNow: dart.fnType(core.DateTime, [core.int]),
    monthsAgo: dart.fnType(core.DateTime, [core.int]),
    monthsFromNow: dart.fnType(core.DateTime, [core.int]),
    yearsAgo: dart.fnType(core.DateTime, [core.int]),
    yearsFromNow: dart.fnType(core.DateTime, [core.int])
  }));
  dart.setLibraryUri(time$.Clock, "package:quiver/time.dart");
  dart.setFieldSignature(time$.Clock, () => ({
    __proto__: dart.getFields(time$.Clock.__proto__),
    [_time]: dart.finalFieldType(dart.fnType(core.DateTime, []))
  }));
  time$.systemTime = function systemTime() {
    return new core.DateTime.now();
  };
  time$.daysInMonth = function daysInMonth(year, month) {
    return month === 2 && dart.test(time$.isLeapYear(year)) ? 29 : time$._daysInMonth[$_get](month);
  };
  time$.isLeapYear = function isLeapYear(year) {
    return year[$modulo](4) === 0 && (year[$modulo](100) !== 0 || year[$modulo](400) === 0);
  };
  time$.clampDayOfMonth = function clampDayOfMonth(opts) {
    let year = opts && 'year' in opts ? opts.year : null;
    let month = opts && 'month' in opts ? opts.month : null;
    let day = opts && 'day' in opts ? opts.day : null;
    return dart.asInt(day[$clamp](1, time$.daysInMonth(year, month)));
  };
  const _duration = dart.privateName(core, "_duration");
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  dart.defineLazy(time$, {
    /*time$.aMicrosecond*/get aMicrosecond() {
      return C1 || CT.C1;
    },
    /*time$.aMillisecond*/get aMillisecond() {
      return C2 || CT.C2;
    },
    /*time$.aSecond*/get aSecond() {
      return C3 || CT.C3;
    },
    /*time$.aMinute*/get aMinute() {
      return C4 || CT.C4;
    },
    /*time$.anHour*/get anHour() {
      return C5 || CT.C5;
    },
    /*time$.aDay*/get aDay() {
      return C6 || CT.C6;
    },
    /*time$.aWeek*/get aWeek() {
      return C7 || CT.C7;
    },
    /*time$._daysInMonth*/get _daysInMonth() {
      return C8 || CT.C8;
    }
  });
  dart.trackLibraries("packages/quiver/time", {
    "package:quiver/time.dart": time$
  }, {
    "package:quiver/time.dart": ["src/time/clock.dart", "src/time/duration_unit_constants.dart", "src/time/util.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/time/clock.dart","src/time/util.dart","src/time/duration_unit_constants.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8CoB;IAAO;UAGD;AAAa,YAAA,AAAM,qBAAS,QAAQ;IAAC;cAGjC;AAAa,YAAA,AAAM,gBAAI,QAAQ;IAAC;;UAM/C;UACD;UACA;UACA;UACA;UACA;AACR,wBAAU,6BACA,IAAI,SACH,KAAK,WACH,OAAO,WACP,OAAO,gBACF,YAAY,gBACZ,YAAY;IAAE;;UAMvB;UACD;UACA;UACA;UACA;UACA;AACR,4BAAc,6BACJ,IAAI,SACH,KAAK,WACH,OAAO,WACP,OAAO,gBACF,YAAY,gBACZ,YAAY;IAAE;cAGb;AAAW,qCAAkB,MAAM;IAAC;kBAGhC;AAAW,yCAAsB,MAAM;IAAC;cAG5C;AAAW,qCAAkB,MAAM;IAAC;kBAGhC;AAAW,yCAAsB,MAAM;IAAC;eAG3C;AAAY,gCAAa,OAAO;IAAC;mBAG7B;AAAY,oCAAiB,OAAO;IAAC;eAGzC;AAAY,gCAAa,OAAO;IAAC;mBAG7B;AAAY,oCAAiB,OAAO;IAAC;aAG3C;AAAU,8BAAW,KAAK;IAAC;iBAGvB;AAAU,kCAAe,KAAK;IAAC;YAGpC;AAAS,6BAAU,IAAI;IAAC;gBAGpB;AAAS,iCAAc,IAAI;IAAC;aAG/B;AAAU,6BAAU,AAAE,iBAAE,KAAK;IAAC;iBAG1B;AAAU,iCAAc,AAAE,iBAAE,KAAK;IAAC;cAGrC;AACjB,iBAAO;AACP,cAA8B,AAAK,CAAnB,AAAS,aAApB,AAAK,IAAD,uBAAS,MAAM,IAAG,YAAK,MAAK;AACrC,cAAc,aAAV,AAAK,IAAD,SAAmC,EAAnB,AAAK,aAAZ,MAAM,IAAG,kBAAK,AAAK,IAAD,WAAW;AAC9C,cAAI,6BAAsB,CAAC,SAAS,CAAC,OAAO,AAAK,IAAD;AACpD,YAAW,uBACP,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,AAAK,IAAD,OAAO,AAAK,IAAD,SAAS,AAAK,IAAD,SAAS,AAAK,IAAD;IACxD;kBAG2B;AACrB,iBAAO;AACP,cAA8B,AAAK,CAAnB,AAAS,aAApB,AAAK,IAAD,uBAAS,MAAM,IAAG,YAAK,MAAK;AACrC,cAAc,aAAV,AAAK,IAAD,SAAkC,EAAlB,AAAa,aAApB,MAAM,iBAAG,AAAK,IAAD,UAAS,KAAM;AAC7C,cAAI,6BAAsB,CAAC,SAAS,CAAC,OAAO,AAAK,IAAD;AACpD,YAAW,uBACP,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,AAAK,IAAD,OAAO,AAAK,IAAD,SAAS,AAAK,IAAD,SAAS,AAAK,IAAD;IACxD;aAGsB;AAChB,iBAAO;AACP,cAAc,aAAV,AAAK,IAAD,sBAAQ,KAAK;AACrB,cAAI,6BAAsB,CAAC,SAAS,AAAK,IAAD,aAAa,AAAK,IAAD;AAC7D,YAAW,uBAAS,CAAC,EAAE,AAAK,IAAD,QAAQ,CAAC,EAAE,AAAK,IAAD,OAAO,AAAK,IAAD,SAAS,AAAK,IAAD,SAC9D,AAAK,IAAD;IACV;iBAG0B;AAAU,2BAAS,cAAC,KAAK;IAAC;;8BA1H1B;;IAAgC,cAAE,QAAQ;;;gCAG/C;IAAc,cAAG,cAAM,IAAI;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAvB1B,UAAI;EAAc;2CCIvB,MAAU;AAC1B,UAAC,AAAM,AAAqB,MAAtB,oBAAyB,iBAAW,IAAI,KAAK,KAAK,AAAY,0BAAC,KAAK;EAAC;yCAU3D;AAChB,UAAC,AAAK,AAAI,AAAM,KAAX,UAAG,OAAK,MAAQ,AAAK,IAAD,UAAG,SAAO,KAAO,AAAK,AAAM,IAAP,UAAG,SAAO;EAAG;;QAiB/C;QACA;QACA;AAEZ,sBAAA,AAAI,GAAD,SAAO,GAAG,kBAAY,IAAI,EAAE,KAAK;EAAE;;;;;;;;;;;MCzC3B,kBAAY;;;MACZ,kBAAY;;;MACZ,aAAO;;;MACP,aAAO;;;MACP,YAAM;;;MACN,UAAI;;;MACJ,WAAK;;;MDJd,kBAAY","file":"time.ddc.js"}');
  // Exports:
  return {
    time: time$
  };
});

//# sourceMappingURL=time.ddc.js.map
