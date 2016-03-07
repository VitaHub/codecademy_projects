class UsersController < ApplicationController

  before_action :require_user, except: [:new,:create] 

	def new
    if current_user
      redirect_to '/'
    else
    	@user = User.new
    end
 	end

  	def create
  		@user = User.new(user_params)
  		if @user.save
  			session[:user_id] = @user.id
  			redirect_to '/'
  		else
  			redirect_to '/signup'
  		end
  	end

    def show
      @user = User.find(params[:id])
    end

    def edit 
      if current_user == User.find(params[:id])
        @user = User.find(params[:id])
      else
        #redirect_to(:action => 'show', :id => User.find(params[:id]).id)
        redirect_to profile_path(User.find(params[:id]))
      end
    end

    def update
      @user = User.find(params[:id])
      if @user.update_attributes(user_params)
        #redirect_to(:action => 'show', :id => @user.id)
        redirect_to profile_path(@user)
      else
        render 'edit'
      end
    end

  	private
  	def user_params
      if current_user
        params.require(:user).permit(:first_name, :last_name, :email, :role)
      else
  		  params.require(:user).permit(:first_name, :last_name, :email, :role, :password)
      end
  	end
end
