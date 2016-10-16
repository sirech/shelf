FactoryGirl.define do
  factory :game do
    title { Faker::Beer.name }
    year { Faker::Number.between(2010, 2017) }
    stars { Faker::Number.between(1, 5) }
    platform { Game.platforms.keys.sample }

    trait :with_description do
      description { Faker::Yoda.quote }
    end
  end
end
