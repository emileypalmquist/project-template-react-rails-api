class PuppiesController < ApplicationController

  def index
    puppies = Puppy.all 
    render json: puppies
  end
  
end
