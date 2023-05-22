function debounce(func, delay) {
  let timeoutid;
  return function (...args) {
    if (timeoutid) {
      clearTimeout(timeoutid);
    }
    timeoutid = setTimeout(() => {
      func.call(this, ...args);
    }, delay);
  };
}

const myInput = document.getElementById("input-text");

function findSuggestions(e) {
  console.log("suggestion for", e.target.value);
}

const decoratedFindSuggestions = debounce(findSuggestions, 300);

myInput.addEventListener("input", decoratedFindSuggestions);
