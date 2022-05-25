
$(document).ready(function () {
    $("#loginButton").click(function () {
        $("#loginModal").modal("toggle");
    })
});
document.getElementById('copyright').innerHTML = `<b>COPYRIGHT ${new Date().getFullYear()} © PRISM</b>`