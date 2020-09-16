# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# admin = User.create(username:'admin', email:'admin@email.com', password:'123456', discord:'#1234NoDiscord')

# adminTown = TownInfo.create(InGameName:'admin',
# TownName:'testtown',
# Hemisphere:'Northern',NativeFruit:'Peach',
# user:admin)

# adminListing = Listing.create(name:'Admins totes awesome shop',
# link:'no link here'
# )
# puts 'We got some test data'

gigs = CreateGig.create([
  {
    name: "Weeding",
    hemisphere: "All",
    season: "Year Round",
    fee:"Negotiable",
    imgURL: "https://i.ibb.co/0D0fYMc/weeding.jpg"
  },
  {
    name:"Digging-Flowers",
    hemisphere: "All",
    season: "Year Round",
    fee:"Negotiable",
    imgURL: "https://i.ibb.co/59zZ53C/Digging-Flowers.jpg" 
  },
  {
    name:"Harvest Fruit",
    hemisphere: "All",
    season: "Year Round",
    fee:"Negotiable",
    imgURL: "https://i.ibb.co/BnvyGfP/Harvesting-Fruits.jpg" 
  },
  {
    name:"Watering-Flowers",
    hemisphere: "All",
    season: "Year Round",
    fee:"Negotiable",
    imgURL:"https://i.ibb.co/rkXJXZc/Watering-Flowers.jpg"
  },
  {
    name:"Non-seasonal Material Gathering",
    hemisphere: "All",
    season: "Year Round",
    fee:"Negotiable",
    imgURL:"https://i.ibb.co/SJBSn58/materialgathering.jpg"
  },
  {
    name:"Diving",
    hemisphere:"Northern",
    season: "Year Round",
    fee:"Negotiable",
    imgURL: "https://i.ibb.co/9v0jrzX/Diving-Northern.jpg" 
  },
  {
    name:"Diving",
    hemisphere: "Southern",
    season: "Year Round",
    fee:"Negotiable",
    imgURL: "https://i.ibb.co/mSY0wy7/Diving-Southern.jpg"
  },
  {
    name:"Fishing",
    hemisphere: "Southern",
    season: "Year Round",
    fee:"Negotiable",
    imgURL:"https://i.ibb.co/VD421Mc/fishing-Southern.jpg"
  },
  {
    name:"Fishing",
    hemisphere: "Northern",
    season: "Year Round",
    fee:"Negotiable",
    imgURL: "https://i.ibb.co/YjD6b2X/Fishing.jpg" 
  },
  {
  name:"Bug-Catching",
  hemisphere:"Northern",
  season: "Year Round",
  fee:"Negotiable",
  imgURL: "https://i.ibb.co/bPRhxw4/bug-Catching-Northern.jpg" 
},
  {
    name:"Bug-Catching",
    hemisphere:"Southern",
    season: "Year Round",
    fee:"Negotiable",
    imgURL: "https://i.ibb.co/60smxtG/Bug-Catching-Southern.jpg" 
},
{
  name:"Time-Traveling-Spring Materials (Cherry Blossoms/Bunny Day)",
  hemisphere: "Both",
  fee:"Negotiable",
  imgURL:"https://i.ibb.co/5F6ZXQT/cherryblossom.png"
},
{
  name:"Time-Traveling - Summer Materials (Summer Shells)",
  hemisphere: "Both",
  fee:"Negotiable",
  imgURL:"https://acnhcdn.com/latest/MenuIcon/ShellSummer.png"
},
{
  name:"Time Traveling- Fall Materials (Acorns, Mushrooms, Maples)",
  hemisphere: "Both",
  fee:"Negotiable",
  imgURL:"https://acnhcdn.com/latest/MenuIcon/Mush3.png"
},
{
  name: "Time-Traveling - Winter-Materials",
  hemisphere: "Both",
  fee:"Negotiable",
  imgURL:"https://acnhcdn.com/latest/MenuIcon/ChristmasOrnamentB.png"
},
{name:"Crafting",
  hemisphere: "All",
  season: "Year Round",
  fee:"Provide DIY Materials",
imgURL:"https://i.ibb.co/q7Kp7pY/DIYmake.jpg" 
}
])

materials = Material.create!([{
  name: "Aquarius fragment",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/StarpieceAquarius.png",
  notes: "Only available during the Aquarius Zodiac, January 20 - February 18",
  season: "Winter/Summer(Southern)"
},
{
  name: "Aries fragment",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/StarpieceAries.png",
  notes: "Only available during the Aries Zodiac, March 21 - April 19",
  season: "Spring/Fall(Southern)"
},
{
  name:"Acorn",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/DIYAcorn.png",
  notes:"Shaking, Only Available during fall",
  season:"Fall"
},
{
  name: "bamboo piece",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/DIYBamboo.png",
  season: "Year Round"
},
{
  name: "bamboo shoot",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/BanbooShoot.png",
  season: "Year Round"
},
{
  name: "blue ornament",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/ChristmasOrnamentB.png",
  notes: "Shaking decorated trees; Only available during the Festive season",
  season:"Winter/Summer(Southern) - Festive"
},
{
  name: "Cancer fragment",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/StarpieceCancer.png",
  notes: "Only available during the Cancer Zodiac, June 22 - July 22",
  season: "Summer/Winter(Southern)"
},
{
  name: "Capricorn fragment",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/StarpieceCapricornus.png",
  notes: "Only available during the Capricorn Zodiac, December 22 - January 19",
  season:"Winter/Summer(Southern)"
},
{
  name: "cherry-blossom petal",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/Sakurapetal.png",
  notes: "Only available during the Cherry-Blossom season",
  season: "Spring/Fall(Southern)"
},
{
  name: "clay",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/OreClay.png",
  season:"Year Round"
},
{
  name: "earth egg",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/EggGround.png",
  notes: "Only available during Bunny Day",
  season:"Spring/Fall(Southern) Bunny-Day"
},
{
  name: "elegant mushroom",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/Mush0.png",
  notes: "Only available during Mushroom season",
  season:"Fall/Spring(Sothern) - Mushroom season "
},
{
  name: "flat mushroom",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/Mush3.png",
  notes: "Only available during Mushroom season",
  season:"Fall/Spring(Sothern) - Mushroom season "
},
{
  name: "Gemini fragment",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/StarpieceGemini.png",
  notes: "Only available during the Gemini Zodiac, May 21 - June 21",
  season: "Spring/Fall(Southern)"
},
{
  name: "gold nugget",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/Gold_Ore.png",
  season:"Year Round"
},
{
  name: "gold ornament",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/ChristmasOrnamentC.png",
  notes: "Shaking decorated trees; Only available during the Festive season",
  season:"Winter/Summer(Southern) - Festive"
},
{
  name: "iron nugget",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/OreIron.png",
  season:"Year Round"
},
{
  name: "large star fragment",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/StarPieceRare.png",
  notes: "Wish on shooting star",
  season:"Year Round"
},
{
  name: "leaf egg",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/EggLeaf.png",
  notes: "Shaking decorated trees; Only available during Bunny Day",
  season:"Spring/Fall(Southern) Bunny-Day"
},
{
  name: "Leo fragment",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/StarpieceLeo.png",
  notes: "Only available during the Leo Zodiac, July 23 - August 22",
  season: "Summer/Winter(Southern)"
},
{
  name: "Libra fragment",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/StarpieceLibra.png",
  notes: "Only available during the Libra Zodiac, September 23 - October 23",
  season:"Fall/Spring"
},
{
  name: "Nook Miles Ticket",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/PlaneTicket.png",
  notes: "Found under the Special tab of the Nook Miles Redemption service.",
  season:"Year Round"

},{
  name: "Pisces fragment",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/StarpiecePisces.png",
  notes: "Only available during the Pisces Zodiac, February 19 - March 20",
  season:"Winter/Summer(Southern)"
},
{

  name: "maple leaf",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/AutumnLeaf.png",
  notes: "Only available during Maple Leaf season",
  season:"Fall/Spring(Southern)"
},
{

  name: "pine cone",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/DIYPinecone.png",
  notes: "Shaking; Only available during Fall",
  season:"Fall - Both Hemispheres"
},
{

  name: "pearl",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/Pearl.png",
  season: "Year Round"
},
{
  name: "rare mushroom",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/Mush4.png",
  notes: "Near cedar and hardwood trees; Only available during Mushroom season",
  season: "Fall/Spring(Sothern) - Mushroom"
},
{

  name: "round mushroom",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/Mush1.png",
  notes: "Only available during Mushroom season",
  season: "Fall/Spring(Sothern) - Mushroom season "
},
{

  name: "rusted part",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/JohnnyQuestDust1.png",
  season:"Year Round"
},
{
  name: "Sagittarius fragment",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/StarpieceSagittarius.png",
  notes: "Only available during the Sagittarius Zodiac, November 23 - December 21",
  season: "Fall/Spring(Southern)"
},
{
  name: "Scorpius fragment",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/StarpieceScorpio.png",
  notes: "Only available during the Scorpius Zodiac, October 24 - November 22",
  season:"Fall/Spring(Southern)"
},
{
  name: "Taurus fragment",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/StarpieceTaurus.png",
  notes: "Only available during the Taurus Zodiac, April 20 - May 20",
  season: "Spring/Fall(Southern)"
},
{
  name: "skinny mushroom",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/Mush2.png",
  notes: "Only available during Mushroom season",
  season:"Fall/Spring(Sothern) - Mushroom season"
},
{
  name: "sky egg",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/EggSky.png",
  notes: "Only available during Bunny Day",
  season: "Spring/Fall(Southern) Bunny-Day"

},
{
  name: "snowflake",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/SnowCrystal.png",
  notes: "Only available during Winter",
  season: "Winter/Summer(Southern)"
},
{

  name: "softwood",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/DIYWoodSoft.png",
  season: "Year Round"

},
{
  name: "large star fragment",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/StarPieceRare.png",
  season:"Year Round"
},
{
  name: "stone",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/OreStone.png",
  season:"Year Round"
},
{
  name: "stone egg",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/EggRock.png",
  notes: "Only available during Bunny Day",
  season: "Spring/Fall(Southern) Bunny-Day"
},
{
  name: "summer shell",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/ShellSummer.png",
  season: "Summer - Both Hemispheres"
},
{
  name: "water egg",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/EggFish.png",
  notes: "Only available during Bunny Day",
  season: "Spring/Fall(Southern) Bunny-Day"
},
{
  name: "Virgo fragment",
  imgURL: "https://acnhcdn.com/latest/MenuIcon/StarpieceVirgo.png",
  notes: "Only available during the Virgo Zodiac, August 23 - September 22",
  season:"Summer/Winter(Southern)"
}])



puts "We got #{Material.count} materialz, yo"
# puts "We got #{Service.count} Services added!"

