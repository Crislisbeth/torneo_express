import 'package:flutter/material.dart';
import '../widgets/custom_drawer.dart';

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Ajustes')),
      drawer: const CustomDrawer(),
      body: const Center(child: Text('Configuración de la Aplicación')),
    );
  }
}