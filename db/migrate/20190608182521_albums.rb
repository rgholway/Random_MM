class Albums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.string :art
      t.string :short

      t.timestamps null: false
    end
  end
end
