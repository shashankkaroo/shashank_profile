define(['dart_sdk', 'test/widget_test', 'packages/test_api/src/remote_listener', 'packages/test_api/src/suite_channel_manager', 'packages/stream_channel/stream_channel', 'packages/test_api/src/backend/closed_exception'], function(dart_sdk, test__widget_test, packages__test_api__src__remote_listener, packages__test_api__src__suite_channel_manager, packages__stream_channel__stream_channel, packages__test_api__src__backend__closed_exception) {
  'use strict';
  const core = dart_sdk.core;
  const _engine = dart_sdk._engine;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const js = dart_sdk.js;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_test = test__widget_test.test__widget_test;
  const remote_listener = packages__test_api__src__remote_listener.src__remote_listener;
  const suite_channel_manager = packages__test_api__src__suite_channel_manager.src__suite_channel_manager;
  const stream_channel_controller = packages__stream_channel__stream_channel.src__stream_channel_controller;
  const stack_trace_formatter = packages__test_api__src__backend__closed_exception.src__backend__stack_trace_formatter;
  const widget_test$46dart$46browser_test = Object.create(dart.library);
  const $onMessage = dartx.onMessage;
  const $origin = dartx.origin;
  const $location = dartx.location;
  const $data = dartx.data;
  const $first = dartx.first;
  const $postMessage = dartx.postMessage;
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToFn = () => (VoidToFn = dart.constFn(dart.fnType(VoidTovoid(), [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let MessageEventTobool = () => (MessageEventTobool = dart.constFn(dart.fnType(core.bool, [html.MessageEvent])))();
  let MessageEventToNull = () => (MessageEventToNull = dart.constFn(dart.fnType(core.Null, [html.MessageEvent])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Size.prototype,
        [_dy]: 1800,
        [_dx]: 2400
      });
    },
    get C1() {
      return C1 = dart.fn(widget_test.main, VoidTovoid());
    }
  });
  const _dy = dart.privateName(ui, "_dy");
  const _dx = dart.privateName(ui, "_dx");
  let C0;
  let C1;
  widget_test$46dart$46browser_test.main = function main() {
    return async.async(dart.void, function* main() {
      yield _engine.webOnlyInitializeEngine();
      dart.dsend(ui.window, 'debugOverrideDevicePixelRatio', [3.0]);
      dart.dput(ui.window, 'webOnlyDebugPhysicalSizeOverride', C0 || CT.C0);
      widget_test$46dart$46browser_test.internalBootstrapBrowserTest(dart.fn(() => C1 || CT.C1, VoidToFn()));
    });
  };
  widget_test$46dart$46browser_test.internalBootstrapBrowserTest = function internalBootstrapBrowserTest(getMain) {
    let channel = widget_test$46dart$46browser_test.serializeSuite(getMain, {hidePrints: false, beforeLoad: dart.fn(() => async.async(core.Null, function*() {
        let serialized = core.Map.as(yield widget_test$46dart$46browser_test.suiteChannel("test.browser.mapper").stream.first);
        if (serialized == null) return;
      }), VoidToFutureOfNull())});
    widget_test$46dart$46browser_test.postMessageChannel().pipe(channel);
  };
  widget_test$46dart$46browser_test.serializeSuite = function serializeSuite(getMain, opts) {
    let hidePrints = opts && 'hidePrints' in opts ? opts.hidePrints : true;
    let beforeLoad = opts && 'beforeLoad' in opts ? opts.beforeLoad : null;
    return remote_listener.RemoteListener.start(getMain, {hidePrints: hidePrints, beforeLoad: beforeLoad});
  };
  widget_test$46dart$46browser_test.suiteChannel = function suiteChannel(name) {
    let manager = suite_channel_manager.SuiteChannelManager.current;
    if (manager == null) {
      dart.throw(new core.StateError.new("suiteChannel() may only be called within a test worker."));
    }
    return manager.connectOut(name);
  };
  widget_test$46dart$46browser_test.postMessageChannel = function postMessageChannel() {
    let controller = new stream_channel_controller.StreamChannelController.new({sync: true});
    html.window[$onMessage].firstWhere(dart.fn(message => message.origin == html.window[$location][$origin] && dart.equals(message[$data], "port"), MessageEventTobool())).then(dart.dynamic, dart.fn(message => {
      let port = message.ports[$first];
      let portSubscription = port[$onMessage].listen(dart.fn(message => {
        controller.local.sink.add(message[$data]);
      }, MessageEventToNull()));
      controller.local.stream.listen(dart.fn(data => {
        port[$postMessage](new (IdentityMapOfString$dynamic()).from(["data", data]));
      }, dynamicToNull()), {onDone: dart.fn(() => {
          port[$postMessage](new (IdentityMapOfString$String()).from(["event", "done"]));
          portSubscription.cancel();
        }, VoidToNull())});
    }, MessageEventToNull()));
    dart.dsend(js.context._get("parent"), 'callMethod', ["postMessage", JSArrayOfObject().of([js.JsObject.jsify(new (IdentityMapOfString$Object()).from(["href", html.window[$location].href, "ready", true])), html.window[$location][$origin]])]);
    return controller.foreign;
  };
  widget_test$46dart$46browser_test.setStackTraceMapper = function setStackTraceMapper(mapper) {
    let formatter = stack_trace_formatter.StackTraceFormatter.current;
    if (formatter == null) {
      dart.throw(new core.StateError.new("setStackTraceMapper() may only be called within a test worker."));
    }
    formatter.configure({mapper: mapper});
  };
  dart.trackLibraries("test/widget_test.dart.browser_test", {
    "org-dartlang-app:///test/widget_test.dart.browser_test.dart": widget_test$46dart$46browser_test
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["widget_test.dart.browser_test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYiB;MAKf,MAAM;MAEiB,WAAnB,6CAAiD;MAC9B,UAAnB;MACJ,+DAA6B;IAC/B;;yGAE2C;AACrC,kBACA,iDAAe,OAAO,eAAc,mBAAmB;AACrD,yBACuD,YAAvD,MAAM,AAAoC,AAAO,+CAA9B;AACvB,YAAI,AAAW,UAAD,IAAI,MAAM;MACzB;IACD,AAAqB,4DAAK,OAAO;EACnC;6EACsC;QACxB;QAA0B;AACpC,UAAe,sCAAM,OAAO,eACZ,UAAU,cAAc,UAAU;EAAC;yEAErB;AAC5B,kBAA8B;AAClC,QAAI,AAAQ,OAAD,IAAI;MACb,WAAM,wBAAW;;AAGnB,UAAO,AAAQ,QAAD,YAAY,IAAI;EAChC;;AAGM,qBAAa,iEAA8B;IAC/C,AAAO,AAAU,AAEd,mCAFyB,QAAC,WACpB,AAAQ,AAAO,AAA0B,OAAlC,WAAW,AAAO,AAAS,mCAAuB,YAAb,AAAQ,OAAD,SAAS,mDAC7D,QAAC;AACH,iBAAO,AAAQ,AAAM,OAAP;AACd,6BAAmB,AAAK,AAAU,IAAX,oBAAkB,QAAC;QAC5C,AAAW,AAAM,AAAK,UAAZ,gBAAgB,AAAQ,OAAD;;MAGnC,AAAW,AAAM,AAAO,UAAd,qBAAqB,QAAC;QAC9B,AAAK,IAAD,eAAa,0CAAC,QAAQ,IAAI;oCACrB;UACT,AAAK,IAAD,eAAa,yCAAC,SAAS;UAC3B,AAAiB,gBAAD;;;IAIF,WAAlB,AAAO,gBAAC,0BAAqB,eAAe,sBACjC,kBAAM,yCAAC,QAAQ,AAAO,AAAS,6BAAM,SAAS,SACvD,AAAO,AAAS;AAElB,UAAO,AAAW,WAAD;EACnB;uFAE0C;AACpC,oBAAgC;AACpC,QAAI,AAAU,SAAD,IAAI;MACf,WAAM,wBACF;;IAGN,AAAU,SAAD,oBAAmB,MAAM;EACpC","file":"widget_test.dart.browser_test.ddc.js"}');
  // Exports:
  return {
    test__widget_test$46dart$46browser_test: widget_test$46dart$46browser_test
  };
});

//# sourceMappingURL=widget_test.dart.browser_test.ddc.js.map
