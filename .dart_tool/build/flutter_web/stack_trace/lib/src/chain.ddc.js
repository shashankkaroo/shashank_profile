define(['dart_sdk', 'packages/path/path'], function(dart_sdk, packages__path__path) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const path = packages__path__path.path;
  const utils = Object.create(dart.library);
  const unparsed_frame = Object.create(dart.library);
  const vm_trace = Object.create(dart.library);
  const lazy_chain = Object.create(dart.library);
  const frame$ = Object.create(dart.library);
  const stack_trace = Object.create(dart.library);
  const lazy_trace = Object.create(dart.library);
  const stack_zone_specification = Object.create(dart.library);
  const chain$ = Object.create(dart.library);
  const trace$ = Object.create(dart.library);
  const $padRight = dartx.padRight;
  const $replaceAllMapped = dartx.replaceAllMapped;
  const $replaceAll = dartx.replaceAll;
  const $map = dartx.map;
  const $join = dartx.join;
  const $first = dartx.first;
  const $split = dartx.split;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $allMatches = dartx.allMatches;
  const $contains = dartx.contains;
  const $startsWith = dartx.startsWith;
  const $skip = dartx.skip;
  const $indexOf = dartx.indexOf;
  const $substring = dartx.substring;
  const $add = dartx.add;
  const $addAll = dartx.addAll;
  const $isEmpty = dartx.isEmpty;
  const $single = dartx.single;
  const $where = dartx.where;
  const $isNotEmpty = dartx.isNotEmpty;
  const $last = dartx.last;
  const $expand = dartx.expand;
  const $fold = dartx.fold;
  const $skipWhile = dartx.skipWhile;
  const $trim = dartx.trim;
  const $take = dartx.take;
  const $toList = dartx.toList;
  const $endsWith = dartx.endsWith;
  const $reversed = dartx.reversed;
  const $removeAt = dartx.removeAt;
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let FrameToString = () => (FrameToString = dart.constFn(dart.fnType(core.String, [frame$.Frame])))();
  let VoidToChain = () => (VoidToChain = dart.constFn(dart.fnType(chain$.Chain, [])))();
  let VoidToTrace = () => (VoidToTrace = dart.constFn(dart.fnType(trace$.Trace, [])))();
  let VoidToFrame = () => (VoidToFrame = dart.constFn(dart.fnType(frame$.Frame, [])))();
  let dynamicAnddynamicToFrame = () => (dynamicAnddynamicToFrame = dart.constFn(dart.fnType(frame$.Frame, [dart.dynamic, dart.dynamic])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ExpandoOf_Node = () => (ExpandoOf_Node = dart.constFn(core.Expando$(stack_zone_specification._Node)))();
  let JSArrayOfTrace = () => (JSArrayOfTrace = dart.constFn(_interceptors.JSArray$(trace$.Trace)))();
  let ListOfTrace = () => (ListOfTrace = dart.constFn(core.List$(trace$.Trace)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let LinkedMapOfObject$bool = () => (LinkedMapOfObject$bool = dart.constFn(_js_helper.LinkedMap$(core.Object, core.bool)))();
  let StringToTrace = () => (StringToTrace = dart.constFn(dart.fnType(trace$.Trace, [core.String])))();
  let FrameTobool = () => (FrameTobool = dart.constFn(dart.fnType(core.bool, [frame$.Frame])))();
  let TraceToTrace = () => (TraceToTrace = dart.constFn(dart.fnType(trace$.Trace, [trace$.Trace])))();
  let TraceTobool = () => (TraceTobool = dart.constFn(dart.fnType(core.bool, [trace$.Trace])))();
  let ListOfFrame = () => (ListOfFrame = dart.constFn(core.List$(frame$.Frame)))();
  let TraceToListOfFrame = () => (TraceToListOfFrame = dart.constFn(dart.fnType(ListOfFrame(), [trace$.Trace])))();
  let FrameToint = () => (FrameToint = dart.constFn(dart.fnType(core.int, [frame$.Frame])))();
  let TAndTToT = () => (TAndTToT = dart.constFn(dart.gFnType(T => [T, [T, T]], T => [core.num])))();
  let TraceToint = () => (TraceToint = dart.constFn(dart.fnType(core.int, [trace$.Trace])))();
  let TraceToString = () => (TraceToString = dart.constFn(dart.fnType(core.String, [trace$.Trace])))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let StringToFrame = () => (StringToFrame = dart.constFn(dart.fnType(frame$.Frame, [core.String])))();
  let JSArrayOfFrame = () => (JSArrayOfFrame = dart.constFn(_interceptors.JSArray$(frame$.Frame)))();
  let FrameToFrame = () => (FrameToFrame = dart.constFn(dart.fnType(frame$.Frame, [frame$.Frame])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(math.max, TAndTToT());
    }
  });
  dart.defineLazy(utils, {
    /*utils.chainGap*/get chainGap() {
      return "===== asynchronous gap ===========================\n";
    },
    /*utils.vmChainGap*/get vmChainGap() {
      return "<asynchronous suspension>\n";
    },
    /*utils.inJS*/get inJS() {
      return core.int.is(0.0);
    }
  });
  unparsed_frame.UnparsedFrame = class UnparsedFrame extends core.Object {
    get uri() {
      return this[uri];
    }
    set uri(value) {
      super.uri = value;
    }
    get line() {
      return this[line];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column];
    }
    set column(value) {
      super.column = value;
    }
    get isCore() {
      return this[isCore];
    }
    set isCore(value) {
      super.isCore = value;
    }
    get library() {
      return this[library];
    }
    set library(value) {
      super.library = value;
    }
    get package() {
      return this[package$];
    }
    set package(value) {
      super.package = value;
    }
    get location() {
      return this[location];
    }
    set location(value) {
      super.location = value;
    }
    get member() {
      return this[member$];
    }
    set member(value) {
      super.member = value;
    }
    toString() {
      return this.member;
    }
  };
  (unparsed_frame.UnparsedFrame.new = function(member) {
    this[uri] = core._Uri.new({path: "unparsed"});
    this[line] = null;
    this[column] = null;
    this[isCore] = false;
    this[library] = "unparsed";
    this[package$] = null;
    this[location] = "unparsed";
    this[member$] = member;
    ;
  }).prototype = unparsed_frame.UnparsedFrame.prototype;
  dart.addTypeTests(unparsed_frame.UnparsedFrame);
  const uri = Symbol("UnparsedFrame.uri");
  const line = Symbol("UnparsedFrame.line");
  const column = Symbol("UnparsedFrame.column");
  const isCore = Symbol("UnparsedFrame.isCore");
  const library = Symbol("UnparsedFrame.library");
  const package$ = Symbol("UnparsedFrame.package");
  const location = Symbol("UnparsedFrame.location");
  const member$ = Symbol("UnparsedFrame.member");
  unparsed_frame.UnparsedFrame[dart.implements] = () => [frame$.Frame];
  dart.setLibraryUri(unparsed_frame.UnparsedFrame, "package:stack_trace/src/unparsed_frame.dart");
  dart.setFieldSignature(unparsed_frame.UnparsedFrame, () => ({
    __proto__: dart.getFields(unparsed_frame.UnparsedFrame.__proto__),
    uri: dart.finalFieldType(core.Uri),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int),
    isCore: dart.finalFieldType(core.bool),
    library: dart.finalFieldType(core.String),
    package: dart.finalFieldType(core.String),
    location: dart.finalFieldType(core.String),
    member: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(unparsed_frame.UnparsedFrame, ['toString']);
  vm_trace.VMTrace = class VMTrace extends core.Object {
    get frames() {
      return this[frames$];
    }
    set frames(value) {
      super.frames = value;
    }
    toString() {
      let i = 1;
      return this.frames[$map](core.String, dart.fn(frame => {
        let t0;
        let number = ("#" + dart.str((t0 = i, i = t0 + 1, t0)))[$padRight](8);
        let member = frame.member[$replaceAllMapped](core.RegExp.new("[^.]+\\.<async>"), dart.fn(match => dart.str(match._get(1)) + ".<" + dart.str(match._get(1)) + "_async_body>", MatchToString()))[$replaceAll]("<fn>", "<anonymous closure>");
        let line = frame.line == null ? 0 : frame.line;
        let column = frame.column == null ? 0 : frame.column;
        return number + member + " (" + dart.str(frame.uri) + ":" + dart.str(line) + ":" + dart.str(column) + ")\n";
      }, FrameToString()))[$join]();
    }
  };
  (vm_trace.VMTrace.new = function(frames) {
    this[frames$] = frames;
    ;
  }).prototype = vm_trace.VMTrace.prototype;
  dart.addTypeTests(vm_trace.VMTrace);
  const frames$ = Symbol("VMTrace.frames");
  vm_trace.VMTrace[dart.implements] = () => [core.StackTrace];
  dart.setLibraryUri(vm_trace.VMTrace, "package:stack_trace/src/vm_trace.dart");
  dart.setFieldSignature(vm_trace.VMTrace, () => ({
    __proto__: dart.getFields(vm_trace.VMTrace.__proto__),
    frames: dart.finalFieldType(core.List$(frame$.Frame))
  }));
  dart.defineExtensionMethods(vm_trace.VMTrace, ['toString']);
  const _inner = dart.privateName(lazy_chain, "_inner");
  const _thunk$ = dart.privateName(lazy_chain, "_thunk");
  const _chain = dart.privateName(lazy_chain, "_chain");
  lazy_chain.LazyChain = class LazyChain extends core.Object {
    get [_chain]() {
      if (this[_inner] == null) this[_inner] = this[_thunk$]();
      return this[_inner];
    }
    get traces() {
      return this[_chain].traces;
    }
    get terse() {
      return this[_chain].terse;
    }
    foldFrames(predicate, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : false;
      return new lazy_chain.LazyChain.new(dart.fn(() => this[_chain].foldFrames(predicate, {terse: terse}), VoidToChain()));
    }
    toTrace() {
      return new lazy_trace.LazyTrace.new(dart.fn(() => this[_chain].toTrace(), VoidToTrace()));
    }
    toString() {
      return dart.toString(this[_chain]);
    }
  };
  (lazy_chain.LazyChain.new = function(_thunk) {
    this[_inner] = null;
    this[_thunk$] = _thunk;
    ;
  }).prototype = lazy_chain.LazyChain.prototype;
  dart.addTypeTests(lazy_chain.LazyChain);
  lazy_chain.LazyChain[dart.implements] = () => [chain$.Chain];
  dart.setMethodSignature(lazy_chain.LazyChain, () => ({
    __proto__: dart.getMethods(lazy_chain.LazyChain.__proto__),
    foldFrames: dart.fnType(chain$.Chain, [dart.fnType(core.bool, [frame$.Frame])], {terse: core.bool}),
    toTrace: dart.fnType(trace$.Trace, [])
  }));
  dart.setGetterSignature(lazy_chain.LazyChain, () => ({
    __proto__: dart.getGetters(lazy_chain.LazyChain.__proto__),
    [_chain]: chain$.Chain,
    traces: core.List$(trace$.Trace),
    terse: chain$.Chain
  }));
  dart.setLibraryUri(lazy_chain.LazyChain, "package:stack_trace/src/lazy_chain.dart");
  dart.setFieldSignature(lazy_chain.LazyChain, () => ({
    __proto__: dart.getFields(lazy_chain.LazyChain.__proto__),
    [_thunk$]: dart.finalFieldType(dart.fnType(chain$.Chain, [])),
    [_inner]: dart.fieldType(chain$.Chain)
  }));
  dart.defineExtensionMethods(lazy_chain.LazyChain, ['toString']);
  frame$.Frame = class Frame extends core.Object {
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
    }
    get member() {
      return this[member$0];
    }
    set member(value) {
      super.member = value;
    }
    get isCore() {
      return this.uri.scheme === "dart";
    }
    get library() {
      if (this.uri.scheme === "data") return "data:...";
      return path.prettyUri(this.uri);
    }
    get package() {
      if (this.uri.scheme !== "package") return null;
      return this.uri.path[$split]("/")[$first];
    }
    get location() {
      if (this.line == null) return this.library;
      if (this.column == null) return dart.str(this.library) + " " + dart.str(this.line);
      return dart.str(this.library) + " " + dart.str(this.line) + ":" + dart.str(this.column);
    }
    static caller(level) {
      if (level === void 0) level = 1;
      if (dart.notNull(level) < 0) {
        dart.throw(new core.ArgumentError.new("Argument [level] must be greater than or equal " + "to 0."));
      }
      return trace$.Trace.current(dart.notNull(level) + 1).frames[$first];
    }
    static parseVM(frame) {
      return frame$.Frame._catchFormatException(frame, dart.fn(() => {
        if (frame === "...") {
          return new frame$.Frame.new(core._Uri.new(), null, null, "...");
        }
        let match = frame$._vmFrame.firstMatch(frame);
        if (match == null) return new unparsed_frame.UnparsedFrame.new(frame);
        let member = match._get(1)[$replaceAll](frame$._asyncBody, "<async>")[$replaceAll]("<anonymous closure>", "<fn>");
        let uri = core.Uri.parse(match._get(2));
        let lineAndColumn = match._get(3)[$split](":");
        let line = dart.notNull(lineAndColumn[$length]) > 1 ? core.int.parse(lineAndColumn[$_get](1)) : null;
        let column = dart.notNull(lineAndColumn[$length]) > 2 ? core.int.parse(lineAndColumn[$_get](2)) : null;
        return new frame$.Frame.new(uri, line, column, member);
      }, VoidToFrame()));
    }
    static parseV8(frame) {
      return frame$.Frame._catchFormatException(frame, dart.fn(() => {
        let match = frame$._v8Frame.firstMatch(frame);
        if (match == null) return new unparsed_frame.UnparsedFrame.new(frame);
        function parseLocation(location, member) {
          let evalMatch = frame$._v8EvalLocation.firstMatch(core.String._check(location));
          while (evalMatch != null) {
            location = evalMatch._get(1);
            evalMatch = frame$._v8EvalLocation.firstMatch(core.String._check(location));
          }
          if (dart.equals(location, "native")) {
            return new frame$.Frame.new(core.Uri.parse("native"), null, null, core.String._check(member));
          }
          let urlMatch = frame$._v8UrlLocation.firstMatch(core.String._check(location));
          if (urlMatch == null) return new unparsed_frame.UnparsedFrame.new(frame);
          return new frame$.Frame.new(frame$.Frame._uriOrPathToUri(urlMatch._get(1)), core.int.parse(urlMatch._get(2)), core.int.parse(urlMatch._get(3)), core.String._check(member));
        }
        dart.fn(parseLocation, dynamicAnddynamicToFrame());
        if (match._get(2) != null) {
          return parseLocation(match._get(2), match._get(1)[$replaceAll]("<anonymous>", "<fn>")[$replaceAll]("Anonymous function", "<fn>")[$replaceAll]("(anonymous function)", "<fn>"));
        } else {
          return parseLocation(match._get(3), "<fn>");
        }
      }, VoidToFrame()));
    }
    static parseJSCore(frame) {
      return frame$.Frame.parseV8(frame);
    }
    static parseIE(frame) {
      return frame$.Frame.parseV8(frame);
    }
    static parseFirefox(frame) {
      return frame$.Frame._catchFormatException(frame, dart.fn(() => {
        let match = frame$._firefoxSafariFrame.firstMatch(frame);
        if (match == null) return new unparsed_frame.UnparsedFrame.new(frame);
        let uri = frame$.Frame._uriOrPathToUri(match._get(3));
        let member = null;
        if (match._get(1) != null) {
          member = match._get(1);
          member = dart.dsend(member, '+', [ListOfString().filled("/"[$allMatches](match._get(2))[$length], ".<fn>")[$join]()]);
          if (dart.equals(member, "")) member = "<fn>";
          member = dart.dsend(member, 'replaceFirst', [frame$._initialDot, ""]);
        } else {
          member = "<fn>";
        }
        let line = match._get(4) === "" ? null : core.int.parse(match._get(4));
        let column = match._get(5) == null || match._get(5) === "" ? null : core.int.parse(match._get(5));
        return new frame$.Frame.new(uri, line, column, core.String._check(member));
      }, VoidToFrame()));
    }
    static parseSafari6_0(frame) {
      return frame$.Frame.parseFirefox(frame);
    }
    static parseSafari6_1(frame) {
      return frame$.Frame.parseFirefox(frame);
    }
    static parseSafari(frame) {
      return frame$.Frame.parseFirefox(frame);
    }
    static parseFriendly(frame) {
      return frame$.Frame._catchFormatException(frame, dart.fn(() => {
        let match = frame$._friendlyFrame.firstMatch(frame);
        if (match == null) {
          dart.throw(new core.FormatException.new("Couldn't parse package:stack_trace stack trace line '" + dart.str(frame) + "'."));
        }
        let uri = match._get(1) === "data:..." ? core.Uri.dataFromString("") : core.Uri.parse(match._get(1));
        if (uri.scheme === "") {
          uri = path.toUri(path.absolute(path.fromUri(uri)));
        }
        let line = match._get(2) == null ? null : core.int.parse(match._get(2));
        let column = match._get(3) == null ? null : core.int.parse(match._get(3));
        return new frame$.Frame.new(uri, line, column, match._get(4));
      }, VoidToFrame()));
    }
    static _uriOrPathToUri(uriOrPath) {
      if (uriOrPath[$contains](frame$.Frame._uriRegExp)) {
        return core.Uri.parse(uriOrPath);
      } else if (uriOrPath[$contains](frame$.Frame._windowsRegExp)) {
        return core._Uri.file(uriOrPath, {windows: true});
      } else if (uriOrPath[$startsWith]("/")) {
        return core._Uri.file(uriOrPath, {windows: false});
      }
      if (uriOrPath[$contains]("\\")) return path.windows.toUri(uriOrPath);
      return core.Uri.parse(uriOrPath);
    }
    static _catchFormatException(text, body) {
      try {
        return body();
      } catch (e) {
        let _ = dart.getThrown(e);
        if (core.FormatException.is(_)) {
          return new unparsed_frame.UnparsedFrame.new(text);
        } else
          throw e;
      }
    }
    toString() {
      return dart.str(this.location) + " in " + dart.str(this.member);
    }
  };
  (frame$.Frame.new = function(uri, line, column, member) {
    this[uri$] = uri;
    this[line$] = line;
    this[column$] = column;
    this[member$0] = member;
    ;
  }).prototype = frame$.Frame.prototype;
  dart.addTypeTests(frame$.Frame);
  const uri$ = Symbol("Frame.uri");
  const line$ = Symbol("Frame.line");
  const column$ = Symbol("Frame.column");
  const member$0 = Symbol("Frame.member");
  dart.setGetterSignature(frame$.Frame, () => ({
    __proto__: dart.getGetters(frame$.Frame.__proto__),
    isCore: core.bool,
    library: core.String,
    package: core.String,
    location: core.String
  }));
  dart.setLibraryUri(frame$.Frame, "package:stack_trace/src/frame.dart");
  dart.setFieldSignature(frame$.Frame, () => ({
    __proto__: dart.getFields(frame$.Frame.__proto__),
    uri: dart.finalFieldType(core.Uri),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int),
    member: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(frame$.Frame, ['toString']);
  dart.defineLazy(frame$.Frame, {
    /*frame$.Frame._uriRegExp*/get _uriRegExp() {
      return core.RegExp.new("^[a-zA-Z][-+.a-zA-Z\\d]*://");
    },
    /*frame$.Frame._windowsRegExp*/get _windowsRegExp() {
      return core.RegExp.new("^([a-zA-Z]:[\\\\/]|\\\\\\\\)");
    }
  });
  dart.defineLazy(frame$, {
    /*frame$._vmFrame*/get _vmFrame() {
      return core.RegExp.new("^#\\d+\\s+(\\S.*) \\((.+?)((?::\\d+){0,2})\\)$");
    },
    /*frame$._v8Frame*/get _v8Frame() {
      return core.RegExp.new("^\\s*at (?:(\\S.*?)(?: \\[as [^\\]]+\\])? \\((.*)\\)|(.*))$");
    },
    /*frame$._v8UrlLocation*/get _v8UrlLocation() {
      return core.RegExp.new("^(.*):(\\d+):(\\d+)|native$");
    },
    /*frame$._v8EvalLocation*/get _v8EvalLocation() {
      return core.RegExp.new("^eval at (?:\\S.*?) \\((.*)\\)(?:, .*?:\\d+:\\d+)?$");
    },
    /*frame$._firefoxSafariFrame*/get _firefoxSafariFrame() {
      return core.RegExp.new("^" + "(?:" + "([^@(/]*)" + "(?:\\(.*\\))?" + "((?:/[^/]*)*)" + "(?:\\(.*\\))?" + "@" + ")?" + "(.*?)" + ":" + "(\\d*)" + "(?::(\\d*))?" + "$");
    },
    /*frame$._friendlyFrame*/get _friendlyFrame() {
      return core.RegExp.new("^(\\S+)(?: (\\d+)(?::(\\d+))?)?\\s+([^\\d].*)$");
    },
    /*frame$._asyncBody*/get _asyncBody() {
      return core.RegExp.new("<(<anonymous closure>|[^>]+)_async_body>");
    },
    /*frame$._initialDot*/get _initialDot() {
      return core.RegExp.new("^\\.");
    }
  });
  const _inner$ = dart.privateName(lazy_trace, "_inner");
  const _thunk$0 = dart.privateName(lazy_trace, "_thunk");
  const _trace = dart.privateName(lazy_trace, "_trace");
  lazy_trace.LazyTrace = class LazyTrace extends core.Object {
    get [_trace]() {
      if (this[_inner$] == null) this[_inner$] = this[_thunk$0]();
      return this[_inner$];
    }
    get frames() {
      return this[_trace].frames;
    }
    get original() {
      return this[_trace].original;
    }
    get vmTrace() {
      return this[_trace].vmTrace;
    }
    get terse() {
      return new lazy_trace.LazyTrace.new(dart.fn(() => this[_trace].terse, VoidToTrace()));
    }
    foldFrames(predicate, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : false;
      return new lazy_trace.LazyTrace.new(dart.fn(() => this[_trace].foldFrames(predicate, {terse: terse}), VoidToTrace()));
    }
    toString() {
      return dart.toString(this[_trace]);
    }
    set frames(_) {
      return dart.throw(new core.UnimplementedError.new());
    }
  };
  (lazy_trace.LazyTrace.new = function(_thunk) {
    this[_inner$] = null;
    this[_thunk$0] = _thunk;
    ;
  }).prototype = lazy_trace.LazyTrace.prototype;
  dart.addTypeTests(lazy_trace.LazyTrace);
  lazy_trace.LazyTrace[dart.implements] = () => [trace$.Trace];
  dart.setMethodSignature(lazy_trace.LazyTrace, () => ({
    __proto__: dart.getMethods(lazy_trace.LazyTrace.__proto__),
    foldFrames: dart.fnType(trace$.Trace, [dart.fnType(core.bool, [frame$.Frame])], {terse: core.bool})
  }));
  dart.setGetterSignature(lazy_trace.LazyTrace, () => ({
    __proto__: dart.getGetters(lazy_trace.LazyTrace.__proto__),
    [_trace]: trace$.Trace,
    frames: core.List$(frame$.Frame),
    original: core.StackTrace,
    vmTrace: core.StackTrace,
    terse: trace$.Trace
  }));
  dart.setSetterSignature(lazy_trace.LazyTrace, () => ({
    __proto__: dart.getSetters(lazy_trace.LazyTrace.__proto__),
    frames: dart.dynamic
  }));
  dart.setLibraryUri(lazy_trace.LazyTrace, "package:stack_trace/src/lazy_trace.dart");
  dart.setFieldSignature(lazy_trace.LazyTrace, () => ({
    __proto__: dart.getFields(lazy_trace.LazyTrace.__proto__),
    [_thunk$0]: dart.finalFieldType(dart.fnType(trace$.Trace, [])),
    [_inner$]: dart.fieldType(trace$.Trace)
  }));
  dart.defineExtensionMethods(lazy_trace.LazyTrace, ['toString']);
  const _chains = dart.privateName(stack_zone_specification, "_chains");
  const _currentNode = dart.privateName(stack_zone_specification, "_currentNode");
  const _onError$ = dart.privateName(stack_zone_specification, "_onError");
  const _errorZone = dart.privateName(stack_zone_specification, "_errorZone");
  const _disabled = dart.privateName(stack_zone_specification, "_disabled");
  const _handleUncaughtError = dart.privateName(stack_zone_specification, "_handleUncaughtError");
  const _registerCallback = dart.privateName(stack_zone_specification, "_registerCallback");
  const _registerUnaryCallback = dart.privateName(stack_zone_specification, "_registerUnaryCallback");
  const _registerBinaryCallback = dart.privateName(stack_zone_specification, "_registerBinaryCallback");
  const _errorCallback = dart.privateName(stack_zone_specification, "_errorCallback");
  const _createNode = dart.privateName(stack_zone_specification, "_createNode");
  const _trimVMChain = dart.privateName(stack_zone_specification, "_trimVMChain");
  const _run = dart.privateName(stack_zone_specification, "_run");
  const _currentTrace = dart.privateName(stack_zone_specification, "_currentTrace");
  stack_zone_specification.StackZoneSpecification = class StackZoneSpecification extends core.Object {
    get [_disabled]() {
      return dart.equals(async.Zone.current._get(stack_zone_specification.StackZoneSpecification.disableKey), true);
    }
    toSpec() {
      return new async._ZoneSpecification.new({handleUncaughtError: dart.test(this[_errorZone]) ? dart.bind(this, _handleUncaughtError) : null, registerCallback: dart.bind(this, _registerCallback), registerUnaryCallback: dart.bind(this, _registerUnaryCallback), registerBinaryCallback: dart.bind(this, _registerBinaryCallback), errorCallback: dart.bind(this, _errorCallback)});
    }
    currentChain(level) {
      if (level === void 0) level = 0;
      return this[_createNode](dart.notNull(level) + 1).toChain();
    }
    chainFor(trace) {
      let t1;
      if (chain$.Chain.is(trace)) return trace;
      trace == null ? trace = core.StackTrace.current : null;
      let previous = (t1 = this[_chains]._get(trace), t1 == null ? this[_currentNode] : t1);
      if (previous == null) {
        if (trace$.Trace.is(trace)) return new chain$.Chain.new(JSArrayOfTrace().of([trace]));
        return new lazy_chain.LazyChain.new(dart.fn(() => chain$.Chain.parse(dart.toString(trace)), VoidToChain()));
      } else {
        if (!trace$.Trace.is(trace)) {
          let original = trace;
          trace = new lazy_trace.LazyTrace.new(dart.fn(() => trace$.Trace.parse(this[_trimVMChain](original)), VoidToTrace()));
        }
        return new stack_zone_specification._Node.new(trace, previous).toChain();
      }
    }
    [_registerCallback](R, self, parent, zone, f) {
      if (f == null || dart.test(this[_disabled])) return parent.registerCallback(R, zone, f);
      let node = this[_createNode](1);
      return parent.registerCallback(R, zone, dart.fn(() => this[_run](R, f, node), dart.fnType(R, [])));
    }
    [_registerUnaryCallback](R, T, self, parent, zone, f) {
      if (f == null || dart.test(this[_disabled])) return parent.registerUnaryCallback(R, T, zone, f);
      let node = this[_createNode](1);
      return parent.registerUnaryCallback(R, T, zone, dart.fn(arg => this[_run](R, dart.fn(() => f(arg), dart.fnType(R, [])), node), dart.fnType(R, [T])));
    }
    [_registerBinaryCallback](R, T1, T2, self, parent, zone, f) {
      if (f == null || dart.test(this[_disabled])) return parent.registerBinaryCallback(R, T1, T2, zone, dart.fnType(R, [T1, T2])._check(f));
      let node = this[_createNode](1);
      return parent.registerBinaryCallback(R, T1, T2, zone, dart.fn((arg1, arg2) => this[_run](R, dart.fn(() => R._check(dart.dcall(f, [arg1, arg2])), dart.fnType(R, [])), node), dart.fnType(R, [T1, T2])));
    }
    [_handleUncaughtError](self, parent, zone, error, stackTrace) {
      if (dart.test(this[_disabled])) {
        parent.handleUncaughtError(zone, error, stackTrace);
        return;
      }
      let stackChain = this.chainFor(stackTrace);
      if (this[_onError$] == null) {
        parent.handleUncaughtError(zone, error, stackChain);
        return;
      }
      try {
        self.parent.runBinary(dart.void, dart.dynamic, chain$.Chain, this[_onError$], error, stackChain);
      } catch (e) {
        let newError = dart.getThrown(e);
        let newStackTrace = dart.stackTrace(e);
        if (core.identical(newError, error)) {
          parent.handleUncaughtError(zone, error, stackChain);
        } else {
          parent.handleUncaughtError(zone, newError, newStackTrace);
        }
      }
    }
    [_errorCallback](self, parent, zone, error, stackTrace) {
      if (dart.test(this[_disabled])) return parent.errorCallback(zone, error, stackTrace);
      if (stackTrace == null) {
        stackTrace = this[_createNode](2).toChain();
      } else {
        if (this[_chains]._get(stackTrace) == null) this[_chains]._set(stackTrace, this[_createNode](2));
      }
      let asyncError = parent.errorCallback(zone, error, stackTrace);
      return asyncError == null ? new async.AsyncError.new(error, stackTrace) : asyncError;
    }
    [_createNode](level) {
      if (level === void 0) level = 0;
      return new stack_zone_specification._Node.new(this[_currentTrace](dart.notNull(level) + 1), this[_currentNode]);
    }
    [_run](T, f, node) {
      let t5, t4, t3;
      let previousNode = this[_currentNode];
      this[_currentNode] = node;
      try {
        return f();
      } catch (e$) {
        let e = dart.getThrown(e$);
        let stackTrace = dart.stackTrace(e$);
        t3 = this[_chains];
        t4 = stackTrace;
        t3._get(t4) == null ? (t5 = node, t3._set(t4, t5), t5) : null;
        dart.rethrow(e$);
      } finally {
        this[_currentNode] = previousNode;
      }
    }
    [_currentTrace](level) {
      if (level === void 0) level = null;
      level == null ? level = 0 : null;
      let stackTrace = core.StackTrace.current;
      return new lazy_trace.LazyTrace.new(dart.fn(() => {
        let text = this[_trimVMChain](stackTrace);
        let trace = trace$.Trace.parse(text);
        return new trace$.Trace.new(trace.frames[$skip](dart.notNull(level) + (dart.test(utils.inJS) ? 2 : 1)), {original: text});
      }, VoidToTrace()));
    }
    [_trimVMChain](trace) {
      let text = dart.toString(trace);
      let index = text[$indexOf]("<asynchronous suspension>\n");
      return index === -1 ? text : text[$substring](0, index);
    }
  };
  (stack_zone_specification.StackZoneSpecification.new = function(_onError, opts) {
    let errorZone = opts && 'errorZone' in opts ? opts.errorZone : true;
    this[_chains] = new (ExpandoOf_Node()).new("stack chains");
    this[_currentNode] = null;
    this[_onError$] = _onError;
    this[_errorZone] = errorZone;
    ;
  }).prototype = stack_zone_specification.StackZoneSpecification.prototype;
  dart.addTypeTests(stack_zone_specification.StackZoneSpecification);
  dart.setMethodSignature(stack_zone_specification.StackZoneSpecification, () => ({
    __proto__: dart.getMethods(stack_zone_specification.StackZoneSpecification.__proto__),
    toSpec: dart.fnType(async.ZoneSpecification, []),
    currentChain: dart.fnType(chain$.Chain, [], [core.int]),
    chainFor: dart.fnType(chain$.Chain, [core.StackTrace]),
    [_registerCallback]: dart.gFnType(R => [dart.fnType(R, []), [async.Zone, async.ZoneDelegate, async.Zone, dart.fnType(R, [])]]),
    [_registerUnaryCallback]: dart.gFnType((R, T) => [dart.fnType(R, [T]), [async.Zone, async.ZoneDelegate, async.Zone, dart.fnType(R, [T])]]),
    [_registerBinaryCallback]: dart.gFnType((R, T1, T2) => [dart.fnType(R, [T1, T2]), [async.Zone, async.ZoneDelegate, async.Zone, core.Function]]),
    [_handleUncaughtError]: dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, dart.dynamic, core.StackTrace]),
    [_errorCallback]: dart.fnType(async.AsyncError, [async.Zone, async.ZoneDelegate, async.Zone, core.Object, core.StackTrace]),
    [_createNode]: dart.fnType(stack_zone_specification._Node, [], [core.int]),
    [_run]: dart.gFnType(T => [T, [dart.fnType(T, []), stack_zone_specification._Node]]),
    [_currentTrace]: dart.fnType(trace$.Trace, [], [core.int]),
    [_trimVMChain]: dart.fnType(core.String, [core.StackTrace])
  }));
  dart.setGetterSignature(stack_zone_specification.StackZoneSpecification, () => ({
    __proto__: dart.getGetters(stack_zone_specification.StackZoneSpecification.__proto__),
    [_disabled]: core.bool
  }));
  dart.setLibraryUri(stack_zone_specification.StackZoneSpecification, "package:stack_trace/src/stack_zone_specification.dart");
  dart.setFieldSignature(stack_zone_specification.StackZoneSpecification, () => ({
    __proto__: dart.getFields(stack_zone_specification.StackZoneSpecification.__proto__),
    [_chains]: dart.finalFieldType(core.Expando$(stack_zone_specification._Node)),
    [_onError$]: dart.finalFieldType(dart.fnType(dart.void, [dart.dynamic, chain$.Chain])),
    [_currentNode]: dart.fieldType(stack_zone_specification._Node),
    [_errorZone]: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(stack_zone_specification.StackZoneSpecification, {
    /*stack_zone_specification.StackZoneSpecification.disableKey*/get disableKey() {
      return new core.Object.new();
    }
  });
  stack_zone_specification._Node = class _Node extends core.Object {
    toChain() {
      let nodes = JSArrayOfTrace().of([]);
      let node = this;
      while (node != null) {
        nodes[$add](node.trace);
        node = node.previous;
      }
      return new chain$.Chain.new(nodes);
    }
  };
  (stack_zone_specification._Node.new = function(trace, previous) {
    if (previous === void 0) previous = null;
    this.previous = previous;
    this.trace = trace$.Trace.from(trace);
    ;
  }).prototype = stack_zone_specification._Node.prototype;
  dart.addTypeTests(stack_zone_specification._Node);
  dart.setMethodSignature(stack_zone_specification._Node, () => ({
    __proto__: dart.getMethods(stack_zone_specification._Node.__proto__),
    toChain: dart.fnType(chain$.Chain, [])
  }));
  dart.setLibraryUri(stack_zone_specification._Node, "package:stack_trace/src/stack_zone_specification.dart");
  dart.setFieldSignature(stack_zone_specification._Node, () => ({
    __proto__: dart.getFields(stack_zone_specification._Node.__proto__),
    trace: dart.finalFieldType(trace$.Trace),
    previous: dart.finalFieldType(stack_zone_specification._Node)
  }));
  let C0;
  chain$.Chain = class Chain extends core.Object {
    get traces() {
      return this[traces$];
    }
    set traces(value) {
      super.traces = value;
    }
    static get _currentSpec() {
      return stack_zone_specification.StackZoneSpecification._check(async.Zone.current._get(chain$._specKey));
    }
    static capture(T, callback, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let when = opts && 'when' in opts ? opts.when : true;
      let errorZone = opts && 'errorZone' in opts ? opts.errorZone : true;
      if (!dart.test(errorZone) && onError != null) {
        dart.throw(new core.ArgumentError.value(onError, "onError", "must be null if errorZone is false"));
      }
      if (!dart.test(when)) {
        let newOnError = null;
        if (onError != null) {
          newOnError = dart.fn((error, stackTrace) => {
            onError(error, stackTrace == null ? chain$.Chain.current() : chain$.Chain.forTrace(core.StackTrace._check(stackTrace)));
          }, dynamicAnddynamicToNull());
        }
        return async.runZoned(T, callback, {onError: core.Function._check(newOnError)});
      }
      let spec = new stack_zone_specification.StackZoneSpecification.new(onError, {errorZone: errorZone});
      return async.runZoned(T, dart.fn(() => {
        try {
          return callback();
        } catch (e) {
          let error = dart.getThrown(e);
          let stackTrace = dart.stackTrace(e);
          async.Zone.current.handleUncaughtError(error, stackTrace);
          return null;
        }
      }, dart.fnType(T, [])), {zoneSpecification: spec.toSpec(), zoneValues: new _js_helper.LinkedMap.from([chain$._specKey, spec, stack_zone_specification.StackZoneSpecification.disableKey, false])});
    }
    static disable(T, callback, opts) {
      let when = opts && 'when' in opts ? opts.when : true;
      let zoneValues = dart.test(when) ? new (LinkedMapOfObject$bool()).from([chain$._specKey, null, stack_zone_specification.StackZoneSpecification.disableKey, true]) : null;
      return async.runZoned(T, callback, {zoneValues: zoneValues});
    }
    static track(futureOrStream) {
      return futureOrStream;
    }
    static current(level) {
      if (level === void 0) level = 0;
      if (chain$.Chain._currentSpec != null) return chain$.Chain._currentSpec.currentChain(dart.notNull(level) + 1);
      let chain = chain$.Chain.forTrace(core.StackTrace.current);
      return new lazy_chain.LazyChain.new(dart.fn(() => {
        let t4;
        let first = new trace$.Trace.new(chain.traces[$first].frames[$skip](dart.notNull(level) + (dart.test(utils.inJS) ? 2 : 1)), {original: dart.toString(chain.traces[$first].original)});
        return new chain$.Chain.new((t4 = JSArrayOfTrace().of([first]), t4[$addAll](chain.traces[$skip](1)), t4));
      }, VoidToChain()));
    }
    static forTrace(trace) {
      if (chain$.Chain.is(trace)) return trace;
      if (chain$.Chain._currentSpec != null) return chain$.Chain._currentSpec.chainFor(trace);
      if (trace$.Trace.is(trace)) return new chain$.Chain.new(JSArrayOfTrace().of([trace]));
      return new lazy_chain.LazyChain.new(dart.fn(() => chain$.Chain.parse(dart.toString(trace)), VoidToChain()));
    }
    static parse(chain) {
      if (chain[$isEmpty]) return new chain$.Chain.new(JSArrayOfTrace().of([]));
      if (chain[$contains]("<asynchronous suspension>\n")) {
        return new chain$.Chain.new(chain[$split]("<asynchronous suspension>\n")[$map](trace$.Trace, dart.fn(trace => new trace$.Trace.parseVM(trace), StringToTrace())));
      }
      if (!chain[$contains](utils.chainGap)) return new chain$.Chain.new(JSArrayOfTrace().of([trace$.Trace.parse(chain)]));
      return new chain$.Chain.new(chain[$split](utils.chainGap)[$map](trace$.Trace, dart.fn(trace => new trace$.Trace.parseFriendly(trace), StringToTrace())));
    }
    get terse() {
      return this.foldFrames(dart.fn(_ => false, FrameTobool()), {terse: true});
    }
    foldFrames(predicate, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : false;
      let foldedTraces = this.traces[$map](trace$.Trace, dart.fn(trace => trace.foldFrames(predicate, {terse: terse}), TraceToTrace()));
      let nonEmptyTraces = foldedTraces[$where](dart.fn(trace => {
        if (dart.notNull(trace.frames[$length]) > 1) return true;
        if (dart.test(trace.frames[$isEmpty])) return false;
        if (!dart.test(terse)) return false;
        return trace.frames[$single].line != null;
      }, TraceTobool()));
      if (dart.test(nonEmptyTraces[$isEmpty]) && dart.test(foldedTraces[$isNotEmpty])) {
        return new chain$.Chain.new(JSArrayOfTrace().of([foldedTraces[$last]]));
      }
      return new chain$.Chain.new(nonEmptyTraces);
    }
    toTrace() {
      return new trace$.Trace.new(this.traces[$expand](frame$.Frame, dart.fn(trace => trace.frames, TraceToListOfFrame())));
    }
    toString() {
      let longest = this.traces[$map](core.int, dart.fn(trace => trace.frames[$map](core.int, dart.fn(frame => frame.location.length, FrameToint()))[$fold](core.int, 0, dart.gbind(C0 || CT.C0, core.int)), TraceToint()))[$fold](core.int, 0, dart.gbind(C0 || CT.C0, core.int));
      return this.traces[$map](core.String, dart.fn(trace => trace.frames[$map](core.String, dart.fn(frame => frame.location[$padRight](longest) + "  " + dart.str(frame.member) + "\n", FrameToString()))[$join](), TraceToString()))[$join](utils.chainGap);
    }
  };
  (chain$.Chain.new = function(traces) {
    this[traces$] = ListOfTrace().unmodifiable(traces);
    ;
  }).prototype = chain$.Chain.prototype;
  dart.addTypeTests(chain$.Chain);
  const traces$ = Symbol("Chain.traces");
  chain$.Chain[dart.implements] = () => [core.StackTrace];
  dart.setMethodSignature(chain$.Chain, () => ({
    __proto__: dart.getMethods(chain$.Chain.__proto__),
    foldFrames: dart.fnType(chain$.Chain, [dart.fnType(core.bool, [frame$.Frame])], {terse: core.bool}),
    toTrace: dart.fnType(trace$.Trace, [])
  }));
  dart.setGetterSignature(chain$.Chain, () => ({
    __proto__: dart.getGetters(chain$.Chain.__proto__),
    terse: chain$.Chain
  }));
  dart.setLibraryUri(chain$.Chain, "package:stack_trace/src/chain.dart");
  dart.setFieldSignature(chain$.Chain, () => ({
    __proto__: dart.getFields(chain$.Chain.__proto__),
    traces: dart.finalFieldType(core.List$(trace$.Trace))
  }));
  dart.defineExtensionMethods(chain$.Chain, ['toString']);
  dart.defineLazy(chain$, {
    /*chain$._specKey*/get _specKey() {
      return new core.Object.new();
    }
  });
  trace$.Trace = class Trace extends core.Object {
    get frames() {
      return this[frames$0];
    }
    set frames(value) {
      super.frames = value;
    }
    get original() {
      return this[original$];
    }
    set original(value) {
      super.original = value;
    }
    static format(stackTrace, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : true;
      let trace = trace$.Trace.from(stackTrace);
      if (dart.test(terse)) trace = trace.terse;
      return dart.toString(trace);
    }
    static current(level) {
      if (level === void 0) level = 0;
      if (dart.notNull(level) < 0) {
        dart.throw(new core.ArgumentError.new("Argument [level] must be greater than or equal " + "to 0."));
      }
      let trace = trace$.Trace.from(core.StackTrace.current);
      return new lazy_trace.LazyTrace.new(dart.fn(() => new trace$.Trace.new(trace.frames[$skip](dart.notNull(level) + (dart.test(utils.inJS) ? 2 : 1)), {original: dart.toString(trace.original)}), VoidToTrace()));
    }
    static from(trace) {
      if (trace == null) {
        dart.throw(new core.ArgumentError.new("Cannot create a Trace from null."));
      }
      if (trace$.Trace.is(trace)) return trace;
      if (chain$.Chain.is(trace)) return trace.toTrace();
      return new lazy_trace.LazyTrace.new(dart.fn(() => trace$.Trace.parse(dart.toString(trace)), VoidToTrace()));
    }
    static parse(trace) {
      try {
        if (trace[$isEmpty]) return new trace$.Trace.new(JSArrayOfFrame().of([]));
        if (trace[$contains](trace$._v8Trace)) return new trace$.Trace.parseV8(trace);
        if (trace[$contains]("\tat ")) return new trace$.Trace.parseJSCore(trace);
        if (trace[$contains](trace$._firefoxSafariTrace)) {
          return new trace$.Trace.parseFirefox(trace);
        }
        if (trace[$contains](utils.chainGap)) return chain$.Chain.parse(trace).toTrace();
        if (trace[$contains](trace$._friendlyTrace)) {
          return new trace$.Trace.parseFriendly(trace);
        }
        return new trace$.Trace.parseVM(trace);
      } catch (e) {
        let error = dart.getThrown(e);
        if (core.FormatException.is(error)) {
          dart.throw(new core.FormatException.new(dart.str(error.message) + "\nStack trace:\n" + dart.str(trace)));
        } else
          throw e;
      }
    }
    static _parseVM(trace) {
      let lines = trace[$trim]()[$replaceAll]("<asynchronous suspension>\n", "")[$split]("\n");
      let frames = lines[$take](dart.notNull(lines[$length]) - 1)[$map](frame$.Frame, dart.fn(line => frame$.Frame.parseVM(line), StringToFrame()))[$toList]();
      if (!lines[$last][$endsWith](".da")) {
        frames[$add](frame$.Frame.parseVM(lines[$last]));
      }
      return frames;
    }
    get vmTrace() {
      return new vm_trace.VMTrace.new(this.frames);
    }
    get terse() {
      return this.foldFrames(dart.fn(_ => false, FrameTobool()), {terse: true});
    }
    foldFrames(predicate, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : false;
      if (dart.test(terse)) {
        let oldPredicate = predicate;
        predicate = dart.fn(frame => {
          if (dart.test(oldPredicate(frame))) return true;
          if (dart.test(frame.isCore)) return true;
          if (frame.package === "stack_trace") return true;
          if (!frame.member[$contains]("<async>")) return false;
          return frame.line == null;
        }, FrameTobool());
      }
      let newFrames = JSArrayOfFrame().of([]);
      for (let frame of this.frames[$reversed]) {
        if (unparsed_frame.UnparsedFrame.is(frame) || !dart.test(predicate(frame))) {
          newFrames[$add](frame);
        } else if (dart.test(newFrames[$isEmpty]) || !dart.test(predicate(newFrames[$last]))) {
          newFrames[$add](new frame$.Frame.new(frame.uri, frame.line, frame.column, frame.member));
        }
      }
      if (dart.test(terse)) {
        newFrames = newFrames[$map](frame$.Frame, dart.fn(frame => {
          if (unparsed_frame.UnparsedFrame.is(frame) || !dart.test(predicate(frame))) return frame;
          let library = frame.library[$replaceAll](trace$._terseRegExp, "");
          return new frame$.Frame.new(core.Uri.parse(library), null, null, frame.member);
        }, FrameToFrame()))[$toList]();
        if (dart.notNull(newFrames[$length]) > 1 && dart.test(predicate(newFrames[$first]))) {
          newFrames[$removeAt](0);
        }
      }
      return new trace$.Trace.new(newFrames[$reversed], {original: dart.toString(this.original)});
    }
    toString() {
      let longest = this.frames[$map](core.int, dart.fn(frame => frame.location.length, FrameToint()))[$fold](core.int, 0, dart.gbind(C0 || CT.C0, core.int));
      return this.frames[$map](core.String, dart.fn(frame => {
        if (unparsed_frame.UnparsedFrame.is(frame)) return dart.str(frame) + "\n";
        return frame.location[$padRight](longest) + "  " + dart.str(frame.member) + "\n";
      }, FrameToString()))[$join]();
    }
  };
  (trace$.Trace.parseVM = function(trace) {
    trace$.Trace.new.call(this, trace$.Trace._parseVM(trace), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseV8 = function(trace) {
    trace$.Trace.new.call(this, trace[$split]("\n")[$skip](1)[$skipWhile](dart.fn(line => !line[$startsWith](trace$._v8TraceLine), StringTobool()))[$map](frame$.Frame, dart.fn(line => frame$.Frame.parseV8(line), StringToFrame())), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseJSCore = function(trace) {
    trace$.Trace.new.call(this, trace[$split]("\n")[$where](dart.fn(line => line !== "\tat ", StringTobool()))[$map](frame$.Frame, dart.fn(line => frame$.Frame.parseV8(line), StringToFrame())), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseIE = function(trace) {
    trace$.Trace.parseV8.call(this, trace);
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseFirefox = function(trace) {
    trace$.Trace.new.call(this, trace[$trim]()[$split]("\n")[$where](dart.fn(line => line[$isNotEmpty] && line !== "[native code]", StringTobool()))[$map](frame$.Frame, dart.fn(line => frame$.Frame.parseFirefox(line), StringToFrame())), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseSafari = function(trace) {
    trace$.Trace.parseFirefox.call(this, trace);
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseSafari6_1 = function(trace) {
    trace$.Trace.parseSafari.call(this, trace);
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseSafari6_0 = function(trace) {
    trace$.Trace.new.call(this, trace[$trim]()[$split]("\n")[$where](dart.fn(line => line !== "[native code]", StringTobool()))[$map](frame$.Frame, dart.fn(line => frame$.Frame.parseFirefox(line), StringToFrame())), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseFriendly = function(trace) {
    trace$.Trace.new.call(this, trace[$isEmpty] ? JSArrayOfFrame().of([]) : trace[$trim]()[$split]("\n")[$where](dart.fn(line => !line[$startsWith]("====="), StringTobool()))[$map](frame$.Frame, dart.fn(line => frame$.Frame.parseFriendly(line), StringToFrame())), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.new = function(frames, opts) {
    let original = opts && 'original' in opts ? opts.original : null;
    this[frames$0] = ListOfFrame().unmodifiable(frames);
    this[original$] = new core._StringStackTrace.new(original);
    ;
  }).prototype = trace$.Trace.prototype;
  dart.addTypeTests(trace$.Trace);
  const frames$0 = Symbol("Trace.frames");
  const original$ = Symbol("Trace.original");
  trace$.Trace[dart.implements] = () => [core.StackTrace];
  dart.setMethodSignature(trace$.Trace, () => ({
    __proto__: dart.getMethods(trace$.Trace.__proto__),
    foldFrames: dart.fnType(trace$.Trace, [dart.fnType(core.bool, [frame$.Frame])], {terse: core.bool})
  }));
  dart.setGetterSignature(trace$.Trace, () => ({
    __proto__: dart.getGetters(trace$.Trace.__proto__),
    vmTrace: core.StackTrace,
    terse: trace$.Trace
  }));
  dart.setLibraryUri(trace$.Trace, "package:stack_trace/src/trace.dart");
  dart.setFieldSignature(trace$.Trace, () => ({
    __proto__: dart.getFields(trace$.Trace.__proto__),
    frames: dart.finalFieldType(core.List$(frame$.Frame)),
    original: dart.finalFieldType(core.StackTrace)
  }));
  dart.defineExtensionMethods(trace$.Trace, ['toString']);
  dart.defineLazy(trace$, {
    /*trace$._terseRegExp*/get _terseRegExp() {
      return core.RegExp.new("(-patch)?([/\\\\].*)?$");
    },
    /*trace$._v8Trace*/get _v8Trace() {
      return core.RegExp.new("\\n    ?at ");
    },
    /*trace$._v8TraceLine*/get _v8TraceLine() {
      return core.RegExp.new("    ?at ");
    },
    /*trace$._firefoxSafariTrace*/get _firefoxSafariTrace() {
      return core.RegExp.new("^" + "(" + "([.0-9A-Za-z_$/<]|\\(.*\\))*" + "@" + ")?" + "[^\\s]*" + ":\\d*" + "$", {multiLine: true});
    },
    /*trace$._friendlyTrace*/get _friendlyTrace() {
      return core.RegExp.new("^[^\\s<][^\\s]*( \\d+(:\\d+)?)?[ \\t]+[^\\s]+$", {multiLine: true});
    }
  });
  dart.trackLibraries("packages/stack_trace/src/chain", {
    "package:stack_trace/src/utils.dart": utils,
    "package:stack_trace/src/unparsed_frame.dart": unparsed_frame,
    "package:stack_trace/src/vm_trace.dart": vm_trace,
    "package:stack_trace/src/lazy_chain.dart": lazy_chain,
    "package:stack_trace/src/frame.dart": frame$,
    "package:stack_trace/stack_trace.dart": stack_trace,
    "package:stack_trace/src/lazy_trace.dart": lazy_trace,
    "package:stack_trace/src/stack_zone_specification.dart": stack_zone_specification,
    "package:stack_trace/src/chain.dart": chain$,
    "package:stack_trace/src/trace.dart": trace$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart","unparsed_frame.dart","vm_trace.dart","lazy_chain.dart","frame.dart","lazy_trace.dart","stack_zone_specification.dart","chain.dart","trace.dart"],"names":[],"mappings":"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","file":"chain.ddc.js"}');
  // Exports:
  return {
    src__utils: utils,
    src__unparsed_frame: unparsed_frame,
    src__vm_trace: vm_trace,
    src__lazy_chain: lazy_chain,
    src__frame: frame$,
    stack_trace: stack_trace,
    src__lazy_trace: lazy_trace,
    src__stack_zone_specification: stack_zone_specification,
    src__chain: chain$,
    src__trace: trace$
  };
});

//# sourceMappingURL=chain.ddc.js.map
