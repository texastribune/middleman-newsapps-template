require 'builder'

set :css_dir, 'stylesheets'
set :js_dir,  'javascripts'
set :images_dir, 'images'

activate :asset_hash
activate :bower
activate :livereload

configure :build do
  activate :minify_css
  activate :minify_html
  activate :minify_javascript
end

activate :s3_sync do |s3_sync|
  s3_sync.bucket = ''
  s3_sync.aws_access_key_id = ENV['AWS_ACCESS_KEY_ID']
  s3_sync.aws_secret_access_key = ENV['AWS_SECRET_ACCESS_KEY']
  s3_sync.delete = false # We delete stray files by default.
  s3_sync.after_build = false # We do not chain after the build step by default.
  s3_sync.prefer_gzip = false
  s3_sync.path_style = true
  s3_sync.reduced_redundancy_storage = true
  s3_sync.acl = 'public-read'
  s3_sync.encryption = false
  s3_sync.version_bucket = false
end
