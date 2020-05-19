# _Mr Roboger's Translator_

#### _Web application that accepts text input and translates it to robotese, 05/19/2020_

#### By _**Mariel Hamson**_

## Description & Specs

_This web app will provide output in a pseudo-robot sounding language following these specs:_
  * The user is presented with a field to enter a whole number. The program will take that number and return the range of integers from 0 to the given number. 
      Input: 4
      Output: 0, 1, 2, 3, 4
      
      The program will substitute robot phrases for certain numbers in the range following these rules: 

  * If the user enters a number that is or contains the digit 1, all digits are replaced with "Beep!"
      Input: 1
      Output: 0, Beep!
  * If the user enters a number that is or contains the digit 2, all digits are replaced with "Boop!"
      Input: 2
      Output: 0, Beep!, Boop!
  * If the user enters a number that is or contains the digit 3, all digits are replaced with "Won't you be my neighbor?"
      Input: 3
      Output: 0, Beep!, Boop!, Won't you be my neighbor
  * If the user enters a number that contains multiples of the above (a 3 and a 2, or a 1 and a 3), the larger number rule will apply only. 
      Input: 12
      Output: 0, Beep, Boop, Won't you be my neighbor, 4, 5, 6, 7, 8, 9, Beep, Beep, Boop
  * If the user enters a non-numerical character, the program returns an error message.
      Input: Cool
      Output: Robots only understand numbers at this time.

## Setup/Installation Requirements

* Web browser: Chrome-preferred

## Known Bugs

* None

## Support and contact details

_Please contact us if you have any feedback or would like to contribute to the code._

## Technologies Used

* HTML
* CSS/Bootstrap
* Javascript/jQuery

### License

* Mit license

Copyright (c) 2020 **_Mariel Hamson_**