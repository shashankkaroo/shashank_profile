define(['dart_sdk', 'packages/stream_channel/stream_channel', 'packages/test_api/src/suite_channel_manager', 'packages/test_api/src/backend/closed_exception', 'packages/async/async', 'packages/term_glyph/src/generated/ascii_glyph_set', 'packages/test_api/src/backend/metadata'], function(dart_sdk, packages__stream_channel__stream_channel, packages__test_api__src__suite_channel_manager, packages__test_api__src__backend__closed_exception, packages__async__async, packages__term_glyph__src__generated__ascii_glyph_set, packages__test_api__src__backend__metadata) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const stream_channel_controller = packages__stream_channel__stream_channel.src__stream_channel_controller;
  const multi_channel = packages__stream_channel__stream_channel.src__multi_channel;
  const suite_channel_manager = packages__test_api__src__suite_channel_manager.src__suite_channel_manager;
  const stack_trace_formatter = packages__test_api__src__backend__closed_exception.src__backend__stack_trace_formatter;
  const declarer$ = packages__test_api__src__backend__closed_exception.src__backend__declarer;
  const suite$ = packages__test_api__src__backend__closed_exception.src__backend__suite;
  const invoker = packages__test_api__src__backend__closed_exception.src__backend__invoker;
  const remote_exception = packages__test_api__src__backend__closed_exception.src__util__remote_exception;
  const group$ = packages__test_api__src__backend__closed_exception.src__backend__group;
  const test = packages__test_api__src__backend__closed_exception.src__backend__test;
  const group_entry = packages__test_api__src__backend__closed_exception.src__backend__group_entry;
  const state = packages__test_api__src__backend__closed_exception.src__backend__state;
  const message = packages__test_api__src__backend__closed_exception.src__backend__message;
  const live_test = packages__test_api__src__backend__closed_exception.src__backend__live_test;
  const stream_queue = packages__async__async.src__stream_queue;
  const term_glyph = packages__term_glyph__src__generated__ascii_glyph_set.term_glyph;
  const metadata$ = packages__test_api__src__backend__metadata.src__backend__metadata;
  const suite_platform = packages__test_api__src__backend__metadata.src__backend__suite_platform;
  const remote_listener = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $toList = dartx.toList;
  const $add = dartx.add;
  const $map = dartx.map;
  let StreamChannelControllerOfObject = () => (StreamChannelControllerOfObject = dart.constFn(stream_channel_controller.StreamChannelController$(core.Object)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ZoneAndZoneDelegateAndZone__ToNull = () => (ZoneAndZoneDelegateAndZone__ToNull = dart.constFn(dart.fnType(core.Null, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let LinkedHashSetOfString = () => (LinkedHashSetOfString = dart.constFn(collection.LinkedHashSet$(core.String)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfGroup = () => (JSArrayOfGroup = dart.constFn(_interceptors.JSArray$(group$.Group)))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let GroupEntryToMap = () => (GroupEntryToMap = dart.constFn(dart.fnType(core.Map, [group_entry.GroupEntry])))();
  let StateToNull = () => (StateToNull = dart.constFn(dart.fnType(core.Null, [state.State])))();
  let AsyncErrorToNull = () => (AsyncErrorToNull = dart.constFn(dart.fnType(core.Null, [async.AsyncError])))();
  let MessageToNull = () => (MessageToNull = dart.constFn(dart.fnType(core.Null, [message.Message])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const(new _internal.Symbol.new('test.declarer'));
    },
    get C1() {
      return C1 = dart.const(new _internal.Symbol.new('test.runner.test_channel'));
    }
  });
  const _suite$ = dart.privateName(remote_listener, "_suite");
  const _printZone$ = dart.privateName(remote_listener, "_printZone");
  const _listen = dart.privateName(remote_listener, "_listen");
  let C0;
  const _serializeGroup = dart.privateName(remote_listener, "_serializeGroup");
  const _serializeTest = dart.privateName(remote_listener, "_serializeTest");
  const _runLiveTest = dart.privateName(remote_listener, "_runLiveTest");
  let C1;
  remote_listener.RemoteListener = class RemoteListener extends core.Object {
    static start(getMain, opts) {
      let hidePrints = opts && 'hidePrints' in opts ? opts.hidePrints : true;
      let beforeLoad = opts && 'beforeLoad' in opts ? opts.beforeLoad : null;
      let controller = new (StreamChannelControllerOfObject()).new({allowForeignErrors: false, sync: true});
      let channel = multi_channel.MultiChannel.new(controller.local);
      let verboseChain = true;
      let printZone = dart.test(hidePrints) ? null : async.Zone.current;
      let spec = new async._ZoneSpecification.new({print: dart.fn((_, __, ___, line) => {
          if (printZone != null) printZone.print(line);
          channel.sink.add(new (IdentityMapOfString$String()).from(["type", "print", "line", line]));
        }, ZoneAndZoneDelegateAndZone__ToNull())});
      async.Stream.fromIterable([]).listen(dart.fn(_ => {
      }, dynamicToNull())).cancel();
      new suite_channel_manager.SuiteChannelManager.new().asCurrent(core.Null, dart.fn(() => {
        new stack_trace_formatter.StackTraceFormatter.new().asCurrent(core.Null, dart.fn(() => {
          async.runZoned(FutureOfNull(), dart.fn(() => async.async(core.Null, function*() {
            let t3;
            let main = null;
            try {
              main = getMain();
            } catch (e) {
              let ex = dart.getThrown(e);
              let st = dart.stackTrace(e);
              if (core.NoSuchMethodError.is(ex)) {
                let _ = ex;
                remote_listener.RemoteListener._sendLoadException(channel, "No top-level main() function defined.");
                return;
              } else {
                let error = ex;
                let stackTrace = st;
                remote_listener.RemoteListener._sendError(channel, error, stackTrace, verboseChain);
                return;
              }
            }
            if (!core.Function.is(main)) {
              remote_listener.RemoteListener._sendLoadException(channel, "Top-level main getter is not a function.");
              return;
            } else if (!VoidTodynamic().is(main)) {
              remote_listener.RemoteListener._sendLoadException(channel, "Top-level main() function takes arguments.");
              return;
            }
            let queue = stream_queue.StreamQueue.new(channel.stream);
            let message = (yield queue.next);
            if (!dart.equals(dart.dsend(message, '_get', ["type"]), "initial")) dart.assertFailed(null, "org-dartlang-app:///packages/test_api/src/remote_listener.dart", 95, 18, "message['type'] == 'initial'");
            queue.rest.listen(dart.fn(message => {
              if (dart.equals(dart.dsend(message, '_get', ["type"]), "close")) {
                controller.local.sink.close();
                return;
              }
              if (!dart.equals(dart.dsend(message, '_get', ["type"]), "suiteChannel")) dart.assertFailed(null, "org-dartlang-app:///packages/test_api/src/remote_listener.dart", 103, 20, "message[\"type\"] == \"suiteChannel\"");
              suite_channel_manager.SuiteChannelManager.current.connectIn(core.String.as(dart.dsend(message, '_get', ["name"])), channel.virtualChannel(core.int.as(dart.dsend(message, '_get', ["id"]))));
            }, dynamicToNull()));
            if (dart.test((t3 = core.bool.as(dart.dsend(message, '_get', ["asciiGlyphs"])), t3 == null ? false : t3))) term_glyph.ascii = true;
            let metadata = new metadata$.Metadata.deserialize(dart.dsend(message, '_get', ["metadata"]));
            verboseChain = metadata.verboseTrace;
            let declarer = new declarer$.Declarer.new({metadata: metadata, platformVariables: LinkedHashSetOfString().from(core.Iterable.as(dart.dsend(message, '_get', ["platformVariables"]))), collectTraces: core.bool.as(dart.dsend(message, '_get', ["collectTraces"])), noRetry: core.bool.as(dart.dsend(message, '_get', ["noRetry"]))});
            stack_trace_formatter.StackTraceFormatter.current.configure({except: remote_listener.RemoteListener._deserializeSet(core.List.as(dart.dsend(message, '_get', ["foldTraceExcept"]))), only: remote_listener.RemoteListener._deserializeSet(core.List.as(dart.dsend(message, '_get', ["foldTraceOnly"])))});
            if (beforeLoad != null) yield beforeLoad();
            yield declarer.declare(VoidTodynamic().as(main));
            let suite = new suite$.Suite.new(declarer.build(), suite_platform.SuitePlatform.deserialize(dart.dsend(message, '_get', ["platform"])), {path: core.String.as(dart.dsend(message, '_get', ["path"]))});
            async.runZoned(core.Null, dart.fn(() => {
              invoker.Invoker.guard(dart.void, dart.fn(() => new remote_listener.RemoteListener.__(suite, printZone)[_listen](channel), VoidTovoid()));
            }, VoidToNull()), {zoneValues: new _js_helper.LinkedMap.from([C0 || CT.C0, declarer])});
          }), VoidToFutureOfNull()), {onError: dart.fn((error, stackTrace) => {
              remote_listener.RemoteListener._sendError(channel, error, stackTrace, verboseChain);
            }, dynamicAndStackTraceToNull()), zoneSpecification: spec});
        }, VoidToNull()));
      }, VoidToNull()));
      return controller.foreign;
    }
    static _deserializeSet(list) {
      if (list == null) return null;
      if (dart.test(list[$isEmpty])) return null;
      return LinkedHashSetOfString().from(list);
    }
    static _sendLoadException(channel, message) {
      channel.sink.add(new (IdentityMapOfString$String()).from(["type", "loadException", "message", message]));
    }
    static _sendError(channel, error, stackTrace, verboseChain) {
      channel.sink.add(new (IdentityMapOfString$dynamic()).from(["type", "error", "error", remote_exception.RemoteException.serialize(error, stack_trace_formatter.StackTraceFormatter.current.formatStackTrace(stackTrace, {verbose: verboseChain}))]));
    }
    [_listen](channel) {
      channel.sink.add(new (IdentityMapOfString$Object()).from(["type", "success", "root", this[_serializeGroup](channel, this[_suite$].group, JSArrayOfGroup().of([]))]));
    }
    [_serializeGroup](channel, group, parents) {
      let t3, t3$;
      parents = (t3 = parents[$toList](), t3[$add](group), t3);
      return new _js_helper.LinkedMap.from(["type", "group", "name", group.name, "metadata", group.metadata.serialize(), "trace", (t3$ = group.trace, t3$ == null ? null : dart.toString(t3$)), "setUpAll", this[_serializeTest](channel, group.setUpAll, parents), "tearDownAll", this[_serializeTest](channel, group.tearDownAll, parents), "entries", group.entries[$map](core.Map, dart.fn(entry => group$.Group.is(entry) ? this[_serializeGroup](channel, entry, parents) : this[_serializeTest](channel, test.Test.as(entry), parents), GroupEntryToMap()))[$toList]()]);
    }
    [_serializeTest](channel, test, groups) {
      let t3;
      if (test == null) return null;
      let testChannel = channel.virtualChannel();
      testChannel.stream.listen(dart.fn(message => {
        if (!dart.equals(dart.dsend(message, '_get', ["command"]), "run")) dart.assertFailed(null, "org-dartlang-app:///packages/test_api/src/remote_listener.dart", 214, 14, "message['command'] == 'run'");
        this[_runLiveTest](test.load(this[_suite$], {groups: groups}), channel.virtualChannel(core.int.as(dart.dsend(message, '_get', ["channel"]))));
      }, dynamicToNull()));
      return new _js_helper.LinkedMap.from(["type", "test", "name", test.name, "metadata", test.metadata.serialize(), "trace", (t3 = test.trace, t3 == null ? null : dart.toString(t3)), "channel", testChannel.id]);
    }
    [_runLiveTest](liveTest, channel) {
      channel.stream.listen(dart.fn(message => {
        if (!dart.equals(dart.dsend(message, '_get', ["command"]), "close")) dart.assertFailed(null, "org-dartlang-app:///packages/test_api/src/remote_listener.dart", 231, 14, "message['command'] == 'close'");
        liveTest.close();
      }, dynamicToNull()));
      liveTest.onStateChange.listen(dart.fn(state => {
        channel.sink.add(new (IdentityMapOfString$String()).from(["type", "state-change", "status", state.status.name, "result", state.result.name]));
      }, StateToNull()));
      liveTest.onError.listen(dart.fn(asyncError => {
        channel.sink.add(new (IdentityMapOfString$dynamic()).from(["type", "error", "error", remote_exception.RemoteException.serialize(asyncError.error, stack_trace_formatter.StackTraceFormatter.current.formatStackTrace(asyncError.stackTrace, {verbose: liveTest.test.metadata.verboseTrace}))]));
      }, AsyncErrorToNull()));
      liveTest.onMessage.listen(dart.fn(message => {
        if (this[_printZone$] != null) this[_printZone$].print(message.text);
        channel.sink.add(new (IdentityMapOfString$String()).from(["type", "message", "message-type", message.type.name, "text", message.text]));
      }, MessageToNull()));
      async.runZoned(core.Null, dart.fn(() => {
        liveTest.run().then(dart.void, dart.fn(_ => channel.sink.add(new (IdentityMapOfString$String()).from(["type", "complete"])), dynamicTovoid()));
      }, VoidToNull()), {zoneValues: new _js_helper.LinkedMap.from([C1 || CT.C1, channel])});
    }
  };
  (remote_listener.RemoteListener.__ = function(_suite, _printZone) {
    this[_suite$] = _suite;
    this[_printZone$] = _printZone;
    ;
  }).prototype = remote_listener.RemoteListener.prototype;
  dart.addTypeTests(remote_listener.RemoteListener);
  dart.setMethodSignature(remote_listener.RemoteListener, () => ({
    __proto__: dart.getMethods(remote_listener.RemoteListener.__proto__),
    [_listen]: dart.fnType(dart.void, [multi_channel.MultiChannel]),
    [_serializeGroup]: dart.fnType(core.Map, [multi_channel.MultiChannel, group$.Group, core.Iterable$(group$.Group)]),
    [_serializeTest]: dart.fnType(core.Map, [multi_channel.MultiChannel, test.Test, core.Iterable$(group$.Group)]),
    [_runLiveTest]: dart.fnType(dart.void, [live_test.LiveTest, multi_channel.MultiChannel])
  }));
  dart.setLibraryUri(remote_listener.RemoteListener, "package:test_api/src/remote_listener.dart");
  dart.setFieldSignature(remote_listener.RemoteListener, () => ({
    __proto__: dart.getFields(remote_listener.RemoteListener.__proto__),
    [_suite$]: dart.finalFieldType(suite$.Suite),
    [_printZone$]: dart.finalFieldType(async.Zone)
  }));
  dart.trackLibraries("packages/test_api/src/remote_listener", {
    "package:test_api/src/remote_listener.dart": remote_listener
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["remote_listener.dart"],"names":[],"mappings":"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","file":"remote_listener.ddc.js"}');
  // Exports:
  return {
    src__remote_listener: remote_listener
  };
});

//# sourceMappingURL=remote_listener.ddc.js.map
