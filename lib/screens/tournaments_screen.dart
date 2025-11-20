import 'package:flutter/material.dart';
import 'package:torneo_express/widgets/tournament_card.dart';

class TournamentsScreen extends StatelessWidget {
  TournamentsScreen({Key? key}) : super(key: key);

  final List<Map<String, dynamic>> tournaments = [
    {'name': 'Liga Futbol 7', 'game': 'Fútbol', 'teams': 8},
    {'name': 'Campeonato League', 'game': 'League of Legends', 'teams': 16},
    {'name': 'Torneo Smash Bros', 'game': 'Smash Bros', 'teams': 32},
  ];

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: ListView.builder(
        itemCount: tournaments.length,
        itemBuilder: (context, index) {
          final tournament = tournaments[index];
          return TournamentCard(tournament: tournament);
        },
      ),
    );
  }
}