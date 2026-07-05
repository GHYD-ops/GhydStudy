function copyText(elementId, btn) {
    const text = document.getElementById(elementId).innerText;

    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    btn.innerText = "✓";
    btn.style.backgroundColor = "#4CAF50";
    btn.blur();

    setTimeout(function() {
        btn.innerText = "نسخ";
        btn.style.backgroundColor = "black";
    }, 2000);
}