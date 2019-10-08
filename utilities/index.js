module.exports = {
	generateRandomList(sourceData, count) {
    count = count > sourceData.length ? 100 : count;
    let randomItems = [];
    let alreadyUsedIndexes = [];
    let randomIndex = null;
  
    for (let i = 0; i < count; i++) {
      //generate a random index
      randomIndex = Math.floor((Math.random()*sourceData.length));
  
      //make sure it's not already used
      while (alreadyUsedIndexes.indexOf(randomIndex) > -1) {
        randomIndex = Math.floor((Math.random()*sourceData.length));
      }
  
      //now that we have an unused index -- use it
      alreadyUsedIndexes.push(randomIndex);
      randomItems.push(sourceData[randomIndex]);
    }
    return randomItems;
  }
}