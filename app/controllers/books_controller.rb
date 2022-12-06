class BooksController < ApplicationController
    skip_before_action :authorize, only: [:index, :books_by_genre]

    def index
        books = Book.all 
        render json: books
    end

    def show
        book = Book.find(params[:id])
        render json: book
    end

    def create
        book = Book.create!(book_params)
        render json: book, status: :created
    end

    def random
        random_book = Book.where.not(id: @user.books.ids).order(Arel.sql('RANDOM()')).first
        render json: random_book
    end

    def books_by_genre
        books = Book.where(genre: params[:genre])
        render json: books
    end

    def books_with_average_ratings
        books = Book.all
        avg = books.flat_map { |book| [avg_rating: book.reviews.average(:rating), title: book.title, author: book.author, image_url: book.image_url, genre: book.genre] }
        render json: avg
    end

    def newest
        books = Book.all
        render json: books.order(created_at: :desc).limit(9)
    end

    private

    def book_params
        params.permit(:title, :author, :image_url, :genre)
    end


end
