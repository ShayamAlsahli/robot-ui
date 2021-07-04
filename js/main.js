console.log("Hi");

function onMotorChange(motorName) {
  let element = document.getElementById(motorName);
  let spanElement = element.parentElement.getElementsByClassName('motorValue')[0];
  spanElement.innerText = element.value;
  console.log(motorName, element.value);
}