import 'package:flutter/material.dart';
import 'create_tournament_screen.dart';
import 'tournament_list_screen.dart';
// import 'package:firebase_auth/firebase_auth.dart';
class HomeScreen extends StatelessWidget {
  static const routeName = '/';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Torneo Express'),
        centerTitle: true,
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ElevatedButton.icon(
                icon: const Icon(Icons.add),
                label: const Text('Crear Torneo'),
                style: ElevatedButton.styleFrom(
                    minimumSize: Size(double.infinity, 50)),
                onPressed: () {
                  Navigator.pushNamed(context, CreateTournamentScreen.routeName);
                },
              ),
              const SizedBox(height: 20),
              ElevatedButton.icon(
                icon: const Icon(Icons.list),
                label: const Text('Ver Torneos'),
                style: ElevatedButton.styleFrom(
                    minimumSize: Size(double.infinity, 50)),
                onPressed: () {
                  Navigator.pushNamed(context, TournamentListScreen.routeName);
                },
              ),
            ],
          ), 
        ),
      ),
    );
  }
}
