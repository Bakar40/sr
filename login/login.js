var count = 2;
var users = {
    "admin": "1234",
    "user1": "5678",
    "user2": "91011",
    "b":"b",
    "s":"s",
};

document.getElementById('submitBtn').addEventListener('click', function (event) {
    event.preventDefault();
    validate();
});

function validate() {
    var user= document.loginForm.username.value;
    var password = document.loginForm.password.value;
    var valid = false;

    if (users[user] === password) {
        valid = true;
    }

    if (valid) {
        // If login is successful, store user information in session storage
        sessionStorage.setItem('isLoggedIn', true);
        sessionStorage.setItem('username', user);

        // Redirect user to dashboard based on user account
        if (user === "admin" || user === "b") {
            window.location.href = '/dashboard/main.html';
        } else {
            window.location.href = '/dashboard/staff.html';
        }    } else {
        var again = "محاولة";
        if (count === 1) {
            again = "محاولة واحدة";
        }
        if (count >= 1) {
            alert("اسم المستخدم أو كلمة المرور غير صحيحة. لديك " + count + " " + again + " متبقية.");
            count--;
        }
    }
}