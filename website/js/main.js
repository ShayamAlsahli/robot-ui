console.log("Hi");

function onMotorChange(motorName) {
  let element = document.getElementById(motorName);
  let spanElement = element.parentElement.getElementsByClassName('motorValue')[0];
  spanElement.innerText = element.value;
  console.log(motorName, element.value);
}

function get() {
  fetch('/motor', { method: 'get' })
    .then(res => res.json())
    .then(result => {
      for (x = 1; x <= 6; x++) {
        let element = document.getElementById('motor' + x);
        let spanElement = element.parentElement.getElementsByClassName('motorValue')[0];
        element.value = result['motor' + x];
        spanElement.innerText = result['motor' + x];
      }
    });
}

get();