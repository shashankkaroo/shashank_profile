import 'package:flutter/material.dart';
import 'package:kakro/enums/device_screen_size.dart';
import 'package:kakro/ui/BaseWidget.dart';
import 'package:kakro/ui/FadeIn.dart';
import 'package:kakro/ui/sizing_info.dart';
import 'package:universal_html/prefer_universal/html.dart' as html;

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
       return _getContentForProjDesk(sizingInformation);
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
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            _buildAboutMe(context, sizingInformation),
        (sizingInformation.deviceType == DeviceScreenType.Mobile) ?  _contactGridMob(context, sizingInformation): _contactGrid(context, sizingInformation)
          ],
        ));
  }


  Widget _contactGridMob(BuildContext context, sizingInformation) {
    return Container(
        height : MediaQuery.of(context).size.height,
        child: Column(
          children: <Widget>[
            Container(
              child: _generateContactPic(sizingInformation),
              ),
            Container(
                height : MediaQuery.of(context).size.height * 0.40,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        Icon(Icons.email, size: 20, color: Color(0xFF50AFC0)),
                        GestureDetector(
                          onTap: () {},
                          child: Text(
                            "  shashankkakroo@gmail.com",
                            style: TextStyle(fontSize: 14),
                            ),
                          )
                      ],
                      ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        Icon(Icons.phone, size: 20, color: Color(0xFF50AFC0)),
                        GestureDetector(
                          onTap: () {},
                          child: Text(
                            "  +971564699985",
                            style: TextStyle(fontSize: 14),
                            ),
                          )
                      ],
                      ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        Image.network(
                          "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/unnamed.png?alt=media&token=98be4c01-904e-49a8-8a17-fa172d90e697",
                          width: 23,
                          height: 23,
                          ),
                        GestureDetector(
                          onTap: () { _launchURL("https://join.skype.com/invite/myOA80TdcorG"); },
                          child: Text(
                            "  shashank.kakroo",
                            style: TextStyle(fontSize: 14),
                            ),
                          )
                      ],
                      ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        Image.network(
                          "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/whatsapp.png?alt=media&token=bbf5ff50-8233-47d4-a2cc-c38692dd42e7",
                          width: 23,
                          height: 23,
                          ),
                        GestureDetector(
                          onTap: () {
                            _launchURL("https://wa.me/971564699985");
                          },
                          child: Text(
                            "  Whatsapp : +971564699985",
                            style: TextStyle(fontSize: 14),
                            ),
                          )
                      ],
                      ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        Image.network(
                          "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/linkdn.png?alt=media&token=bd98e80e-673b-4dfe-95b3-d66ec009e772",
                          width: 23,
                          height: 23,
                          ),
                        GestureDetector(
                          onTap: () {
                            _launchURL("https://www.linkedin.com/in/shashank-kakroo");
                          },
                          child: Text(
                            "  https://www.linkedin.com/in/shashank-kakroo",
                            style: TextStyle(fontSize: 14),
                            ),
                          )
                      ],
                      ),

                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        Image.network(
                          "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/facebook.png?alt=media&token=998cf733-be63-4573-a450-b900d363e669",
                          width: 20,
                          height: 20,
                          ),
                        GestureDetector(
                          onTap: () {
                            _launchURL("https://www.facebook.com/shashank.kakroo");
                          },
                          child: Text(
                            "  https://www.facebook.com/shashank.kakroo",
                            style: TextStyle(fontSize: 14),
                            ),
                          )
                      ],
                      ),

                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        Image.network(
                          "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/insta.jpeg?alt=media&token=5d7516fb-5159-4324-8c90-c0cf2ceb77fd",
                          width: 35,
                          height: 35,
                          ),
                        GestureDetector(
                          onTap: () {
                            _launchURL("https://www.instagram.com/shashankkakroo");
                          },
                          child: Text(
                            "  @shashankkakroo",
                            style: TextStyle(fontSize: 14),
                            ),
                          )
                      ],
                      )

                  ],
                  )),
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

  _launchURL(url) async {
    html.document.window.location.href = url;
  }

  Widget _contactGrid(BuildContext context, sizingInformation) {
    return Container(
        child: Row(
      children: <Widget>[
        Container(
          child: _generateContactPic(sizingInformation),
        ),
        Container(
            height : MediaQuery.of(context).size.width * 0.20,
            child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.start,
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
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Image.network(
                  "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/unnamed.png?alt=media&token=98be4c01-904e-49a8-8a17-fa172d90e697",
                  width: 33,
                  height: 33,
                ),
                GestureDetector(
                  onTap: () { _launchURL("https://join.skype.com/invite/myOA80TdcorG"); },
                  child: Text(
                    "  shashank.kakroo",
                    style: TextStyle(fontSize: 20),
                  ),
                )
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Image.network(
                  "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/whatsapp.png?alt=media&token=bbf5ff50-8233-47d4-a2cc-c38692dd42e7",
                  width: 33,
                  height: 33,
                ),
                GestureDetector(
                  onTap: () {
                    _launchURL("https://wa.me/971564699985");
                  },
                  child: Text(
                    "  Whatsapp : +971564699985",
                    style: TextStyle(fontSize: 20),
                  ),
                )
              ],
            ),
          Row(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Image.network(
              "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/linkdn.png?alt=media&token=bd98e80e-673b-4dfe-95b3-d66ec009e772",
              width: 33,
              height: 33,
              ),
            GestureDetector(
              onTap: () {
                _launchURL("https://www.linkedin.com/in/shashank-kakroo");
              },
              child: Text(
                "  https://www.linkedin.com/in/shashank-kakroo",
                style: TextStyle(fontSize: 20),
                ),
              )
          ],
            ),

            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Image.network(
                  "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/facebook.png?alt=media&token=998cf733-be63-4573-a450-b900d363e669",
                  width: 30,
                  height: 30,
                  ),
                GestureDetector(
                  onTap: () {
                    _launchURL("https://www.facebook.com/shashank.kakroo");
                  },
                  child: Text(
                    "  https://www.facebook.com/shashank.kakroo",
                    style: TextStyle(fontSize: 20),
                    ),
                  )
              ],
              ),

            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Image.network(
                  "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/insta.jpeg?alt=media&token=5d7516fb-5159-4324-8c90-c0cf2ceb77fd",
                width: 35,
                  height: 35,
                  ),
                GestureDetector(
                  onTap: () {
                    _launchURL("https://www.instagram.com/shashankkakroo");
                  },
                  child: Text(
                    "  @shashankkakroo",
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
                    ? MediaQuery.of(context).size.width * 0.75
                    : MediaQuery.of(context).size.width * 0.42,
                height:
                    (sizingInformation.deviceType == DeviceScreenType.Mobile)
                        ? MediaQuery.of(context).size.width * 0.75
                        : MediaQuery.of(context).size.width * 0.42,
              )),
              Container(
                  margin: EdgeInsets.only(top: 40, left: (sizingInformation.deviceType == DeviceScreenType.Mobile) ? 80 : 100),
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
