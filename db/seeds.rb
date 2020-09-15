# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

services = Service.create([
  {
    "name": "Weeding",
    "hemisphere": "All",
    "season": "Year Round",
    "fee":"Negotiable",
    "imgURL": "https://i.ibb.co/0D0fYMc/weeding.jpg"
  },
  {
    "name":"Digging-Flowers",
    "hemisphere": "All",
    "season": "Year Round",
    "fee":"Negotiable",
    "imgURL": "https://i.ibb.co/59zZ53C/Digging-Flowers.jpg" 
  },
  {
    "name":"Harvest Fruit",
    "hemisphere": "All",
    "season": "Year Round",
    "fee":"Negotiable",
    "imgURL": "https://i.ibb.co/BnvyGfP/Harvesting-Fruits.jpg" 
  },
  {
    "name":"Watering-Flowers",
    "hemisphere": "All",
    "season": "Year Round",
    "fee":"Negotiable",
    "imgURL":"https://i.ibb.co/rkXJXZc/Watering-Flowers.jpg"
  },
  {
    "name":"Non-seasonal Material Gathering",
    "hemisphere": "All",
    "season": "Year Round",
    "fee":"Negotiable",
    "imgURL":"https://i.ibb.co/SJBSn58/materialgathering.jpg"
  },
  {
    "name":"Diving",
    "hemisphere":"Northern",
    "season": "Year Round",
    "fee":"Negotiable",
    "imgURL": "https://i.ibb.co/9v0jrzX/Diving-Northern.jpg" 
  },
  {
    "name":"Diving",
    "hemisphere": "Southern",
    "season": "Year Round",
    "fee":"Negotiable",
    "imgURL": "https://i.ibb.co/mSY0wy7/Diving-Southern.jpg"
  },
  {
    "name":"Fishing",
    "hemisphere": "Southern",
    "season": "Year Round",
    "fee":"Negotiable",
    "imgURL":"https://i.ibb.co/VD421Mc/fishing-Southern.jpg"
  },
  {
    "name":"Fishing",
    "hemisphere": "Northern",
    "season": "Year Round",
    "fee":"Negotiable",
    "imgURL": "https://i.ibb.co/YjD6b2X/Fishing.jpg" 
  },
  {
  "name":"Bug-Catching",
  "hemisphere":"Northern",
  "season": "Year Round",
  "fee":"Negotiable",
  "imgURL": "https://i.ibb.co/bPRhxw4/bug-Catching-Northern.jpg" 
},
  {
    "name":"Bug-Catching",
    "hemisphere":"Southern",
    "season": "Year Round",
    "fee":"Negotiable",
    "imgURL": "https://i.ibb.co/60smxtG/Bug-Catching-Southern.jpg" 
},
{
  "name":"Time-Traveling-Spring Materials (Cherry Blossoms/Bunny Day)",
  "hemisphere": "Both",
  "fee":"Negotiable",
  "imgURL":"https://i.ibb.co/5F6ZXQT/cherryblossom.png"
},
{
  "name":"Time-Traveling - Summer Materials (Summer Shells)",
  "hemisphere": "Both",
  "fee":"Negotiable",
  "imgURL":"https://acnhcdn.com/latest/MenuIcon/ShellSummer.png"
},
{
  "name":"Time Traveling- Fall Materials (Acorns, Mushrooms, Maples)",
  "hemisphere": "Both",
  "fee":"Negotiable",
  "imgURL":"https://acnhcdn.com/latest/MenuIcon/Mush3.png"
},
{
  "name": "Time-Traveling - Winter-Materials",
  "hemisphere": "Both",
  "fee":"Negotiable",
  "imgURL":"https://acnhcdn.com/latest/MenuIcon/ChristmasOrnamentB.png"
},
{"name":"Crafting",
  "hemisphere": "All",
  "season": "Year Round",
  "fee":"Provide DIY Materials",
"imgURL":"https://i.ibb.co/q7Kp7pY/DIYmake.jpg" 
}
])



puts "Services added!"

