# We need to compile the webpack assets after rails asset precompile and
# copy them to public/assets for deployment.

desc 'create non digested assets'
namespace :react_on_rails do
  namespace :assets do
    # Uses command defined with ReactOnRails.configuration.npm_build_production_command
    desc 'compile assets with webpack'
    task precompile: :environment do
      if ReactOnRails.configuration.npm_build_production_command.present?
        sh 'cd client && npm install'
        sh "cd client && #{ReactOnRails.configuration.npm_build_production_command}"

        puts "ReactOnRails - Copy Webpack assets from #{dist_dir} to #{public_dir}"
        FileUtils.mkdir_p(public_dir) unless Dir.exist?(public_dir)
        FileUtils.cp_r("#{dist_dir}/.", public_dir)
      end
    end
  end
end

Rake::Task['assets:precompile'].enhance do
  Rake::Task['react_on_rails:assets:precompile'].invoke
end

def dist_dir
  Rails.root.join(ReactOnRails.configuration.client_dist_path)
end

def public_dir
  Rails.root.join('public')
end
