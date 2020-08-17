
import 'package:flutter/material.dart';
import 'package:kakro/enums/device_screen_size.dart';
import 'package:kakro/ui/FadeIn.dart';
import 'package:kakro/ui/sizing_info.dart';

class AboutMe extends StatefulWidget {
  SizingInformation sizingInformation;
  Key aboutKey;

  AboutMe(SizingInformation sizingInformation, aboutKey) {
    this.sizingInformation = sizingInformation;
    this.aboutKey = aboutKey;
  }
  @override
  AboutTabState createState() => AboutTabState(sizingInformation);
}

class AboutTabState extends State<AboutMe> with SingleTickerProviderStateMixin {
  static const String routeName = "/about";
  SizingInformation sizingInformation;

  AboutTabState(SizingInformation sizingInformation) {
    this.sizingInformation = sizingInformation;
  }

  AnimationController rotationController;

  String aboutMeText = "6 years of experience in IT industry, exclusively in Mobile Application Development.\nHaving good Knowledge of Flutter, Dart, Kony 8.X, 7.X, 6.X, Visualizer and Android.\nExperience in all activities of Software Development Life Cycle (SDLC), team skills, presentation abilities, issue resolution capabilities and experience in project implementation.\nWorking experience in Integrating Firebase with Flutter.\nHaving Working knowledge of publishing App on Google Play Store.\nA self-Motivated professional Skilled at balancing and prioritizing tasks to meet deadline, excellent technological, analytical and ability to learn quickly and apply new technologies.";

  final skills = [
    'Cross platform development',
    'Android',
    'Flutter',
    'Dart',
    'Firebase',
    'Firestore',
    'Firebase Cloud Functions',
    'Kony Visualizer',
    'Kony Mobile Fabric',
    'Java',
    'JavaScript',
    'GIT',
    'SVN',
    'JIRA',
    'SEO',
    'Digital Marketing',
  ];

  // experience

  final experience = [
    {
      "title": "System Analyst",
      "company": "Abu Dhabi Commencial Bank",
      "text": "Mobile Application Developer - Kony"
    },
    {
      "title": "Flutter & Android Developer",
      "company": "Freelancing",
      "text": "Worked on part time projects for flutter and android native"
    },
    {
      "title": "Software Engineer",
      "company": "GFI Informatique India Pvt Ltd.",
      "text": "Kony Application Developer"
    },
    {
      "title": "Software Engineer",
      "company": "InnovationM",
      "text": "Android Developer"
    },
    {
      "title": "Associate Engineer",
      "company": "InfoStretch",
      "text": "Developer"
    }
  ];

  @override
  void initState() {
    rotationController =
        AnimationController(vsync: this, duration: Duration(seconds: 200));
    rotationController.forward();

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
       // height: (sizingInformation.deviceType == DeviceScreenType.Desktop) ?  MediaQuery.of(context).size.height : null,
        key: widget.aboutKey,
        child: _getContentForAboutMe(sizingInformation, context),
    );
  }

  _getContentForAboutMe(sizingInformation, context) {
    if (sizingInformation.deviceType == DeviceScreenType.Desktop) {
      return _buildContentForAboutMeDesk(sizingInformation, context);
    } else {
      return _buildContentForAboutMeMobile(sizingInformation, context);
    }
  }

  _buildContentForAboutMeMobile(sizingInformation, context) {
    return Container(
        margin: EdgeInsets.all(10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            _generateProfilePic(),
            Container(
                width: MediaQuery.of(context).size.width,
                margin: EdgeInsets.only(top: 10),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    Container(
                      child: _buildAboutMe(context),
                    ),
                    Container(
                        margin: EdgeInsets.only(top: 17),
                        child: _buildSubHeading(context)),
                    Container(
                      margin: EdgeInsets.only(top: 25),
                      child: _buildIntro(context),
                    ),
                    FadeIn(
                        3.32,
                        Container(
                          margin: EdgeInsets.only(top: 25),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                              _createExperience(context),
                              _buildSkills(context),
                            ],
                          ),
                        ),
                        "left"),
                  ],
                )),
          ],
        ),
    );
  }

  _buildContentForAboutMeDesk(sizingInformation, context) {
    return  Container(
        margin: EdgeInsets.all(60),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Container(
                width: MediaQuery.of(context).size.width * 0.50,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Container(
                      child: _buildAboutMe(context),
                    ),
                    Container(
                        margin: EdgeInsets.only(top: 17),
                        child: _buildSubHeading(context)),
                    Container(
                      margin: EdgeInsets.only(top: 25),
                      child: _buildIntro(context),
                    ),
                    FadeIn(
                        3.32,
                        Container(
                          margin: EdgeInsets.only(top: 25),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: <Widget>[
                              _createExperience(context),
                              _buildSkills(context),
                            ],
                          ),
                        ),
                        "left"),
                  ],
                )),
            _generateProfilePic()
          ],
        ),
    );
  }

  Widget _generateProfilePic() {
    return FadeIn(
        2.66,
        Container(
          child: Stack(
            children: <Widget>[
              RotationTransition(
                  turns: rotationController,
                  child: CircleAvatar(
                    radius: (sizingInformation.deviceType == DeviceScreenType.Mobile) ? MediaQuery.of(context).size.width * 0.35 : MediaQuery.of(context).size.width * 0.17,
                    backgroundColor: Colors.transparent,
                    backgroundImage: NetworkImage(
                        "https://previews.123rf.com/images/topform8/topform81303/topform8130300021/18425293-mass-media-doodles-set.jpg"),
                  )),
              Container(
                  margin:  EdgeInsets.only(left: 35, top: 34),
                  child: Image.network(
                    "https://firebasestorage.googleapis.com/v0/b/shashank-kakroo.appspot.com/o/profile.png?alt=media&token=f8558592-3239-42c4-aceb-4db2c06a4540",
                    width: (sizingInformation.deviceType == DeviceScreenType.Mobile) ?  MediaQuery.of(context).size.width * 0.60 : MediaQuery.of(context).size.width * 0.32,
                    height: (sizingInformation.deviceType == DeviceScreenType.Mobile) ? MediaQuery.of(context).size.width * 0.60  : MediaQuery.of(context).size.width * 0.32,
                    filterQuality: FilterQuality.low,
                    semanticLabel: "Shashank Kakroo Mobile Application Developer / freelance developer in AbuDhabi",
                  ))
            ],
          ),
        ),
        "right");
  }

  Widget _buildAboutMe(BuildContext context) {
    return FadeIn(
        2.66,
        RichText(
          text: TextSpan(
            children: <TextSpan>[
              TextSpan(
                text: "About ",
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
                text: "Me",
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

  Widget _buildSubHeading(BuildContext context) {
    return FadeIn(
        2.66,
        Text(
            "Mobile Application Developer,\nfrom Abu Dhabi, United Arab Emiretes",
            textAlign: (sizingInformation.deviceType == DeviceScreenType.Mobile)
                ? TextAlign.center
                : TextAlign.start,
            style: TextStyle(fontSize: 18.0, wordSpacing: 3.0)),
        "left");
  }

  Widget _buildIntro(BuildContext context) {
    return FadeIn(
        2.99,
        Text(
            aboutMeText.toString(),
            style: TextStyle(
                fontSize: 17.0, color: Colors.black54, wordSpacing: 3.0)),
        "left");
  }

  Widget _createExperience(context) {
    return Container(
      width: (sizingInformation.deviceType == DeviceScreenType.Mobile)
          ? MediaQuery.of(context).size.width
          : MediaQuery.of(context).size.width * 0.30,
      child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: _getExperienceList()),
    );
  }

  List<Widget> _getExperienceList() {
    List<Widget> exp = new List();
    Widget a =
        Text("Experience", style: TextStyle(fontSize: 20.0, wordSpacing: 3.0));
    Widget pad = Padding(padding: EdgeInsets.only(top: 10));
    exp.add(a);
    exp.add(pad);
    for (var i = 0; i < experience.length; i++) {
      Widget title = Text(experience[i]['title'],
          style: TextStyle(fontSize: 16.0, wordSpacing: 2.0));
      Widget company = Text(experience[i]['company'],
          style: TextStyle(fontSize: 15.0, wordSpacing: 2.0));
      Widget text = Text(experience[i]['text'],
          style: TextStyle(
              fontSize: 15.0, color: Colors.black54, wordSpacing: 2.0));
      Widget pad = Padding(padding: EdgeInsets.only(top: 15));
      Widget padMini = Padding(padding: EdgeInsets.only(top: 5));
      exp.add(title);
      exp.add(company);
      exp.add(padMini);
      exp.add(text);
      exp.add(pad);
    }
    return exp;
  }

  Widget _buildSkills(BuildContext context) {
    final List<Widget> widgets = skills
        .map((skill) => Padding(
              padding: EdgeInsets.only(right: 8.0),
              child: _buildSkillChip(context, skill),
            ))
        .toList();

    return Container(
        margin: (sizingInformation.deviceType == DeviceScreenType.Mobile)
            ? EdgeInsets.only(top: 12)
            : EdgeInsets.only(top: 0),
        width: (sizingInformation.deviceType == DeviceScreenType.Mobile)
            ? MediaQuery.of(context).size.width
            : MediaQuery.of(context).size.width * 0.20,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            _buildSkillsContainerHeading(),
            Wrap(children: widgets),
          ],
        ));
  }

  Widget _buildSkillsContainerHeading() {
    return Text("What Skills I Have",
        style: TextStyle(fontSize: 18.0, wordSpacing: 3.0));
  }

  Widget _buildSkillChip(BuildContext context, String label) {
    return Chip(
      label: Text(
        label,
        style: TextStyle(
          fontSize: 14,
        ),
      ),
    );
  }

  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return null;
  }
}
