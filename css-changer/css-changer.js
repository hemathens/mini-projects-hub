const inputs = document.querySelectorAll(".css-controller input");
const cssOutput = document.getElementById("css-output");
const toggleBtn = document.getElementById("toggle-dark");
const saveBtn = document.getElementById("save-css");
const uploadInput = document.getElementById("upload");
const targetImg = document.getElementById("target-img");

inputs.forEach(input => input.addEventListener("input", update));
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
saveBtn.addEventListener("click", () => {
  const css = `
    --base: ${getComputedStyle(document.documentElement).getPropertyValue('--base')};\n
    --width: ${getComputedStyle(document.documentElement).getPropertyValue('--width')};\n
    --border-radius: ${getComputedStyle(document.documentElement).getPropertyValue('--border-radius')};\n
    --padding: ${getComputedStyle(document.documentElement).getPropertyValue('--padding')};\n
    --blur: ${getComputedStyle(document.documentElement).getPropertyValue('--blur')};
  `;
  cssOutput.value = css;
  cssOutput.select();
  document.execCommand("copy");
  alert("CSS copied to clipboard!");
});

uploadInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      targetImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

function update() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
} 
