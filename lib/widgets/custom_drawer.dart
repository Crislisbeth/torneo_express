import 'package:flutter/material.dart';

class CustomDrawer extends StatelessWidget {
  const CustomDrawer({Key? key}) : super(key: key);

  Widget _buildMenuItem(String title, IconData icon, VoidCallback onTap) {
    return ListTile(
      leading: Icon(icon),
      title: Text(title),
      onTap: onTap,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: [
          UserAccountsDrawerHeader(
            accountName: const Text('Administrador'),
            accountEmail: const Text('administrador@gmail.com'),
            currentAccountPicture: const CircleAvatar(
              backgroundImage: AssetImage('assets/images/profile.png'),
            ),
            decoration: BoxDecoration(
              color: Theme.of(context).primaryColor,
            ),
          ),
          _buildMenuItem('Inicio', Icons.home, () {
            Navigator.pushNamed(context, '/');
          }),
          _buildMenuItem('Torneos', Icons.sports_esports, () {
            Navigator.pushNamed(context, '/tournaments');
          }),
          _buildMenuItem('Resultados', Icons.scoreboard, () {
            Navigator.pushNamed(context, '/results');
          }),
          _buildMenuItem('Ajustes', Icons.settings, () {
            Navigator.pushNamed(context, '/settings');
          }),
          const Divider(),
          _buildMenuItem('Cerrar Sesión', Icons.logout, () {
            ScaffoldMessenger.of(context)
                .showSnackBar(const SnackBar(content: Text('Sesión cerrada')));
            Navigator.pop(context);
          }),
        ],
      ),
    );
  }
}