const progressBarScroll = (cardsId, barId) => {
  const cards = document.getElementById(cardsId);
  const progressBar = document.getElementById(barId);
  const left = cards.scrollLeft + cards.offsetWidth;
  const percent = left / cards.scrollWidth;
  progressBar.style.width = percent * 100 + "%";
  cards.onscroll = (e) => {
    const left = cards.scrollLeft + cards.offsetWidth;
    const percent = left / cards.scrollWidth;
    progressBar.style.width = percent * 100 + "%";
  };
};

document.addEventListener("DOMContentLoaded", function () {
  const tgSwitches = document.querySelectorAll("[data-tg-switch]");

  tgSwitches?.forEach(function (tgSwitch) {
    tgSwitch.click();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let hiddenIpunts = document.querySelectorAll("[data-hidden-input]");
  let currentPageURL = window.location.origin + window.location.pathname;

  hiddenIpunts.forEach((input) => {
    input.value = currentPageURL;
  });

  for (let i = 0; i < hiddenIpunts.length; i++) {
    console.log(hiddenIpunts[i], hiddenIpunts[i].value);
  }
});

$(document).ready(function () {
  const breadcrumbs = $(".br-link");

  breadcrumbs.each(function (idx, b) {
    const breadcrumbText = b.innerText;
    b.innerHTML = `<span itemprop="name">${breadcrumbText}</span>`;
  });

  const lastBreadcrumb = $(".br-text")[0];
  if (lastBreadcrumb) {
    const breadcrumbText = lastBreadcrumb.innerText;
    lastBreadcrumb.innerHTML = `<span itemprop="name">${breadcrumbText}</span>`;
  }
});

function restoreUTMParams() {
  const storedParams = sessionStorage.getItem("utm_params");
  if (storedParams) {
    const utmParams = JSON.parse(storedParams);
    const url = new URL(window.location);
    Object.keys(utmParams).forEach((key) => {
      if (!url.searchParams.has(key) && utmParams[key]) {
        url.searchParams.append(key, utmParams[key]);
      }
    });
    window.history.replaceState({}, "", url);
  }
}

restoreUTMParams();

const urlParams = new URLSearchParams(window.location.search);
const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

const saved = {};

utmParams.forEach(function (param) {
  paramValue = urlParams.get(param);
  utmField = document.querySelectorAll("input[name='" + param + "']");
  saved[param] = paramValue?.trim?.();
  if (paramValue && utmField) {
    utmField.forEach((utmFieldItem) => {
      utmFieldItem.value = paramValue.trim();
    });
  }
});

if (Object.keys(saved).length > 0) {
  sessionStorage.setItem("utm_params", JSON.stringify(saved));
}

const client_id_field = document.querySelector('[name="client_id"]');
client_id_field.value = Date.now();

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");
  const formNames = ["wf-form-marketing-proposal", "wf-form-form-offer", "wf-form-form-career"];

  forms.forEach((elem) => {
    elem.addEventListener("submit", (event) => {
      if (formNames.includes(elem.name)) {
        console.log(elem.name);
        gtag("event", "generate_lead", {});
      }
    });
  });
});

var swiper = new Swiper(".swiper-container-n.ov-h-pad", {
  wrapperClass: "swiper-wrapper-n.slider-padd",
  slideClass: "swiper-slide-n.marg-24",
  navigation: {
    nextEl: ".reviews_slider_arrow-1.swiper-next",
    prevEl: ".reviews_slider_arrow-1.swiper-prev",
  },
  scrollbar: {
    el: ".swiper-drag-wrapper",
    draggable: true,
    dragClass: "swiper-drag",
    snapOnRelease: true,
  },
  slidesPerView: "auto",
  grabCursor: true,
});
