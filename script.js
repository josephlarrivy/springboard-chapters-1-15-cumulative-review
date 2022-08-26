//Cumulative review of all JavaScript

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
    //let variables can be declared, but not assigned a value
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
    //a string's characters can be be callex from their inxed, but not changed
        //let name = 'Joe';
        //name[0]; returns 'J'
    //name.length; returns 3

//string method: slice
    //strings can be sliced
        //let idk = 'I have no idea what I'm doing';
        //idk.slick(0,13); returns 'I have no idea';

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
    // .join conbines array elements into a string
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
    // .slice screate copie of arrays or subsets of arays
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