# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Picture.destroy_all
Host.destroy_all
Wedding.destroy_all
Guest.destroy_all
Event.destroy_all

xabi_james_wedding = Wedding.create(about_us: "Two people from two different countries, one true story.", date_location: "on August 8th 2020, San Sebastian, Spain", hosts_names: "Xabier & James", hosts_address: "58 Corio House. 12 The Grange. SE1 3GU, London")

james = Host.create(wedding_id: xabi_james_wedding.id, host_name: "JAMES DOBIAS", host_img_url: "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/61314743_10217718113920248_7564582309098160128_n.jpg?_nc_cat=100&_nc_ht=scontent-lht6-1.xx&oh=45a6e21cf67bc4a84e79a10b9b58932b&oe=5D5D8531", host_details: "Born and raised in the Basque Country region, in Spain. He studied piano and singing in a number of conservatories of Spain. Stressing James is one of his specialities...", host_hobbies: "Repeat thousands of times the same two chords on the piano for hours. Translate the most rude Spanish expressions to English. Discover new yummy and healthy recipies. Yoga and stretching in general. Adrenaline activities. Naked Spas", host_phone_number: "07539175029", host_email: "xabier.casan@gmail.com")
xabi = Host.create(wedding_id: xabi_james_wedding.id, host_name: "XABIER CASAN", host_img_url: "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/61361808_10217718109320133_801842193407934464_n.jpg?_nc_cat=105&_nc_ht=scontent-lht6-1.xx&oh=cd73e94eca4adb0b4f26c181f1bd0ba0&oe=5D630599", host_details: "Born and raised in London, in the U.K. He studied PPE at Oxford and then became a lawyer, although he also worked in start-ups. Getting stressed is one of his passions...", host_hobbies: "Sing with the ability of changing key randomly in the middle of a sentence. Invent absurd sentences while learning Spanish. Make his traditional jewish recipies. Sports, especially swimming. Relaxing activities. Spas", host_phone_number: "07969531986", host_email: "james.dobias88@gmail.com")

nikos = Guest.create(wedding_id: xabi_james_wedding.id, guest_full_name: "Nikos Karagiannis", guest_attending: "yes", guest_message: "Looking foward to it!", guest_email: "Nikos.Karagiannis@gmail.com")

j_pic1 = Picture.create(host_id: james.id, img_url: "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/61549489_10217718115200280_3849447984743841792_n.jpg?_nc_cat=105&_nc_ht=scontent-lht6-1.xx&oh=7cac8afc088c666345d1eb25892092c6&oe=5D9F3E3A",img_title: "Donosti", img_likes: 14, img_description: "This is definetly one of our favourite kissing photos.")
j_pic2 = Picture.create(host_id: james.id, img_url: "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/61257209_10217718118240356_8472779179929108480_n.jpg?_nc_cat=103&_nc_ht=scontent-lht6-1.xx&oh=a8c9149c84933be0c45d801c47f5f997&oe=5D5B72D9",img_title: "Manhattan", img_likes: 3 , img_description: "At Brooklyn bridge, with the skyscrapers at the back.")
j_pic3 = Picture.create(host_id: james.id, img_url: "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/61621593_10217718119240381_962104482831794176_n.jpg?_nc_cat=101&_nc_ht=scontent-lht6-1.xx&oh=f5f2c0524891b0fd3c1cef20133af52e&oe=5D5620E9",img_title: "Barranquilla", img_likes: 10, img_description: "This really was one of the best carnavals we ever had.")
j_pic4 = Picture.create(host_id: james.id, img_url: "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/61467768_10217718120800420_562195048494530560_n.jpg?_nc_cat=108&_nc_ht=scontent-lht6-1.xx&oh=b7caf1995cb6f25d3bae794e82746f73&oe=5D55994F",img_title: "Beach", img_likes: 4, img_description: "We played volleyball at one of our first dates.")
x_pic1 = Picture.create(host_id: xabi.id, img_url: "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/61170118_10217718122280457_8252433502079811584_n.jpg?_nc_cat=111&_nc_ht=scontent-lht6-1.xx&oh=1cd3c11776fa2ca37216e7985e80a827&oe=5D61BA93",img_title: "Paris", img_likes: 10, img_description: "Matching the colours of Mickey Mouse at Disneyland Paris.")
x_pic2 = Picture.create(host_id: xabi.id, img_url: "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/61359675_10217718123440486_780115736268898304_n.jpg?_nc_cat=101&_nc_ht=scontent-lht6-1.xx&oh=9958abd701134153dd0f09b26e62092b&oe=5D900571",img_title: "Algorta", img_likes: 3, img_description: "A selphie in a beautiful port, close to my hometown.")
x_pic3 = Picture.create(host_id: xabi.id, img_url: "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/61458585_10217718125520538_8460848460860489728_n.jpg?_nc_cat=102&_nc_ht=scontent-lht6-1.xx&oh=a6d7012eac5f681a4db5a72a300b5005&oe=5D994421",img_title: "Faces", img_likes: 2, img_description: "In contrast of a serious life, we also like to be silly.")
x_pic4 = Picture.create(host_id: xabi.id, img_url: "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/61818257_10217718129520638_947864935373733888_n.jpg?_nc_cat=105&_nc_ht=scontent-lht6-1.xx&oh=d45b51b0cd9af0e3920ff4824baefb69&oe=5D99F0A0",img_title: "Ceremonies", img_likes: 3, img_description: "Particularly, the wedding history we attemped is long.")

bachelor_party = Event.create(wedding_id: xabi_james_wedding.id, event_icon: "users", event_title: "Bachelor Party", event_description: "We will have a combined stag in ? Mykonos? two weeks before the wedding.", event_link_url: "https://www.google.com/maps/place/Mikonos+846+00,+Grecia/@37.4480434,25.3277297,15.73z/data=!4m13!1m7!3m6!1s0x14a2b8d058302c45:0x400bd2ce2b9c780!2sMiconos,+Mikonos,+Grecia!3b1!8m2!3d37.4467354!4d25.3288845!3m4!1s0x14a2bf06bf0fdd37:0xfaa85debe77b7a44!8m2!3d37.4466523!4d25.3288078")
wedding = Event.create(wedding_id: xabi_james_wedding.id, event_icon: "bank", event_title: "Wedding", event_description: 'The ceremony will take place at ? "Palacio Miramar"? , in front of the sea.', event_link_url: "http://www.sansebastian.travel/en/miramar-palace/")
reception = Event.create(wedding_id: xabi_james_wedding.id, event_icon: "cutlery", event_title: "Reception", event_description: 'Dinner will be at the ? "Mirador de Ulia"? , a beautiful michelin star restaurant at the top of a cliff.', event_link_url: "https://www.miradordeulia.es/en/")
hotels = Event.create(wedding_id: xabi_james_wedding.id, event_icon: "building", event_title: "Hotels", event_description: "For accommodation,?  here?  is a list of hotels in San Sebastian from Tripadvisor. ", event_link_url: "https://www.tripadvisor.com/HotelsList-San_Sebastian_Donostia-Cheap-Hotels-zfp121510.html")
