let passwordInput = document.querySelector('.password');
let progressBar = document.querySelector('.progress .bar');

passwordInput.addEventListener('keyup', () => {
  let strength = 0;

  strength += renderRule(
    ".low-upper-case",
    passwordInput.value.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)
  );

  strength += renderRule(
    ".one-number",
    passwordInput.value.match(/([0-9])/)
  );

  strength += renderRule(
    ".one-special-char",
    passwordInput.value.match(/([#@%&*!_])/)
  );

  strength += renderRule(
    ".min-char",
    passwordInput.value.length >= 6,
  );

  let pct = Math.floor((strength / 4) * 100);
  progressBar.style.width = `${pct}%`;

  if(pct === 100) {
    alert('Campo preenchido com sucesso!! Parabéns.');
  };

  let ruleArea = document.querySelector(".low-upper-case");
  if (passwordInput.value.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    // renderRule('.low-upper-case', true);
    ruleArea.querySelector(".valid-point").style.backgroundColor = "green";
  } else {
    // renderRule('.low-upper-case', false);
    ruleArea.querySelector(".valid-point").style.backgroundColor = "red";
  };

});

function renderRule(ruleClass, valid) {
  let ruleArea = document.querySelector(ruleClass);
  ruleArea.querySelector(".valid-point")
    .style.backgroundColor = valid ? "green" : "red";
  return valid ? 1 : 0;
};