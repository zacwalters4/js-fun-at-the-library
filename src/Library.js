
function createLibrary(name){
var library = {}
library.name = name
library.shelves = {
  fantasy: [],
  fiction: [],
  nonFiction:[]
}
return library
}

function addBook(library, book){
//for(i = 0; i < Object.keys(library.shelves).length; i++){
//if(book.genre === Object.keys(library.shelves[i])){
//  }
if(book.genre === 'fantasy'){
  library.shelves.fantasy.push(book)
}
else if(book.genre === 'fiction'){
  library.shelves.fiction.push(book)
}
else if(book.genre === 'nonFiction'){
  library.shelves.nonFiction.push(book)
}
return library
}

function checkoutBook(library, title, genre){
for(i = 0; i < library.shelves[genre].length; i++){
  if(title === library.shelves[genre][i].title){
    library.shelves[genre].splice(i, 1)
    return `You have now checked out ${title} from the ${library.name}`
    }

  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
