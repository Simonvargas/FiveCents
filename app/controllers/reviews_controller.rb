class ReviewsController < ApplicationController
    protect_from_forgery with: :null_session
    before_action :set_review, only: [:show, :update, :destroy]

            def create
              @new_review = Review.create
              json_response(@review)
            end

            def destroy
            @review.destroy
            head :no_content
            end

            private

            def review_params
                params.require(:review).permit(:title, :description, :score, :airline_id)
            end

            def set_review
                @review = Reviews.find(params[:id])
            end
end