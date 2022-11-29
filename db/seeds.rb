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
Book.create(title: 'Tess of the d\'Urbervilles', author: 'Thomas Hardy', genre: 'Classics', image_url: 'https://images.penguinrandomhouse.com/cover/9780375756795')
Book.create(title: 'Party of Two', author: 'Jasmine Guillory', genre: 'Romance', image_url: 'https://m.media-amazon.com/images/I/51zfnJOfnWL._AC_SY780_.jpg')
Book.create(title: 'Memories', author: 'Lang Leav', genre: 'Poetry', image_url: 'http://prodimage.images-bn.com/pimages/9781449472399_p0_v2_s1200x630.jpg')
Book.create(title: 'Macbeth', author: 'William Shakespeare', genre: 'Classics', image_url: 'https://m.media-amazon.com/images/I/414U6gyDDDL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg')

book1 = Book.all[0]
book2 = Book.all[1]
book3 = Book.all[2]
book4 = Book.all[3]
book5 = Book.all[4]
book6 = Book.all[5]
book7 = Book.all[6]
book8 = Book.all[7]
book9 = Book.all[8]

#users
User.create(username: 'ambersbooks', password_digest: BCrypt::Password.create('amber123'), bio: 'love to read and bake! 📔🍰', profile_pic_url: 'https://preview.redd.it/d4eq8roa0zk51.png?width=600&format=png&auto=webp&s=0972850190f1d2d23f61e196fb3ca0a07b1457ec')
User.create(username: 'stephenreads', password_digest: BCrypt::Password.create('stephen123'), bio: 'Trying to learn more about the world through the lens of a book.', profile_pic_url: 'https://i.pinimg.com/564x/13/e5/27/13e527ab17930de1736bf8739950d0bb.jpg')
User.create(username: 'emiliacat', password_digest: BCrypt::Password.create('emilia123'), bio: 'Books are the nourishment humans so desperately need.', profile_pic_url: 'https://i.pinimg.com/564x/56/ce/c3/56cec3a6400d2bdc3745695c9be13536.jpg')
User.create(username: 'jdfavs', password_digest: BCrypt::Password.create('jd123'), bio: 'Reading teaches us things that life has yet not.', profile_pic_url: 'https://i.pinimg.com/564x/f0/76/f1/f076f15169d40b8c51dae9272ce0ff8f.jpg')
User.create(username: 'charlizestars', password_digest: BCrypt::Password.create('charlize123'), bio: 'lover of books and bears', profile_pic_url: 'https://thumbs.dreamstime.com/b/cute-brown-bear-icon-kids-stickers-t-shirt-designs-228604838.jpg')
User.create(username: 'nicoleinabook', password_digest: BCrypt::Password.create('nicole123'), bio: 'Always looking for my next read!', profile_pic_url: 'https://i.pinimg.com/564x/80/08/21/80082151371f37ce1cee4b9d047f2965.jpg')
User.create(username: 'gabysbooknook', password_digest: BCrypt::Password.create('gaby123'), bio: 'Give me all the fantasy!', profile_pic_url: 'https://i.pinimg.com/750x/9f/02/a1/9f02a11f358bd45d2db8981a80cc5331.jpg')

user1 = User.all[0]
user2 = User.all[1]
user3 = User.all[2]
user4 = User.all[3]
user5 = User.all[4]
user6 = User.all[5]
user7 = User.all[6]


#reviews
Review.create!(rating: 4, review_body: "This book taught me so much about the value of life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non. Ullamcorper a lacus vestibulum sed arcu. Ornare quam viverra orci sagittis eu volutpat. Tristique magna sit amet purus gravida. Tincidunt id aliquet risus feugiat in ante metus dictum. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Mauris pharetra et ultrices neque ornare aenean. Diam donec adipiscing tristique risus nec. Ac turpis egestas integer eget. Sed vulputate odio ut enim blandit volutpat maecenas. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Vel risus commodo viverra maecenas accumsan lacus.\n Tincidunt arcu non sodales neque sodales ut. Lobortis elementum nibh tellus molestie nunc non. Tristique et egestas quis ipsum suspendisse. Commodo elit at imperdiet dui accumsan. Est velit egestas dui id ornare arcu. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Commodo elit at imperdiet dui accumsan sit amet nulla. Vitae auctor eu augue ut. Cras adipiscing enim eu turpis egestas. Egestas egestas fringilla phasellus faucibus scelerisque.\n Ultricies integer quis auctor elit sed. Quis imperdiet massa tincidunt nunc pulvinar sapien. Hac habitasse platea dictumst quisque. Blandit turpis cursus in hac habitasse platea. Vitae nunc sed velit dignissim sodales ut. Vitae et leo duis ut diam quam nulla. Convallis tellus id interdum velit laoreet id. Ante metus dictum at tempor commodo ullamcorper. Convallis convallis tellus id interdum velit laoreet id. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.", user_id: user3.id, book_id: book1.id)
Review.create!(rating: 5, review_body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non. Ullamcorper a lacus vestibulum sed arcu. Ornare quam viverra orci sagittis eu volutpat. Tristique magna sit amet purus gravida. Tincidunt id aliquet risus feugiat in ante metus dictum. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Mauris pharetra et ultrices neque ornare aenean. Diam donec adipiscing tristique risus nec. Ac turpis egestas integer eget. Sed vulputate odio ut enim blandit volutpat maecenas. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Vel risus commodo viverra maecenas accumsan lacus.\n Tincidunt arcu non sodales neque sodales ut. Lobortis elementum nibh tellus molestie nunc non. Tristique et egestas quis ipsum suspendisse. Commodo elit at imperdiet dui accumsan. Est velit egestas dui id ornare arcu. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Commodo elit at imperdiet dui accumsan sit amet nulla. Vitae auctor eu augue ut. Cras adipiscing enim eu turpis egestas. Egestas egestas fringilla phasellus faucibus scelerisque.\n Ultricies integer quis auctor elit sed. Quis imperdiet massa tincidunt nunc pulvinar sapien. Hac habitasse platea dictumst quisque. Blandit turpis cursus in hac habitasse platea. Vitae nunc sed velit dignissim sodales ut. Vitae et leo duis ut diam quam nulla. Convallis tellus id interdum velit laoreet id. Ante metus dictum at tempor commodo ullamcorper. Convallis convallis tellus id interdum velit laoreet id. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum." , user_id: user7.id, book_id: book2.id)
Review.create(rating: 3, review_body: "The overall story is pretty fulfilling, but the pace of this book is too slow. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non. Ullamcorper a lacus vestibulum sed arcu. Ornare quam viverra orci sagittis eu volutpat. Tristique magna sit amet purus gravida. Tincidunt id aliquet risus feugiat in ante metus dictum. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Mauris pharetra et ultrices neque ornare aenean. Diam donec adipiscing tristique risus nec. Ac turpis egestas integer eget. Sed vulputate odio ut enim blandit volutpat maecenas. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Vel risus commodo viverra maecenas accumsan lacus.\n Tincidunt arcu non sodales neque sodales ut. Lobortis elementum nibh tellus molestie nunc non. Tristique et egestas quis ipsum suspendisse. Commodo elit at imperdiet dui accumsan. Est velit egestas dui id ornare arcu. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Commodo elit at imperdiet dui accumsan sit amet nulla. Vitae auctor eu augue ut. Cras adipiscing enim eu turpis egestas. Egestas egestas fringilla phasellus faucibus scelerisque.\n Ultricies integer quis auctor elit sed. Quis imperdiet massa tincidunt nunc pulvinar sapien. Hac habitasse platea dictumst quisque. Blandit turpis cursus in hac habitasse platea. Vitae nunc sed velit dignissim sodales ut. Vitae et leo duis ut diam quam nulla. Convallis tellus id interdum velit laoreet id. Ante metus dictum at tempor commodo ullamcorper. Convallis convallis tellus id interdum velit laoreet id. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.", user_id: user2.id, book_id: book3.id)
Review.create(rating: 4, review_body: "This book is a healer for all of the feelings that we experience during the highs and lows of love. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non. Ullamcorper a lacus vestibulum sed arcu. Ornare quam viverra orci sagittis eu volutpat. Tristique magna sit amet purus gravida. Tincidunt id aliquet risus feugiat in ante metus dictum. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Mauris pharetra et ultrices neque ornare aenean. Diam donec adipiscing tristique risus nec. Ac turpis egestas integer eget. Sed vulputate odio ut enim blandit volutpat maecenas. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Vel risus commodo viverra maecenas accumsan lacus.\n Tincidunt arcu non sodales neque sodales ut. Lobortis elementum nibh tellus molestie nunc non. Tristique et egestas quis ipsum suspendisse. Commodo elit at imperdiet dui accumsan. Est velit egestas dui id ornare arcu. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Commodo elit at imperdiet dui accumsan sit amet nulla. Vitae auctor eu augue ut. Cras adipiscing enim eu turpis egestas. Egestas egestas fringilla phasellus faucibus scelerisque.\n Ultricies integer quis auctor elit sed. Quis imperdiet massa tincidunt nunc pulvinar sapien. Hac habitasse platea dictumst quisque. Blandit turpis cursus in hac habitasse platea. Vitae nunc sed velit dignissim sodales ut. Vitae et leo duis ut diam quam nulla. Convallis tellus id interdum velit laoreet id. Ante metus dictum at tempor commodo ullamcorper. Convallis convallis tellus id interdum velit laoreet id. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.", user_id: user3.id, book_id: book4.id)
Review.create(rating: 4, review_body: "What a twist at the end! This story kept me on my toes, wondering what the truth really was. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non. Ullamcorper a lacus vestibulum sed arcu. Ornare quam viverra orci sagittis eu volutpat. Tristique magna sit amet purus gravida. Tincidunt id aliquet risus feugiat in ante metus dictum. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Mauris pharetra et ultrices neque ornare aenean. Diam donec adipiscing tristique risus nec. Ac turpis egestas integer eget. Sed vulputate odio ut enim blandit volutpat maecenas. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Vel risus commodo viverra maecenas accumsan lacus.\n Tincidunt arcu non sodales neque sodales ut. Lobortis elementum nibh tellus molestie nunc non. Tristique et egestas quis ipsum suspendisse. Commodo elit at imperdiet dui accumsan. Est velit egestas dui id ornare arcu. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Commodo elit at imperdiet dui accumsan sit amet nulla. Vitae auctor eu augue ut. Cras adipiscing enim eu turpis egestas. Egestas egestas fringilla phasellus faucibus scelerisque.\n Ultricies integer quis auctor elit sed. Quis imperdiet massa tincidunt nunc pulvinar sapien. Hac habitasse platea dictumst quisque. Blandit turpis cursus in hac habitasse platea. Vitae nunc sed velit dignissim sodales ut. Vitae et leo duis ut diam quam nulla. Convallis tellus id interdum velit laoreet id. Ante metus dictum at tempor commodo ullamcorper. Convallis convallis tellus id interdum velit laoreet id. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.", user_id: user4.id, book_id: book5.id)
Review.create(rating: 2, review_body: "A classic, but disheartening as a woman to read. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non. Ullamcorper a lacus vestibulum sed arcu. Ornare quam viverra orci sagittis eu volutpat. Tristique magna sit amet purus gravida. Tincidunt id aliquet risus feugiat in ante metus dictum. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Mauris pharetra et ultrices neque ornare aenean. Diam donec adipiscing tristique risus nec. Ac turpis egestas integer eget. Sed vulputate odio ut enim blandit volutpat maecenas. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Vel risus commodo viverra maecenas accumsan lacus.\n Tincidunt arcu non sodales neque sodales ut. Lobortis elementum nibh tellus molestie nunc non. Tristique et egestas quis ipsum suspendisse. Commodo elit at imperdiet dui accumsan. Est velit egestas dui id ornare arcu. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Commodo elit at imperdiet dui accumsan sit amet nulla. Vitae auctor eu augue ut. Cras adipiscing enim eu turpis egestas. Egestas egestas fringilla phasellus faucibus scelerisque.\n Ultricies integer quis auctor elit sed. Quis imperdiet massa tincidunt nunc pulvinar sapien. Hac habitasse platea dictumst quisque. Blandit turpis cursus in hac habitasse platea. Vitae nunc sed velit dignissim sodales ut. Vitae et leo duis ut diam quam nulla. Convallis tellus id interdum velit laoreet id. Ante metus dictum at tempor commodo ullamcorper. Convallis convallis tellus id interdum velit laoreet id. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.", user_id: user5.id, book_id: book6.id)
Review.create(rating: 3, review_body: "It's a cute story, but the pace is incredibly slow. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non. Ullamcorper a lacus vestibulum sed arcu. Ornare quam viverra orci sagittis eu volutpat. Tristique magna sit amet purus gravida. Tincidunt id aliquet risus feugiat in ante metus dictum. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Mauris pharetra et ultrices neque ornare aenean. Diam donec adipiscing tristique risus nec. Ac turpis egestas integer eget. Sed vulputate odio ut enim blandit volutpat maecenas. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Vel risus commodo viverra maecenas accumsan lacus.\n Tincidunt arcu non sodales neque sodales ut. Lobortis elementum nibh tellus molestie nunc non. Tristique et egestas quis ipsum suspendisse. Commodo elit at imperdiet dui accumsan. Est velit egestas dui id ornare arcu. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Commodo elit at imperdiet dui accumsan sit amet nulla. Vitae auctor eu augue ut. Cras adipiscing enim eu turpis egestas. Egestas egestas fringilla phasellus faucibus scelerisque.\n Ultricies integer quis auctor elit sed. Quis imperdiet massa tincidunt nunc pulvinar sapien. Hac habitasse platea dictumst quisque. Blandit turpis cursus in hac habitasse platea. Vitae nunc sed velit dignissim sodales ut. Vitae et leo duis ut diam quam nulla. Convallis tellus id interdum velit laoreet id. Ante metus dictum at tempor commodo ullamcorper. Convallis convallis tellus id interdum velit laoreet id. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.", user_id: user4.id, book_id: book7.id)
Review.create(rating: 4, review_body: "Lang Leav has a way with describing every feeling you could never put into words. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non. Ullamcorper a lacus vestibulum sed arcu. Ornare quam viverra orci sagittis eu volutpat. Tristique magna sit amet purus gravida. Tincidunt id aliquet risus feugiat in ante metus dictum. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Mauris pharetra et ultrices neque ornare aenean. Diam donec adipiscing tristique risus nec. Ac turpis egestas integer eget. Sed vulputate odio ut enim blandit volutpat maecenas. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Vel risus commodo viverra maecenas accumsan lacus.\n Tincidunt arcu non sodales neque sodales ut. Lobortis elementum nibh tellus molestie nunc non. Tristique et egestas quis ipsum suspendisse. Commodo elit at imperdiet dui accumsan. Est velit egestas dui id ornare arcu. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Commodo elit at imperdiet dui accumsan sit amet nulla. Vitae auctor eu augue ut. Cras adipiscing enim eu turpis egestas. Egestas egestas fringilla phasellus faucibus scelerisque.\n Ultricies integer quis auctor elit sed. Quis imperdiet massa tincidunt nunc pulvinar sapien. Hac habitasse platea dictumst quisque. Blandit turpis cursus in hac habitasse platea. Vitae nunc sed velit dignissim sodales ut. Vitae et leo duis ut diam quam nulla. Convallis tellus id interdum velit laoreet id. Ante metus dictum at tempor commodo ullamcorper. Convallis convallis tellus id interdum velit laoreet id. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.", user_id: user5.id, book_id: book8.id)
Review.create(rating: 5, review_body: "Absolutely exquisite. The layers of this story are both complex and deep. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non. Ullamcorper a lacus vestibulum sed arcu. Ornare quam viverra orci sagittis eu volutpat. Tristique magna sit amet purus gravida. Tincidunt id aliquet risus feugiat in ante metus dictum. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Mauris pharetra et ultrices neque ornare aenean. Diam donec adipiscing tristique risus nec. Ac turpis egestas integer eget. Sed vulputate odio ut enim blandit volutpat maecenas. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Vel risus commodo viverra maecenas accumsan lacus.\n Tincidunt arcu non sodales neque sodales ut. Lobortis elementum nibh tellus molestie nunc non. Tristique et egestas quis ipsum suspendisse. Commodo elit at imperdiet dui accumsan. Est velit egestas dui id ornare arcu. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Commodo elit at imperdiet dui accumsan sit amet nulla. Vitae auctor eu augue ut. Cras adipiscing enim eu turpis egestas. Egestas egestas fringilla phasellus faucibus scelerisque.\n Ultricies integer quis auctor elit sed. Quis imperdiet massa tincidunt nunc pulvinar sapien. Hac habitasse platea dictumst quisque. Blandit turpis cursus in hac habitasse platea. Vitae nunc sed velit dignissim sodales ut. Vitae et leo duis ut diam quam nulla. Convallis tellus id interdum velit laoreet id. Ante metus dictum at tempor commodo ullamcorper. Convallis convallis tellus id interdum velit laoreet id. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.", user_id: user1.id, book_id: book9.id)
Review.create(rating: 2, review_body: "This story could've been better if all of the most important moments did not happen right at the end. The arch in this story is steep and skewed to the far right. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non. Ullamcorper a lacus vestibulum sed arcu. Ornare quam viverra orci sagittis eu volutpat. Tristique magna sit amet purus gravida. Tincidunt id aliquet risus feugiat in ante metus dictum. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Mauris pharetra et ultrices neque ornare aenean. Diam donec adipiscing tristique risus nec. Ac turpis egestas integer eget. Sed vulputate odio ut enim blandit volutpat maecenas. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Vel risus commodo viverra maecenas accumsan lacus.\n Tincidunt arcu non sodales neque sodales ut. Lobortis elementum nibh tellus molestie nunc non. Tristique et egestas quis ipsum suspendisse. Commodo elit at imperdiet dui accumsan. Est velit egestas dui id ornare arcu. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Commodo elit at imperdiet dui accumsan sit amet nulla. Vitae auctor eu augue ut. Cras adipiscing enim eu turpis egestas. Egestas egestas fringilla phasellus faucibus scelerisque.\n Ultricies integer quis auctor elit sed. Quis imperdiet massa tincidunt nunc pulvinar sapien. Hac habitasse platea dictumst quisque. Blandit turpis cursus in hac habitasse platea. Vitae nunc sed velit dignissim sodales ut. Vitae et leo duis ut diam quam nulla. Convallis tellus id interdum velit laoreet id. Ante metus dictum at tempor commodo ullamcorper. Convallis convallis tellus id interdum velit laoreet id. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.", user_id: user2.id, book_id: book3.id)
Review.create(rating: 3, review_body: 'What a beautiful collection of words to help heal a broken heart. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero nunc consequat interdum varius. Integer quis auctor elit sed vulputate mi sit amet. Fermentum iaculis eu non diam phasellus vestibulum. Duis at consectetur lorem donec massa sapien. Pharetra pharetra massa massa ultricies. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Felis donec et odio pellentesque. Nam at lectus urna duis convallis convallis tellus id. Aliquet risus feugiat in ante metus dictum at tempor commodo. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Consectetur purus ut faucibus pulvinar elementum integer. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Adipiscing bibendum est ultricies integer quis auctor elit sed. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Massa tincidunt dui ut ornare. A erat nam at lectus. Nam libero justo laoreet sit amet cursus sit amet dictum. Eu feugiat pretium nibh ipsum. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu.', user_id: user3.id, book_id: book8.id)
    


puts 'seeds planted! 💛'