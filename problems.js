// 1.) Define a function called oldestPerson that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person

console.log('=-=-=-=-=-=-=-=-==-=Q1=-=-=-=-=')

var person = {
  'Chuck': 22,
  'Brian': 46,
  'Isaac': 22
}
function oldestPerson (obj) {
  var oldestAge = -Infinity
  var person
  for (var key in obj) {
    if (obj[key] > oldestAge) {
      oldestAge = obj[key]
      person = key
    }
  } return person
}

console.log(oldestPerson(person))

// 2.) Define a function called longestWord that takes a string and returns the longest word in the string.
console.log('=-=-=-=-=-=-=-=-==-=Q2=-=-=-=-=')

function longestWord (str) {
  var wordsSplit = str.split(' ')
  var longWord = wordsSplit[0]
  for (var i = 0; i < wordsSplit.length; i++) {
    if (wordsSplit[i].length > longWord.length) {
      longWord = wordsSplit[i]
    }
  } return longWord
}

console.log(longestWord('hello i have a pet girraffe'))

// 3.) Refactor the longestWord function so that it ignores punctuation.

console.log('=-=-=-=-=-=-=-=-==-=Q3=-=-=-=-=')

function longestWord (str) {
  var wordsSplit = str.replace(/,/gi, '').split(' ')
  var longWord = wordsSplit[0]
  for (var i = 0; i < wordsSplit.length; i++) {
    if (wordsSplit[i].length > longWord.length) {
      longWord = wordsSplit[i]
    }
  } return longWord
}

console.log(longestWord('hello i, have,,, a pet gi,,rraffe'))

// 4.) Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.

console.log('=-=-=-=-=-=-=-=-==-=Q4=-=-=-=-=')

function factorial (num) {
  console.log(num)
  var factNum = 1
  for (var i = num; i > 0; i--) {
    factNum =  factNum * i
  } return factNum
}

console.log(factorial(5))

// 5.) Bonus: Write a function called palindrome that takes a string as an argument. Return true if the string is a palindrome, otherwise return false.

console.log('=-=-=-=-=-=-=-=-==-=Q5=-=-=-=-=')

function palindromic (str) {
  var newStr = str.split(' ').join('').split(',').join('').toLowerCase()
  var n = newStr.length

  console.log(newStr)
  for (var i = 0; i < newStr.length; i++) {
    if (newStr.charAt(i) !== newStr.charAt(n - i - 1)) {
      return false
    }
  }
  return true
}

console.log(palindromic('Taco,   Cat'))
