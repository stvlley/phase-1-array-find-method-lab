// code your solution here
// function superBowlWin(record) {
//     let winningYear = superBowlWin.find(function(record){
//         return record.result === "w"
//     })
//     return winningYear
// }

// const superbowlWin = record.find(result => result === "W")




const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]



// make a function to find the winning year
// function should accept and argument that is an array
// function should return the year 
// if theres a win return the year, else return undefined
function superbowlWin(record){

   let winningObj = record.find(el => el.result === "W")
   
   if (winningObj){
       return winningObj.year
   } else {
       return winningObj
   }   
}

// function superbowlWin(games) {
//     const record = games.find(item=>item.result==='W');
//     return record ? record.year : record;
// }


