//TRAVERSING THE DON//
var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentNode);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentElement.parentElement);

//childnodes
// console.log(itemList.childNode);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

 //firstchild
// console.log(itemList.firstElementChild);
//firstElementChild
// console.log(itemList.firstElementChild.txtContent = 'Hello 1');
// itemListfirstElementChild.txtContent = 'Hello';


//lastChild
//console.log(itemList.lastElementchild);

 //lastElementChild
// itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
//console.log(itemList.nextSibling);
//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);
//previousElementsSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

//createElement

//create a <div>
    var newDiv = document.createElement('div');
   //Add class
    newDiv.className = 'hello';

    //Add id
    newDiv.className = 'hello 1';


    //add attributes
    newDiv.setAttribute('title', 'Hello Div');

    //create text node
    var newDivText = document.createTextNode('Hello World');

    //add text to div
    newDiv.appendChild(newDivText);
    
    var container = document.querySelector('header .container');
    var h1 = document.querySelector('header h1');

    console.log(newDiv);
     //change fontSize: 
     newDiv.style.fontSize = '30px';
    container.insertBefore(newDiv, h1);
