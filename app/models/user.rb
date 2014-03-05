class User < ActiveRecord::Base
  has_many :tweets

  def tweet(params)
    tweet = tweets.create!(:status => params[:tweet],
                            :time => params[:time])

    TweetWorker.delay_until(tweet.time).perform_async(tweet.id) # Sidekiq job ID
  end
end
