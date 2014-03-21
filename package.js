Package.describe({
  summary: "CreatedAt and updatedAt timestamps for collections"
});

Package.on_use(function (api, where) {
  
  if(api.export) {
    api.export('useTimestampsFor', 'server');
  }

  api.add_files('timestamp.js', 'server');

});

