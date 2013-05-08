A quick way to generate a random alpha-(and/or)-numeric strings of any length.
I think I probably sourced it from StackOverflow or some forum thread, but I use it a lot - thought it might be worth sharing.

__`npm install generaterandom`__

All functions include uppercase and lowercase letters. It's easy to adjust the potential characters yourself.

__Examples__
```javascript
generaterandom.string(5); //returns pure alphabet string 5 letters long

generaterandom.number(2); //returns 2 digit number

generaterandom.alphanumeric(32); //returns alphanumeric (letters and numbers) string of length 32
```