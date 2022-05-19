let pword = document.getElementById("pword"); //this grabs the password the user enters thru using ID
let answer = document.getElementById("answer");
let button = document.getElementById("btn");//this does what the action of the button which to submit thru ID


var password = "wordpass";

var numberOfEntries = 0;

var limitOfEntries = 5;

button.addEventListener("click", function(){
    if(numberOfEntries < limitOfEntries){
        if(pword.value != password){
            answer.innerHTML = "wrong Password, Please try Again!!!";
            numberOfEntries ++;
        }else{
            numberOfEntries = 0;
            answer.innerHTML = "Welcome Come on In!!"
        }
    }else{
        answer.innerHTML = "Sorry Out of tries!!!"
    }
})