/* show header */
let i = 1,
    header = document.getElementById("id-head"),
    header1 = document.getElementById("id-head1"),
    mainheader = document.getElementById("main-id-head");

function  functionShowheader() {
    if ((i / 2) % 1 != 0) {
        mainheader.style.height="100vh";
        mainheader.style.backgroundColor = "#555";
        mainheader.style.color = "#fff";
        header.classList.add("show");
        header1.classList.add("show");
        i++;
    } else {
        mainheader.style.height="0";
        mainheader.style.backgroundColor = "transparent";
        mainheader.style.color = "#000";
        header.classList.remove("show");
        header1.classList.remove("show");
        i++;
    }
}