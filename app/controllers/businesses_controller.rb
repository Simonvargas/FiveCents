class BusinessesController < ApplicationController
    protect_from_forgery with: :null_session
    before_action :set_business, only: [:show, :update, :destroy]
            

            def index
                @businesses = Business.includes(:reviews).all
                json_response(@businesses)
            end

            def show
                json_response(@business)
            end

            def create
                @business = Business.create!(business_params)
            end

            def update
             @business.update(business_params)
             head :no_content
            end

            def destroy
                @business.destroy
                head :no_content
            end

            private
            
            def business_params
                params.require(:business).permit(:name, :image_url)
            end

            def set_business
                @business = Business.find(params[:id])
            end
end