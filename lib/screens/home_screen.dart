import 'package:flutter/material.dart';
import 'package:torneo_express/screens/tournaments_screen.dart';
import 'package:torneo_express/screens/add_tournament_screen.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _currentIndex = 0;

  final List<Widget> _screens = [
    TournamentsScreen(),
    AddTournamentScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Torneo Express')),
      body: _screens[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (index) {
          setState(() {
            _currentIndex = index;
          });
        },
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.sports_esports), label: 'Torneos'),
          BottomNavigationBarItem(icon: Icon(Icons.add), label: 'Agregar'),
        ],
      ),
    );
  }
}