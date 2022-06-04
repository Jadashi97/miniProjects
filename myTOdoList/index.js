
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

// add a checked symbol to show that the item is done

var theList = document.querySelector("ul") //this grabs the very first ul item and sets a variable 

theList.addEventListener('click', function(event){ //this method attaches an event handler to a document and executes the call back function
    //below is logic to check if the event we need to get check out is same as the list
    if(event.target.tagName === "li"){
        event.target.classList.toggle("checked")
    }
}, false)


//create a new list when you click on the add item

function newELement(){
    let li =   document.createElement("li"); //this creates a new list item among the other todo items

    let inputValue = document.getElementById("myInput").value; //this grabs the new input list added

    var textnode = document.createTextNode(inputValue); // this method Creates a text string from the specified value.
    li.appendChild(textnode);

    if(inputValue === ''){
        alet("TODO empty!!")
    }else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = " ";

    var span = document.createElement("SPAN") //this creates a new HTML span element
    var txt = document.createTextNode("\u00D7") //a method that creates a new text node with param as an X
    span.className = "close";
    span.appendChild(txt); // inserts the close text node
    li.appendChild(span);

    for(let i = 0; i < close.length; i++){ //loop thru the close 
        close[i].onclick = function(){
            var div = this.parentElement;//set the element of the parent div to a var div
    
            div.style.display = "none"; //this toggles the display to not show much
    
        }
    }
};

// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }