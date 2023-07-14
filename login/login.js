var count = 2;
var users = {
    "admin": "1234",
    "user1": "5678",
    "user2": "91011",
    "b": "b",
    "s": "s",
    "Youssef ": "j9t05271",
    "Za3TaR": "22062002",
    "turbo": "turbo@1208",
    "yahia_22": "qqwweerrttyy77",
    "Sha_1": "South_band9",
    "wefavbuzz": "buzz",
    "devil54a": "11QQWWEE",
    "Mando1": "man_sultan",
    "Foster1": "Fost_tester",
    "Gika1": "ibra_gika1",
    "Moha1": "DR_Moha1",
    "Mohsamy": "Moh_Samy1",
    "Mor3eb1": "Mor3b_Lila",
    "Nour1": "Nour_yo1",
    "Thegamer1": "The_Gam101",
    "Van_Gogh1": "Gogh_gosh1",
    "za3em_1": "Za3em_OP1",
    "Ayman_1": "yo_ayman_1",
    "Sha_2": "South_band10",
    "R": "Remon@172004",
    "7arfosh_1": "7arfosh_sell_01",
};

document.getElementById('submitBtn').addEventListener('click', function (event) {
    event.preventDefault();
    validate();
});

function validate() {
    var user = document.loginForm.username.value;
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
        if (user === "Sha_2" || user === "Za3TaR") {
            window.location.href = '/dashboard/main.html';
        } else {
            window.location.href = '/dashboard/staff.html';
        }
    } else {
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