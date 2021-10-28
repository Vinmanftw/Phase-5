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
#MyData
Workout.create(name: "Incline Dumbbell Fly",primary_muscle: "Chest", youtube_id: "ajdFwa-qM98",video_start_time:45,day_id: monday.id)
Workout.create(name: "Incline Dumbbell Chestpress",primary_muscle: "Chest",youtube_id: "0G2_XV7slIg",video_start_time:184,day_id: monday.id)
Workout.create(name: "Rotating Dumbbell Chest Press",primary_muscle: "Chest" , youtube_id:"fYrA7ThfxGk",video_start_time:31, day_id: monday.id)
Workout.create(name: "Decline Dumbbell Fly To Press",primary_muscle: "Chest",youtube_id:"IMALXhhHRKM",video_start_time:34,day_id: monday.id)

Workout.create(name: "Dumbbell 2-Way Lunge",primary_muscle: "Legs", youtube_id: "D7KaRcUTQeE",video_start_time:49, day_id: tuesday.id)
Workout.create(name: "Dumbbell Squat",primary_muscle: "Legs",youtube_id: "v_c67Omje48",video_start_time:26, day_id: tuesday.id)
Workout.create(name: "Bulgarian Split Squat",primary_muscle: "Legs",youtube_id:"zlQb-Ya1YD0",video_start_time:17, day_id: tuesday.id)
Workout.create(name: "Straight Leg Deadlift",primary_muscle: "Legs", youtube_id: "1uDiW5--rAE",video_start_time:34, day_id: tuesday.id)
Workout.create(name: "Side To Side Squat",primary_muscle: "Legs",youtube_id: "7uicIW-obz8",video_start_time:35, day_id: tuesday.id)
Workout.create(name: "Single Leg Calf Raise",primary_muscle: "Legs" , youtube_id:"ORT4oJ_R8Qs",video_start_time:80, day_id: tuesday.id)

Workout.create(name: "Dumbbell Pull-Over",primary_muscle: "Back",youtube_id:"FK4rHfWKEac",video_start_time:1,day_id: wednesday.id)
Workout.create(name: "Pull-Ups",primary_muscle: "Back", youtube_id: "Hdc7Mw6BIEE",video_start_time:83,day_id: wednesday.id)
Workout.create(name: "Curl Bar Bent-Over Row",primary_muscle: "Back",youtube_id: "rQdudkp4ek4",video_start_time:16,day_id: wednesday.id)
Workout.create(name: "One Arm Dumbbell Row",primary_muscle: "Back" , youtube_id:"EEFHHOCfHgw",video_start_time:88,day_id: wednesday.id)
Workout.create(name: "Deadlift",primary_muscle: "Back",youtube_id:"r4MzxtBKyNE",video_start_time:38,day_id: wednesday.id)


Workout.create(name: "Dumbbell Spider Curl",primary_muscle: "Arms",youtube_id: "kPKvWfxWb50",video_start_time:23,day_id: thursday.id)
Workout.create(name: "Dumbbell Bicep Curl 21's",primary_muscle: "Arms" , youtube_id:"35GQ5NoH3fs",video_start_time:16,day_id: thursday.id)
Workout.create(name: "Dumbbell Bicep Curl",primary_muscle: "Arms",youtube_id: "DgTlETfEuEU",video_start_time:4,day_id: thursday.id)
Workout.create(name: "DB Over-Head Tricep Extension",primary_muscle: "Arms" , youtube_id:"YbX7Wd8jQ-Q",video_start_time:48,day_id: thursday.id)
Workout.create(name: "Curl Bar Curl",primary_muscle: "Arms",youtube_id: "kwG2ipFRgfo",video_start_time:26,day_id: thursday.id)
Workout.create(name: "Skull Crushers",primary_muscle: "Arms" , youtube_id:"d_KZxkY_0cM",video_start_time:59,day_id: thursday.id)
Workout.create(name: "Dumbbell Hammer Curl",primary_muscle: "Arms",youtube_id: "zC3nLlEvin4",video_start_time:48,day_id: thursday.id)

Workout.create(name: "Dumbbell Lateral Raise",primary_muscle: "Shoulders" , youtube_id:"3VcKaXpzqRo",video_start_time:42,day_id: friday.id)
Workout.create(name: "Dumbbell Arnold Press",primary_muscle: "Shoulders",secondary_muscle_1: "Arms",secondary_muscle_2:"Chest",youtube_id: "X60-yTMOJfw",video_start_time:10,day_id: friday.id)
Workout.create(name: "Curl Bar Upright Row",primary_muscle: "Shoulders",secondary_muscle_1:"Back",youtube_id: "cJRVVxmytaM",video_start_time:55,day_id: friday.id)
Workout.create(name: "Dumbbell One Arm Front Raise",primary_muscle: "Shoulders" , youtube_id:"-t7fuZ0KhDA",video_start_time:27,day_id: friday.id)
Workout.create(name: "Reverse Fly",primary_muscle: "Shoulders",secondary_muscle_1: "Back" ,youtube_id: "9R5f4oIjwq8",video_start_time:15,day_id: friday.id)

Workout.create(name: "Russian Twist",primary_muscle: "Abs/Obliques" , youtube_id:"wkD8rjkodUI",video_start_time:6,day_id: saturday.id)
Workout.create(name: "Bicycles",primary_muscle: "Abs/Obliques" , youtube_id:"1we3bh9uhqY",video_start_time:29,day_id: saturday.id)
# stays
Workout.create(name: "Incline Dumbbell Fly",primary_muscle: "Chest", youtube_id: "ajdFwa-qM98",video_start_time:45)
Workout.create(name: "Incline Dumbbell Chestpress",primary_muscle: "Chest",youtube_id: "0G2_XV7slIg",video_start_time:184)
Workout.create(name: "Rotating Dumbbell Chest Press",primary_muscle: "Chest" , youtube_id:"fYrA7ThfxGk",video_start_time:31)
Workout.create(name: "Decline Dumbbell Fly To Press",primary_muscle: "Chest",youtube_id:"IMALXhhHRKM",video_start_time:34)

Workout.create(name: "Dumbbell 2-Way Lunge",primary_muscle: "Legs", youtube_id: "D7KaRcUTQeE",video_start_time:49)
Workout.create(name: "Dumbbell Squat",primary_muscle: "Legs",youtube_id: "v_c67Omje48",video_start_time:26)
Workout.create(name: "Sumo Squat",primary_muscle: "Legs" , youtube_id:"rt7-XtK7jDA",video_start_time:130)
Workout.create(name: "Bulgarian Split Squat",primary_muscle: "Legs",youtube_id:"zlQb-Ya1YD0",video_start_time:17)
Workout.create(name: "Straight Leg Deadlift",primary_muscle: "Legs", youtube_id: "1uDiW5--rAE",video_start_time:34)
Workout.create(name: "Side To Side Squat",primary_muscle: "Legs",youtube_id: "7uicIW-obz8",video_start_time:35)
Workout.create(name: "Single Leg Calf Raise",primary_muscle: "Legs" , youtube_id:"ORT4oJ_R8Qs",video_start_time:80)

Workout.create(name: "Dumbbell Pull-Over",primary_muscle: "Back",youtube_id:"FK4rHfWKEac",video_start_time:1)
Workout.create(name: "Pull-Ups",primary_muscle: "Back", youtube_id: "Hdc7Mw6BIEE",video_start_time:83)
Workout.create(name: "Curl Bar Bent-Over Row",primary_muscle: "Back",youtube_id: "rQdudkp4ek4",video_start_time:16)
Workout.create(name: "One Arm Dumbbell Row",primary_muscle: "Back" , youtube_id:"EEFHHOCfHgw",video_start_time:88)
Workout.create(name: "Deadlift",primary_muscle: "Back",youtube_id:"r4MzxtBKyNE",video_start_time:38)
Workout.create(name: "Reverse Fly",primary_muscle: "Back",secondary_muscle_1: "Shoulders" ,youtube_id: "9R5f4oIjwq8",video_start_time:15)


Workout.create(name: "Dumbbell Spider Curl",primary_muscle: "Arms",youtube_id: "kPKvWfxWb50",video_start_time:23)
Workout.create(name: "Dumbbell Bicep Curl 21's",primary_muscle: "Arms" , youtube_id:"35GQ5NoH3fs",video_start_time:16)
Workout.create(name: "Dumbbell Bicep Curl",primary_muscle: "Arms",youtube_id: "DgTlETfEuEU",video_start_time:4)
Workout.create(name: "DB Over-Head Tricep Extension",primary_muscle: "Arms" , youtube_id:"YbX7Wd8jQ-Q",video_start_time:48)
Workout.create(name: "Curl Bar Curl",primary_muscle: "Arms",youtube_id: "kwG2ipFRgfo",video_start_time:26)
Workout.create(name: "Skull Crushers",primary_muscle: "Arms" , youtube_id:"d_KZxkY_0cM",video_start_time:59)
Workout.create(name: "Dumbbell Hammer Curl",primary_muscle: "Arms",youtube_id: "zC3nLlEvin4",video_start_time:48)

Workout.create(name: "Dumbbell Lateral Raise",primary_muscle: "Shoulders" , youtube_id:"3VcKaXpzqRo",video_start_time:42)
Workout.create(name: "Dumbbell Arnold Press",primary_muscle: "Shoulders",secondary_muscle_1: "Arms",secondary_muscle_2:"Chest",youtube_id: "X60-yTMOJfw",video_start_time:10)
Workout.create(name: "Dumbbell One Arm Front Raise",primary_muscle: "Shoulders" , youtube_id:"-t7fuZ0KhDA",video_start_time:27)
Workout.create(name: "Curl Bar Curl",primary_muscle: "Shoulders",secondary_muscle_1:"Back",youtube_id: "cJRVVxmytaM",video_start_time:55)

Workout.create(name: "Russian Twist",primary_muscle: "Abs/Obliques" , youtube_id:"wkD8rjkodUI",video_start_time:6)
Workout.create(name: "Bicycles",primary_muscle: "Abs/Obliques" , youtube_id:"1we3bh9uhqY",video_start_time:29)

puts 'seeding sets'
WorkoutSet.create(reps: 15, prior_weight:15, now_weight:0, workout_id:5)
WorkoutSet.create(reps: 12, prior_weight:20, now_weight:0, workout_id:5)
WorkoutSet.create(reps: 8, prior_weight:25, now_weight:0, workout_id:5)

WorkoutSet.create(reps: 15, prior_weight:40, now_weight:0, workout_id:6)
WorkoutSet.create(reps: 12, prior_weight:45, now_weight:0, workout_id:6)
WorkoutSet.create(reps: 8, prior_weight:50, now_weight:0, workout_id:6)
WorkoutSet.create(reps: 8, prior_weight:50, now_weight:0, workout_id:6)
WorkoutSet.create(reps: 12, prior_weight:45, now_weight:0, workout_id:6)
WorkoutSet.create(reps: 15, prior_weight:40, now_weight:0, workout_id:6)

WorkoutSet.create(reps: 5, prior_weight:50, now_weight:0, workout_id:7)
WorkoutSet.create(reps: 5, prior_weight:50, now_weight:0, workout_id:7)
WorkoutSet.create(reps: 5, prior_weight:50, now_weight:0, workout_id:7)
WorkoutSet.create(reps: 5, prior_weight:50, now_weight:0, workout_id:7)
WorkoutSet.create(reps: 5, prior_weight:50, now_weight:0, workout_id:7)


WorkoutSet.create(reps: 15, prior_weight:10, now_weight:0, workout_id:8)
WorkoutSet.create(reps: 12, prior_weight:12, now_weight:0, workout_id:8)
WorkoutSet.create(reps: 8, prior_weight:15, now_weight:0, workout_id:8)
WorkoutSet.create(reps: 8, prior_weight:15, now_weight:0, workout_id:8)
WorkoutSet.create(reps: 12, prior_weight:12, now_weight:0, workout_id:8)
WorkoutSet.create(reps: 15, prior_weight:10, now_weight:0, workout_id:8)

WorkoutSet.create(reps: 15, prior_weight:15, now_weight:0, workout_id:9)
WorkoutSet.create(reps: 12, prior_weight:20, now_weight:0, workout_id:9)
WorkoutSet.create(reps: 8, prior_weight:25, now_weight:0, workout_id:9)
WorkoutSet.create(reps: 8, prior_weight:20, now_weight:0, workout_id:9)


WorkoutSet.create(reps: 10, prior_weight:15, now_weight:0, workout_id:10)
WorkoutSet.create(reps: 10, prior_weight:20, now_weight:0, workout_id:10)
WorkoutSet.create(reps: 10, prior_weight:25, now_weight:0, workout_id:10)

WorkoutSet.create(reps: 50, prior_weight:25, now_weight:0, workout_id:11)
WorkoutSet.create(reps: 50, prior_weight:25, now_weight:0, workout_id:11)


WorkoutSet.create(reps: 15, prior_weight:50, now_weight:0, workout_id:12)
WorkoutSet.create(reps: 12, prior_weight:55, now_weight:0, workout_id:12)
WorkoutSet.create(reps: 8, prior_weight:60, now_weight:0, workout_id:12)
WorkoutSet.create(reps: 8, prior_weight:60, now_weight:0, workout_id:12)


WorkoutSet.create(reps: 10, prior_weight:160, now_weight:0, workout_id:13)
WorkoutSet.create(reps: 10, prior_weight:160, now_weight:0, workout_id:13)
WorkoutSet.create(reps: 10, prior_weight:160, now_weight:0, workout_id:13)


WorkoutSet.create(reps: 15, prior_weight:40, now_weight:0, workout_id:14)
WorkoutSet.create(reps: 12, prior_weight:45, now_weight:0, workout_id:14)
WorkoutSet.create(reps: 8, prior_weight:50, now_weight:0, workout_id:14)
WorkoutSet.create(reps: 8, prior_weight:50, now_weight:0, workout_id:14)
WorkoutSet.create(reps: 12, prior_weight:45, now_weight:0, workout_id:14)
WorkoutSet.create(reps: 15, prior_weight:40, now_weight:0, workout_id:14)

WorkoutSet.create(reps: 5, prior_weight:45, now_weight:0, workout_id:15)
WorkoutSet.create(reps: 5, prior_weight:45, now_weight:0, workout_id:15)
WorkoutSet.create(reps: 5, prior_weight:45, now_weight:0, workout_id:15)
WorkoutSet.create(reps: 5, prior_weight:45, now_weight:0, workout_id:15)
WorkoutSet.create(reps: 5, prior_weight:45, now_weight:0, workout_id:15)

WorkoutSet.create(reps: 15, prior_weight:40, now_weight:0, workout_id:16)
WorkoutSet.create(reps: 12, prior_weight:45, now_weight:0, workout_id:16)
WorkoutSet.create(reps: 8, prior_weight:50, now_weight:0, workout_id:16)
WorkoutSet.create(reps: 8, prior_weight:45, now_weight:0, workout_id:16)


WorkoutSet.create(reps: 15, prior_weight:15, now_weight:0, workout_id:17)
WorkoutSet.create(reps: 12, prior_weight:20, now_weight:0, workout_id:17)
WorkoutSet.create(reps: 8, prior_weight:25, now_weight:0, workout_id:17)
WorkoutSet.create(reps: 8, prior_weight:25, now_weight:0, workout_id:17)
WorkoutSet.create(reps: 12, prior_weight:20, now_weight:0, workout_id:17)
WorkoutSet.create(reps: 15, prior_weight:15, now_weight:0, workout_id:17)

WorkoutSet.create(reps: 7, prior_weight:20, now_weight:0, workout_id:18)
WorkoutSet.create(reps: 7, prior_weight:20, now_weight:0, workout_id:18)
WorkoutSet.create(reps: 7, prior_weight:20, now_weight:0, workout_id:18)
WorkoutSet.create(reps: 21, prior_weight:20, now_weight:0, workout_id:18)


WorkoutSet.create(reps: 15, prior_weight:15, now_weight:0, workout_id:19)
WorkoutSet.create(reps: 12, prior_weight:20, now_weight:0, workout_id:19)
WorkoutSet.create(reps: 8, prior_weight:25, now_weight:0, workout_id:19)
WorkoutSet.create(reps: 8, prior_weight:25, now_weight:0, workout_id:19)
WorkoutSet.create(reps: 12, prior_weight:20, now_weight:0, workout_id:19)
WorkoutSet.create(reps: 15, prior_weight:15, now_weight:0, workout_id:19)

WorkoutSet.create(reps: 15, prior_weight:50, now_weight:0, workout_id:20)
WorkoutSet.create(reps: 12, prior_weight:55, now_weight:0, workout_id:20)
WorkoutSet.create(reps: 8, prior_weight:60, now_weight:0, workout_id:20)
WorkoutSet.create(reps: 8, prior_weight:60, now_weight:0, workout_id:20)


WorkoutSet.create(reps: 5, prior_weight:75, now_weight:0, workout_id:21)
WorkoutSet.create(reps: 5, prior_weight:75, now_weight:0, workout_id:21)
WorkoutSet.create(reps: 5, prior_weight:75, now_weight:0, workout_id:21)
WorkoutSet.create(reps: 5, prior_weight:75, now_weight:0, workout_id:21)
WorkoutSet.create(reps: 5, prior_weight:75, now_weight:0, workout_id:21)


WorkoutSet.create(reps: 15, prior_weight:15, now_weight:0, workout_id:22)
WorkoutSet.create(reps: 12, prior_weight:20, now_weight:0, workout_id:22)
WorkoutSet.create(reps: 8, prior_weight:25, now_weight:0, workout_id:22)
WorkoutSet.create(reps: 8, prior_weight:25, now_weight:0, workout_id:22)
WorkoutSet.create(reps: 12, prior_weight:20, now_weight:0, workout_id:22)
WorkoutSet.create(reps: 15, prior_weight:15, now_weight:0, workout_id:22)

WorkoutSet.create(reps: 15, prior_weight:12, now_weight:0, workout_id:23)
WorkoutSet.create(reps: 12, prior_weight:15, now_weight:0, workout_id:23)
WorkoutSet.create(reps: 8, prior_weight:20, now_weight:0, workout_id:23)
WorkoutSet.create(reps: 8, prior_weight:20, now_weight:0, workout_id:23)
WorkoutSet.create(reps: 12, prior_weight:15, now_weight:0, workout_id:23)
WorkoutSet.create(reps: 15, prior_weight:12, now_weight:0, workout_id:23)

WorkoutSet.create(reps: 15, prior_weight:15, now_weight:0, workout_id:24)
WorkoutSet.create(reps: 12, prior_weight:20, now_weight:0, workout_id:24)
WorkoutSet.create(reps: 8, prior_weight:25, now_weight:0, workout_id:24)
WorkoutSet.create(reps: 8, prior_weight:25, now_weight:0, workout_id:24)


WorkoutSet.create(reps: 15, prior_weight:15, now_weight:0, workout_id:25)
WorkoutSet.create(reps: 12, prior_weight:20, now_weight:0, workout_id:25)
WorkoutSet.create(reps: 8, prior_weight:25, now_weight:0, workout_id:25)



WorkoutSet.create(reps: 15, prior_weight:15, now_weight:0, workout_id:26)
WorkoutSet.create(reps: 12, prior_weight:20, now_weight:0, workout_id:26)
WorkoutSet.create(reps: 8, prior_weight:25, now_weight:0, workout_id:26)
WorkoutSet.create(reps: 8, prior_weight:25, now_weight:0, workout_id:26)

WorkoutSet.create(reps: 15, prior_weight:15, now_weight:0, workout_id:27)
WorkoutSet.create(reps: 12, prior_weight:20, now_weight:0, workout_id:27)
WorkoutSet.create(reps: 8, prior_weight:25, now_weight:0, workout_id:27)
WorkoutSet.create(reps: 8, prior_weight:25, now_weight:0, workout_id:27)
WorkoutSet.create(reps: 12, prior_weight:20, now_weight:0, workout_id:27)
WorkoutSet.create(reps: 15, prior_weight:15, now_weight:0, workout_id:27)


WorkoutSet.create(reps: 15, prior_weight:12, now_weight:0, workout_id:28)
WorkoutSet.create(reps: 12, prior_weight:15, now_weight:0, workout_id:28)
WorkoutSet.create(reps: 8, prior_weight:20, now_weight:0, workout_id:28)
WorkoutSet.create(reps: 8, prior_weight:20, now_weight:0, workout_id:28)
WorkoutSet.create(reps: 12, prior_weight:15, now_weight:0, workout_id:28)
WorkoutSet.create(reps: 15, prior_weight:12, now_weight:0, workout_id:28)

WorkoutSet.create(reps: 30, prior_weight:45, now_weight:0, workout_id:29)
WorkoutSet.create(reps: 30, prior_weight:45, now_weight:0, workout_id:29)
WorkoutSet.create(reps: 30, prior_weight:45, now_weight:0, workout_id:29)
WorkoutSet.create(reps: 30, prior_weight:45, now_weight:0, workout_id:29)
WorkoutSet.create(reps: 30, prior_weight:45, now_weight:0, workout_id:29)
WorkoutSet.create(reps: 30, prior_weight:45, now_weight:0, workout_id:29)

WorkoutSet.create(reps: 60, prior_weight:60, now_weight:0, workout_id:30)
WorkoutSet.create(reps: 60, prior_weight:60, now_weight:0, workout_id:30)
WorkoutSet.create(reps: 60, prior_weight:60, now_weight:0, workout_id:30)
WorkoutSet.create(reps: 60, prior_weight:60, now_weight:0, workout_id:30)
WorkoutSet.create(reps: 60, prior_weight:60, now_weight:0, workout_id:30)
WorkoutSet.create(reps: 60, prior_weight:60, now_weight:0, workout_id:30)

WorkoutSet.create(reps: 0, prior_weight:0, now_weight:0, workout_id:31)
WorkoutSet.create(reps: 0, prior_weight:0, now_weight:0, workout_id:32)
WorkoutSet.create(reps: 0, prior_weight:0, now_weight:0, workout_id:33)
WorkoutSet.create(reps: 0, prior_weight:0, now_weight:0, workout_id:34)


WorkoutSet.create(reps: 15, prior_weight: 20,now_weight:0, workout_id: 1)
WorkoutSet.create(reps: 12, prior_weight: 25,now_weight:0, workout_id: 1)
WorkoutSet.create(reps: 8, prior_weight: 30,now_weight:0, workout_id: 1)

WorkoutSet.create(reps: 15, prior_weight: 40,now_weight:0, workout_id: 2)
WorkoutSet.create(reps: 12, prior_weight: 45,now_weight:0, workout_id: 2)
WorkoutSet.create(reps: 8, prior_weight: 50,now_weight:0, workout_id: 2)
WorkoutSet.create(reps: 8, prior_weight: 45,now_weight:0, workout_id: 2)

WorkoutSet.create(reps: 5, prior_weight: 45,now_weight:0, workout_id: 3)
WorkoutSet.create(reps: 5, prior_weight: 45,now_weight:0, workout_id: 3)
WorkoutSet.create(reps: 5, prior_weight: 45,now_weight:0, workout_id: 3)
WorkoutSet.create(reps: 5, prior_weight: 45,now_weight:0, workout_id: 3)
WorkoutSet.create(reps: 5, prior_weight: 45,now_weight:0, workout_id: 3)
WorkoutSet.create(reps: 5, prior_weight: 45,now_weight:0, workout_id: 3)



WorkoutSet.create(reps: 15, prior_weight: 20,now_weight:0, workout_id: 4)
WorkoutSet.create(reps: 12, prior_weight: 25,now_weight:0, workout_id: 4)
WorkoutSet.create(reps: 8, prior_weight: 30,now_weight:0, workout_id: 4)

puts'seeding complete'