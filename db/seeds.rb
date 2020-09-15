# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

services = Service.create([
  {
    "ServiceName": "Weeding",
    "Hemisphere": "All",
    "Season": "Year Round",
    "Fee":"Negotiable",
    "imgURL": "https://i.ibb.co/0D0fYMc/weeding.jpg"
  },
  {
    "ServiceName":"Digging-Flowers",
    "Hemisphere": "All",
    "Season": "Year Round",
    "Fee":"Negotiable",
    "imgURL": "https://i.ibb.co/59zZ53C/Digging-Flowers.jpg" 
  },
  {
    "ServiceName":"Harvest Fruit",
    "Hemisphere": "All",
    "Season": "Year Round",
    "Fee":"Negotiable",
    "imgURL": "https://i.ibb.co/BnvyGfP/Harvesting-Fruits.jpg" 
  },
  {
    "ServiceName":"Watering-Flowers",
    "Hemisphere": "All",
    "Season": "Year Round",
    "Fee":"Negotiable",
    "imgURL":"https://i.ibb.co/rkXJXZc/Watering-Flowers.jpg"
  },
  {
    "ServiceName":"Non-Seasonal Material Gathering",
    "Hemisphere": "All",
    "Season": "Year Round",
    "Fee":"Negotiable",
    "imgURL":"https://i.ibb.co/SJBSn58/materialgathering.jpg"
  },
  {
    "ServiceName":"Diving",
    "Hemisphere":"Northern",
    "Season": "Year Round",
    "Fee":"Negotiable",
    "imgURL": "https://i.ibb.co/9v0jrzX/Diving-Northern.jpg" 
  },
  {
    "ServiceName":"Diving",
    "Hemisphere": "Southern",
    "Season": "Year Round",
    "Fee":"Negotiable",
    "imgURL": "https://i.ibb.co/mSY0wy7/Diving-Southern.jpg"
  },
  {
    "ServiceName":"Fishing",
    "Hemisphere": "Southern",
    "Season": "Year Round",
    "Fee":"Negotiable",
    "imgURL":"https://i.ibb.co/VD421Mc/fishing-Southern.jpg"
  },
  {
    "ServiceName":"Fishing",
    "Hemisphere": "Northern",
    "Season": "Year Round",
    "Fee":"Negotiable",
    "imgURL": "https://i.ibb.co/YjD6b2X/Fishing.jpg" 
  },
  {
  "ServiceName":"Bug-Catching",
  "Hemisphere":"Northern",
  "Season": "Year Round",
  "Fee":"Negotiable",
  "imgURL": "https://i.ibb.co/bPRhxw4/bug-Catching-Northern.jpg" 
},
  {
    "ServiceName":"Bug-Catching",
    "Hemisphere":"Southern",
    "Season": "Year Round",
    "Fee":"Negotiable",
    "imgURL": "https://i.ibb.co/60smxtG/Bug-Catching-Southern.jpg" 
},
{
  "ServiceName":"Time-Traveling-Spring Materials (Cherry Blossoms/Bunny Day)",
  "Hemisphere": "Both",
  "Fee":"Negotiable",
  "imgURL":"https://i.ibb.co/5F6ZXQT/cherryblossom.png"
},
{
  "ServiceName":"Time-Traveling - Summer Materials (Summer Shells)",
  "Hemisphere": "Both",
  "Fee":"Negotiable",
  "imgURL":"https://acnhcdn.com/latest/MenuIcon/ShellSummer.png"
},
{
  "ServiceName":"Time Traveling- Fall Materials (Acorns, Mushrooms, Maples)",
  "Hemisphere": "Both",
  "Fee":"Negotiable",
  "imgURL":"https://acnhcdn.com/latest/MenuIcon/Mush3.png"
},
{
  "ServiceName": "Time-Traveling - Winter-Materials",
  "Hemisphere": "Both",
  "Fee":"Negotiable",
  "imgURL":"https://acnhcdn.com/latest/MenuIcon/ChristmasOrnamentB.png"
},
{"ServiceName":"Crafting",
  "Hemisphere": "All",
  "Season": "Year Round",
  "Fee":"Provide DIY Materials",
"imgURL":"https://i.ibb.co/q7Kp7pY/DIYmake.jpg" 
}
])



puts "Services added!"

