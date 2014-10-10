require 'builder'
require 's3_gzip'

set :css_dir, 'stylesheets'
set :js_dir,  'javascripts'
set :images_dir, 'images'

activate :asset_hash
activate :bower
activate :bourbon
activate :livereload

configure :build do
  activate :minify_css
  activate :minify_html
  activate :minify_javascript
end
