class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :price
      t.string :image

      t.timestamps
    end
  end
end
