source 'https://rubygems.org'

gem 'rails', '~> 5.0.0', '>= 5.0.0.1'
# Use Puma as the app server
gem 'puma', '~> 3.0'
gem 'foreman'

# Frontend
gem 'sass-rails'
gem 'uglifier', '>= 1.3.0'
gem 'bootstrap', '~> 4.0.0.alpha4'
gem 'font-awesome-sass'

gem 'jbuilder', '~> 2.5'

gem 'mysql2'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri

  gem 'factory_girl_rails', require: false
  gem 'faker'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  gem 'pry-rails'

  # Linters
  gem 'overcommit'
  gem 'rubocop'
  gem 'rubocop-rspec'
  gem 'scss_lint'
end

group :test do
  gem 'rspec-rails'
  gem 'database_cleaner', require: false
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
