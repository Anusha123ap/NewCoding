lucide.createIcons();

const icons = document.querySelectorAll('.icon');
const title = document.getElementById('title');
const desc = document.getElementById('desc');

const data = {
  realestate: {
    title: "REAL ESTATE",
    desc: "We own some of the finest commercial properties which we offer for fractional investments."
  },
  coworking: {
    title: "COWORKING",
    desc: "We offer flexible workspaces in prime locations and world-class amenities with 24×7 service."
  },
  serviced: {
    title: "SERVICED OFFICES",
    desc: "We provide offices with dedicated teams managing the facilities for a hassle-free experience."
  },
  hardware: {
    title: "IT HARDWARE",
    desc: "We offer hardware & peripherals on rent for new-age companies & fast-growing businesses."
  },
  consulting: {
    title: "IT CONSULTING",
    desc: "We provide innovative, efficient & applicable IT solutions to our clients along with 24×7 support."
  },
  insurance: {
    title: "INSURANCE SERVICES",
    desc: "We secure your present and future with our self life insurance and health insurance services."
  }
};

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    icons.forEach(i => i.classList.remove('active'));
    icon.classList.add('active');
    const id = icon.getAttribute('data-id');
    title.textContent = data[id].title;
    desc.textContent = data[id].desc;
  });
});

icons[0].classList.add('active')