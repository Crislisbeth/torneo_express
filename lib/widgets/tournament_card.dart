import 'package:flutter/material.dart';
import 'package:torneo_express/screens/tournament_detail_screen.dart';

class TournamentCard extends StatelessWidget {
  final Map<String, dynamic> tournament;

  const TournamentCard({Key? key, required this.tournament}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(vertical: 8),
      elevation: 4,
      child: InkWell(
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => TournamentDetailScreen(tournament: tournament),
            ),
          );
        },
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                tournament['name'],
                style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 8),
              Text('Juego: ${tournament['game']}'),
              Text('Equipos: ${tournament['teams']}'),
            ],
          ),
        ),
      ),
    );
  }
}