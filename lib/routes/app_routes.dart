import 'package:flutter/material.dart';
import 'package:torneo_express/screens/home_screen.dart';
import 'package:torneo_express/screens/tournament_screen.dart';
import 'package:torneo_express/screens/results_screen.dart';
import 'package:torneo_express/screens/settings_screen.dart';

class AppRoutes {
  static const String home = '/';
  static const String tournaments = '/tournaments';
  static const String results = '/results';
  static const String settings = '/settings';

  static Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case AppRoutes.home:
        return MaterialPageRoute(builder: (_) => const HomeScreen());
      case AppRoutes.tournaments:
        return MaterialPageRoute(builder: (_) => const TournamentsScreen());
      case AppRoutes.results:
        return MaterialPageRoute(builder: (_) => const ResultsScreen());
      case AppRoutes.settings:
        return MaterialPageRoute(builder: (_) => const SettingsScreen());
      default:
        return MaterialPageRoute(
          builder: (_) => const Scaffold(
            body: Center(child: Text('Ruta no encontrada')),
          ),
        );
    }
  }
}
