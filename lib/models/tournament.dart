class Tournament {
  final int? id;
  final String name;
  final DateTime date;

  Tournament({this.id, required this.name, required this.date});

  factory Tournament.fromJson(Map<String, dynamic> json) {
    return Tournament(
      id: json['id'],
      name: json['name'],
      date: DateTime.parse(json['date']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'date': date.toIso8601String().split('T')[0], 
    };
  }
}
