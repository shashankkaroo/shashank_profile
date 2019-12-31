import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../enums/device_screen_size.dart';
import 'BaseWidget.dart';
import 'FadeIn.dart';
import 'sizing_info.dart';

class ProjectsPage extends StatefulWidget {
  static const String routeName = "/projects";
  Key projectKey;

  ProjectsPage(this.projectKey);

  ProjectsPageState createState() => ProjectsPageState();
}

class ProjectsPageState extends State<ProjectsPage> {
  final projectList = [
    {
      "title": "Artbandhu",
      "image":
          "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/Screen%20Shot%202019-12-30%20at%204.25.43%20PM.png?alt=media&token=03697eb1-6809-4f88-bf3c-3bfd482bea2d",
      "text": "Social Art Feed Application for local artist and community",
      "techUsed": " < Flutter, Native Android, Firebase, iOS /> ",
      "storeLink":
          "https://play.google.com/store/apps/details?id=com.artbandhu.Artbandhu",
      "color": Colors.amber.shade50.withOpacity(0.9),
      "txtColor": Colors.orange
    },
    {
      "title": "Home Workouts",
      "image":
          "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/Screen%20Shot%202019-12-30%20at%204.26.44%20PM.png?alt=media&token=7813e058-2b3a-4912-b6b1-4aa931b2b8a0",
      "text": "Home Workouts and Fitness Application",
      "techUsed": " < Native Android, Firebase, Cloud Messaging /> ",
      "storeLink":
          "https://play.google.com/store/apps/details?id=com.kakroo.shashank.fitapp",
      "color": Colors.lime.shade100.withOpacity(0.9),
      "txtColor": Colors.green.shade700
    },
    {
      "title": "Gulf VPN",
      "image":
          "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/Screen%20Shot%202019-12-30%20at%204.27.03%20PM.png?alt=media&token=e71d7c82-f4b1-4494-b6ca-3c04b93dad68",
      "text": "Android Open VPN Client",
      "techUsed": " < Native Android, Firebase, Cloud Messaging, Open VPN /> ",
      "storeLink":
          "https://play.google.com/store/apps/details?id=free.vpn.unblock.proxy.gulfVPN",
      "color": Colors.lightBlueAccent.shade100.withOpacity(0.9),
      "txtColor": Colors.blue.shade700
    },
    {
      "title": "My Android",
      "image":
          "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/Screen%20Shot%202019-12-30%20at%204.26.56%20PM.png?alt=media&token=7622e292-763d-40b2-b724-a8b675e13472",
      "text": "Android Utility Application",
      "techUsed": "< Native Android, Firebase, Cloud Messaging />",
      "storeLink":
          "https://play.google.com/store/apps/details?id=com.innovationm.myandroid",
      "color": Colors.yellowAccent.shade100.withOpacity(0.9),
      "txtColor": Colors.deepOrangeAccent.shade200
    },
    {
      "title": "MOCI, Qatar",
      "image":
          "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/Screen%20Shot%202019-12-30%20at%204.27.11%20PM.png?alt=media&token=b53da951-1b07-48c6-88bc-9b1fa58ac057",
      "text": "Municipality & Management App",
      "techUsed": "< Kony, Native Android, Firebase, Cloud Messaging />",
      "storeLink": "https://play.google.com/store/apps/details?id=com.mbt.mbt",
      "color": Colors.lightGreenAccent.shade100.withOpacity(0.9),
      "txtColor": Colors.blue.shade700
    },
    {
      "title": "Ooredoo, Qatar",
      "image":
          "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/Screen%20Shot%202019-12-30%20at%204.27.35%20PM.png?alt=media&token=e552110c-1c42-49d5-a2a6-237c99df1040",
      "text": "Mobile Recharge Application",
      "techUsed": "< Kony, Native Android, Firebase, Cloud Messaging />",
      "storeLink":
          "https://play.google.com/store/apps/details?id=qa.ooredoo.android",
      "color": Colors.deepOrangeAccent.shade100.withOpacity(0.9),
      "txtColor": Colors.deepOrangeAccent.shade700
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
      return Text("Mobile");
    } else {
      return _getContentForProjDesk(sizingInformation);
    }
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
        margin: EdgeInsets.only(top: 20),
        child: ConstrainedBox(
            constraints: BoxConstraints(
              minHeight: MediaQuery.of(context).size.height,
              minWidth: MediaQuery.of(context).size.width,
            ),
            child: Wrap(
                spacing: 10,
                runSpacing: 10,
                children: projectList.map((i) {
                  return Card(
                    elevation: 0,
                    color: Colors.white,
                    child: Container(
                      alignment: Alignment.center,
                      height: MediaQuery.of(context).size.width * 0.32,
                      width: MediaQuery.of(context).size.width * 0.415,
                      child: Stack(
                        children: <Widget>[
                          Positioned.fill(child: Image.network(i['image'])),
                          BackdropFilter(
                              filter:
                                  ImageFilter.blur(sigmaX: 10.0, sigmaY: 10.0),
                              child: new Container(
                                padding: EdgeInsets.all(20),
                                decoration:
                                    new BoxDecoration(color: i['color']),
                                child: Center(
                                    child: Column(
                                        mainAxisAlignment:
                                            MainAxisAlignment.center,
                                        children: <Widget>[
                                      Text(i['title'],
                                          style: TextStyle(
                                              color: i['txtColor'],
                                              fontSize: 48,
                                              //backgroundColor: Colors.white,

                                              fontFamily: 'Lato',
                                              fontWeight: FontWeight.bold)),
                                      Text(i['text'],
                                          style: TextStyle(
                                              color: i['txtColor'],
                                              fontSize: 28,
                                              //backgroundColor: Colors.white,
                                              fontFamily: 'Lato')),
                                      Container(
                                          margin: EdgeInsets.only(
                                              top: 10, bottom: 10),
                                          child: GestureDetector(
                                              onTap: () {
                                                _launchURL(i["storeLink"]);
                                              },
                                              child: ClipOval(
                                                child: Container(
                                                  color: Color(0xFF50AFC0),
                                                  height:
                                                      56.0, // height of the button
                                                  width:
                                                      56.0, // width of the button
                                                  child: Center(
                                                      child: Icon(
                                                    Icons.link,
                                                    color: Colors.white,
                                                    size: 35,
                                                  )),
                                                ),
                                              ))),
                                      Text(i['techUsed'],
                                          style: TextStyle(
                                              color: i['txtColor'],
                                              fontSize: 20,
                                              //backgroundColor: Colors.white,
                                              fontFamily: 'Lato')),
                                    ])),
                              ))
                        ],
                      ),
                    ),
                  );
                }).toList())));
  }

  _launchURL(url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }
}
