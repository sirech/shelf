class AddGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.text :description
      t.integer :year, null: false
      t.integer :stars, default: 1
      t.integer :platform, default: 0
      t.timestamps null: false
    end
  end
end
