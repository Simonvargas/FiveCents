class ReviewsController < ApplicationController
    protect_from_forgery with: :null_session
    before_action :set_review, only: [:show, :update, :destroy]

            def create
              @review = Review.create!(review_params)
            end

            def destroy
            @review.destroy
            head :no_content
            end

            private

            def review_params
                params.require(:review).permit(:title, :description, :score, :business_id)
            end

            def set_review
                @review = Reviews.find(params[:id])
            end
end