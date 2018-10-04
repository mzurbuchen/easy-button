require 'sinatra'

class App < Sinatra::Base
  # start server: puma

  get '/' do
    haml :index
  end
end
