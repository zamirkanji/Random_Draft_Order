function runDraft() {
  let teams = addPlayers();
  teams = randomizeRank(teams);
  teams = sortTeams(teams);
  displayBoard(teams);
}

function addPlayers() {
  let playerList = document.getElementById("list").value;
  if(!playerList) {
    alert("Put in your team names");
    return false;
  }
  let playerArray = playerList.split(",")
  let arr = []
  let playerObj = {};
  for(i=0; i < playerArray.length; i++) {
    playerObj = {
      "player" : playerArray[i].trim(),
      "rank" : undefined 
    }
    arr.push(playerObj);
  }
  return arr;
}

function randomizeRank(arr) {
  arr.map(function(n) { 
    return n.rank = Math.random(); 
  }, this);
  return arr;
}

function sortTeams(arr) {
  arr.sort(function(a,b){
    if(a.rank > b.rank) {
      return 1;
    }
    if(a.rank < b.rank){
      return -1;
    }
    return 0;
  })
  return arr;
}

function displayBoard(arr) {
  let draftOrder = document.getElementById("draftOrder");
  draftOrder.innerHTML = "";
  
  for(i=0; i<arr.length; i++){
    draftOrder.innerHTML += i+1 + ".) " + arr[i].player + "<br>";
  }
}

