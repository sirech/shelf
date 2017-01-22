source 'https://rubygems.org'

gem 'rails', '~> 5.0.0', '>= 5.0.0.1'
# Use Puma as the app server
gem 'foreman'
gem 'puma', '~> 3.0'

# Frontend
gem 'bootstrap', '~> 4.0.0.alpha6'
gem 'font-awesome-sass'
gem 'sass-rails'
gem 'uglifier', '>= 1.3.0'

# Building things
gem 'jbuilder', '~> 2.5'
gem 'mysql2'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri

  gem 'factory_girl_rails', require: false
  gem 'faker'
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'pry-rails'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console'

  # Linters
  gem 'overcommit'
  gem 'rubocop'
  gem 'rubocop-rspec'
  gem 'scss_lint', require: false
end

group :test do
  gem 'database_cleaner', require: false
  gem 'rspec-rails'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
