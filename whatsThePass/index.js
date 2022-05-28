let pword = document.getElementById("pword"); //this grabs the password the user enters thru using ID
let answer = document.getElementById("answer"); // this grabs the answer and shows it below the answer box
let button = document.getElementById("btn");//this does what the action of the button which to submit thru ID


let password = "wordpass";

let numberOfEntries = 0;

let limitOfEntries = 5;


//add event listen to run the call back function when butto is clicked
button.addEventListener("click", function(){
    if(numberOfEntries < limitOfEntries){
        if(pword.value != password){
            answer.innerHTML = "wrong Password, Please try Again!!!";
            console.log(pword.value);
            numberOfEntries ++;
        }else{
            numberOfEntries = 0;
            //swaps the innerHtml to the string below
            answer.innerHTML = "Welcome Come on In!!"
        }
    }else{
        answer.innerHTML = "Sorry Out of tries!!!"
    }
})