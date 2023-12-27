function isPalindrome(input) {
  const inputFiltered = input
    .toLowerCase()
    .split("")
    .filter((ch) => ch.match(/[a-z0-9]/));
  if (inputFiltered.join("") == inputFiltered.toReversed().join("")) {
    return true;
  } else {
    return false;
  }
}
