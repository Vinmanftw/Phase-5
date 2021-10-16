# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'seeding User'
vin = User.create(first_name: "Vincent",last_name:"Orsini",is_male:"Male",age: 18,username: "Vinmanftw", password:"water",password_confirmation:"water")

puts'seeding routines'
bulk = Routine.create(title: "Vingainz", user_id: vin.id)
bulk = Routine.create(title: "Push-Pull-Legs", user_id: vin.id)

puts'seeding days'
monday = Day.create(dotw: "Monday", title: "Chest", routine_id: bulk.id)
tuesday = Day.create(dotw: "Tuesday", title: "Legs", routine_id: bulk.id)
wednesday = Day.create(dotw: "Wednesday", title: "Back", routine_id: bulk.id)
thursday = Day.create(dotw: "Thursday", title: "Arms", routine_id: bulk.id)
friday = Day.create(dotw: "Friday", title: "Shoulders", routine_id: bulk.id)
saturday = Day.create(dotw: "Saturday", title: "rest day", routine_id: bulk.id)
sunday = Day.create(dotw: "Sunday", title: "rest day", routine_id: bulk.id)

puts'seeding workouts'
Workout.create(name: "Incline Dumbbell Fly",primary_muscle: "Chest", day_id: monday.id)

puts 'seeding sets'
WorkoutSet.create(reps: 15, prior_weight: 30, workout_id: 1)
WorkoutSet.create(reps: 15, prior_weight: 30, workout_id: 1)
WorkoutSet.create(reps: 15, prior_weight: 30, workout_id: 1)

WorkoutSet.create(reps: 15, prior_weight: 40, workout_id: 2)
WorkoutSet.create(reps: 12, prior_weight: 45, workout_id: 2)
WorkoutSet.create(reps: 8, prior_weight: 50, workout_id: 2)
WorkoutSet.create(reps: 8, prior_weight: 45, workout_id: 2)


puts'seeding complete'