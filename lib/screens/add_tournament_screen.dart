import 'package:flutter/material.dart';

class AddTournamentScreen extends StatefulWidget {
  const AddTournamentScreen({Key? key}) : super(key: key);

  @override
  State<AddTournamentScreen> createState() => _AddTournamentScreenState();
}

class _AddTournamentScreenState extends State<AddTournamentScreen> {
  final _formKey = GlobalKey<FormState>();
  late String _name;
  late String _game;
  late int _teams;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Nuevo Torneo")),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              TextFormField(
                decoration: InputDecoration(
                  labelText: "Nombre del Torneo",
                  prefixIcon: const Icon(Icons.edit),
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) return "Ingresa el nombre";
                  return null;
                },
                onSaved: (value) => _name = value!,
              ),
              const SizedBox(height: 16),
              TextFormField(
                decoration: InputDecoration(
                  labelText: "Juego",
                  prefixIcon: const Icon(Icons.sports_esports),
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) return "Ingresa el juego";
                  return null;
                },
                onSaved: (value) => _game = value!,
              ),
              const SizedBox(height: 16),
              TextFormField(
                keyboardType: TextInputType.number,
                decoration: InputDecoration(
                  labelText: "Número de Equipos",
                  prefixIcon: const Icon(Icons.group),
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) return "Ingresa cantidad";
                  if (int.tryParse(value) == null) return "Número inválido";
                  return null;
                },
                onSaved: (value) => _teams = int.parse(value!),
              ),
              const SizedBox(height: 30),
              ElevatedButton.icon(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(content: Text("Torneo '$_name' creado")),
                    );
                  }
                },
                icon: const Icon(Icons.save),
                label: const Text("Guardar Torneo"),
              )
            ],
          ),
        ),
      ),
    );
  }
}