let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
even_numbers = []
odd_numbers = []

for (let i=0 ; i<  numberArray.length; i++){
    if (numberArray[i] % 2 === 0){
        even_numbers.push(numberArray[i]);
    }
    else{
        odd_numbers.push(numberArray[i]);

    }
}

document.write("Even number");
document.write(even_numbers.join(", ") + " <br>");

document.write("Odd Number");
document.write(odd_numbers.join(", "));

