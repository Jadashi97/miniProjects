var  word1 = document.querySelectorAll("letters").length;
console.log("here")

for(var i = 0; i < word1; i++){
    document.querySelectorAll(".letters")[i].addEventListener("click", function(){

        var buttonInnterHtml  = this.innerHTML;
        handleClick(buttonInnterHtml);
    })
}


// detect when button is clicked

document.addEventListener("keydown", function(){
    handleClick();

})

function handleClick(){
    console.log("I have been clicked!!");
}

