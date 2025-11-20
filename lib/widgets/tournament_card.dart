import 'package:flutter/material.dart';
import 'package:torneo_express/screens/tournament_detail_screen.dart';

class TournamentCard extends StatelessWidget {
  final Map<String, dynamic> tournament;

  const TournamentCard({Key? key, required this.tournament}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 6,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      margin: const EdgeInsets.symmetric(vertical: 10),
      child: InkWell(
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => TournamentDetailScreen(tournament: tournament),
            ),
          );
        },
        borderRadius: BorderRadius.circular(12),
        child: Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            gradient: LinearGradient(
              colors: [
                Colors.indigo.shade50,
                Colors.white,
              ],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                tournament['name'],
                style: const TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  color: Colors.indigo,
                ),
              ),
              const SizedBox(height: 8),
              Row(
                children: [
                  Icon(Icons.sports_esports, color: Colors.orangeAccent.shade700, size: 18),
                  const SizedBox(width: 6),
                  Text('Juego: ${tournament['game']}', style: const TextStyle(fontSize: 16)),
                ],
              ),
              const SizedBox(height: 6),
              Row(
                children: [
                  Icon(Icons.group, color: Colors.orangeAccent.shade700, size: 18),
                  const SizedBox(width: 6),
                  Text('Equipos: ${tournament['teams']}', style: const TextStyle(fontSize: 16)),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}