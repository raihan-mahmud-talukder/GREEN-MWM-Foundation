
$(document).ready(function () {
    $("#loginButton").click(function () {
        $("#loginModal").modal("toggle");
    })
});

document.getElementById('submit').onclick = function (e) {
    if (document.getElementById('visitor').value === 'user') {
        location.href = 'user.html'
    }
    else {
        location.href = 'guest.html'
    }

}


document.getElementById('copyright').innerHTML = `<b>COPYRIGHT ${new Date().getFullYear()} © PRISM</b>`