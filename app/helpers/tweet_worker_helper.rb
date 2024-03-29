def job_is_complete(jid)
  waiting = Sidekiq::Queue.new
  working = Sidekiq::Workers.new
  return false if waiting.find { |job| job.jid == jid }
  return false if working.find { |worker, info| info["payload"]["jid"] == jid }
  true
end
