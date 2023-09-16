const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
 
  
];

// 1. Print Developers
function printDeveloper() {
 for(let i = 0; i < data.length; i++){
  if(data[i].profession === "developer"){
    console.log(data[i].name + " is a developer by profession");
  }
 }
}

// 2. Add Data
function addData() {
  const name = prompt("Enter the name");
  const age = parseInt( prompt("Enter the age") );
  const profession = prompt("Enter the professipn");
  
  const newData = {name,age,profession};

  data.push(newData);

  console.log(data);
  
}

// 3. Remove Admins
function removeAdmin() {
  for(let i = 0; i < data.length; i++){
    if(data[i].profession !== "admin"){
      console.log(data[i]);
    }
  }
}

// 4. Concatenate Array
function concatenateArray() {
  const data2 = [
    { name: "Sophie", age: 24, profession: "data analyst" },
    { name: "Steve", age: 24, profession: "UI Designer" },
    { name: "Annie", age: 24, profession: "developer" },
    { name: "Georgia", age: 24, profession: "admin" },
  ]

  const newArr = data.concat(data2);

  console.log(newArr);
}

// 5. Average Age
function averageAge() {
  let totalAge = 0;
  for(let i = 0; i < data.length; i++){
    totalAge += data[i].age;
  }

  const averageAge = totalAge/data.length;

  console.log("The average age is "+averageAge);
}

// 6. Age Check
function checkAgeAbove25() {
  for(let i = 0; i < data.length; i++){
    if(data[i].age >= 25){
      console.log(data[i].name + "'s age is above 25");
    }
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  const uniqueProfessions = [];
  for(let i = 0; i < data.length; i++){
    if(uniqueProfessions.includes(data[i].profession)){
      continue;
    }else{
      uniqueProfessions.push(data[i].profession);
    }
  }
  console.log(uniqueProfessions);
  
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b) => a.age-b.age);
  console.log("Sorted by age in ascending order ",data);
}

// 9. Update Profession
function updateJohnsProfession() {
  for(let i = 0; i < data.length; i++){
    if(data[i].name === "john"){
      data[i].profession = "Manager";
    }
  }
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let developer = 0;
  let admin = 0;
  for(let i = 0; i < data.length; i++){
    if(data[i].profession === "developer"){
      developer++;
    }else if(data[i].profession === "admin"){
      admin++;
    }
  }
  console.log(`the number of admins is ${admin}`);
  console.log(`the number of developers is ${developer}`);
}