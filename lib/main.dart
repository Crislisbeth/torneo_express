import 'package:flutter/material.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(const TorneoExpressApp());
}

class TorneoExpressApp extends StatelessWidget {
  const TorneoExpressApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Torneo Express',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const HomeScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}