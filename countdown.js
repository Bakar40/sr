
filterSelection("valid")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


const filters = document.querySelectorAll('.filter-btn');
const packages = document.querySelectorAll('.package');

// Add click event listeners to the filter buttons
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const validity = filter.getAttribute('data-validity');
    packages.forEach((package) => {
      if (validity === 'all' || package.getAttribute('data-validity') === validity) {
        package.style.display = 'block';
      } else {
        package.style.display = 'none';
      }
    });
  });
});



// Update the countdown every second
var countdown = setInterval(function() {
  // Get all elements with "offer-timer" class
  var timers = document.querySelectorAll('.offer-timer');

  // Loop through all the timers
  for (var i = 0; i < timers.length; i++) {
      var timer = timers[i];

      // Get the end time for the current timer
      var endTime = new Date(timer.getAttribute('data-end-time')).getTime();

      // Get the current time
      var now = new Date().getTime();

      // Calculate the time remaining
      var timeRemaining = endTime - now;

      // If the countdown has ended, replace the "filterDiv valid" class with "filterDiv expired" and display "EXPIRED"
      if (timeRemaining < 0) {
          timer.innerHTML = "EXPIRED";
          timer.closest('.filterDiv').classList.add('expired');
          timer.closest('.filterDiv').classList.remove('valid');
          // Auto click on the "Valid" button after the countdown has ended
          document.querySelector('.btn.active').click();
      } else if (timeRemaining === 0) {
          // Redirect the user to a specific URL after 5 seconds
          setTimeout(function() {
            window.location.href = "https://example.com";
          }, 5000);
      } else {
          // Otherwise, update the countdown display
          var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
          var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
          // Update the timer to display the remaining time
          timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
      }
  }
}, 1000);

