class CreditCard < ApplicationRecord 
    belongs_to :user 
    has_many :recurring_payments
end
