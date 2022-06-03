
// Create a "close" button and append it to each list item

let myList = document.getElementsByTagName("li") //grab the the list thru the Html tag name and set it as the variable

for(let i = 0; i < myList.length; i++){ //for loop to go thru the entire mylist

    var span = document.createElement("SPAN") //this creates a new HTML span element

    var txt = document.createTextNode("\u00D7") //a method that creates a new text node with param as an X
    span.className = "close";
    span.appendChild(txt); // inserts the close text node

    myList[i].appendChild(span); //inserts the span variable created in line 6  
};

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close"); //grab the element close and set it to variable close

for(let i = 0; i < close.length; i++){ //loop thru the close 
    close[i].onclick = function(){
        var div = this.parentElement //set the element of the parent div to a var div

        div.style.display = "none" //this toggles the display to not show much

    }
};

// Add a "checked" symbol when clicking on a list item

