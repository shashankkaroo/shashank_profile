import 'dart:ui' as ui;
import "main.dart" as entrypoint;

Future<void> main() async {
  await ui.webOnlyInitializePlatform();
  entrypoint.main();
}

