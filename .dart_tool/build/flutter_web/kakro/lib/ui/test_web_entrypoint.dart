import 'dart:ui' as ui;
import "test.dart" as entrypoint;

Future<void> main() async {
  await ui.webOnlyInitializePlatform();
  entrypoint.main();
}

