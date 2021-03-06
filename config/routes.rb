Rails.application.routes.draw do 
  scope "/api" do
    devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'}
  
    resources :assets 
  
    resources :investments do 
      resources :recurring_payments 
    end 
  
    resources :loans do
      resources :recurring_payments 
    end 
 
    resources :credit_cards do
      resources :recurring_payments 
    end
  
    resources :bank_accounts do 
      resources :recurring_payments
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
