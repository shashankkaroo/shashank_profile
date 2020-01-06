define(['dart_sdk', 'packages/stream_channel/stream_channel'], function(dart_sdk, packages__stream_channel__stream_channel) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const stream_channel = packages__stream_channel__stream_channel.stream_channel;
  const stream_channel_completer = packages__stream_channel__stream_channel.src__stream_channel_completer;
  const suite_channel_manager = Object.create(dart.library);
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  let IdentityMapOfString$StreamChannel = () => (IdentityMapOfString$StreamChannel = dart.constFn(_js_helper.IdentityMap$(core.String, stream_channel.StreamChannel)))();
  let IdentityMapOfString$StreamChannelCompleter = () => (IdentityMapOfString$StreamChannelCompleter = dart.constFn(_js_helper.IdentityMap$(core.String, stream_channel_completer.StreamChannelCompleter)))();
  let _IdentityHashSetOfString = () => (_IdentityHashSetOfString = dart.constFn(collection._IdentityHashSet$(core.String)))();
  const CT = Object.create(null);
  const _incomingConnections = dart.privateName(suite_channel_manager, "_incomingConnections");
  const _outgoingConnections = dart.privateName(suite_channel_manager, "_outgoingConnections");
  const _names = dart.privateName(suite_channel_manager, "_names");
  suite_channel_manager.SuiteChannelManager = class SuiteChannelManager extends core.Object {
    static get current() {
      return suite_channel_manager.SuiteChannelManager.as(async.Zone.current._get(suite_channel_manager._currentKey));
    }
    asCurrent(T, body) {
      return async.runZoned(T, body, {zoneValues: new _js_helper.LinkedMap.from([suite_channel_manager._currentKey, this])});
    }
    connectOut(name) {
      if (dart.test(this[_incomingConnections][$containsKey](name))) {
        return this[_incomingConnections][$_get](name);
      } else if (dart.test(this[_names].contains(name))) {
        dart.throw(new core.StateError.new("Duplicate suiteChannel() connection \"" + dart.str(name) + "\"."));
      } else {
        this[_names].add(name);
        let completer = new stream_channel_completer.StreamChannelCompleter.new();
        this[_outgoingConnections][$_set](name, completer);
        return completer.channel;
      }
    }
    connectIn(name, channel) {
      if (dart.test(this[_outgoingConnections][$containsKey](name))) {
        this[_outgoingConnections][$remove](name).setChannel(channel);
      } else if (dart.test(this[_incomingConnections][$containsKey](name))) {
        dart.throw(new core.StateError.new("Duplicate RunnerSuite.channel() connection \"" + dart.str(name) + "\"."));
      } else {
        this[_incomingConnections][$_set](name, channel);
      }
    }
  };
  (suite_channel_manager.SuiteChannelManager.new = function() {
    this[_incomingConnections] = new (IdentityMapOfString$StreamChannel()).new();
    this[_outgoingConnections] = new (IdentityMapOfString$StreamChannelCompleter()).new();
    this[_names] = new (_IdentityHashSetOfString()).new();
    ;
  }).prototype = suite_channel_manager.SuiteChannelManager.prototype;
  dart.addTypeTests(suite_channel_manager.SuiteChannelManager);
  dart.setMethodSignature(suite_channel_manager.SuiteChannelManager, () => ({
    __proto__: dart.getMethods(suite_channel_manager.SuiteChannelManager.__proto__),
    asCurrent: dart.gFnType(T => [T, [dart.fnType(T, [])]]),
    connectOut: dart.fnType(stream_channel.StreamChannel, [core.String]),
    connectIn: dart.fnType(dart.void, [core.String, stream_channel.StreamChannel])
  }));
  dart.setLibraryUri(suite_channel_manager.SuiteChannelManager, "package:test_api/src/suite_channel_manager.dart");
  dart.setFieldSignature(suite_channel_manager.SuiteChannelManager, () => ({
    __proto__: dart.getFields(suite_channel_manager.SuiteChannelManager.__proto__),
    [_incomingConnections]: dart.finalFieldType(core.Map$(core.String, stream_channel.StreamChannel)),
    [_outgoingConnections]: dart.finalFieldType(core.Map$(core.String, stream_channel_completer.StreamChannelCompleter)),
    [_names]: dart.finalFieldType(core.Set$(core.String))
  }));
  dart.defineLazy(suite_channel_manager, {
    /*suite_channel_manager._currentKey*/get _currentKey() {
      return new core.Object.new();
    }
  });
  dart.trackLibraries("packages/test_api/src/suite_channel_manager", {
    "package:test_api/src/suite_channel_manager.dart": suite_channel_manager
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["suite_channel_manager.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;AA2BM,YAA0B,8CAArB,AAAO,wBAAC;IAAmC;iBAMnC;AAAW,+BAAS,IAAI,eAAc,+BAAC,mCAAa;IAAM;eAG3C;AAC9B,oBAAI,AAAqB,yCAAY,IAAI;AACvC,cAAO,AAAoB,mCAAC,IAAI;YAC3B,eAAI,AAAO,sBAAS,IAAI;QAC7B,WAAM,wBAAW,AAA8C,oDAAP,IAAI;;QAE5D,AAAO,iBAAI,IAAI;AACX,wBAAY;QAChB,AAAoB,kCAAC,IAAI,EAAI,SAAS;AACtC,cAAO,AAAU,UAAD;;IAEpB;cAGsB,MAAoB;AACxC,oBAAI,AAAqB,yCAAY,IAAI;QACvC,AAAqB,AAAa,oCAAN,IAAI,aAAa,OAAO;YAC/C,eAAI,AAAqB,yCAAY,IAAI;QAC9C,WAAM,wBAAW,AAAqD,2DAAP,IAAI;;QAEnE,AAAoB,kCAAC,IAAI,EAAI,OAAO;;IAExC;;;IA3CM,6BAA8C;IAI9C,6BAAuD;IAGvD,eAAS;;EAqCjB;;;;;;;;;;;;;;;;MAlDM,iCAAW;YAAG","file":"suite_channel_manager.ddc.js"}');
  // Exports:
  return {
    src__suite_channel_manager: suite_channel_manager
  };
});

//# sourceMappingURL=suite_channel_manager.ddc.js.map
