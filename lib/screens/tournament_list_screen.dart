import 'package:flutter/material.dart';
import '../models/tournament.dart';
import '../services/api_service.dart';
import 'package:intl/intl.dart';
// ignore_for_file: prefer_const_constructors
class TournamentListScreen extends StatefulWidget {
  static const routeName = '/list';

  @override
  State<TournamentListScreen> createState() => _TournamentListScreenState();
}

class _TournamentListScreenState extends State<TournamentListScreen> {
  final ApiService apiService = ApiService();
  late Future<List<Tournament>> _tournamentsFuture;

  @override
  void initState() {
    super.initState();
    _tournamentsFuture = apiService.fetchTournaments();
  }

  Future<void> _refresh() async {
    setState(() {
      _tournamentsFuture = apiService.fetchTournaments();
    });
  }

  String formatDate(DateTime date) {
    return DateFormat('dd/MM/yyyy').format(date);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Lista de Torneos'),
      ),
      body: FutureBuilder<List<Tournament>>(
        future: _tournamentsFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text('No hay torneos disponibles'));
          } else {
            final tournaments = snapshot.data!;
            return RefreshIndicator(
              onRefresh: _refresh,
              child: ListView.builder(
                itemCount: tournaments.length,
                itemBuilder: (context, index) {
                  final t = tournaments[index];
                  return Card(
                    margin:
                        const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                    elevation: 3,
                    child: ListTile(
                      title: Text(t.name,
                          style: const TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 18)),
                      subtitle: Text('Fecha: ${formatDate(t.date)}'),
                    ),
                  );
                },
              ),
            );
          }
        },
      ),
    );
  }
}
