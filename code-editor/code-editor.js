function run() {
    let htmlcode = document.getElementById("html").value;
    let csscode = document.getElementById("css").value;
    let jscode = document.getElementById("js").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlcode + "<style>" + csscode + "</style>";
    output.contentWindow.eval(jscode);
}

// Theme toggle logic
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Toggle Theme';
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Toggle Theme';
    }
});
