class BooksController < ApplicationController

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

    private

    def book_params
        params.permit(:title, :author, :image_url, :genre)
    end


end
