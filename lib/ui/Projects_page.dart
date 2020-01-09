import 'dart:ui';

import 'package:flutter/material.dart';
import '../enums/device_screen_size.dart';
import 'BaseWidget.dart';
import 'FadeIn.dart';
import 'sizing_info.dart';
import 'package:universal_html/prefer_universal/html.dart' as html;

class ProjectsPage extends StatefulWidget {
  static const String routeName = "/projects";
  Key projectKey;

  ProjectsPage(this.projectKey);

  ProjectsPageState createState() => ProjectsPageState();
}

class ProjectsPageState extends State<ProjectsPage> {
  final projectList = [
    {
      "title": "Artbandhu - Career Discovery Platform",
      "image":
          "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/artbandhu.png?alt=media&token=3d5c3831-6f00-4522-be71-3db8f4ced9a1",
      "text": "Social Art Feed Application for local artist and community",
      "summary":
          "Artbandhu app helps millions of creative professionals/artist succeed with upskilling and on-demand creative jobs & monetization opportunities, around the world",
      "summary2":
          "Worked on front end for the app with Dart and Flutter \nSocial Logins using firebase authentication \nUsed Firebase storage for file uploads \nEnsuring project quality and timely resolution of issues.",
      "techUsed":
          "Flutter, Dart, Firebase Authentication, Firebase Storage, Native Android, iOS ",
      "storeLink":
          "https://play.google.com/store/apps/details?id=com.artbandhu.Artbandhu",
      "color": Colors.amber.shade50.withOpacity(0.9),
      "txtColor": Colors.orange
    },
    {
      "title": "FitApp - Home Workouts Guide",
      "text": "Home Workout application with Tips for weight loss",
      "summary2":
          "Designed and developed front end for the app with Native Android, Java \nUsed Firebase Storage and Firebase Database for application data\nFirebase Cloud messaging for Implementing Push Notifications\nWorked end to end from designing to app upload process",
      "summary":
          "Home Workouts and Fitness Application helps to improve fitness and health by providing programs specific to body parts and exercise routines of indivisuals",
      "image":
          "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/fit.png?alt=media&token=096b9613-65ae-4e7b-aa9c-b41594e1cd3f",
      "techUsed":
          " Native Android, Java, Firebase, Firebase Cloud Messaging, Firebase Storage, Firebase Database",
      "storeLink":
          "https://play.google.com/store/apps/details?id=com.kakroo.shashank.fitapp",
      "color": Colors.lime.shade100.withOpacity(0.9),
      "txtColor": Colors.green.shade700
    },
    {
      "title": "Gulf VPN",
      "text": "Open VPN Client for Android",
      "summary2":
          "Designed and developed front end for the app with Native Android\nImplemented Open VPN SDK for android\nWorked on google in app purchase",
      "summary":
          "Gulf VPN with help of Open VPN SDK provides users access to more than 100 remote servers for securing their connections",
      "image":
          "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/vpn.png?alt=media&token=444b6163-a138-4653-aae0-15ed03a4ff08",
      "techUsed":
          " Native Android, Java, Firebase, Firebase Cloud Messaging, Firebase Storage, Open VPN",
      "storeLink":
          "https://play.google.com/store/apps/details?id=free.vpn.unblock.proxy.gulfVPN",
      "color": Colors.lightBlueAccent.shade100.withOpacity(0.9),
      "txtColor": Colors.blue.shade700
    },
    {
      "title": "My Android",
      "summary":
          "My Android application helps you with all details related to your android device such as RAM, Memory Utilized, Internet Compumption etc",
      "summary2":
          "Designed and developed front end for the app with Native Android\nEnsuring project quality and timely resolution of issues.",
      "image":
          "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/myandroid.png?alt=media&token=b1ce4864-4d5c-45e9-81de-14ee5c3c6ab8",
      "text": "Android Utility Application",
      "techUsed":
          " Native Android, Java, Firebase, Firebase Cloud Messaging, Firebase Storage",
      "storeLink":
          "https://play.google.com/store/apps/details?id=com.innovationm.myandroid",
      "color": Colors.yellowAccent.shade100.withOpacity(0.9),
      "txtColor": Colors.deepOrangeAccent.shade200
    },

    {
      "title": "Abu Dhabi Commercial Bank - PROCASH",
      "text" : "ADCB Coorporate Banking Applicaton",
      "summary":"This application is the ADCB's Coorporate Banking Applicaton, enabling coorporates to do trasaction Initiations, request approvals and give account insights ",
      "summary2":
      "Configured Kony services  over Kony fabric that collaborates with backend services\nWorked on Biometrics integration on mobile\nWorked on transaction initiation module from front end\nWritten android native code and implemented with Kony as FFI",
      "image":
      "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/procash.png?alt=media&token=a63567af-ab05-40c2-a925-58eac5527a9c",
      "techUsed":
      "Kony Vizualizer 7.x, Kony Mobile Fabric & Middleware, Native Android",
      "storeLink":
      "https://play.google.com/store/apps/details?id=com.adcbapp.ProCashLite&hl=en",
      "color": Colors.lightGreenAccent.shade100.withOpacity(0.9),
      "txtColor": Colors.lightGreenAccent.shade700
    },

    {
      "title": "Ooredoo, Qatar",
      "text": "HRMS Mobile Application",
      "summary2":
          "Configured Kony services  over Kony fabric that collaborates with backend services\nWritten Java pre-processors and post -processors\n.Worked on Android push notification implementation with Kony\nWritten android native code and implemented with Kony as FFI.",
      "image":
          "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/ooredoo.png?alt=media&token=d0fb7c7b-9226-4135-a035-0abb3a03af56",
      "summary":
          "This application is HRMS application targeted for Ooredoo Qatar employees which is an implementation of their oracle based portal.",
      "techUsed":
          "Kony Vizualizer 8.x, Kony Mobile Fabric & Middleware, Native Android, Firebase Cloud Messaging",
      "storeLink":
          "https://play.google.com/store/apps/details?id=qa.ooredoo.android",
      "color": Colors.deepOrangeAccent.shade100.withOpacity(0.9),
      "txtColor": Colors.deepOrangeAccent.shade700
    },
    {
      "title": "Ministry of Economy and Commerce B2C– Qatar",
      "summary":
      "This application is a B2C app for businesses and citizens of Qatar. This app provides a platform for businesses to register and carry all taxation related transactions. For citizens this app acts as a medium of information to understand their quota of food grains allotted along with and knowing the daily rates",
      "summary2":
      "Worked on Kony JSON services  over Kony fabric\nWritten Java pre-processors and post -processors\nWorked on Integration of ArGis Native Maps with Kony Application\nIntegration of JavaScript based Maps SDK with Kony Application.",
      "image":
      "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/qatar.png?alt=media&token=35f7d8b1-ebfc-4f90-90ac-3267cb1bda59",
      "text": "B2C App for Businesses and Citizens of Qatar",
      "techUsed":
      "Kony Vizualizer 7.x, Kony Mobile Fabric & Middleware, Native Android, Firebase Cloud Messaging, ArGis Native Maps",
      "storeLink":
      "https://play.google.com/store/apps/details?id=com.mbt.mbt&hl=en",
      "color": Colors.purpleAccent.shade100.withOpacity(0.9),
      "txtColor": Colors.purpleAccent.shade700
    },
    {
      "title": "QR Employee – Qatar Rail, Qatar",
      "summary":
      "This application is HRMS application targeted for Qatar Rail employees, which is an implementation of their SharePoint based portal and ERP System.Developed for Mobile (Android, IOS Platform) and desktop",
      "summary2":
      "Configured Kony services  over Kony fabric that collaborates with backend services\nWritten Java pre-processors and post -processors\n.Worked on Android push notification implementation with Kony\nWritten android native code and implemented with Kony as FFI.",
      "image":
      "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/145-1458097_qatar-rail-logo-png.png?alt=media&token=97405e91-501c-484e-981a-5f14a344ea43",
      "text": "HRMS application targeted for Qatar Rail employees",
      "techUsed":
      "Kony Vizualizer 7.x, Kony Mobile Fabric & Middleware, Native Android",
      "storeLink":
      "https://play.google.com/store/apps/details?id=com.mbt.mbt&hl=en",
      "color": Colors.red.shade300.withOpacity(0.9),
      "txtColor": Colors.lightGreenAccent.shade700
    },
  ];

  @override
  Widget build(BuildContext context) {
    return BaseWidget(builder: (context, sizingInformation) {
      return Material(
          child: Container(
        key: widget.projectKey,
        child: _getProjectsContent(sizingInformation),
      ));
    });
  }

  _getProjectsContent(SizingInformation sizingInformation) {
    if (sizingInformation.deviceType == DeviceScreenType.Mobile) {
      return _getContentForProjMob(sizingInformation);
    } else {
      return _getContentForProjDesk(sizingInformation);
    }
  }

  _getContentForProjMob(SizingInformation sizingInformation) {
    return Container(
        alignment: Alignment.center,
        margin: EdgeInsets.only(top: 60),
        width: MediaQuery.of(context).size.width * 0.86,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            _buildAboutMe(context, sizingInformation),
            _projectsGrid(context, sizingInformation)
          ],
        ));
  }

  _getContentForProjDesk(SizingInformation sizingInformation) {
    return Container(
        alignment: Alignment.center,
        margin: EdgeInsets.only(top: 60),
        width: MediaQuery.of(context).size.width * 0.86,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            _buildAboutMe(context, sizingInformation),
            _projectsGrid(context, sizingInformation)
          ],
        ));
  }

  Widget _buildAboutMe(BuildContext context, sizingInformation) {
    return FadeIn(
        2.66,
        RichText(
          text: TextSpan(
            children: <TextSpan>[
              TextSpan(
                text: "My ",
                style: TextStyle(
                  fontFamily: 'Lato',
                  color: Colors.black,
                  fontWeight: FontWeight.w400,
                  fontSize:
                      sizingInformation.deviceType == DeviceScreenType.Mobile
                          ? 36
                          : 50.0,
                ),
              ),
              TextSpan(
                text: "Projects ",
                style: TextStyle(
                  color: Color(0xFF50AFC0),
                  fontFamily: 'Lato',
                  fontWeight: FontWeight.w900,
                  fontSize:
                      sizingInformation.deviceType == DeviceScreenType.Mobile
                          ? 36
                          : 50.0,
                ),
              ),
            ],
          ),
        ),
        "left");
  }

  Widget _projectsGrid(BuildContext context, sizingInformation) {
    return Container(
        alignment: Alignment.center,
        margin: EdgeInsets.only(top: 35),
        child: ConstrainedBox(
            constraints: BoxConstraints(
              minHeight: MediaQuery.of(context).size.height,
              minWidth: MediaQuery.of(context).size.width,
            ),
            child: Wrap(
                runSpacing: 30,
                children: projectList.map((i) {
                  return Card(
                    elevation: 0,
                    color: Colors.transparent,
                    child: Container(
                        alignment: Alignment.center,
                        margin: EdgeInsets.only(top: 30),
                        height: sizingInformation.deviceType ==
                                DeviceScreenType.Mobile
                            ? null
                            : MediaQuery.of(context).size.width * 0.30,
                        width: MediaQuery.of(context).size.width,
                        child: Container(
                            child: sizingInformation.deviceType ==
                                    DeviceScreenType.Mobile
                                ? Column(
                                    children: <Widget>[
                                      _sectionImage(i, sizingInformation),
                                      _sectionData(i, sizingInformation)
                                    ],
                                  )
                                : Row(
                                    mainAxisAlignment:
                                        (projectList.indexOf(i).isOdd)
                                            ? MainAxisAlignment.end
                                            : MainAxisAlignment.start,
                                    children: <Widget>[
                                      (projectList.indexOf(i).isOdd)
                                          ? Container(
                                              margin:
                                                  EdgeInsets.only(right: 50),
                                              child: _sectionData(
                                                  i, sizingInformation))
                                          : _sectionImage(i, sizingInformation),
                                      (projectList.indexOf(i).isOdd)
                                          ? _sectionImage(i, sizingInformation)
                                          : _sectionData(i, sizingInformation)
                                    ],
                                  ))),
                  );
                }).toList())));
  }

  _launchURL(url) async
  {
    html.document.window.location.href = url;
  }

  _sectionImage(i, sizingInformation) {
    return Container(
        height: sizingInformation.deviceType == DeviceScreenType.Mobile
            ? MediaQuery.of(context).size.width * 0.80
            : MediaQuery.of(context).size.width * 0.30,
        width: sizingInformation.deviceType == DeviceScreenType.Mobile
            ? MediaQuery.of(context).size.width
            : MediaQuery.of(context).size.width * 0.30,
        child: Stack(
          children: <Widget>[
            Container(
                height: sizingInformation.deviceType == DeviceScreenType.Mobile
                    ? MediaQuery.of(context).size.width * 0.52
                    : MediaQuery.of(context).size.width * 0.22,
                width: sizingInformation.deviceType == DeviceScreenType.Mobile
                    ? null
                    : MediaQuery.of(context).size.width * 0.18,
                color: i['color']),
            Positioned(
                left: 40.0,
                top: 35.0,
                height: sizingInformation.deviceType == DeviceScreenType.Mobile
                    ? MediaQuery.of(context).size.width * 0.80
                    : MediaQuery.of(context).size.width * 0.25,
                width: sizingInformation.deviceType == DeviceScreenType.Mobile
                    ? null
                    : MediaQuery.of(context).size.width * 0.25,
                child: Image.network(i['image']))
          ],
        ));
  }

  _sectionData(i, sizingInformation) {
    return Container(
      margin: sizingInformation.deviceType == DeviceScreenType.Mobile ? EdgeInsets.only(top : 20) : null,
        height: sizingInformation.deviceType == DeviceScreenType.Mobile
            ? null
            : MediaQuery.of(context).size.width * 0.30,
        width: sizingInformation.deviceType == DeviceScreenType.Mobile
            ? MediaQuery.of(context).size.width
            : MediaQuery.of(context).size.width * 0.45,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text(i['title'],
                textAlign: TextAlign.start,
                style: TextStyle(fontSize: 22.0, wordSpacing: 3.0)),
            Container(
              margin: EdgeInsets.only(top: 5),
              child: Text(i['text'],
                  textAlign: TextAlign.start,
                  style: TextStyle(fontSize: 15.0, wordSpacing: 2.0)),
            ),
            Container(
              margin: EdgeInsets.only(top: 15),
              child: Text(i['summary'],
                  textAlign: TextAlign.start,
                  style: TextStyle(
                      fontSize: 14.0, color: Colors.black54, wordSpacing: 2.0)),
            ),
            _buildSkillsContainerHeading("Responsibilities"),
            Container(
              margin: EdgeInsets.only(top: 5),
              child: Text(i['summary2'],
                  textAlign: TextAlign.start,
                  style: TextStyle(
                      fontSize: 14.0, color: Colors.black54, wordSpacing: 2.0)),
            ),
            _buildSkills(context, i, sizingInformation),
          ],
        ));
  }

  Widget _buildSkills(BuildContext context, i, sizingInformation) {
    String tech = i['techUsed'];
    final List<Widget> widgets = tech
        .split(",")
        .map((skill) => Padding(
              padding: EdgeInsets.only(right: 8.0),
              child: _buildSkillChip(context, skill),
            ))
        .toList();

    return Container(
        margin: EdgeInsets.only(top: 12),
        width: sizingInformation.deviceType == DeviceScreenType.Mobile ? null : MediaQuery.of(context).size.width * 0.50,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            _buildSkillsContainerHeading("Skills Used"),
            Wrap(children: widgets),
          ],
        ));
  }

  Widget _buildSkillsContainerHeading(String text) {
    return Container(
        margin: EdgeInsets.only(top: 10),
        child: Text(text, style: TextStyle(fontSize: 16.0, wordSpacing: 3.0)));
  }

  Widget _buildSkillChip(BuildContext context, String label) {
    return Chip(
      label: Text(
        label,
        style: TextStyle(
          fontSize: 10,
        ),
      ),
    );
  }
}
