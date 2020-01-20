import 'package:flutter/material.dart';
import 'package:kakro/enums/device_screen_size.dart';
import 'package:kakro/ui/BaseWidget.dart';
import 'package:kakro/ui/FadeIn.dart';
import 'package:kakro/ui/sizing_info.dart';

class ContactPage extends StatefulWidget {
  static const String routeName = "/contact";
  Key projectKey;

  ContactPage(this.projectKey);

  ContactPageState createState() => ContactPageState();
}

class ContactPageState extends State<ContactPage> {
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
      // return _getContentForProjMob(sizingInformation);
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
            _contactGrid(context, sizingInformation)
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
                text: "Contact ",
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
                text: "Me ",
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

  Widget _contactGrid(BuildContext context, sizingInformation) {
    return Container(
        child: Row(
      children: <Widget>[
        Container(
          child: _generateContactPic(sizingInformation),
        ),
        Container(
            child: Column(
          children: <Widget>[
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Icon(Icons.email, size: 30, color: Color(0xFF50AFC0)),
                GestureDetector(
                  onTap: () {},
                  child: Text(
                    "  shashankkakroo@gmail.com",
                    style: TextStyle(fontSize: 20),
                  ),
                )
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Icon(Icons.phone, size: 30, color: Color(0xFF50AFC0)),
                GestureDetector(
                  onTap: () {},
                  child: Text(
                    "  +971564699985",
                    style: TextStyle(fontSize: 20),
                  ),
                )
              ],
            )
          ],
        )),
      ],
    ));
  }

  Widget _generateContactPic(sizingInformation) {
    return FadeIn(
        2.66,
        Container(
          child: Stack(
            children: <Widget>[
              Container(
                  child: Image.network(
                "https://i.pinimg.com/originals/8b/a8/b8/8ba8b89f095d837cd54c7eb5ef31b99d.png",
                color: Colors.transparent,
                fit: BoxFit.fill,
                width: (sizingInformation.deviceType == DeviceScreenType.Mobile)
                    ? MediaQuery.of(context).size.width * 0.60
                    : MediaQuery.of(context).size.width * 0.42,
                height:
                    (sizingInformation.deviceType == DeviceScreenType.Mobile)
                        ? MediaQuery.of(context).size.width * 0.60
                        : MediaQuery.of(context).size.width * 0.42,
              )),
              Container(
                  margin: EdgeInsets.only(top: 40, left: 100),
                  child: Image.network(
                    "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/IMG-20181124-WA0006-removebg-preview.png?alt=media&token=375420f9-d054-4f29-97c1-c8c559bfb680",
                    width: (sizingInformation.deviceType ==
                            DeviceScreenType.Mobile)
                        ? MediaQuery.of(context).size.width * 0.60
                        : MediaQuery.of(context).size.width * 0.42,
                    height: (sizingInformation.deviceType ==
                            DeviceScreenType.Mobile)
                        ? MediaQuery.of(context).size.width * 0.60
                        : MediaQuery.of(context).size.width * 0.42,
                  ))
            ],
          ),
        ),
        "right");
  }
}
