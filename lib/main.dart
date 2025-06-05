import 'package:flutter/material.dart';
import 'screens/home_screen.dart';
import 'screens/create_tournament_screen.dart';
import 'screens/tournament_list_screen.dart';
// import 'package:firebase_auth/firebase_auth.dart';
void main() {
  runApp(TorneoExpressApp());
}

class TorneoExpressApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Torneo Express',
      theme: ThemeData(
        primarySwatch: Colors.deepPurple,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      initialRoute: HomeScreen.routeName,
      routes: {
        HomeScreen.routeName: (_) => HomeScreen(),
        CreateTournamentScreen.routeName: (_) => CreateTournamentScreen(),
        TournamentListScreen.routeName: (_) => TournamentListScreen(),
      },
    );
  }
}
