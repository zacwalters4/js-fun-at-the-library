function shelfBook(book, sciFiShelf){
if(sciFiShelf.length < 3){
  sciFiShelf.unshift(book)
}
  return sciFiShelf
}

function unshelfBook(book, sciFiShelf){

for(i = 0; i < sciFiShelf.length; i++){
//  console.log(sciFiShelf[i])
  if(sciFiShelf[i].title === book){
  sciFiShelf.splice(i, 1)

}
}
  return sciFiShelf

}

function listTitles(shelf){
  var titles = ""
  for(i = 0; i < shelf.length; i++){
    if(i === 0){
      titles += shelf[i].title
    }
    else {
      titles += ", " + shelf[i].title
    }
  }

return titles
}

function searchShelf(shelf, title){
var onShelf = false
for(i=0; i<shelf.length; i++){

  if(shelf[i].title === title){
    onShelf = true
  }
}
    return onShelf

}



module.exports = {
   shelfBook,
   unshelfBook,
   listTitles,
   searchShelf
};
