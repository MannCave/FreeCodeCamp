let lunches=[];
function addLunchToEnd(lunches,mys){
    lunches.push(mys);
  console.log(`${mys} added to the end of the lunch menu.`);
  return lunches;
}
addLunchToEnd(lunches,["Pizza", "Tacos", "Burger"]);


function addLunchToStart(lunches,mys){
  lunches.unshift(mys);
  console.log(`${mys} added to the start of the lunch menu.`);
  return lunches;
}
addLunchToStart(lunches,["Burger", "Sushi", "Pizza"]);


function removeLastLunch(lunches){
 
  if(lunches.length!==0){
        let popedLunch= lunches.pop();
console.log(`${popedLunch} removed from the end of the lunch menu.`);
  }
  else{
  console.log("No lunches to remove."); 
  }
    return lunches;
}
removeLastLunch(["Stew", "Soup", "Toast"]);


function removeFirstLunch(lunches){
  if(lunches.length!=0){
  let removedItem=lunches.shift();
  console.log(`${removedItem} removed from the start of the lunch menu.`)
  
  }
else{
    console.log("No lunches to remove.");
  }
 return lunches;
}
removeFirstLunch(["Salad", "Eggs", "Cheese"]);

//get Random Lunch function:
function getRandomLunch(lunches){
  if(lunches.length==0){
    console.log('No lunches available.');
  }
  else{
      let randNumber=Math.floor(Math.random() *3);
  let randElement=lunches[randNumber];
    console.log(`Randomly selected lunch: ${randElement}`); 
  }
}
getRandomLunch(["Salad", "Eggs", "Cheese"]);



function showLunchMenu(lunches) {
    if (lunches.length != 0) {
        console.log(`Menu items: ${lunches.join(', ')}`);
    }
    else {
        console.log('The menu is empty.');
    }
}
showLunchMenu(["Greens", "Corns", "Beans", "tea", "Beans", "tea"]);
