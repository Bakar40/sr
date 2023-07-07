"use strict";

function ownKeys(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        n && (o = o.filter(function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
        })), t.push.apply(t, o)
    }
    return t
}

$("[data-toggle='modal']").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
});

$("[data-toggle='modal']").on("contextmenu", function(e) {
    e.preventDefault();

    $("#homeAlert").removeClass("in").show();
    $("#homeAlert").delay(1500).addClass("in").fadeOut(1000);
})

function _objectSpread(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? ownKeys(Object(t), !0).forEach(function(n) {
            _defineProperty(e, n, t[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        })
    }
    return e
}

function _defineProperty(n, e, t) {
    return e in n ? Object.defineProperty(n, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[e] = t, n
}
window.ndzn_core = {
    server_ip: "moggaming",
    discord_invite_link: "https://discord.gg/byDuefKBdE",
    discord_api_key: "267615559712112640"
}, window.forceChangeIp = function(n) {
    window.ndzn_core.server_ip = n, $(".ndzn-js--ip").each(function() {
        $(this).text(n)
    })
}, $(function() {
    window.location.pathname.startsWith("/how-to-play-google/") && window.forceChangeIp("go.ArchonHQ.net")
}), new ClipboardJS(".ndzn-js--copyip", {
    text: function() {
        return ndzn_core.server_ip
    }
}).on("success", function(n) {
    swal(ndzn_core.server_ip, "Copied to Clipboard")
}), $(".ndzn-js--playercount").length && ndzn_core.server_ip.length && $.get("https://mcapi.us/server/status?ip=" + ndzn_core.server_ip, function(n) {
    if ("success" !== n.status) return null;
    $(".ndzn-js--playercount").html(n.players.now).attr("style", null)
}), $(".ndzn-js--discordcount").length && ndzn_core.discord_api_key.length && (window.onerror = function(n, e, t) {
    return "Uncaught TypeError: Cannot read property 'removeClassTransitioned' of undefined" === n
}, $.get("https://discordapp.com/api/guilds/" + ndzn_core.discord_api_key + "/embed.json", function(n) {
    $(".ndzn-js--discordcount").html(n.presence_count).fadeIn("fast")
})), window.NDZN_VOTE_LINKS || (window.NDZN_VOTE_LINKS = [{
    label: "Backup 1",
    url: "https://forms.gle/L3s2ez11mUqUkmcC9"
}]), $("#ndzn-vote-v2").length && (window.ndznVoteV2 = new Vue({
    el: "#ndzn-vote-v2",
    data: {
        links: window.NDZN_VOTE_LINKS.map(function(n) {
            return n.url
        }),
        activeLink: !1,
        iframeLoading: !1
    },
    methods: {
        loadAnimation: function() {
            var n = this;
            this.iframeLoading = !0, setTimeout(function() {
                n.iframeLoading = !1
            }, 700)
        }
    },
    watch: {
        activeLink: function() {
            this.loadAnimation()
        }
    },
    mounted: function() {
        this.loadAnimation(), this.activeLink = this.links[0]
    }
})), $("#ndzn-mobile-vote-links").length && (window.ndznMobileVoteLinks = new Vue({
    el: "#ndzn-mobile-vote-links",
    data: function() {
        return {
            links: window.NDZN_VOTE_LINKS
        }
    }
})), $("#ndzn-giveaways").length && (Vue.component("countdown", VueCountdown), window.ndznGiveawaysPage = new Vue({
    el: "#ndzn-giveaways",
    delimiters: ["[[", "]]"],
    computed: {
        giveaways: function() {
            return window.ndznGiveaways.map(function(n) {
                return _objectSpread({}, n, {
                    remaining: 1e3 * (n.end - Math.floor(Date.now() / 1e3))
                })
            })
        }
    }
}));

		function playSound() {
			var audio = new Audio('/sounds/sound.mp3');
			audio.play();
		}

        function playSound1() {
			var audio = new Audio('/sounds/discord-notification.mp3');
			audio.play();
		}

        function playSound2() {
			var audio = new Audio('/sounds/auw.mp3');
			audio.play();
		}

        function playSound3() {
			var audio = new Audio('/sounds/final.mp3');
			audio.play();
		}

        

       // Gift Codes and their Discount Percentages
const giftCodes = {
    '1': 10,
    '2': 20,
    '3': 30,
    'sky': 5,
    'hi':3

  };
  
  // Get the gift code input field, confirm button, and discount percentage element
  const giftCodeInput = document.querySelector('#giftCodeInput');
  const confirmButton = document.querySelector('#confirmButton');
  const discountPercentage = document.querySelector('#discountPercentage');
  
  // Add an event listener to the confirm button
  confirmButton.addEventListener('click', () => {
    // Get the entered gift code
    const giftCode = giftCodeInput.value;
  
    // Check if the gift code is valid
    if (giftCodes.hasOwnProperty(giftCode)) {
      // Get the discount percentage from the code
      const discountPercentageValue = giftCodes[giftCode]; // Get the discount percentage
  
      // Apply the discount to the relevant div element(s)
      const priceBeforeDiscounts = document.querySelectorAll('.priceBeforeDiscount');
      priceBeforeDiscounts.forEach((priceDiv) => {
        // Check if the discount has already been applied
        if (!priceDiv.hasAttribute('data-discount-applied')) {
          // Get the original price from the price span element
          const originalPrice = parseFloat(priceDiv.querySelector('.price').textContent);
          // Apply the discount
          const discountedPrice = originalPrice * (1 - (discountPercentageValue / 100));
          // Update the price span element with the discounted price
          priceDiv.querySelector('.price').textContent = discountedPrice.toFixed(2) + ' L.E (-' + discountPercentageValue + '%)';
          // Mark the div as having had the discount applied
          priceDiv.setAttribute('data-discount-applied', 'true');
        }
      });
  
      // Display the discount percentage
      discountPercentage.style.display = 'block';
      discountPercentage.querySelector('span').textContent = discountPercentageValue + '% Sale';
      document.querySelector('.giftCode input').style.display = 'none';
      // Disable the input field
      giftCodeInput.disabled = true;
      
      // Hide the confirm button
      confirmButton.style.display = 'none';
    } else {
      // If the gift code is invalid, show an error message
      alert('Invalid gift code!');
    }
  });
  