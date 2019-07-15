# ⏲️ Call-timer

Small utility library to check function execution time info on browser.

Supports IE9+

## Installation
```sh
$ npm install -D call-timer
```

## Quick Start
```js
function appendChild(index) {
  const div = document.createElement('div');
  div.innerHTML = index.toString();
  document.body.appendChild(div);
}

for (var i = 0; i < 1000; i++) {
  CallTimer.call(appendChild, i);
}

CallTimer.printAll();
```

## Functions
- **CallTimer.call(function, args)**: Call a function to check its execution time.
- **CallTimer.reset()**: Reset all execution time records.
- **CallTimer.printAll()**: Print all called function's performance info.
- **CallTimer.print(function | name of function)**: Print single function's performance info.
- **CallTimer.min(function | name of function)**: Get minimum execution time of a function.
- **CallTimer.max(function | name of function)**: Get maximum execution time of a function.
- **CallTimer.median(function | name of function)**: Get median of execution time of a function.
- **CallTimer.mean(function | name of function)**: Get mean of execution time of a function.
- **CallTimer.count(function | name of function)**: Get count of how many times a function called.
