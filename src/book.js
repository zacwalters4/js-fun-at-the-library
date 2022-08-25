function createTitle(title) {
  title = "The " + title
  return title
}

function buildMainCharacter(name, age, pronouns){
mainCharacter = {
  name: name,
  age: age,
  pronouns: pronouns
}
return mainCharacter
}

function saveReview(comment, reviews){
var isUnique = true

for(i = 0; i < reviews.length; i++){
  if(comment === reviews[i]){
    isUnique = false
    }
  }
if(isUnique === false){
  }
  else{
    reviews.push(comment)
  }
return(reviews)
}

function calculatePageCount(title){
  return title.length * 20
}

function writeBook(title, character, genre){
  var book = {
    title:  title,
    mainCharacter:  character,
    pageCount:  calculatePageCount(title),
    genre:  genre,
  }
  return book
}

function editBook(book){
  book.pageCount = book.pageCount * 3 / 4
  return book
}



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
