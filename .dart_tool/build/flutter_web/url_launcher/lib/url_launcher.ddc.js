define(['dart_sdk', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/widgets/actions', 'packages/url_launcher_platform_interface/method_channel_url_launcher'], function(dart_sdk, packages__flutter__src__gestures__arena, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__widgets__actions, packages__url_launcher_platform_interface__method_channel_url_launcher) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const message_codec = packages__flutter__src__gestures__arena.src__services__message_codec;
  const system_chrome = packages__flutter__src__gestures__arena.src__services__system_chrome;
  const platform = packages__flutter__src__foundation___bitfield_web.src__foundation__platform;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const url_launcher_platform_interface = packages__url_launcher_platform_interface__method_channel_url_launcher.url_launcher_platform_interface;
  const url_launcher = Object.create(dart.library);
  const $trimLeft = dartx.trimLeft;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  const CT = Object.create(null);
  url_launcher.launch = function launch(urlString, opts) {
    let forceSafariVC = opts && 'forceSafariVC' in opts ? opts.forceSafariVC : null;
    let forceWebView = opts && 'forceWebView' in opts ? opts.forceWebView : null;
    let enableJavaScript = opts && 'enableJavaScript' in opts ? opts.enableJavaScript : null;
    let enableDomStorage = opts && 'enableDomStorage' in opts ? opts.enableDomStorage : null;
    let universalLinksOnly = opts && 'universalLinksOnly' in opts ? opts.universalLinksOnly : null;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
    return async.async(core.bool, function* launch() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      if (!(urlString != null)) dart.assertFailed(null, "org-dartlang-app:///packages/url_launcher/url_launcher.dart", 67, 10, "urlString != null");
      let url = core.Uri.parse(urlString[$trimLeft]());
      let isWebURL = url.scheme === "http" || url.scheme === "https";
      if ((dart.equals(forceSafariVC, true) || dart.equals(forceWebView, true)) && !isWebURL) {
        dart.throw(new message_codec.PlatformException.new({code: "NOT_A_WEB_SCHEME", message: "To use webview or safariVC, you need to pass" + "in a web URL. This " + dart.str(urlString) + " is not a web URL."}));
      }
      let previousAutomaticSystemUiAdjustment = null;
      if (statusBarBrightness != null && dart.equals(platform.defaultTargetPlatform, platform.TargetPlatform.iOS)) {
        previousAutomaticSystemUiAdjustment = binding.WidgetsBinding.instance.renderView.automaticSystemUiAdjustment;
        binding.WidgetsBinding.instance.renderView.automaticSystemUiAdjustment = false;
        system_chrome.SystemChrome.setSystemUIOverlayStyle(dart.equals(statusBarBrightness, ui.Brightness.light) ? system_chrome.SystemUiOverlayStyle.dark : system_chrome.SystemUiOverlayStyle.light);
      }
      let result = (yield url_launcher_platform_interface.UrlLauncherPlatform.instance.launch(urlString, {useSafariVC: (t0 = forceSafariVC, t0 == null ? isWebURL : t0), useWebView: (t0$ = forceWebView, t0$ == null ? false : t0$), enableJavaScript: (t0$0 = enableJavaScript, t0$0 == null ? false : t0$0), enableDomStorage: (t0$1 = enableDomStorage, t0$1 == null ? false : t0$1), universalLinksOnly: (t0$2 = universalLinksOnly, t0$2 == null ? false : t0$2), headers: (t0$3 = headers, t0$3 == null ? new (IdentityMapOfString$String()).new() : t0$3)}));
      if (statusBarBrightness != null) {
        binding.WidgetsBinding.instance.renderView.automaticSystemUiAdjustment = previousAutomaticSystemUiAdjustment;
      }
      return result;
    });
  };
  url_launcher.canLaunch = function canLaunch(urlString) {
    return async.async(core.bool, function* canLaunch() {
      if (urlString == null) {
        return false;
      }
      return yield url_launcher_platform_interface.UrlLauncherPlatform.instance.canLaunch(urlString);
    });
  };
  url_launcher.closeWebView = function closeWebView() {
    return async.async(dart.void, function* closeWebView() {
      return yield url_launcher_platform_interface.UrlLauncherPlatform.instance.closeWebView();
    });
  };
  dart.trackLibraries("packages/url_launcher/url_launcher", {
    "package:url_launcher/url_launcher.dart": url_launcher
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["url_launcher.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;wCAyDS;QACF;QACA;QACA;QACA;QACA;QACe;QACT;AARM;;YAUV,SAAS,IAAI;AACV,gBAAU,eAAM,AAAU,SAAD;AACxB,qBAAW,AAAI,AAAO,AAAU,GAAlB,YAAW,UAAU,AAAI,AAAO,GAAR,YAAW;AAC5D,WAAmB,YAAd,aAAa,EAAI,SAAqB,YAAb,YAAY,EAAI,WAAU,QAAQ;QAC9D,WAAM,+CACI,6BACG,iDACL,iCAAqB,SAAS;;AAEnC;AACL,UAAI,mBAAmB,IAAI,QACD,YAAtB,gCAAwC;QAC1C,sCACmB,AAAS,AAAW;QACxB,AAAS,AAAW,yEAA8B;QACpD,mDAA4C,YAApB,mBAAmB,EAAe,uBAC5C,0CACA;;AAElB,oBAAS,MAA0B,AAAS,oEACrD,SAAS,iBACkB,KAAd,aAAa,QAAC,OAAG,QAAQ,qBACb,MAAb,YAAY,SAAC,OAAG,iCACO,OAAjB,gBAAgB,UAAC,OAAG,kCACH,OAAjB,gBAAgB,UAAC,OAAG,oCACC,OAAnB,kBAAkB,UAAC,OAAG,yBACzB,OAAR,OAAO,UAAC,OAAmB;AAEtC,UAAI,mBAAmB,IAAI;QACV,AAAS,AAAW,yEAC/B,mCAAmC;;AAEzC,YAAO,OAAM;IACf;;8CAI8B;AAAR;AACpB,UAAI,AAAU,SAAD,IAAI;AACf,cAAO;;AAET,YAAO,OAA0B,AAAS,uEAAU,SAAS;IAC/D;;;AAayB;AACvB,YAAO,OAA0B,AAAS;IAC5C","file":"url_launcher.ddc.js"}');
  // Exports:
  return {
    url_launcher: url_launcher
  };
});

//# sourceMappingURL=url_launcher.ddc.js.map
