import 'package:flutter/material.dart';
import 'package:kakro/enums/device_screen_size.dart';
import 'package:kakro/ui/About_page.dart';
import 'package:kakro/ui/BaseWidget.dart';
import 'package:kakro/ui/Contact_page.dart';
import 'package:kakro/ui/FadeIn.dart';
import 'package:kakro/ui/Projects_page.dart';
import 'package:kakro/ui/sizing_info.dart';

class HomeView extends StatefulWidget {
  HomeView({Key key}) : super(key: key);
  @override
  _HomeViewState createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView> {
  int _selectedIndex = 0;

  final aboutKey = new GlobalKey();
  final projectKey = new GlobalKey();
  final contactKey = new GlobalKey();

  @override
  Widget build(BuildContext context) {
    return BaseWidget(builder: (context, sizingInformation) {
      return Material(
          child: Scaffold(
              backgroundColor: Colors.transparent,
              appBar: _buildAppBar(context, sizingInformation),
              bottomNavigationBar:
                  _buildBottomNavigation(context, sizingInformation),
              body: Container(
                height: MediaQuery.of(context).size.height,
                  child: SingleChildScrollView(
                child: Column(
                  children: <Widget>[
                   AboutMe(sizingInformation, aboutKey),
                    ProjectsPage(projectKey),
                   ContactPage(contactKey),
                  ],
                ),
              )
                  //returnSelectedTab(_selectedIndex, sizingInformation)
                  )));
    });
  }

  returnSelectedTab(_selectedIndex) {
    if (_selectedIndex == 0) {
      Scrollable.ensureVisible(aboutKey.currentContext,duration: Duration(milliseconds: 400), curve: Curves.easeInOut);
    } else if (_selectedIndex == 1) {
      Scrollable.ensureVisible(projectKey.currentContext,alignment: 0.0, duration: Duration(milliseconds: 400), curve: Curves.easeInOut);
    } else {
      Scrollable.ensureVisible(contactKey.currentContext,alignment: 0.0, duration: Duration(milliseconds: 400), curve: Curves.easeInOut);
    }
  }

  Widget _buildBottomNavigation(
      BuildContext context, SizingInformation sizingInformation) {
    return (sizingInformation.deviceType == DeviceScreenType.Desktop)
        ? null
        : BottomNavigationBar(
            items: const <BottomNavigationBarItem>[
              BottomNavigationBarItem(
                icon: Icon(Icons.account_circle),
                title: Text('About'),
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.chrome_reader_mode),
                title: Text('Projects'),
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.mobile_screen_share),
                title: Text('Contact Me'),
              )
            ],
            currentIndex: _selectedIndex,
            onTap: (index) => returnSelectedTab(index) ,
            selectedItemColor: Theme.of(context).accentColor,
          );
  }

  Widget _buildAppBar(
      BuildContext context, SizingInformation sizingInformation) {
    return AppBar(
      titleSpacing: 10.0,
      centerTitle: sizingInformation.deviceType == DeviceScreenType.Mobile
          ? true
          : false,
      title: Text(
        "Shashank Kakroo",
        style: TextStyle(
            fontWeight: FontWeight.bold,
            letterSpacing: 2,
            fontFamily: 'ReemKufi',
            color: Colors.black,
            fontSize: 35),
      ),
      backgroundColor: Colors.transparent,
      elevation: 0.0,
      actions: (sizingInformation.deviceType == DeviceScreenType.Desktop)
          ? _buildActions()
          : null,
    );
  }

  List<Widget> _buildActions() {
    return <Widget>[
      FadeIn(
          2,
          MaterialButton(
            padding: EdgeInsets.only(right: 50),
            child: Text(
              "About Me",
            ),
            onPressed: () {
              returnSelectedTab(0);
            },
            focusColor: Colors.greenAccent,
            autofocus: true,
          ),
          "right"),
      FadeIn(
          2.33,
          MaterialButton(
            padding: EdgeInsets.only(right: 50),
            child: Text(
              "Projects",
            ),
            focusColor: Colors.greenAccent,
            onPressed: () {
              returnSelectedTab(1);
            },
          ),
          "right"),
      FadeIn(
          2.66,
          MaterialButton(
            padding: EdgeInsets.only(right: 50),
            child: Text(
              "Contact Me",
            ),
            focusColor: Colors.greenAccent,
            onPressed: () {
              returnSelectedTab(2);
            },
          ),
          "right"),
    ];
  }
}
