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
      theme: ThemeData(
        primaryColor: Colors.indigo.shade900,
        colorScheme: ColorScheme.fromSwatch()
            .copyWith(secondary: Colors.orangeAccent.shade700),
        appBarTheme: const AppBarTheme(
          backgroundColor: Colors.indigo,
          foregroundColor: Colors.white,
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.orangeAccent.shade700,
            foregroundColor: Colors.white,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
          ),
        ),
        inputDecorationTheme: InputDecorationTheme(
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(8)),
          focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(color: Colors.orangeAccent.shade700),
            borderRadius: BorderRadius.circular(8),
          ),
        ),
      ),
      home: const HomeScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}