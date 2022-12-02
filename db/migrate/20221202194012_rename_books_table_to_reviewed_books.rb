class RenameBooksTableToReviewedBooks < ActiveRecord::Migration[6.1]
  def change
    rename_table :books, :reviewed_books
  end
end
