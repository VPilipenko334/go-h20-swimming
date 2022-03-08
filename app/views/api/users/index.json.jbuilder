@users.each do |user|
    json.set! user.id do 
        json.partial! 'api/users/user'
    end 
end
