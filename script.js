const inputEl = document.getElementById("text-input");
const btnEl = document.getElementById("check-btn");
const resultEl = document.getElementById("result");

btnEl.addEventListener("click", () => {
  if (!inputEl.value) {
    alert('Please input a value')
  } else if (isPalindrome(inputEl.value)) {
    resultEl.innerHTML = `${inputEl.value} is a palindrome`;
  } else {
    resultEl.innerHTML = `${inputEl.value} is not a palindrome`;
  }
});

function isPalindrome(input) {
  const inputFiltered = input
    .toLowerCase()
    .split("")
    .filter((ch) => ch.match(/[a-z0-9]/));
  return inputFiltered.join("") === inputFiltered.toReversed().join("")
    ? true
    : false;
}
