/*
String.prototype.charCodeAt() //"A".charCodeAt() = 65 //convert letters to numbers location
String.fromCharCode() //String.fromCharCode(65) = "A" //collection of number to Letters
*/

function rot13(str) { // LBH QVQ VG!

//var myFilter = /^[A-Z \d\W]+$/;
var myAscii = [];
var strCon = str.split("");
var myDecode = [];
//console.log(strCon[4].charCodeAt() > 65 ? console.log("Greater then 65"): console.log("Less then 65"));

 for(var i = 0; i < strCon.length; i++){
    if(strCon[i].charCodeAt() < 65){
      console.log(strCon[i]+" is less then 65");
      myAscii.push(i);
    }else if(strCon[i].charCodeAt() > 90){
      console.log(strCon[i]+" is greater then 90");
      myAscii.push(i);
    }else if(strCon[i].charCodeAt() > 78){
      console.log(strCon[i]+" is between 65 and 90");
      myAscii.push(strCon[i].charCodeAt() -13);
    }else if(strCon[i].charCodeAt() < 78){
      console.log(strCon[i]+" is between 65 and 90");
      myAscii.push(strCon[i].charCodeAt() +13);
    }
  }

  console.log(myAscii);

   for(var j = 0; j < myAscii.length; j++){
     console.log(myAscii[j]);
     myDecode.push(String.fromCharCode(myAscii[5]));
   }
   return myDecode.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC.");
