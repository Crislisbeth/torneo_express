import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/tournament.dart';

class ApiService {
  static const String baseUrl = "http://localhost:3000/api";

  Future<List<Tournament>> fetchTournaments() async {
    final response = await http.get(Uri.parse('$baseUrl/tournaments'));
    if (response.statusCode == 200) {
      List<dynamic> data = jsonDecode(response.body);
      return data.map((t) => Tournament.fromJson(t)).toList();
    } else {
      throw Exception('Failed to load tournaments');
    }
  }

  Future<Tournament> createTournament(Tournament tournament) async {
    final response = await http.post(
      Uri.parse('$baseUrl/tournaments'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode(tournament.toJson()),
    );

    if (response.statusCode == 201) {
      return Tournament.fromJson(jsonDecode(response.body));
    } else {
      throw Exception('Failed to create tournament');
    }
  }
}
