define(['dart_sdk', 'packages/quiver/time'], function(dart_sdk, packages__quiver__time) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const time = packages__quiver__time.time;
  const async$ = Object.create(dart.library);
  const $isNotEmpty = dartx.isNotEmpty;
  const $any = dartx.any;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $length = dartx.length;
  const $where = dartx.where;
  const $isEmpty = dartx.isEmpty;
  const $reduce = dartx.reduce;
  let ListQueueOfFunction = () => (ListQueueOfFunction = dart.constFn(collection.ListQueue$(core.Function)))();
  let _HashSetOf_FakeTimer = () => (_HashSetOf_FakeTimer = dart.constFn(collection._HashSet$(async$._FakeTimer)))();
  let VoidToDateTime = () => (VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))();
  let _FakeTimerTobool = () => (_FakeTimerTobool = dart.constFn(dart.fnType(core.bool, [async$._FakeTimer])))();
  let _FakeTimerToString = () => (_FakeTimerToString = dart.constFn(dart.fnType(core.String, [async$._FakeTimer])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ZoneAndZoneDelegateAndZone__ToTimer = () => (ZoneAndZoneDelegateAndZone__ToTimer = dart.constFn(dart.fnType(async.Timer, [async.Zone, async.ZoneDelegate, async.Zone, core.Duration, core.Function])))();
  let ZoneAndZoneDelegateAndZone__ToNull = () => (ZoneAndZoneDelegateAndZone__ToNull = dart.constFn(dart.fnType(core.Null, [async.Zone, async.ZoneDelegate, async.Zone, core.Function])))();
  let _FakeTimerAnd_FakeTimerTo_FakeTimer = () => (_FakeTimerAnd_FakeTimerTo_FakeTimer = dart.constFn(dart.fnType(async$._FakeTimer, [async$._FakeTimer, async$._FakeTimer])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 3600000000.0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 0
      });
    }
  });
  async$.FakeAsync = class FakeAsync extends core.Object {};
  (async$.FakeAsync[dart.mixinNew] = function() {
  }).prototype = async$.FakeAsync.prototype;
  dart.addTypeTests(async$.FakeAsync);
  dart.setLibraryUri(async$.FakeAsync, "package:quiver/testing/async.dart");
  const _elapsed = dart.privateName(async$, "_elapsed");
  const _elapsingTo = dart.privateName(async$, "_elapsingTo");
  const _microtasks = dart.privateName(async$, "_microtasks");
  const _timers = dart.privateName(async$, "_timers");
  const _zone = dart.privateName(async$, "_zone");
  const _nextCall = dart.privateName(async$, "_nextCall");
  const _drainTimersWhile = dart.privateName(async$, "_drainTimersWhile");
  const _elapseTo = dart.privateName(async$, "_elapseTo");
  const _drainMicrotasks = dart.privateName(async$, "_drainMicrotasks");
  const _duration = dart.privateName(core, "_duration");
  let C0;
  const _isPeriodic$ = dart.privateName(async$, "_isPeriodic");
  const _zoneSpec = dart.privateName(async$, "_zoneSpec");
  const _createTimer = dart.privateName(async$, "_createTimer");
  const _getNextTimer = dart.privateName(async$, "_getNextTimer");
  const _runTimer = dart.privateName(async$, "_runTimer");
  const _callback$ = dart.privateName(async$, "_callback");
  const _duration$ = dart.privateName(async$, "_duration");
  const _hasTimer = dart.privateName(async$, "_hasTimer");
  const _cancelTimer = dart.privateName(async$, "_cancelTimer");
  async$._FakeAsync = class _FakeAsync extends core.Object {
    getClock(initialTime) {
      return new time.Clock.new(dart.fn(() => initialTime.add(this[_elapsed]), VoidToDateTime()));
    }
    elapse(duration) {
      if (dart.notNull(duration.inMicroseconds) < 0) {
        dart.throw(new core.ArgumentError.new("Cannot call elapse with negative duration"));
      }
      if (this[_elapsingTo] != null) {
        dart.throw(new core.StateError.new("Cannot elapse until previous elapse is complete."));
      }
      this[_elapsingTo] = this[_elapsed]['+'](duration);
      this[_drainTimersWhile](dart.fn(next => next[_nextCall]['<='](this[_elapsingTo]), _FakeTimerTobool()));
      this[_elapseTo](this[_elapsingTo]);
      this[_elapsingTo] = null;
    }
    elapseBlocking(duration) {
      if (dart.notNull(duration.inMicroseconds) < 0) {
        dart.throw(new core.ArgumentError.new("Cannot call elapse with negative duration"));
      }
      this[_elapsed] = this[_elapsed]['+'](duration);
      if (this[_elapsingTo] != null && dart.test(this[_elapsed]['>'](this[_elapsingTo]))) {
        this[_elapsingTo] = this[_elapsed];
      }
    }
    flushMicrotasks() {
      this[_drainMicrotasks]();
    }
    flushTimers(opts) {
      let timeout = opts && 'timeout' in opts ? opts.timeout : C0 || CT.C0;
      let flushPeriodicTimers = opts && 'flushPeriodicTimers' in opts ? opts.flushPeriodicTimers : true;
      let absoluteTimeout = this[_elapsed]['+'](timeout);
      this[_drainTimersWhile](dart.fn(timer => {
        if (dart.test(timer[_nextCall]['>'](absoluteTimeout))) {
          dart.throw(new core.StateError.new("Exceeded timeout " + dart.str(timeout) + " while flushing timers"));
        }
        if (dart.test(flushPeriodicTimers)) {
          return this[_timers][$isNotEmpty];
        } else {
          return this[_timers][$any](dart.fn(timer => !dart.test(timer[_isPeriodic$]) || dart.test(timer[_nextCall]['<='](this[_elapsed])), _FakeTimerTobool()));
        }
      }, _FakeTimerTobool()));
    }
    get pendingTimersDebugInfo() {
      return this[_timers][$map](core.String, dart.fn(timer => dart.str(timer.debugInfo), _FakeTimerToString()))[$toList]({growable: false});
    }
    run(callback) {
      if (this[_zone] == null) {
        this[_zone] = async.Zone.current.fork({specification: this[_zoneSpec]});
      }
      let result = null;
      this[_zone].runGuarded(dart.fn(() => {
        result = callback(this);
      }, VoidToNull()));
      return result;
    }
    get periodicTimerCount() {
      return this[_timers][$where](dart.fn(timer => timer[_isPeriodic$], _FakeTimerTobool()))[$length];
    }
    get nonPeriodicTimerCount() {
      return this[_timers][$where](dart.fn(timer => !dart.test(timer[_isPeriodic$]), _FakeTimerTobool()))[$length];
    }
    get microtaskCount() {
      return this[_microtasks][$length];
    }
    get [_zoneSpec]() {
      return new async._ZoneSpecification.new({createTimer: dart.fn((_, __, ___, duration, callback) => this[_createTimer](duration, callback, false), ZoneAndZoneDelegateAndZone__ToTimer()), createPeriodicTimer: dart.fn((_, __, ___, duration, callback) => this[_createTimer](duration, callback, true), ZoneAndZoneDelegateAndZone__ToTimer()), scheduleMicrotask: dart.fn((_, __, ___, microtask) => {
          this[_microtasks].add(microtask);
        }, ZoneAndZoneDelegateAndZone__ToNull())});
    }
    [_drainTimersWhile](predicate) {
      this[_drainMicrotasks]();
      let next = null;
      while ((next = this[_getNextTimer]()) != null && dart.test(predicate(next))) {
        this[_runTimer](next);
        this[_drainMicrotasks]();
      }
    }
    [_elapseTo](to) {
      if (dart.test(to['>'](this[_elapsed]))) {
        this[_elapsed] = to;
      }
    }
    [_createTimer](duration, callback, isPeriodic) {
      let timer = new async$._FakeTimer.__(duration, callback, isPeriodic, this);
      this[_timers].add(timer);
      return timer;
    }
    [_getNextTimer]() {
      return dart.test(this[_timers][$isEmpty]) ? null : this[_timers][$reduce](dart.fn((t1, t2) => dart.test(t1[_nextCall]['<='](t2[_nextCall])) ? t1 : t2, _FakeTimerAnd_FakeTimerTo_FakeTimer()));
    }
    [_runTimer](timer) {
      let t0;
      if (!dart.test(timer.isActive)) dart.assertFailed(null, "org-dartlang-app:///packages/quiver/testing/src/async/fake_async.dart", 255, 12, "timer.isActive");
      this[_elapseTo](timer[_nextCall]);
      if (dart.test(timer[_isPeriodic$])) {
        dart.dsend(timer, _callback$, [timer]);
        t0 = timer;
        t0[_nextCall] = t0[_nextCall]['+'](timer[_duration$]);
      } else {
        this[_timers].remove(timer);
        dart.dsend(timer, _callback$, []);
      }
    }
    [_drainMicrotasks]() {
      while (dart.test(this[_microtasks][$isNotEmpty])) {
        dart.dcall(this[_microtasks].removeFirst(), []);
      }
    }
    [_hasTimer](timer) {
      return this[_timers].contains(timer);
    }
    [_cancelTimer](timer) {
      return this[_timers].remove(timer);
    }
  };
  (async$._FakeAsync.new = function() {
    this[_elapsed] = core.Duration.zero;
    this[_elapsingTo] = null;
    this[_microtasks] = new (ListQueueOfFunction()).new();
    this[_timers] = new (_HashSetOf_FakeTimer()).new();
    this[_zone] = null;
    ;
  }).prototype = async$._FakeAsync.prototype;
  dart.addTypeTests(async$._FakeAsync);
  async$._FakeAsync[dart.implements] = () => [async$.FakeAsync];
  dart.setMethodSignature(async$._FakeAsync, () => ({
    __proto__: dart.getMethods(async$._FakeAsync.__proto__),
    getClock: dart.fnType(time.Clock, [core.DateTime]),
    elapse: dart.fnType(dart.void, [core.Duration]),
    elapseBlocking: dart.fnType(dart.void, [core.Duration]),
    flushMicrotasks: dart.fnType(dart.void, []),
    flushTimers: dart.fnType(dart.void, [], {flushPeriodicTimers: core.bool, timeout: core.Duration}),
    run: dart.fnType(dart.dynamic, [dart.fnType(dart.dynamic, [async$.FakeAsync])]),
    [_drainTimersWhile]: dart.fnType(dart.dynamic, [dart.fnType(core.bool, [async$._FakeTimer])]),
    [_elapseTo]: dart.fnType(dart.dynamic, [core.Duration]),
    [_createTimer]: dart.fnType(async.Timer, [core.Duration, core.Function, core.bool]),
    [_getNextTimer]: dart.fnType(async$._FakeTimer, []),
    [_runTimer]: dart.fnType(dart.dynamic, [async$._FakeTimer]),
    [_drainMicrotasks]: dart.fnType(dart.dynamic, []),
    [_hasTimer]: dart.fnType(dart.dynamic, [async$._FakeTimer]),
    [_cancelTimer]: dart.fnType(dart.dynamic, [async$._FakeTimer])
  }));
  dart.setGetterSignature(async$._FakeAsync, () => ({
    __proto__: dart.getGetters(async$._FakeAsync.__proto__),
    pendingTimersDebugInfo: core.List$(core.String),
    periodicTimerCount: core.int,
    nonPeriodicTimerCount: core.int,
    microtaskCount: core.int,
    [_zoneSpec]: async.ZoneSpecification
  }));
  dart.setLibraryUri(async$._FakeAsync, "package:quiver/testing/async.dart");
  dart.setFieldSignature(async$._FakeAsync, () => ({
    __proto__: dart.getFields(async$._FakeAsync.__proto__),
    [_elapsed]: dart.fieldType(core.Duration),
    [_elapsingTo]: dart.fieldType(core.Duration),
    [_microtasks]: dart.fieldType(collection.Queue$(core.Function)),
    [_timers]: dart.fieldType(core.Set$(async$._FakeTimer)),
    [_zone]: dart.fieldType(async.Zone)
  }));
  const _time$ = dart.privateName(async$, "_time");
  const _creationStackTrace = dart.privateName(async$, "_creationStackTrace");
  let C1;
  async$._FakeTimer = class _FakeTimer extends core.Object {
    get isActive() {
      return core.bool._check(this[_time$][_hasTimer](this));
    }
    cancel() {
      return this[_time$][_cancelTimer](this);
    }
    get tick() {
      dart.throw(new core.UnimplementedError.new("tick"));
    }
    get debugInfo() {
      return "Timer (duration: " + dart.str(this[_duration$]) + ", periodic: " + dart.str(this[_isPeriodic$]) + "), created:\n" + dart.str(this[_creationStackTrace]);
    }
  };
  (async$._FakeTimer.__ = function(duration, _callback, _isPeriodic, _time) {
    this[_nextCall] = null;
    this[_callback$] = _callback;
    this[_isPeriodic$] = _isPeriodic;
    this[_time$] = _time;
    this[_duration$] = dart.test(duration['<'](async$._FakeTimer._minDuration)) ? async$._FakeTimer._minDuration : duration;
    this[_creationStackTrace] = core.StackTrace.current;
    this[_nextCall] = this[_time$][_elapsed]['+'](this[_duration$]);
  }).prototype = async$._FakeTimer.prototype;
  dart.addTypeTests(async$._FakeTimer);
  async$._FakeTimer[dart.implements] = () => [async.Timer];
  dart.setMethodSignature(async$._FakeTimer, () => ({
    __proto__: dart.getMethods(async$._FakeTimer.__proto__),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(async$._FakeTimer, () => ({
    __proto__: dart.getGetters(async$._FakeTimer.__proto__),
    isActive: core.bool,
    tick: core.int,
    debugInfo: core.String
  }));
  dart.setLibraryUri(async$._FakeTimer, "package:quiver/testing/async.dart");
  dart.setFieldSignature(async$._FakeTimer, () => ({
    __proto__: dart.getFields(async$._FakeTimer.__proto__),
    [_duration$]: dart.finalFieldType(core.Duration),
    [_callback$]: dart.finalFieldType(core.Function),
    [_isPeriodic$]: dart.finalFieldType(core.bool),
    [_time$]: dart.finalFieldType(async$._FakeAsync),
    [_creationStackTrace]: dart.finalFieldType(core.StackTrace),
    [_nextCall]: dart.fieldType(core.Duration)
  }));
  dart.defineLazy(async$._FakeTimer, {
    /*async$._FakeTimer._minDuration*/get _minDuration() {
      return C1 || CT.C1;
    }
  });
  dart.trackLibraries("packages/quiver/testing/async", {
    "package:quiver/testing/async.dart": async$
  }, {
    "package:quiver/testing/async.dart": ["src/async/fake_async.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/async/fake_async.dart"],"names":[],"mappings":"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","file":"async.ddc.js"}');
  // Exports:
  return {
    testing__async: async$
  };
});

//# sourceMappingURL=async.ddc.js.map
