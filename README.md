A quick way to generate a random alpha-(and/or)-numeric strings of any length.
I think I probably sourced it from StackOverflow or some forum thread, but I use it a lot - thought it might be worth sharing.

`__npm install randomString__`

All functions include uppercase and lowercase letters. It's easy to adjust the potential characters yourself.

__Examples__
```javascript
randomString.string(5); //returns pure alphabet string 5 letters long

randomString.number(2); //returns 2 digit number

randomString.alphanumeric(32); //returns alphanumeric (letters and numbers) string of length 32
```