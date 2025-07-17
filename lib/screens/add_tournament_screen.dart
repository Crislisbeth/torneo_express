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
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                decoration: const InputDecoration(labelText: "Nombre del Torneo"),
                validator: (value) {
                  if (value == null || value.isEmpty) return "Ingresa el nombre";
                  return null;
                },
                onSaved: (value) => _name = value!,
              ),
              TextFormField(
                decoration: const InputDecoration(labelText: "Juego"),
                validator: (value) {
                  if (value == null || value.isEmpty) return "Ingresa el juego";
                  return null;
                },
                onSaved: (value) => _game = value!,
              ),
              TextFormField(
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(labelText: "Número de Equipos"),
                validator: (value) {
                  if (value == null || value.isEmpty) return "Ingresa cantidad";
                  if (int.tryParse(value) == null) return "Número inválido";
                  return null;
                },
                onSaved: (value) => _teams = int.parse(value!),
              ),
              const SizedBox(height: 20),
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