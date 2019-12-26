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

  @override
  Widget build(BuildContext context) {
    return BaseWidget(builder: (context, sizingInformation) {
      return Material(
          child: Scaffold(
              backgroundColor: Colors.transparent,
              appBar: _buildAppBar(context, sizingInformation),
              bottomNavigationBar:
                  _buildBottomNavigation(context, sizingInformation),
              body: Center(
                  child:
                      returnSelectedTab(_selectedIndex, sizingInformation))));
    });
  }

  Widget returnSelectedTab(_selectedIndex, sizingInformation) {
    if (_selectedIndex == 0) {
      return AboutMe(sizingInformation);
    } else if (_selectedIndex == 1) {
      return ProjectsPage();
    } else {
      return ContactPage();
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
            onTap: (index) => setState(() => _selectedIndex = index),
            selectedItemColor: Theme.of(context).accentColor,
          );
  }

  Widget _buildAppBar(
      BuildContext context, SizingInformation sizingInformation) {
    return AppBar(
      titleSpacing: 10.0,
      centerTitle: sizingInformation.deviceType == DeviceScreenType.Mobile ? true : false,
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
              setState(() => _selectedIndex = 0);
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
              setState(() => _selectedIndex = 1);
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
              setState(() => _selectedIndex = 2);
            },
          ),
          "right"),
    ];
  }
}
