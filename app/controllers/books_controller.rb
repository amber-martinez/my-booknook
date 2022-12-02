class BooksController < ApplicationController
    skip_before_action :authorize, only: :index

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

    private

    def book_params
        params.permit(:title, :author, :image_url, :genre)
    end


end
