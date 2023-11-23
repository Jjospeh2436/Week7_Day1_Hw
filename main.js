//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", 
"Shadow", "Potato", "Bart"]


    
const matchName = (arr) => {
    arr.forEach(
        name => {
            for(let i = 0; i < dogString.length; i++){
                if(name == dogString[i]) {
                    return("Matched dog_name")
                } else {
                    return("That's a damn cat")
                }
            }
        }
    )
}

console.log(matchName(dogNames))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/

arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]

function evenIndex(array) {
    for(i = 0; i < array.length; i++){
        if (i % 2 == 0){
            array.splice(i, 1, "even index")
        }
    }
    return array
}

console.log(evenIndex(arr))

//Codewars 1
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position "

function foundNeedle(array) {
    for(i = 0; i < array.length; i++){
        if(i == "needle"){
            return `found the needle at position ${i}`
        }
    }
}

//Codewars2
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function check(bool){
    if(bool = true){
        return "Yes"
    } else{
        return "No"
    }
}
