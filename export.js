function(doc) {
  if (doc.hasOwnProperty('351')) {
    for (var i=0; i<doc['351'].length; i++) {
      emit(doc['301'][0], doc['351'][i]);
    }    
  }
}