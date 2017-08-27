var metalsmith = require('metalsmith');

metalsmith(__dirname)
  .metadata({
    site:{
      name : 'materialistic.world',
      description : 'a blog for documenting my exploration on the android platform'
    }
  })
  .source('./src')
  .destination('./public')
  .build(function(err){
    if(err){
      console.log(err);
    }else{
      console.log('materialstic.world built!');
    }
  })
