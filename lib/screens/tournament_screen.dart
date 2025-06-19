import 'package:flutter/material.dart';
import '../widgets/custom_drawer.dart';

class TournamentsScreen extends StatelessWidget {
  const TournamentsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Torneos')),
      drawer: const CustomDrawer(),
      body: const Center(child: Text('Lista de Torneos')),
    );
  }
}