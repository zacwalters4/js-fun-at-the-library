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

var test = []





module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
//   editBook
}
