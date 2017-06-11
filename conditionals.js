// The JS code below provides comment about an age declared below

age = 21

if(age < 0) {
    console.log("Error on age... no such thing as a negative age dildo!!!")
} else if (age == 21) {
    console.log("Happy 21th B-DAY!!!")
} else if (age % 2 == 1 && !((Number.isInteger(Math.pow(age, 0.5))))) {
    console.log("YOUR AGE IS ODD... as in the ODD NUMBER... NOT WEIRD")
} else if (Number.isInteger(Math.pow(age, 0.5))) {
    console.log("Your age is a perfect square... and it's hip to be square!!!")
} else {
    console.log("Nothing special about your age...")
}

// Running the JS console will return "Happy 21th B-DAY!!!"