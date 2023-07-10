# Notes

## Description

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

```
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
```

## Domain Discussion

- input: positive number (integer)
- output: number of times the input must multiply its digits until it reachs a single digit (integer)
- RULES:
    - separate the digits of the input
    - count digits
    - if not equal to one
    - multiply the separated digits
    - repeat until number of digits after multiplication equal to 1
    - count the number of times the multiplication is required to get to 1 digit

---

**Label**  
✅ done 🚧 WIP ❌ ERROR 🐛 BUG 

---

TODO:

# Pomodoro 1 🍅:

- initial setup
    - update README ✅
    - update NOTES ✅
    - update package.json ✅
    - update code/test files ✅
- domain discussion ✅
- perform the 'canary' test just to check if the structure works construction ✅
- it should return 0 for input equal to 4 ✅
- it should return 1 for input equal to 10 🚧

# Pomodoro 2 🍅:
- (on hold) it should return 1 for input equal to 10 🚧
- created a new function `separateDigits` to split the input into digits and return an array ✅
- `separateDigits`: it should return [4] for input equal to 4 ✅
- `separateDigits`: it should return [1, 0] for input equal to 10 ✅
- it should return 1 for input equal to 10 ✅
- it should return 3 for input equal to 39 ✅
- it should return 4 for input equal to 999 ✅