# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'seeding books, reviews, and users...📚'

Book.destroy_all
Review.destroy_all
User.destroy_all

#books
Book.create(title: 'Midnight Library', author: 'Matt Haig', genre: 'Science fiction', image_url: 'https://m.media-amazon.com/images/I/41ATfFjhelL._AC_SY780_.jpg')
Book.create(title: 'Severance', author: 'Ling Ma', genre: 'Science fiction', image_url: 'https://m.media-amazon.com/images/I/31mPYQxX73L._AC_SY780_.jpg')
Book.create(title: 'The Invisible Life of Addie LaRue', author: 'V. E. Schwab', genre: 'Fantasy', image_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1584633432l/50623864.jpg')
Book.create(title: 'Love & Misadventure', author: 'Lang Leav', genre: 'Poetry', image_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1370084153l/18003300.jpg')
Book.create(title: 'Cover Story', author: 'Susan Rigetti', genre: 'Fiction', image_url: 'https://m.media-amazon.com/images/I/41cgksGPsUL._AC_SY780_.jpg')
Book.create(title: `Tess of the d'Urbervilles`, author: 'Thomas Hardy', genre: 'Classics', image_url: 'https://images.penguinrandomhouse.com/cover/9780375756795')
Book.create(title: 'Party of Two', author: 'Jasmine Guillory', genre: 'Romance', image_url: 'https://m.media-amazon.com/images/I/51zfnJOfnWL._AC_SY780_.jpg')
Book.create(title: 'Memories', author: 'Lang Leav', genre: 'Poetry', image_url: 'http://prodimage.images-bn.com/pimages/9781449472399_p0_v2_s1200x630.jpg')
Book.create(title: 'Macbeth', author: 'William Shakespeare', genre: 'Classics', image_url: 'https://m.media-amazon.com/images/I/414U6gyDDDL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg')


#reviews
Review.create(rating: 4, review_body: 'This book taught me so much about the value of life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Eget magna fermentum iaculis eu. Duis convallis convallis tellus id interdum velit laoreet id donec. Sed odio morbi quis commodo odio aenean. Diam vulputate ut pharetra sit. Lectus mauris ultrices eros in cursus turpis massa. Dui id ornare arcu odio ut sem nulla pharetra diam. Neque laoreet suspendisse interdum consectetur libero. Nunc mattis enim ut tellus elementum sagittis. Ipsum suspendisse ultrices gravida dictum fusce ut.

    At ultrices mi tempus imperdiet nulla malesuada pellentesque. Enim facilisis gravida neque convallis a cras. Id donec ultrices tincidunt arcu non sodales. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Fringilla urna porttitor rhoncus dolor purus non. Vehicula ipsum a arcu cursus. Faucibus turpis in eu mi bibendum neque egestas. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Porttitor leo a diam sollicitudin tempor id eu. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Nulla pellentesque dignissim enim sit amet venenatis urna. Nibh ipsum consequat nisl vel pretium. Tortor aliquam nulla facilisi cras fermentum odio eu.
    
    Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Id porta nibh venenatis cras. Suspendisse sed nisi lacus sed. Nunc id cursus metus aliquam. Netus et malesuada fames ac turpis. Feugiat nisl pretium fusce id velit ut tortor pretium. Cursus euismod quis viverra nibh cras pulvinar. Urna molestie at elementum eu. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Proin sed libero enim sed faucibus turpis in. Scelerisque purus semper eget duis at tellus at urna condimentum. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Non curabitur gravida arcu ac tortor. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Scelerisque eleifend donec pretium vulputate sapien. Tincidunt praesent semper feugiat nibh sed pulvinar proin.
    
    Ipsum dolor sit amet consectetur. Volutpat blandit aliquam etiam erat velit scelerisque in. Nibh venenatis cras sed felis eget velit aliquet sagittis. In egestas erat imperdiet sed euismod nisi porta lorem. Eros in cursus turpis massa tincidunt. Diam quam nulla porttitor massa id neque aliquam. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Ultricies lacus sed turpis tincidunt id aliquet. Id eu nisl nunc mi ipsum faucibus vitae aliquet. At auctor urna nunc id cursus. Potenti nullam ac tortor vitae purus faucibus. Imperdiet dui accumsan sit amet nulla. Suspendisse potenti nullam ac tortor vitae purus faucibus. Nunc lobortis mattis aliquam faucibus. Arcu vitae elementum curabitur vitae nunc. Neque egestas congue quisque egestas diam in. Id venenatis a condimentum vitae. Eget lorem dolor sed viverra ipsum. Neque volutpat ac tincidunt vitae. Molestie nunc non blandit massa enim nec dui nunc mattis.
    
    Cras sed felis eget velit aliquet sagittis. Auctor augue mauris augue neque. In fermentum et sollicitudin ac. Porttitor massa id neque aliquam vestibulum. Facilisi nullam vehicula ipsum a arcu cursus vitae. Cursus eget nunc scelerisque viverra. Vel turpis nunc eget lorem dolor sed. Sed nisi lacus sed viverra tellus in hac habitasse. Accumsan tortor posuere ac ut consequat semper. Lorem dolor sed viverra ipsum nunc. Luctus accumsan tortor posuere ac. Mi quis hendrerit dolor magna. Pellentesque elit ullamcorper dignissim cras. Amet porttitor eget dolor morbi non. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Mattis nunc sed blandit libero volutpat sed cras ornare. Porttitor eget dolor morbi non. Dictum at tempor commodo ullamcorper. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Tempus urna et pharetra pharetra massa massa ultricies mi quis.', user_id: 3, book_id: 1)
Review.create(rating: 5, review_body: 'What an amazing book! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis at erat pellentesque adipiscing commodo elit at. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Sit amet purus gravida quis blandit turpis. Ornare suspendisse sed nisi lacus sed viverra tellus. Habitant morbi tristique senectus et netus et malesuada fames. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tincidunt tortor aliquam nulla facilisi cras fermentum. Aliquam ut porttitor leo a.

    Ornare massa eget egestas purus viverra accumsan in nisl. Proin sagittis nisl rhoncus mattis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Libero volutpat sed cras ornare arcu dui vivamus arcu. Amet nisl purus in mollis nunc sed id semper. Sem nulla pharetra diam sit amet nisl. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Mauris a diam maecenas sed.
    
    Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Tempor id eu nisl nunc mi ipsum. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Urna condimentum mattis pellentesque id nibh tortor id. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Pharetra magna ac placerat vestibulum. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nunc congue nisi vitae suscipit tellus. Aliquam id diam maecenas ultricies mi eget. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Feugiat scelerisque varius morbi enim nunc faucibus. Consectetur a erat nam at lectus urna duis convallis convallis.' , user_id: 7, book_id: 2)
Review.create(rating: 3, review_body: 'The overall story is pretty fulfilling, but the pace of this book is too slow. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis at erat pellentesque adipiscing commodo elit at. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Sit amet purus gravida quis blandit turpis. Ornare suspendisse sed nisi lacus sed viverra tellus. Habitant morbi tristique senectus et netus et malesuada fames. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tincidunt tortor aliquam nulla facilisi cras fermentum. Aliquam ut porttitor leo a.

    Ornare massa eget egestas purus viverra accumsan in nisl. Proin sagittis nisl rhoncus mattis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Libero volutpat sed cras ornare arcu dui vivamus arcu. Amet nisl purus in mollis nunc sed id semper. Sem nulla pharetra diam sit amet nisl. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Mauris a diam maecenas sed.
    
    Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Tempor id eu nisl nunc mi ipsum. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Urna condimentum mattis pellentesque id nibh tortor id. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Pharetra magna ac placerat vestibulum. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nunc congue nisi vitae suscipit tellus. Aliquam id diam maecenas ultricies mi eget. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Feugiat scelerisque varius morbi enim nunc faucibus. Consectetur a erat nam at lectus urna duis convallis convallis.', user_id: 2, book_id: 3)
Review.create(rating: 4, review_body: 'This book is a healer for all of the feelings that we experience during the highs and lows of love. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis at erat pellentesque adipiscing commodo elit at. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Sit amet purus gravida quis blandit turpis. Ornare suspendisse sed nisi lacus sed viverra tellus. Habitant morbi tristique senectus et netus et malesuada fames. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tincidunt tortor aliquam nulla facilisi cras fermentum. Aliquam ut porttitor leo a.

    Ornare massa eget egestas purus viverra accumsan in nisl. Proin sagittis nisl rhoncus mattis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Libero volutpat sed cras ornare arcu dui vivamus arcu. Amet nisl purus in mollis nunc sed id semper. Sem nulla pharetra diam sit amet nisl. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Mauris a diam maecenas sed.
    
    Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Tempor id eu nisl nunc mi ipsum. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Urna condimentum mattis pellentesque id nibh tortor id. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Pharetra magna ac placerat vestibulum. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nunc congue nisi vitae suscipit tellus. Aliquam id diam maecenas ultricies mi eget. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Feugiat scelerisque varius morbi enim nunc faucibus. Consectetur a erat nam at lectus urna duis convallis convallis.', user_id: 3, book_id: 4)
Review.create(rating: 4, review_body: 'What a twist at the end! This story kept me on my toes, wondering what the truth reall was. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in. Ipsum dolor sit amet consectetur adipiscing. Felis eget velit aliquet sagittis id. Porttitor eget dolor morbi non arcu risus. Gravida dictum fusce ut placerat orci nulla pellentesque. Tellus mauris a diam maecenas. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Quis blandit turpis cursus in hac habitasse platea. Pretium fusce id velit ut tortor pretium viverra suspendisse. Placerat orci nulla pellentesque dignissim. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Dolor morbi non arcu risus quis varius. Bibendum est ultricies integer quis auctor elit sed. Aenean sed adipiscing diam donec. Nunc consequat interdum varius sit amet. Dictum non consectetur a erat.

    Odio aenean sed adipiscing diam donec adipiscing. Libero justo laoreet sit amet cursus sit amet dictum. Nec tincidunt praesent semper feugiat. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Lorem ipsum dolor sit amet. Non pulvinar neque laoreet suspendisse. Amet dictum sit amet justo donec enim diam vulputate ut. Id diam maecenas ultricies mi eget mauris pharetra et. Aenean vel elit scelerisque mauris pellentesque pulvinar. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Eget gravida cum sociis natoque penatibus et magnis dis parturient. At in tellus integer feugiat scelerisque varius. Donec ultrices tincidunt arcu non sodales neque sodales. Urna neque viverra justo nec. Odio aenean sed adipiscing diam. Maecenas volutpat blandit aliquam etiam. Neque laoreet suspendisse interdum consectetur libero id. Amet nisl purus in mollis nunc sed. Purus ut faucibus pulvinar elementum integer enim neque. Eget lorem dolor sed viverra ipsum nunc.
    
    Vitae tortor condimentum lacinia quis. Donec ultrices tincidunt arcu non sodales neque. Fusce id velit ut tortor pretium. Congue eu consequat ac felis donec. Condimentum lacinia quis vel eros donec ac odio tempor orci. Vestibulum sed arcu non odio euismod lacinia. Aliquet bibendum enim facilisis gravida neque convallis. Sem nulla pharetra diam sit. Ultricies tristique nulla aliquet enim. Dignissim convallis aenean et tortor at.
    
    Donec pretium vulputate sapien nec. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Vitae aliquet nec ullamcorper sit amet. Convallis a cras semper auctor neque. Ac turpis egestas maecenas pharetra. Tempor id eu nisl nunc mi ipsum faucibus. Convallis posuere morbi leo urna molestie at elementum. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Neque aliquam vestibulum morbi blandit cursus risus. Sit amet purus gravida quis blandit turpis. Venenatis urna cursus eget nunc scelerisque viverra.', user_id: 4, book_id: 5)
Review.create(rating: 2, review_body: 'A classic, but disheartening as a woman to read. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim. Elit at imperdiet dui accumsan. Faucibus pulvinar elementum integer enim. Aliquam nulla facilisi cras fermentum odio eu feugiat. Etiam erat velit scelerisque in dictum non consectetur a. Urna porttitor rhoncus dolor purus. In est ante in nibh mauris cursus mattis. Fusce id velit ut tortor pretium viverra suspendisse. Proin libero nunc consequat interdum varius. Blandit turpis cursus in hac habitasse platea. Magna fermentum iaculis eu non. Ac feugiat sed lectus vestibulum mattis ullamcorper. Sit amet mattis vulputate enim nulla aliquet. Consectetur purus ut faucibus pulvinar elementum.

    Consectetur adipiscing elit ut aliquam purus sit amet luctus. Amet est placerat in egestas erat imperdiet. Faucibus in ornare quam viverra orci sagittis eu. Nunc congue nisi vitae suscipit tellus. Tristique et egestas quis ipsum suspendisse ultrices. Tincidunt dui ut ornare lectus. Maecenas pharetra convallis posuere morbi leo urna molestie. Pulvinar pellentesque habitant morbi tristique. Amet mattis vulputate enim nulla. In ante metus dictum at. Lacinia at quis risus sed. A iaculis at erat pellentesque adipiscing commodo. In arcu cursus euismod quis. Elit ut aliquam purus sit amet luctus venenatis lectus. Elit pellentesque habitant morbi tristique senectus.', user_id: 5, book_id: 6)
Review.create(rating: 3, review_body: `It's a cute story, but the pace is incredibly slow. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo odio aenean sed adipiscing diam donec adipiscing. Quam id leo in vitae turpis. Tempor nec feugiat nisl pretium fusce. Lacus viverra vitae congue eu consequat ac felis donec. Eget gravida cum sociis natoque penatibus et magnis. Dui nunc mattis enim ut tellus elementum sagittis vitae. Augue interdum velit euismod in pellentesque massa placerat. Sed faucibus turpis in eu. Mi quis hendrerit dolor magna eget est lorem. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Sed felis eget velit aliquet sagittis id consectetur purus ut. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Amet porttitor eget dolor morbi non arcu risus quis.

    Rhoncus urna neque viverra justo nec ultrices dui. Leo vel fringilla est ullamcorper eget. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Habitant morbi tristique senectus et netus et. Mus mauris vitae ultricies leo integer. Porttitor leo a diam sollicitudin tempor id. Mattis aliquam faucibus purus in massa tempor nec. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. In cursus turpis massa tincidunt. Duis convallis convallis tellus id interdum velit.
    
    Felis eget velit aliquet sagittis id consectetur purus ut. Justo laoreet sit amet cursus sit amet. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Condimentum lacinia quis vel eros donec ac odio. Diam vel quam elementum pulvinar etiam non. Donec adipiscing tristique risus nec feugiat in fermentum. Phasellus vestibulum lorem sed risus ultricies. Adipiscing elit duis tristique sollicitudin nibh sit amet. Velit dignissim sodales ut eu sem integer vitae justo. Malesuada proin libero nunc consequat interdum. Neque aliquam vestibulum morbi blandit. Nulla facilisi nullam vehicula ipsum a. Urna molestie at elementum eu facilisis sed odio. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Neque viverra justo nec ultrices dui sapien. Habitant morbi tristique senectus et netus et. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Cursus turpis massa tincidunt dui ut ornare.`, user_id: 4, book_id: 7)
Review.create(rating: 4, review_body: 'Lang Leav has a way with describing every feeling you could never put into words. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo odio aenean sed adipiscing diam donec adipiscing. Quam id leo in vitae turpis. Tempor nec feugiat nisl pretium fusce. Lacus viverra vitae congue eu consequat ac felis donec. Eget gravida cum sociis natoque penatibus et magnis. Dui nunc mattis enim ut tellus elementum sagittis vitae. Augue interdum velit euismod in pellentesque massa placerat. Sed faucibus turpis in eu. Mi quis hendrerit dolor magna eget est lorem. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Sed felis eget velit aliquet sagittis id consectetur purus ut. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Amet porttitor eget dolor morbi non arcu risus quis.

    Rhoncus urna neque viverra justo nec ultrices dui. Leo vel fringilla est ullamcorper eget. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Habitant morbi tristique senectus et netus et. Mus mauris vitae ultricies leo integer. Porttitor leo a diam sollicitudin tempor id. Mattis aliquam faucibus purus in massa tempor nec. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. In cursus turpis massa tincidunt. Duis convallis convallis tellus id interdum velit.
    
    Felis eget velit aliquet sagittis id consectetur purus ut. Justo laoreet sit amet cursus sit amet. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Condimentum lacinia quis vel eros donec ac odio. Diam vel quam elementum pulvinar etiam non. Donec adipiscing tristique risus nec feugiat in fermentum. Phasellus vestibulum lorem sed risus ultricies. Adipiscing elit duis tristique sollicitudin nibh sit amet. Velit dignissim sodales ut eu sem integer vitae justo. Malesuada proin libero nunc consequat interdum. Neque aliquam vestibulum morbi blandit. Nulla facilisi nullam vehicula ipsum a. Urna molestie at elementum eu facilisis sed odio. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Neque viverra justo nec ultrices dui sapien. Habitant morbi tristique senectus et netus et. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Cursus turpis massa tincidunt dui ut ornare.', user_id: 5, book_id: 8)
Review.create(rating: 5, review_body: 'Absolutely exquisite. The layers of this story are both complex and deep. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo odio aenean sed adipiscing diam donec adipiscing. Quam id leo in vitae turpis. Tempor nec feugiat nisl pretium fusce. Lacus viverra vitae congue eu consequat ac felis donec. Eget gravida cum sociis natoque penatibus et magnis. Dui nunc mattis enim ut tellus elementum sagittis vitae. Augue interdum velit euismod in pellentesque massa placerat. Sed faucibus turpis in eu. Mi quis hendrerit dolor magna eget est lorem. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Sed felis eget velit aliquet sagittis id consectetur purus ut. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Amet porttitor eget dolor morbi non arcu risus quis.

    Rhoncus urna neque viverra justo nec ultrices dui. Leo vel fringilla est ullamcorper eget. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Habitant morbi tristique senectus et netus et. Mus mauris vitae ultricies leo integer. Porttitor leo a diam sollicitudin tempor id. Mattis aliquam faucibus purus in massa tempor nec. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. In cursus turpis massa tincidunt. Duis convallis convallis tellus id interdum velit.
    
    Felis eget velit aliquet sagittis id consectetur purus ut. Justo laoreet sit amet cursus sit amet. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Condimentum lacinia quis vel eros donec ac odio. Diam vel quam elementum pulvinar etiam non. Donec adipiscing tristique risus nec feugiat in fermentum. Phasellus vestibulum lorem sed risus ultricies. Adipiscing elit duis tristique sollicitudin nibh sit amet. Velit dignissim sodales ut eu sem integer vitae justo. Malesuada proin libero nunc consequat interdum. Neque aliquam vestibulum morbi blandit. Nulla facilisi nullam vehicula ipsum a. Urna molestie at elementum eu facilisis sed odio. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Neque viverra justo nec ultrices dui sapien. Habitant morbi tristique senectus et netus et. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Cursus turpis massa tincidunt dui ut ornare.', user_id: 1, book_id: 9)
Review.create(rating: 2, review_body: `This story could've been better if all of the most important moments did not happen right at the end. The arch in this story is steep and skewed to the far right. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non. Ullamcorper a lacus vestibulum sed arcu. Ornare quam viverra orci sagittis eu volutpat. Tristique magna sit amet purus gravida. Tincidunt id aliquet risus feugiat in ante metus dictum. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Mauris pharetra et ultrices neque ornare aenean. Diam donec adipiscing tristique risus nec. Ac turpis egestas integer eget. Sed vulputate odio ut enim blandit volutpat maecenas. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Vel risus commodo viverra maecenas accumsan lacus.

    Tincidunt arcu non sodales neque sodales ut. Lobortis elementum nibh tellus molestie nunc non. Tristique et egestas quis ipsum suspendisse. Commodo elit at imperdiet dui accumsan. Est velit egestas dui id ornare arcu. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Commodo elit at imperdiet dui accumsan sit amet nulla. Vitae auctor eu augue ut. Cras adipiscing enim eu turpis egestas. Egestas egestas fringilla phasellus faucibus scelerisque.
    
    Ultricies integer quis auctor elit sed. Quis imperdiet massa tincidunt nunc pulvinar sapien. Hac habitasse platea dictumst quisque. Blandit turpis cursus in hac habitasse platea. Vitae nunc sed velit dignissim sodales ut. Vitae et leo duis ut diam quam nulla. Convallis tellus id interdum velit laoreet id. Ante metus dictum at tempor commodo ullamcorper. Convallis convallis tellus id interdum velit laoreet id. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Elementum integer enim neque volutpat ac tincidunt vitae semper. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Cras adipiscing enim eu turpis egestas pretium. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.
    
    Sit amet tellus cras adipiscing enim eu. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Cras sed felis eget velit aliquet sagittis. Enim sed faucibus turpis in. Faucibus et molestie ac feugiat. Duis ultricies lacus sed turpis tincidunt id. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Lacus sed viverra tellus in hac. Aliquet nec ullamcorper sit amet risus. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Pharetra vel turpis nunc eget. Amet est placerat in egestas erat imperdiet sed. Ut faucibus pulvinar elementum integer enim neque volutpat. Elementum curabitur vitae nunc sed velit dignissim. Donec pretium vulputate sapien nec sagittis aliquam. At elementum eu facilisis sed odio morbi quis. Ut pharetra sit amet aliquam id diam. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.`, user_id: 2, book_id: 3)
Review.create(rating: 3, review_body: 'What a beautiful collection of words to help heal a broken heart. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero nunc consequat interdum varius. Integer quis auctor elit sed vulputate mi sit amet. Fermentum iaculis eu non diam phasellus vestibulum. Duis at consectetur lorem donec massa sapien. Pharetra pharetra massa massa ultricies. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Felis donec et odio pellentesque. Nam at lectus urna duis convallis convallis tellus id. Aliquet risus feugiat in ante metus dictum at tempor commodo. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Consectetur purus ut faucibus pulvinar elementum integer. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Adipiscing bibendum est ultricies integer quis auctor elit sed. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Massa tincidunt dui ut ornare. A erat nam at lectus. Nam libero justo laoreet sit amet cursus sit amet dictum. Eu feugiat pretium nibh ipsum. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu.

    Vitae justo eget magna fermentum iaculis eu non diam phasellus. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Dolor morbi non arcu risus quis varius quam quisque. Pellentesque elit eget gravida cum sociis natoque penatibus. Velit dignissim sodales ut eu sem integer vitae justo eget. Purus in mollis nunc sed id semper. Donec ac odio tempor orci dapibus ultrices in iaculis. Facilisis sed odio morbi quis commodo. At urna condimentum mattis pellentesque id nibh tortor id. Congue eu consequat ac felis donec. Semper viverra nam libero justo laoreet sit. Dolor sit amet consectetur adipiscing elit. Lobortis feugiat vivamus at augue eget arcu dictum varius. Eu turpis egestas pretium aenean pharetra magna. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Sapien et ligula ullamcorper malesuada proin libero. Mattis rhoncus urna neque viverra justo.', user_id: 3, book_id: 8)


#users
User.create(username: 'ambersbooks', password_digest: BCrypt::Password.create('amber123'), bio: 'love to read and bake! 📔🍰', profile_pic_url: 'https://preview.redd.it/d4eq8roa0zk51.png?width=600&format=png&auto=webp&s=0972850190f1d2d23f61e196fb3ca0a07b1457ec')
User.create(username: 'stephenreads', password_digest: BCrypt::Password.create('stephen123'), bio: 'Trying to learn more about the world through the lens of a book.', profile_pic_url: 'https://i.pinimg.com/564x/13/e5/27/13e527ab17930de1736bf8739950d0bb.jpg')
User.create(username: 'emiliacat', password_digest: BCrypt::Password.create('emilia123'), bio: 'Books are the nourishment humans so desperately need.', profile_pic_url: 'https://i.pinimg.com/564x/56/ce/c3/56cec3a6400d2bdc3745695c9be13536.jpg')
User.create(username: 'jdfavs', password_digest: BCrypt::Password.create('jd123'), bio: 'Reading teaches us things that life has yet not.', profile_pic_url: 'https://i.pinimg.com/564x/f0/76/f1/f076f15169d40b8c51dae9272ce0ff8f.jpg')
User.create(username: 'charlizestars', password_digest: BCrypt::Password.create('charlize123'), bio: 'lover of books and bears', profile_pic_url: 'https://thumbs.dreamstime.com/b/cute-brown-bear-icon-kids-stickers-t-shirt-designs-228604838.jpg')
User.create(username: 'nicoleinabook', password_digest: BCrypt::Password.create('nicole123'), bio: 'Always looking for my next read!', profile_pic_url: 'https://i.pinimg.com/564x/80/08/21/80082151371f37ce1cee4b9d047f2965.jpg')
User.create(username: 'gabysbooknook', password_digest: BCrypt::Password.create('gaby123'), bio: 'Give me all the fantasy!', profile_pic_url: 'https://i.pinimg.com/750x/9f/02/a1/9f02a11f358bd45d2db8981a80cc5331.jpg')


puts 'seeds planted! 💛'