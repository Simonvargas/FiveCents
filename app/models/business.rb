class Business < ApplicationRecord
    has_many :reviews

    

    def avg_score
        reviews.average(:score)
    end

    def hello
        'hello'
    end
end
