var str = "<sup>2</sup>";
const myProb1 = ( ) => {
    return "(x - 6)" + str + " + " + "(y - 7)" + str + " = " + "25";
}
const myCalc1 = ( ) => {
    document.getElementById("demo").innerHTML = myProb1( );
};
// STUDENT PRACTICE PROBLEM #1
const myProb2 = ( ) => {
    return "(x + 4)" + str + " + " + "(y + 5)" + str + " = " + "9";
}
const myCalc2 = ( ) => {
    document.getElementById("demo2").innerHTML = myProb2( );
};
// STUDENT PRACTICE PROBLEM #2
const myProb3 = ( ) => {
    return ("Notice in this problem the normal subtract signs inside the parentheses are now addition signs. <br> When 'Step 1' is complete and you have substituted the variables into the equation, <br> (x - h) becomes (x - (-4)) and (y - k) becomes (y - (-5)). In Math, subtraction of a negative number is equivalent to adding the number, so the sign is changed to addition. <br><br>  **Careful! This step is mandatory as part of 'Step 2': Simplify inside the parentheses if possible, and square the value of the radius to get the final answer. <br> **RULE** <br> Each time a ordered pair has a negative coordinate the subtract sign will turn to addition.");
}
const myCalc3 = ( ) => {
    document.getElementById("demo3").innerHTML = myProb3( );
};
// CLOSE BUTTON FOR DETAILED SOLUTION PROBLEM #2
const myProb4 = ( ) => {
    return " ";
}
const myCalc4 = ( ) => {
    document.getElementById("demo3").innerHTML = myProb4( );
};
// STUDENT PRACTICE PROBLEM #3
const myProb5 = ( ) => {
    return  "x" + str + " + " + "(y + 8)" + str + " = " + "64";
}
const myCalc5 = ( ) => {
    document.getElementById("demo5").innerHTML = myProb5( );
};

// STUDENT PRACTICE PROBLEM #4
const myProb6 = ( ) => {
    return  "(x - 15)" + str + " + " + "(y + 12)" + str + " = " + "49";
}
const myCalc6 = ( ) => {
    document.getElementById("demo6").innerHTML = myProb6( );
};