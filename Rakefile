namespace :heroku do
  desc 'restarts all the heroku dynos so we can control when they restart'
  task :implode do
    Heroku::API.
      new(username: ENV['minestalin@yandex.com'], password: ENV['minestalin123@q']).
      post_ps_restart(ENV['mcslaveserver'])
  end
end