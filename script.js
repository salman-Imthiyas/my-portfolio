function scrollToSection(sectionId) {
  const offset = -30; // adjust as per your fixed sidebar/header height
  const target = document.getElementById(sectionId);
  const topPosition = target.offsetTop - offset;

  window.scrollTo({
    top: topPosition,
    behavior: "smooth",
  });
}

// Toggle color options
const settingsIcon = document.getElementById("settings-icon");
const colorOptions = document.getElementById("color-options");
settingsIcon.addEventListener("click", () => {
  colorOptions.style.display =
    colorOptions.style.display === "none" ? "flex" : "none";
});

// Change theme color
document.querySelectorAll(".color-circle").forEach((circle) => {
  circle.addEventListener("click", () => {
    const selectedColor = circle.getAttribute("data-color");
    document.documentElement.style.setProperty("--main-color", selectedColor);
  });
});

(function () {
  emailjs.init("SLpanI1VaWHCfuYE2"); // 🔁 Replace with your actual public key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_n9512xp", "template_dl41vep", form).then(
        function () {
          alert("✅ Message sent successfully!");
          form.reset();
        },
        function (error) {
          alert("❌ Failed to send message, try again.");
          console.error("EmailJS Error:", error);
        }
      );
    });
  }
});

// Dynamic text logic
const texts = [
  "Software Developer",
  "Web Developer",
  "UI/UX Designer",
  "FullStack Developer",
  "SME - Order Managment"
];

let count = 0;
const changingText = document.getElementById("changing-text");

if (changingText) {
  function changeText() {
    changingText.textContent = texts[count];
    count = (count + 1) % texts.length;
  }

  changeText(); // Show first text immediately
  setInterval(changeText, 1000); // Change every 2 seconds
}

(function () {
  emailjs.init("SLpanI1VaWHCfuYE2"); // 🔁 Replace with your actual public key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("hire-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_n9512xp", "template_dl41vep", form).then(
        function () {
          alert("✅ Message sent successfully!");
          form.reset();
        },
        function (error) {
          alert("❌ Failed to send message, try again.");
          console.error("EmailJS Error:", error);
        }
      );
    });
  }
});

function goToContact(serviceName) {
  const encoded = encodeURIComponent(serviceName);
  window.location.href = `service-contact.html?service=${encoded}`;
}

const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

// Toggle sidebar
hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Close sidebar if clicked outside
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});

// Auto-close sidebar when a menu link is clicked
const menuLinks = sidebar.querySelectorAll("a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});