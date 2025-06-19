import 'package:flutter/material.dart';
import '../widgets/custom_drawer.dart';

class ResultsScreen extends StatelessWidget {
  const ResultsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Resultados')),
      drawer: const CustomDrawer(),
      body: const Center(child: Text('Resultados de los Juegos')),
    );
  }
}