// Create a "close" button and append it to each list item

let myList = document.getElementsByTagName("li") //grab the the list thru the Html tag name and set it as the variable

for(let i = 0; i < myList.length; i++){ //for loop to go thru the entire mylist

    var span = document.createElement("SPAN") //this creates a new HTML span element

    var txt = document.createTextNode("\u00D7") //a method that creates a new text node with param as an X
    span.className = "close";
    span.appendChild(txt); // inserts the close text node

    myList[i].appendChild(span); //inserts the span variable created in line 6  

    // localStorage.setItem("tasks", JSON.stringify(savedItems)); //this sets the item in JSON

};

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close"); //grab the element close and set it to variable close

// let savedItems = JSON.parse(localStorage.getItem("tasks")) || []; //implementing the local storage and store in JSON

for(let i = 0; i < close.length; i++){ //loop thru the close 
    close[i].onclick = function(){
        var div = this.parentElement //set the element of the parent div to a var div

        div.style.display = "none" //this toggles the display to not show much
        savedItems

    }
};

// add a checked symbol to show that the item is done

var theList = document.querySelector("ul") //this grabs the very first ul item and sets a variable 

theList.addEventListener('click', function(event){ //this method attaches an event handler to a document and executes the call back function
    //below is logic to check if the event we need to get check out is same as that in the list
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked")
    }
}, false)


//create a new list when you click on the add button

let button = document.getElementById("myButton"); //this grabs the element and assigns it the var button

//this handles what to do when the button is clicked
button.addEventListener("click", function(){
    let li =   document.createElement("li"); //this creates a new list item among the other todo items

    let inputValue = document.getElementById("myInput").value; //this grabs the new input list added
    var textnode = document.createTextNode(inputValue); // this method Creates a text string from the specified value.
    li.appendChild(textnode);

    if (inputValue === '') {
        window.alert("wait holdUp! write something!!!")
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    // document.getElementById("myInput").value = " ";

    //this adds the new list with all the styling 
    var span = document.createElement("SPAN") //this creates a new HTML element
    var txt = document.createTextNode("\u00D7") //a method that creates a new text node with param as an X
    span.className = "close";
    span.appendChild(txt); // inserts the close text node
    li.appendChild(span);

    //this includes the close button to the new list when add button is clicked
    for (let i = 0; i < close.length; i++) { //loop thru the close 
        close[i].onclick = function () {
            var div = this.parentElement; //set the element of the parent div to a var div

            div.style.display = "none"; //this toggles the display to not show much

        }
    }
});