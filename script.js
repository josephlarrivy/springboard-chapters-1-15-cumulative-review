//--------------------JavaScript-----------------





/*
variables and data types
*/

//Primitive data types:
    //string
    //number
    //boolean
    //unfedined
    //null

//number methods
    //Number.inInteger('15') - false
    //Number.inInteger(1.234) - false
    //Number.isInteger(16) - true
    //Number.parseInt('15') - 15
    //Number.parseInt(3.14) - 3
    //Number.parseFloat('4.33sdf') - 4.33

//Numeric operators allow for operations to be performed on numbers
//PEMDAS applies
//NaN results from a failed conversion or operation

//variables
    //containers that hold data types
    //let variables can be declared, (do not need to be assigned a value when declared):
        // let num;
    //default value will be undefined
    //the variable type can change fron a number to a string to a boolean
    //let variables cannot be redeclared, only reassigned
    //const variables cannot be reassigned or redeclared

/*
JS fundamentals
*/
//booleans are true or false values
//strings support all unicode
//string properties
    //strings cannot change after they are declared
    //a string's characters can be be called from their index, but not changed
        //let name = 'Joe';
        //name[0]; returns 'J'
    //name.length; returns 3

//string method: slice
    //strings can be sliced
        //let idk = 'I have no idea what I'm doing';
        //idk.slice(0,13); returns 'I have no idea';

//string method: includes and indexOf
    //let sentence = 'An axolotl is a tiny salamander in Mexico';
    //sentence.includes('axolotl'); returns true
    //sentence.includes('lizard'); returns false
    //sentence.indexOf('is'); returns 11
    //sentence.indexOf('turtle') returns -1
        //if the word/character does not appear in the string, -1 is returned

//string method: split
    //strings can be split into arrays using .split
    //let phrase = 'Lannisters always pay their debts.';
        //phrase.split(' '); returns [ 'Lannisters', 'always', 'pay', 'their', 'debts.' ]
        //splitting with an empty string (no space between '') returns an array of characters
        //let cat = 'Blue';
        //cat.split(''); returns ['B', 'l', 'u', 'e']

//string method: replace
    // .replace can be used to replace a character or word in a string
    //let funnyString = 'lol';
    //funnyString.replace('l', 'p'); returns 'pop'

//string concatenation allows string to be put together into a single line
//teplate literals are a different way to put two or more strings together

//typeOf
    //allows finding what type of data a variable is holding
        //let myName = 'Colt Steele';
        // typeof myName, returns "string"

        // let favoriteNumber = 420;
        // typeof favoriteNumber; returns "number"

        // let awesome = false;
        // typeof awesome; returns "boolean"

        // let willILiveForever;
        // typeof willILiveForever; returns "undefined"

/*
conditional logic
*/
//comparison operators return a true or false value based on the values that are being evaluated
//conditional logic is used to evaluate variables and return different responses based on the condition of the input
    //the first code block to evaluate as true returns a response
    //if three code if/else statements are true, only the first one will run
    //once a true brance runs, the rest of the if/else statements are ignored

//falsy values
    //false, null, undefined, 0, NaN

//logical operators
    //not: !
        //the bang operator can be used to reverse the truthy or falseyness of a value
    //or ||
        //allow to check multiple values for their truthyness and return the same response if either are true
    //and &&
        //both values must evaluate to true to be truthy, or false to be falsey as a whole expression

//operator precedence
    //(!) has the highest precedence
    //&& had higher precedence than ||
    //these can be altered using (parenthesis) useing PEMDAS

//the ternary operator
    //a shorthand for writing if/else statements
    //can only have two branches (no if, else/if, else statements)
    //ternary operators have three operands: an expression and two statements
    //with this, conditionals can be writted in one line
    //syntax:
        // (expression to check) ? statement if true : statement if false;
    //example:
        // let guess = 15;
        // let answer = 20;
        // guess > answer ? console.log('too high') : console.log('too low');

/*
arrays
*/
//arrays store groups of related values instead of assigning them to multiple variables
//accessing values in an array
    //example: accessing values in an array:
        //const children = ['blue', 'rumi', 'sir'];
        //children[0]; returns 'blue'
        //children[2]; returns 'sir'
        //children[5]; returns undefined
    //example: updating values in an array:
        //children[1] = 'tom';
        //children; returns ['blue', 'tom', 'sir'];
    //storing values from an array:
        //let firstChildName = chilrden[0];
        //firstChildName; returns 'blue'

//common array methods
    // .push pushes a value onto the end of an array
        //reutrns the new array length
        //original array is altered
    // .pop removes a value from the end of an array
        //the value that is 'popped' is returned when .pop is used
        //original array is altered
    // .shift removes a value from the start of an array
        // the value that is shifted is returned when .shift is used
        // the original array is altered
    // .unshift adds a value to the start of an array
        // value is added to the start of the array and the new array length is returned
        // original array is altered
    // .concat is used to combine two arrays together
        //example:
            // [1,2,3].concat([4,5,6]);
            // returns [1,2,3,4,5,6]
    // .join conbinds array elements into a string
        //needs to be given a separator
        //example:
            // const commands = ['eat', 'drink', 'be merry'];
            // const doEverything = commands.join(' and ');
            // returns 'eat and drink and be merry'
    // .indexOf returns the index of the first matching value
        //example:
            // const words = ['first', 'second', 'third'];
            // words.indexOf('second'), returns 1
    // .includes returns a true of false boolean depending on if the array contains the value
        //example: 
            // const words = ['first', 'second', 'third'];
            // words.includes('third'); returns true
    // .reverse reverses the order of the elements in the array
    // .splice
        //can be used to remove elements in an array (even in the middle of it)
        //can also be used to add element (even multiple) to the middle of an array
        //syntax: array/splice(start, deleteCount, addItem1, addItem2, ...)
        //example:
            // const instruments = ["guitar", "piano", "bass", "tuba", "triangle", "drums"];
            // instruments.splice(1, 2); // ["piano", "bass"]
                //splice starts at index 1 and removes 2 elements
            // instruments; // ["guitar", "tuba", "triangle", "drums"]
            // instruments.splice(2, 0, "trombone", "didgeridoo");
                //splice starts at index 2 and removes 0 elements, then inserts 2 elements atarting at index 2
            // instruments; // ["guitar", "tuba", "trombone", "didgeridoo", "triangle", "drums"]
            // instruments.splice(3, 3, "saxophone");
                //splice starts at index 3, removes 3 elements, and inserts 'saxophone'
            // instruments; // ["guitar", "tuba", "trombone", "saxophone"]
    // .sort sorts elements in a array
        //if strings, goes alphabetically
        //if single digit numbers, works fine
        //if multiple digit numbers, goes by first digit
            //example:
                //const biggerNums = [9, 57, 3100, 84, 101, 12];
                //biggerNums.sort(); // [101, 12, 3100, 57, 84, 9]
    // .slice creates copies of arrays or subsets of arays
        //syntax: const newArray = oldArray.slice(starting index, ending index(exclusive));
        //example:
        // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        //const weekend = days.slice(5);
            // ["Saturday", "Sunday"]
        //const week = days.slice(0, 5);
            // ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        //const midWeek = days.slice(1, 4);
            // ["Tuesday", "Wednesday", "Thursday"]
        //const weekCopy = days.slice();
            // ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//nested arrays
    //nested arrays can be accessed useing multiple index locations
    /*
        const gameBoard = [
            ["O", null, "X"],
            ["O", null, "X"],
            ["X", null, "O"]
        ];
        gameBoard[0][0] returns "O"
        gameBoard[1][1] returns null
        gameBoard[2][0] returns "X"
    */

/*
objects
*/
//objects are unordered
//access object values by their key
//object values can be variables

//accessing values in an object
    //to access an object value, must know key
    //dot notation: object.key; returns object's value for that key
    //bracket notation: object['key']: returns object's value for that key

//updating values in an object:
    //similar syntax to accessing values, but set them equal to the new value
    //example: obj.key = 'new value';
    //example: obj[key] = 'newer value';

//removing keys from an object
    // delete obj.key;

//storing values from an object
    //const variableName = obj.key;
    //const anotherVariableName = obj.key;

//.hasOwn property can be called on an object key to check if that key has a value
    //object.hasOwnProperty('key');  returns true of false depending on if there is a corresponding value for the key

/*
loops
*/
//for loops use indices to iterate
//for...of loops can iterate through objects directly
//while loops - another way to iterate over an object
        //example:
            // let i=0;
            //while (i <3) {
                //console.log(i);
                //i++;
            //};
//break and continue can be used to with if statements inside of loops to control if values need to be skipped or if the loops needs to be briken out of because a condition was met

//object.keys iterates over an object and returns an array or its keys
//object.values iterates over an object and returns an array of its values

//iterating over nested arrays
//example:
// const ticTacToe = [
//     ["X", "O", "X"],
//     ["X", "O", "O"],
//     ["X", "O", "X"]
//     ];

//     let xCount = 0;
//     for(let i = 0; i < ticTacToe.length; i++){
//         for(let j = 0; j < ticTacToe[i].length; j++){
//             if(ticTacToe[i][j] === "X"){
//                 xCount++;
//             }
//         }
//     }

/*
JS functions
*/

/*
forEach
*/
//steps that forEach takes
    //loops through an array
    //runs a callback function for each value in the array
    //returns undefined (always returns undefined)

/*
map (arrays)
*/
//map is used to create a new array by:
    //iterating over an existing array
    //running a callback frunction for each value in the existing array
    //adding the result of the callback to the new array
    //returns a new array of the same length as the original

//using map in a function
/*
function squareValues(array){
    return array.map(function(value){
    return value ** 2;
    });
    }
    squareValues([2,3,4]) // [4,9,16]
*/

/*
filter
*/
//creates a new array
//loops through an existing array
//runs a callback function on existing array
//if callback is true, pushes value to new array
//example:
    //function onlyInstructors(arr) {
    //    return arr.filter(function(value) {
    //      return arr.isInstructor;
    //    });
    //  }
    //  
    //  onlyInstructors([
    //    { name: "Colt", isInstructor: true },
    //    { name: "Beth", isInstructor: false },
    //    { name: "Daniel" }
    //  ]); // [{name: "Colt", isInstructor: true}]

/*
some/every
*/
//some
    //iterate over an array
    //run a callback on each velue
    //if the callback returns true for any (some) of the values on the array, returns true
    //otherwise returns false
    //example:
    //function hasAdmin(arr){
    //    return arr.some(function(value){
    //      return value.admin
    //    });
    //  }
    //  
    //  hasAdmin([
    //    {name: "Colt", admin: true},
    //    {name: "Poppy", admin: false}
    //  ]); // true
//every
    //iterate over an array
    //run a callback on each velue
    //if the callback returns true for all (every) of the values on the array, returns true
    //otherwise returns false
    //example:
    //function allVowels(str){
    //    return str.split('').every(function(value){
    //      return "aeiou".includes(value)
    //    });
    //  }
    //  allVowels('awesome') // false
    //  allVowels('aiaieoeoiu') // true

    //  function allIntegers(arr){
    //    return arr.every(Number.isInteger);
    //  }  
    //  allIntegers([1,2,3,4,4,4,4]) // true
    //  allIntegers([5,1,4,3,2.2]) // false

/*
find/findIndex
*/
//find
    //iterates over an array
    //runs a callback on each value
    //if the callback returns true for a value, return that value
    //only returns the first value that is true, use filter to gat all values that are true
    //example:
    //function findOddNumber(arr){
    //    return arr.find(function(value){
    //      return value % 2 !== 0
    //    });
    //  }
    //  
    //  findOddNumber([2,3,4,5]) // 3
//findIndex
    //works the same, but returns the index of the true value, not the value itself
    //otherwise returns -1

/*
reduce
*/
//accepts a callback function and an optional second parameter
//iterates through an array
//runs callback on each value in array
//number returned from the call back become the new value of the accumulator
//example:
    //let evens = [2,4,6,8,10];
    //evens.reduce(function(accumulator, nextValue){
    //  return accumulator + nextValue;
    //});
    /*
      2
      6
      12
      20
      30
    */





//--------------------The DOM------------------------






//selecting elements in the DOM
    //getElementById()
        //document.getElementById('main');
        //gives a single HTMLelement back
    //getElementByTagName();
        //returns a list of all of the element that match the requested tag
        //looks,but does not behave like an array
    //getElementByClassName();
        //returns all elements with that class
    //querySelector();
        //returns the first element with the CSS class passed in
    //querySelectorAll();
        //returns all element of the CSS class passed in

    //these are often used in conjunction with assigning the value of the entire selector action to a variable of a related name to be manipulated in JavaScript

/*
Modifying The DOM
*/
// .innerText
    //can be used to access the inner text of an html element
    //can also be used to change the inrrer text of an element once selected
    //example:
            //<section id="main-greeting">
            //    <article>Hello World!</article>
            //</section>

        //const mainGreeting = document.getElementById("main-greeting")
        //console.log(mainGreeting.innerText) // "Hello World!"
        //mainGreeting.innerText = "It's changed!"
// .textContent is similar to .innerText, but .textContent will also return any <script> or <style> tags that are in the selected html element
// .innerHTML can be used to change the html of a element that is selected
    //example:
        //<section id="main-greeting">
        //    <article>Hello World!</article>
        //</section>
    
        //const mainGreeting = document.getElementById("main-greeting")
        //mainGreeting.innerHTML = "<p>Just Changed!</p>"

//modifying styling
//select an element then assign it the value of a CSS property
    //const mainHeading = document.querySelector("h1")
    //mainHeading.style.color // returns the color
    //mainHeading.style.color = "red"  //changes the color
//the above can also be doe with background color: style.backgroundColor

//modifying attributes
    //all of the following attributes can also be changed in the DOM:
    //src, href, class, id, type, value
    //these attributes can be changed: example:
        //const firstInput = document.querySelector("input")
        //firstInput.setAttribute("type", "email")
            //attribute is the first parameter, the value is the second
    //some attributes (like class) can be modified directly: firstInput.id =

//manipulating classes
    //overwriting previous classes with setAttribute('class'):
        //const mainHeading = document.querySelector("h1");
        //mainHeading.setAttribute("class", "section-heading");
    //finding, adding, removing classes with .classlist:
        //const mainHeading = document.querySelector("h1")
        //mainHeading.classList // []
        //mainHeading.classList.add("top-heading") // ["top-heading"]
        //mainHeading.classList.remove("top-heading") // []
        //mainHeading.classList.toggle("top-heading") // true
        //mainHeading.classList.contains("top-heading") // true

//creating elements
    //const newDiv = document.createElement("div");
    //newDiv.innerText = "a brand new div!"
    //newDiv.style.color = "tomato"

//appending elements
    //call append on a parent element to pass children into it
    //example:
        //const ul = document.querySelector("ul");
        //const newLi = document.createElement("li");
        //newLi.innerText = "Hello!";
        //ul.append(newLi);

//removing elements
    //const ul = document.querySelector("ul");
    //ul.remove();

//elements can be accessed using their parent or child status
    //const foundDiv = document.querySelector("div")
    //foundDiv.parentElement // <section></section>
    
    //foundDiv.children // HTMLCollection(2) [p, ul]
    //foundDiv.firstElementChild // <p>Here is a paragraph inside a div!</p>
    //foundDiv.lastElementChild // <ul></ul>

/*
JavaScript events
*/
//three ways to use elements:
    //attach function to the element in html
    // in the HTML: <h1 onclick="runClickHandler()"> Hello World </h1>
        //function runClickHandler(){
          //console.log("You just clicked the h1 element!";
        //})

    //attach a function to a JavaScript element
        //const h1 = document.querySelector("h1");
        //h1.onclick = function(){
            //console.log("You just clicked the h1 element!";
        //}

    //use an eventListener
        //const h1 = document.querySelector("h1");
        //h1.addEventListener("click", function(){
            //console.log("You just clicked the h1 element!";
        //})

//accessing the event object


// Need to finish events notes











// ----------------------ES2015----------------------------
