import 'package:flutter/material.dart';

class TournamentDetailScreen extends StatelessWidget {
  final Map<String, dynamic> tournament;

  const TournamentDetailScreen({Key? key, required this.tournament}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(tournament['name'])),
      body: Container(
        padding: const EdgeInsets.all(20),
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Colors.indigo, Colors.white],
          ),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              tournament['name'],
              style: const TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
                color: Colors.white,
              ),
            ),
            const SizedBox(height: 10),
            Text(
              'Juego: ${tournament['game']}',
              style: const TextStyle(fontSize: 18, color: Colors.white70),
            ),
            Text(
              'Equipos: ${tournament['teams']}',
              style: const TextStyle(fontSize: 18, color: Colors.white70),
            ),
            const SizedBox(height: 20),
            ElevatedButton.icon(
              onPressed: () {},
              icon: const Icon(Icons.edit),
              label: const Text("Editar Torneo"),
            ),
          ],
        ),
      ),
    );
  }
}