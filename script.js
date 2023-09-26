const buttons = document.querySelectorAll(".buttons");
const re = document.getElementById("re");
let buttonText = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonValue = button.innerText;
    console.log(buttonValue)
    if (buttonValue === "=") {
      try {
        const result = eval(buttonText); // Using JavaScript's built-in eval function
        buttonText = result;
        re.value = buttonText;
        console.log(result);
      } catch (error) {
        console.error("Error:", error);
        re.value = "Error";
      }
    } else if (buttonValue === "c") {
      buttonText = "";
      re.value = "";
    } else {
      buttonText += buttonValue;
      re.value = buttonText;
    }
  });
});