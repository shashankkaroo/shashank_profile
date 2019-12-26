import 'package:flutter/material.dart';

class ContactPage extends StatelessWidget {
  static const String routeName = "/contact";
  Key contactKey;

  ContactPage(this.contactKey);

  @override
  Widget build(BuildContext context) {
    return Container(
        key: contactKey,
        height: MediaQuery.of(context).size.height,
        width: MediaQuery.of(context).size.width,
        child: Text("Contact_page"),

    );
  }
}
