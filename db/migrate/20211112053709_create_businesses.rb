class CreateBusinesses < ActiveRecord::Migration[6.1]
  def change
    create_table :businesses do |t|
      t.string :name
      t.string :image_url

      t.timestamps
    end
  end
end
