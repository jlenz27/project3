# _John Lenz Project Number 3_

#### By _**John Lenz**_

#### _A website that takes in a number from the user and returns an string that is manipulated based of certain rules_

## Technologies Used
*_Javascript_
* _HTML_
* _CSS_


## Description

_This website takes a user number and creates an array from 0 to the input number.The array is then manipulated so that if a number has a one it is changed to "beep" if it has a two it is changed to "boop and if it has a three it is changed to "wont you be my neighbor. There is a manipulation heiarchy so that multiple cases are only met with a single output_

## GitHub Link
_https://jlenz27.github.io/Portfolio/_

## Setup/Installation Requirements
* _Download Repository
* _Open the index.html with a browser that supports HTML_
*_Input a number and click the submit button_



## Known Bugs

* _There are no known bugs_


## License


_If you have any issues running this program or wish to contact me please email me at John.lenz29@gmail.com_

Copyright (c) 1/20/2023 John Lenz(s)


Test:
Describe: makeBeepCalculations()

Test: "It should 0 to input number."
Code:
const number1 = 5;
makeBeepCalculations(number1);
Expected Output: 0 ,1, 2, 3, 4, 5


Test:
Describe: makeBeepCalculations()

Test: "replace 1 with beep."
Code:
const number1 = 5;
makeBeepCalculations(number1);
Expected Output: 0 ,beep, 2, 3, 4, 5

Test:
Describe: makeBeepCalculations()

Test: "replace 2 with boop."
Code:
const number1 = 5;
makeBeepCalculations(number1);
Expected Output: 0 ,1, boop, 3, 4, 5

Test:
Describe: makeBeepCalculations()

Test: "replace 3 with Wont you be my neighbor."
Code:
const number1 = 5;
makeBeepCalculations(number1);
Expected Output: 0 ,1, 2, wont you be my neighbor, 4, 5