function printSubsequence(input, output)
{
    // Base Case
    // if the input is empty print the output string
    if (input.length==0) {
       console.log( output);
        return;
    }
 
    // output is passed with including
    // the Ist character of
    // Input string
    printSubsequence(input.substring(1), output + input[0]);
 
    // output is passed without
    // including the Ist character
    // of Input string
    printSubsequence(input.substring(1), output);
}

printSubsequence("abcd", "")