let buttons = document.getElementsByTagName('button');
let calc = document.getElementById('display');

for (let thisBtn of buttons) {
  thisBtn.addEventListener('click', function () {
    if (this.innerHTML == '=') calc.value = eval(calc.value);
    else if (this.innerHTML == 'C') calc.value = '';
    else calc.value += this.innerHTML;
  });
}
