cd ../Web/css/
call minify --output reset.min.css reset.css
call minify --output style.min.css style.css

call lessc less/site.less > site.css
call minify --output site.min.css site.css


cd ../js/typescript
call tsc --out ../main.js main.ts
call minify --output ../main.min.js ../main.js

cd ../../../Compilers