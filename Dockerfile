FROM ruby:2.3.1

RUN apt-get update && apt-get install -qq -y build-essential libossp-uuid-dev libmysqlclient-dev --fix-missing --no-install-recommends

# install nodejs
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get update && apt-get install -qq -y nodejs

ENV RAILS_ROOT /app
ENV RAILS_ENV production

RUN mkdir -p $RAILS_ROOT/tmp/pids

WORKDIR $RAILS_ROOT

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock

RUN gem install bundler
RUN bundle install

COPY . .

RUN rake assets:precompile

# Run with unicorn
CMD exec rails s
