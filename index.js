const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array){

  let winObj = array.find( obj => obj["result"] === "W");
  if (!!winObj){return winObj['year']} 
 
 }