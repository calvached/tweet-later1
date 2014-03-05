class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.belongs_to :user
      t.string :status
      t.time :time

      t.timestamps
    end
  end
end
