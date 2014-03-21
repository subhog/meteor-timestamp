

useTimestampsFor = function(collection) {

  collection.deny({
    insert: function(userId, doc) {
      doc.createdAt = new Date().getTime();
      doc.updatedAt = new Date().getTime();
      return false;
    },
    update: function(userId, doc, fields, modifier) {
      doc.updatedAt = new Date().getTime();
      return false;
    },
  });

};

