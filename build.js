var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var handlebars = require('handlebars');
var collections = require('metalsmith-collections');
var permalinks = require('metalsmith-permalinks');

metalsmith(__dirname)
  .metadata({
    site:{
      name : 'materialistic.world',
      description : 'a blog for documenting my exploration on the android platform'
    }
  })
  .source('./src')
  .destination('../denny_words_public')
  .use(collections({
    articles:{
      pattern : 'articles/**/*.md',
      sortBy : 'date',
      reverse : true
    }
  }))
  .use(markdown())
  .use(permalinks({
      relative: false,
      pattern: ':title',
    }))
  .use(layouts({
    engine: 'handlebars',
    directory : './layouts',
    default : 'article.html',
    pattern : ['*/*/*html','*/*html','*html'],
    partials : {
      header : 'partials/header',
      footer : 'partials/footer'
    }
  }))
  .build(function(err){
    if(err){
      console.log(err);
    }else{
      console.log('materialstic.world built!');
    }
  })
