
$(document).ready(function () {
    $("#loginButton").click(function () {
        $("#loginModal").modal("toggle");
    })
});

// user credentials

const email_user = [
    'a@prism.com', 'b@prism.com', 'c@prism.com', 'd@prism.com', 'e@prism.com'
]

const password_user = [
    12345, 22345, 32345, 42345, 52345
]

const email_guest = [
    'f@prism.com', 'g@prism.com', 'h@prism.com', 'i@prism.com', 'j@prism.com'
]

const password_guest = [
    62345, 72345, 82345, 92345, '02345'
]


document.getElementById('submit').onclick = function (e) {
    console.log(document.getElementById('email').value);
    console.log(document.getElementById('password').value);
    console.log(document.getElementById('visitor').value);
    let email_index_user = email_user.indexOf(document.getElementById('email').value)
    let email_index_guest = email_guest.indexOf(document.getElementById('email').value)
    console.log(email_index_user);
    console.log(password_user[email_index_user]);
    console.log(password_user[email_index_user] == document.getElementById('password').value)
    console.log(email_index_guest);
    console.log(password_guest[email_index_guest]);
    console.log(password_guest[email_index_guest] == document.getElementById('password').value)

    if (document.getElementById('visitor').value === 'user') {
        if (email_index_user != -1) {
            if (password_user[email_index_user] == document.getElementById('password').value) {
                // alert('login success!')
                location.href = 'user.html'
            }
            else {
                alert('wrong credential')
                // location.href = 'index.html'
            }
        }
        else {
            alert('invalid email')
            // location.href = 'index.html'
        }
    } else if (document.getElementById('visitor').value === 'guest') {
        if (email_index_guest != -1) {
            if (password_guest[email_index_guest] == document.getElementById('password').value) {
                // alert('login success!')
                location.href = 'guest.html'
            }
            else {
                alert('wrong credential')
                // location.href = 'index.html'
            }
        }
        else {
            alert('invalid email')
            // location.href = 'index.html'
        }
    } else {
        alert('wrong')
    }

}
document.getElementById('copyright').innerHTML = `<b>COPYRIGHT ${new Date().getFullYear()} © PRISM</b>`
