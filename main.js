function submitform(){
    let abc="";
let name1= document.getElementById('name1').value;
let name2= document.getElementById('name2').value;
let Email= document.getElementById('Email').value;
let Reason= document.getElementById('Reason').value;
console.log(name1,name2,email,Reason);
if((name1 != abc) && (name2 != abc )&& (Email != abc )&& (Reason != abc)){
alert("form Sumbitted successfully");
}
else{
alert("Need to fil the form");
}
}