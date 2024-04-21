CREATE TABLE habits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  color TEXT NOT NULL
);
INSERT INTO habits (title, description, color) VALUES
  ('Exercise', '30 minutes of moderate-intensity exercise most days of the week.', '#FF0000'),
  ('Read', 'Read for 20 minutes most days of the week.', '#00FF00'),
  ('Meditate', 'Meditate for 10 minutes most days of the week.', '#0000FF'),
  ('Eat healthy', 'Eat plenty of fruits, vegetables, and whole grains.', '#FFFF00'),
  ('Get enough sleep', 'Aim for 7-8 hours of sleep per night.', '#660066'),
  ('Drink plenty of water', 'Drink 8 glasses of water per day.', '#00FFFF'),
  ('Learn something new', 'Learn a new skill or hobby each week.', '#999999'),
  ('Spend time with loved ones', 'Connect with family and friends regularly.', '#FF9999'),
  ('Help others', 'Volunteer your time or donate to a cause you care about.', '#C0C0C0'),
  ('Practice gratitude', 'Reflect on the things you are grateful for each day.', '#FFCC99');
