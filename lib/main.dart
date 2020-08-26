import 'package:flutter/material.dart';
import 'package:kakro/ui/Home_view.dart';

import 'ui/test.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget
{
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context)
  {
    return new MaterialApp(
      title: 'Shashank Kakroo - Mobile Application Developer | Kony Developer | Flutter',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          brightness: Brightness.light,
          primaryColorBrightness: Brightness.light,
          accentColorBrightness: Brightness.light,
          fontFamily: 'Lato'
          ),
      home: new HomeView(),
    );
  }
}
