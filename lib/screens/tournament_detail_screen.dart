import 'package:flutter/material.dart';

class TournamentDetailScreen extends StatelessWidget {
  final Map<String, dynamic> tournament;

  const TournamentDetailScreen({Key? key, required this.tournament}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(tournament['name'])),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Juego: ${tournament['game']}', style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 10),
            Text('Equipos inscritos: ${tournament['teams']}', style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 20),
            ElevatedButton.icon(
              onPressed: () {
                // Aquí puedes abrir formulario de edición
              },
              icon: const Icon(Icons.edit),
              label: const Text("Editar Torneo"),
            )
          ],
        ),
      ),
    );
  }
}