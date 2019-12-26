import 'package:flutter/material.dart';
import 'package:responsive_grid/responsive_grid.dart';

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
  final projectList = [];

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
        //color: Colors.red,
        margin: EdgeInsets.only(top: 60),
        width: MediaQuery.of(context).size.width * 0.84,
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
    return ConstrainedBox(
        constraints: BoxConstraints(
          minHeight: MediaQuery.of(context).size.height,
          minWidth: MediaQuery.of(context).size.width,
          maxWidth: MediaQuery.of(context).size.width,
        ),
        // height: MediaQuery.of(context).size.width * 0.70,
        //margin: EdgeInsets.only(top: 40),
        child: Wrap(
            //spacing: 10,
            //direction: Axis.horizontal,
            children: [
              1,
              2,
              3,
              4,
              5,
              6,
            ].map((i) {
              return Card(
                elevation: 0,
                color: Colors.white,
                margin: EdgeInsets.all(20),
                child: Material(
                  child: InkWell(
                    onTap: () {
                      print('none');
                    },
                    child: Container(
                      height: 350,
                      width: MediaQuery.of(context).size.width * 0.39,
                      child: Center(
                        child: Text(
                          i.toString(),
                        ),
                      ),
                    ),
                  ),
                  color: Colors.white,
                ),
              );
            }).toList()));
  }
}
