// 1
const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
console.log(names[3])

//2
const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
names.push("Drogba"); 

//3
names.unshift("Figo");
console-log(names)

//4
names.pop();
console.log(names)

//5
const names = [
    "Figo",
    "Zlatan",
    "Beckham",
    "Zidane",
    "Maradona",
    "Pele",
    "Ronaldo",
  ];

  names.pop();
  names.unshift("Ronaldo");
  console.log(names)

  //7
  const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
  
  if (players.includes("Messi")) {
  console.log("Messi exists");
  
  } else {
  console.log("Messi does not exist"); }

  // 8
  //Samma som ovan fast med Zlatan

  //9
  const indexOfMaradon = players.indexOf("Maradona"); 
  console.log(players)

  //10
  const indexOfMessi = players.indexOf("Messi");
  console.log(players);
  console.log(indexOfMessi) // Does not exist

  //11
  const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
  const playersAsString = players.join(", "); 
  console.log(playersAsString)

  //12
  const playersAsString = players.join(" - ")
  console.log(playersAsString)

  // 13
  const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
  players.splice(1, 2)
  console.log(players)

  //14 
  const addPlayerWithSplice = players.splice(2, 0, "Ronaldinho")

  //15
  const indexOfRonaldo = players.indexOf("Ronaldo"); 
  players.splice(indexOfRonaldo, 1)
  



  
