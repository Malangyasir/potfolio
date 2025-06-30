let typed = new Typed(".text", {
  strings: ["Front-End Developer", "Back-End Developer", "UI/UX Designer"],
  typeSpeed: 70,   // slower typing for elegant feel
  backSpeed: 50,   // slower backspacing
  backDelay: 1200, // longer pause before deleting
  smartBackspace: true, // only backspace what’s needed
  loop: true,
});

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
// ----------------------------contact-----------------------------
const form = document.getElementById('contactForm');
const status = document.getElementById('status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const value = Object.fromEntries(data.entries());

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxcb9_62cFierK1KHBdl2XYJB14DseXPqeMy2U134xwYwBgHXqSBmCpQs337JdjW03AHQ/exec', {
      method: 'POST',
      body: JSON.stringify(value),
    });
    if (response.ok) {
      status.innerText = 'Message sent!';
      form.reset();
    } else {
      status.innerText = 'Something went wrong. Try again.';
    }
  } catch (err) {
    status.innerText = 'Error sending message.';
  }
});
// ----------------------------------menu in phone ---------------

var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}