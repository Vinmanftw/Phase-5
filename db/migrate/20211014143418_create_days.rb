class CreateDays < ActiveRecord::Migration[6.1]
  def change
    create_table :days do |t|
      t.string :dotw
      t.string :title
      t.belongs_to :routine
      t.timestamps
    end
  end
end
