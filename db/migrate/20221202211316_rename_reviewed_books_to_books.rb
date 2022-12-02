class RenameReviewedBooksToBooks < ActiveRecord::Migration[6.1]
  def change
    rename_table :reviewed_books, :books
  end
end
