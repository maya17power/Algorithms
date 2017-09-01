var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


/*var fName = "Akira";
var prop = "likes";*/

function listingCheck(firstName, prop){
 for(var i = 0; i < contacts.length; i ++){
    if(contacts[i].firstName == firstName){
       if(contacts[i][prop]){
         return contacts[i][prop];
       }
          return "No such Property";
    }
  }
  return "No such contact";
}

listingCheck("Kristian","lastName");


function property(){
  for(var i = 0; i < contacts.length; i ++){
  var fNames = contacts[i][perameterName];
 if(contacts[i][perameterName]){
    console.log(perameterName + " Found in list. " + i);
  }
    else{
      console.log(perameterName + " Not found");
    }
}
}
