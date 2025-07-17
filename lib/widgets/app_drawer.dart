import 'package:flutter/material.dart';
import 'package:torneo_express/screens/tournaments_screen.dart';
import 'package:torneo_express/screens/add_tournament_screen.dart';

class AppDrawer extends StatelessWidget {
  const AppDrawer({Key? key}) : super(key: key);

  Widget _createHeader() {
    return DrawerHeader(
      margin: EdgeInsets.zero,
      padding: EdgeInsets.zero,
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Colors.indigo, Colors.orangeAccent],
        ),
      ),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(Icons.sports_esports, size: 60, color: Colors.white),
            SizedBox(height: 10),
            Text(
              'Torneo Express',
              style: TextStyle(
                color: Colors.white,
                fontSize: 22,
                fontWeight: FontWeight.bold,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _createDrawerItem({
    required IconData icon,
    required String text,
    required VoidCallback onTap,
  }) {
    return ListTile(
      leading: Icon(icon),
      title: Text(text),
      onTap: onTap,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Theme(
      data: Theme.of(context).copyWith(canvasColor: Colors.white),
      child: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            _createHeader(),
            _createDrawerItem(
              icon: Icons.sports_esports,
              text: 'Torneos',
              onTap: () {
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(
                    builder: (context) => TournamentsScreen(),
                  ),
                );
              },
            ),
            _createDrawerItem(
              icon: Icons.add,
              text: 'Agregar Torneo',
              onTap: () {
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const AddTournamentScreen(),
                  ),
                );
              },
            ),
            _createDrawerItem(
              icon: Icons.settings,
              text: 'Ajustes',
              onTap: () {
                Navigator.pop(context);
                // TODO: Implementar pantalla de ajustes
              },
            ),
            const Divider(),
            _createDrawerItem(
              icon: Icons.exit_to_app,
              text: 'Salir',
              onTap: () {
                Navigator.pop(context);
                // Opcional: cerrar la app
                // SystemNavigator.pop(); // Descomenta si lo deseas
              },
            ),
          ],
        ),
      ),
    );
  }
}