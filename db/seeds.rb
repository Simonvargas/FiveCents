# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
businesses = Business.create([
    {
    name: 'Dream Bean Coffee Shop',
    image_url: 'https://c1.wallpaperflare.com/preview/166/493/163/drink-glass-cold-ice.jpg',
    },
    {
        name: "Cup o' Joe",
        image_url: 'https://www.papercitymag.com/wp-content/uploads/2017/10/OFFICIAL_HOUNDSTOOTH_JETTISON_1-scaled.jpg'
    },
    {
        name:  'Wake Up Cafe',
        image_url: 'https://theatlanticcurrent.com/wp-content/uploads/2020/06/IMG_5247.jpg'
    },
    {
        name: 'The Split Bean',
        image_url: 'https://media.cntraveler.com/photos/5b5899f57b500165e8ae4204/5:4/w_2915,h_2332,c_limit/Dancing-Goats-Coffee-Bar_2018_dancinggoats_PCM_0003.jpg'
    },
    {
        name: 'The Steam Room',
        image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1572620782%2Fbest-coffee-shops-sey-coffee-FT-BLOG1119.jpg%3Fitok%3DqRJ1WEq6'
    }
])

reviews = Review.create([
    {
    title: 'Amazing Coffee',
    description: "They have the best Coffee!!",
    score: 5,
    business: businesses.first
    },
    {
        title: 'bad Coffee',
    description: "They have the worst Coffee!!",
    score: 1,
    business: businesses.first
    }
])