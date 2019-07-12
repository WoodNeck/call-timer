function appendChild(index) {
  const div = document.createElement('div');
  div.innerHTML = index.toString();
  document.body.appendChild(div);
}

for (var i = 0; i < 1000; i++) {
  CallTimer.call(appendChild, i);
}

CallTimer.printAll();
