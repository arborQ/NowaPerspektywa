cd ../Web/css/
call minify --output reset.min.css reset.css
call minify --output style.min.css style.css

call lessc less/site.less > site.css
call minify --output site.min.css site.css