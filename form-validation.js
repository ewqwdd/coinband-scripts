const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9#?&%=_\.\-]*)*\/?$/;
// 253 countries
const countries = [
  { name: "Afghanistan", code: "AF", phone: 93 },
  { name: "Aland Islands", code: "AX", phone: 358 },
  { name: "Albania", code: "AL", phone: 355 },
  { name: "Algeria", code: "DZ", phone: 213 },
  { name: "American Samoa", code: "AS", phone: 1684 },
  { name: "Andorra", code: "AD", phone: 376 },
  { name: "Angola", code: "AO", phone: 244 },
  { name: "Anguilla", code: "AI", phone: 1264 },
  { name: "Antarctica", code: "AQ", phone: 672 },
  { name: "Antigua and Barbuda", code: "AG", phone: 1268 },
  { name: "Argentina", code: "AR", phone: 54 },
  { name: "Armenia", code: "AM", phone: 374 },
  { name: "Aruba", code: "AW", phone: 297 },
  { name: "Australia", code: "AU", phone: 61 },
  { name: "Austria", code: "AT", phone: 43 },
  { name: "Azerbaijan", code: "AZ", phone: 994 },
  { name: "Bahamas", code: "BS", phone: 1242 },
  { name: "Bahrain", code: "BH", phone: 973 },
  { name: "Bangladesh", code: "BD", phone: 880 },
  { name: "Barbados", code: "BB", phone: 1246 },
  { name: "Belarus", code: "BY", phone: 375 },
  { name: "Belgium", code: "BE", phone: 32 },
  { name: "Belize", code: "BZ", phone: 501 },
  { name: "Benin", code: "BJ", phone: 229 },
  { name: "Bermuda", code: "BM", phone: 1441 },
  { name: "Bhutan", code: "BT", phone: 975 },
  { name: "Bolivia", code: "BO", phone: 591 },
  { name: "Bonaire, Sint Eustatius and Saba", code: "BQ", phone: 599 },
  { name: "Bosnia and Herzegovina", code: "BA", phone: 387 },
  { name: "Botswana", code: "BW", phone: 267 },
  { name: "Bouvet Island", code: "BV", phone: 55 },
  { name: "Brazil", code: "BR", phone: 55 },
  { name: "British Indian Ocean Territory", code: "IO", phone: 246 },
  { name: "Brunei Darussalam", code: "BN", phone: 673 },
  { name: "Bulgaria", code: "BG", phone: 359 },
  { name: "Burkina Faso", code: "BF", phone: 226 },
  { name: "Burundi", code: "BI", phone: 257 },
  { name: "Cambodia", code: "KH", phone: 855 },
  { name: "Cameroon", code: "CM", phone: 237 },
  { name: "Canada", code: "CA", phone: 1 },
  { name: "Cape Verde", code: "CV", phone: 238 },
  { name: "Cayman Islands", code: "KY", phone: 1345 },
  { name: "Central African Republic", code: "CF", phone: 236 },
  { name: "Chad", code: "TD", phone: 235 },
  { name: "Chile", code: "CL", phone: 56 },
  { name: "China", code: "CN", phone: 86 },
  { name: "Christmas Island", code: "CX", phone: 61 },
  { name: "Cocos (Keeling) Islands", code: "CC", phone: 672 },
  { name: "Colombia", code: "CO", phone: 57 },
  { name: "Comoros", code: "KM", phone: 269 },
  { name: "Congo", code: "CG", phone: 242 },
  { name: "Congo, Democratic Republic of the Congo", code: "CD", phone: 242 },
  { name: "Cook Islands", code: "CK", phone: 682 },
  { name: "Costa Rica", code: "CR", phone: 506 },
  { name: "Cote D'Ivoire", code: "CI", phone: 225 },
  { name: "Croatia", code: "HR", phone: 385 },
  { name: "Cuba", code: "CU", phone: 53 },
  { name: "Curacao", code: "CW", phone: 599 },
  { name: "Cyprus", code: "CY", phone: 357 },
  { name: "Czech Republic", code: "CZ", phone: 420 },
  { name: "Denmark", code: "DK", phone: 45 },
  { name: "Djibouti", code: "DJ", phone: 253 },
  { name: "Dominica", code: "DM", phone: 1767 },
  { name: "Dominican Republic", code: "DO", phone: 1809 },
  { name: "Ecuador", code: "EC", phone: 593 },
  { name: "Egypt", code: "EG", phone: 20 },
  { name: "El Salvador", code: "SV", phone: 503 },
  { name: "Equatorial Guinea", code: "GQ", phone: 240 },
  { name: "Eritrea", code: "ER", phone: 291 },
  { name: "Estonia", code: "EE", phone: 372 },
  { name: "Ethiopia", code: "ET", phone: 251 },
  { name: "Falkland Islands (Malvinas)", code: "FK", phone: 500 },
  { name: "Faroe Islands", code: "FO", phone: 298 },
  { name: "Fiji", code: "FJ", phone: 679 },
  { name: "Finland", code: "FI", phone: 358 },
  { name: "France", code: "FR", phone: 33 },
  { name: "French Guiana", code: "GF", phone: 594 },
  { name: "French Polynesia", code: "PF", phone: 689 },
  { name: "French Southern Territories", code: "TF", phone: 262 },
  { name: "Gabon", code: "GA", phone: 241 },
  { name: "Gambia", code: "GM", phone: 220 },
  { name: "Georgia", code: "GE", phone: 995 },
  { name: "Germany", code: "DE", phone: 49 },
  { name: "Ghana", code: "GH", phone: 233 },
  { name: "Gibraltar", code: "GI", phone: 350 },
  { name: "Greece", code: "GR", phone: 30 },
  { name: "Greenland", code: "GL", phone: 299 },
  { name: "Grenada", code: "GD", phone: 1473 },
  { name: "Guadeloupe", code: "GP", phone: 590 },
  { name: "Guam", code: "GU", phone: 1671 },
  { name: "Guatemala", code: "GT", phone: 502 },
  { name: "Guernsey", code: "GG", phone: 44 },
  { name: "Guinea", code: "GN", phone: 224 },
  { name: "Guinea-Bissau", code: "GW", phone: 245 },
  { name: "Guyana", code: "GY", phone: 592 },
  { name: "Haiti", code: "HT", phone: 509 },
  { name: "Heard Island and McDonald Islands", code: "HM", phone: 0 },
  { name: "Holy See (Vatican City State)", code: "VA", phone: 39 },
  { name: "Honduras", code: "HN", phone: 504 },
  { name: "Hong Kong", code: "HK", phone: 852 },
  { name: "Hungary", code: "HU", phone: 36 },
  { name: "Iceland", code: "IS", phone: 354 },
  { name: "India", code: "IN", phone: 91 },
  { name: "Indonesia", code: "ID", phone: 62 },
  { name: "Iran, Islamic Republic of", code: "IR", phone: 98 },
  { name: "Iraq", code: "IQ", phone: 964 },
  { name: "Ireland", code: "IE", phone: 353 },
  { name: "Isle of Man", code: "IM", phone: 44 },
  { name: "Israel", code: "IL", phone: 972 },
  { name: "Italy", code: "IT", phone: 39 },
  { name: "Jamaica", code: "JM", phone: 1876 },
  { name: "Japan", code: "JP", phone: 81 },
  { name: "Jersey", code: "JE", phone: 44 },
  { name: "Jordan", code: "JO", phone: 962 },
  { name: "Kazakhstan", code: "KZ", phone: 7 },
  { name: "Kenya", code: "KE", phone: 254 },
  { name: "Kiribati", code: "KI", phone: 686 },
  { name: "Korea, Democratic People's Republic of", code: "KP", phone: 850 },
  { name: "Korea, Republic of", code: "KR", phone: 82 },
  { name: "Kosovo", code: "XK", phone: 383 },
  { name: "Kuwait", code: "KW", phone: 965 },
  { name: "Kyrgyzstan", code: "KG", phone: 996 },
  { name: "Lao People's Democratic Republic", code: "LA", phone: 856 },
  { name: "Latvia", code: "LV", phone: 371 },
  { name: "Lebanon", code: "LB", phone: 961 },
  { name: "Lesotho", code: "LS", phone: 266 },
  { name: "Liberia", code: "LR", phone: 231 },
  { name: "Libyan Arab Jamahiriya", code: "LY", phone: 218 },
  { name: "Liechtenstein", code: "LI", phone: 423 },
  { name: "Lithuania", code: "LT", phone: 370 },
  { name: "Luxembourg", code: "LU", phone: 352 },
  { name: "Macao", code: "MO", phone: 853 },
  { name: "Macedonia, the Former Yugoslav Republic of", code: "MK", phone: 389 },
  { name: "Madagascar", code: "MG", phone: 261 },
  { name: "Malawi", code: "MW", phone: 265 },
  { name: "Malaysia", code: "MY", phone: 60 },
  { name: "Maldives", code: "MV", phone: 960 },
  { name: "Mali", code: "ML", phone: 223 },
  { name: "Malta", code: "MT", phone: 356 },
  { name: "Marshall Islands", code: "MH", phone: 692 },
  { name: "Martinique", code: "MQ", phone: 596 },
  { name: "Mauritania", code: "MR", phone: 222 },
  { name: "Mauritius", code: "MU", phone: 230 },
  { name: "Mayotte", code: "YT", phone: 262 },
  { name: "Mexico", code: "MX", phone: 52 },
  { name: "Micronesia, Federated States of", code: "FM", phone: 691 },
  { name: "Moldova, Republic of", code: "MD", phone: 373 },
  { name: "Monaco", code: "MC", phone: 377 },
  { name: "Mongolia", code: "MN", phone: 976 },
  { name: "Montenegro", code: "ME", phone: 382 },
  { name: "Montserrat", code: "MS", phone: 1664 },
  { name: "Morocco", code: "MA", phone: 212 },
  { name: "Mozambique", code: "MZ", phone: 258 },
  { name: "Myanmar", code: "MM", phone: 95 },
  { name: "Namibia", code: "NA", phone: 264 },
  { name: "Nauru", code: "NR", phone: 674 },
  { name: "Nepal", code: "NP", phone: 977 },
  { name: "Netherlands", code: "NL", phone: 31 },
  { name: "Netherlands Antilles", code: "AN", phone: 599 },
  { name: "New Caledonia", code: "NC", phone: 687 },
  { name: "New Zealand", code: "NZ", phone: 64 },
  { name: "Nicaragua", code: "NI", phone: 505 },
  { name: "Niger", code: "NE", phone: 227 },
  { name: "Nigeria", code: "NG", phone: 234 },
  { name: "Niue", code: "NU", phone: 683 },
  { name: "Norfolk Island", code: "NF", phone: 672 },
  { name: "Northern Mariana Islands", code: "MP", phone: 1670 },
  { name: "Norway", code: "NO", phone: 47 },
  { name: "Oman", code: "OM", phone: 968 },
  { name: "Pakistan", code: "PK", phone: 92 },
  { name: "Palau", code: "PW", phone: 680 },
  { name: "Palestinian Territory, Occupied", code: "PS", phone: 970 },
  { name: "Panama", code: "PA", phone: 507 },
  { name: "Papua New Guinea", code: "PG", phone: 675 },
  { name: "Paraguay", code: "PY", phone: 595 },
  { name: "Peru", code: "PE", phone: 51 },
  { name: "Philippines", code: "PH", phone: 63 },
  { name: "Pitcairn", code: "PN", phone: 64 },
  { name: "Poland", code: "PL", phone: 48 },
  { name: "Portugal", code: "PT", phone: 351 },
  { name: "Puerto Rico", code: "PR", phone: 1787 },
  { name: "Qatar", code: "QA", phone: 974 },
  { name: "Reunion", code: "RE", phone: 262 },
  { name: "Romania", code: "RO", phone: 40 },
  { name: "Russian Federation", code: "RU", phone: 7 },
  { name: "Rwanda", code: "RW", phone: 250 },
  { name: "Saint Barthelemy", code: "BL", phone: 590 },
  { name: "Saint Helena", code: "SH", phone: 290 },
  { name: "Saint Kitts and Nevis", code: "KN", phone: 1869 },
  { name: "Saint Lucia", code: "LC", phone: 1758 },
  { name: "Saint Martin", code: "MF", phone: 590 },
  { name: "Saint Pierre and Miquelon", code: "PM", phone: 508 },
  { name: "Saint Vincent and the Grenadines", code: "VC", phone: 1784 },
  { name: "Samoa", code: "WS", phone: 684 },
  { name: "San Marino", code: "SM", phone: 378 },
  { name: "Sao Tome and Principe", code: "ST", phone: 239 },
  { name: "Saudi Arabia", code: "SA", phone: 966 },
  { name: "Senegal", code: "SN", phone: 221 },
  { name: "Serbia", code: "RS", phone: 381 },
  { name: "Serbia and Montenegro", code: "CS", phone: 381 },
  { name: "Seychelles", code: "SC", phone: 248 },
  { name: "Sierra Leone", code: "SL", phone: 232 },
  { name: "Singapore", code: "SG", phone: 65 },
  { name: "St Martin", code: "SX", phone: 721 },
  { name: "Slovakia", code: "SK", phone: 421 },
  { name: "Slovenia", code: "SI", phone: 386 },
  { name: "Solomon Islands", code: "SB", phone: 677 },
  { name: "Somalia", code: "SO", phone: 252 },
  { name: "South Africa", code: "ZA", phone: 27 },
  { name: "South Georgia and the South Sandwich Islands", code: "GS", phone: 500 },
  { name: "South Sudan", code: "SS", phone: 211 },
  { name: "Spain", code: "ES", phone: 34 },
  { name: "Sri Lanka", code: "LK", phone: 94 },
  { name: "Sudan", code: "SD", phone: 249 },
  { name: "Suriname", code: "SR", phone: 597 },
  { name: "Svalbard and Jan Mayen", code: "SJ", phone: 47 },
  { name: "Swaziland", code: "SZ", phone: 268 },
  { name: "Sweden", code: "SE", phone: 46 },
  { name: "Switzerland", code: "CH", phone: 41 },
  { name: "Syrian Arab Republic", code: "SY", phone: 963 },
  { name: "Taiwan, Province of China", code: "TW", phone: 886 },
  { name: "Tajikistan", code: "TJ", phone: 992 },
  { name: "Tanzania, United Republic of", code: "TZ", phone: 255 },
  { name: "Thailand", code: "TH", phone: 66 },
  { name: "Timor-Leste", code: "TL", phone: 670 },
  { name: "Togo", code: "TG", phone: 228 },
  { name: "Tokelau", code: "TK", phone: 690 },
  { name: "Tonga", code: "TO", phone: 676 },
  { name: "Trinidad and Tobago", code: "TT", phone: 1868 },
  { name: "Tunisia", code: "TN", phone: 216 },
  { name: "Turkey", code: "TR", phone: 90 },
  { name: "Turkmenistan", code: "TM", phone: 7370 },
  { name: "Turks and Caicos Islands", code: "TC", phone: 1649 },
  { name: "Tuvalu", code: "TV", phone: 688 },
  { name: "Uganda", code: "UG", phone: 256 },
  { name: "Ukraine", code: "UA", phone: 380 },
  { name: "United Arab Emirates", code: "AE", phone: 971 },
  { name: "United Kingdom", code: "GB", phone: 44 },
  { name: "United States", code: "US", phone: 1 },
  { name: "United States Minor Outlying Islands", code: "UM", phone: 1 },
  { name: "Uruguay", code: "UY", phone: 598 },
  { name: "Uzbekistan", code: "UZ", phone: 998 },
  { name: "Vanuatu", code: "VU", phone: 678 },
  { name: "Venezuela", code: "VE", phone: 58 },
  { name: "Viet Nam", code: "VN", phone: 84 },
  { name: "Virgin Islands, British", code: "VG", phone: 1284 },
  { name: "Virgin Islands, U.s.", code: "VI", phone: 1340 },
  { name: "Wallis and Futuna", code: "WF", phone: 681 },
  { name: "Western Sahara", code: "EH", phone: 212 },
  { name: "Yemen", code: "YE", phone: 967 },
  { name: "Zambia", code: "ZM", phone: 260 },
  { name: "Zimbabwe", code: "ZW", phone: 263 },
];

const initForm = (form_) => {
  (select_box = form_.querySelector(".options")),
    (search_box = form_.querySelector(".search-box")),
    (input_box = form_.querySelector('input[type="tel"]')),
    (selected_option = form_.querySelector(".selected-option div"));

  const initPhone = (select_box, search_box, input_box, selected_option) => {
    let options = null;
    let prev;

    fetch("https://api.country.is/")
      .then((res) => res.json())
      .then((data) => {
        const val = countries.find((elem) => elem.code === data.country);
        if (val) {
          setIcon(val);
          input_box.value = "+" + val.phone;
          prev = "+" + val.phone;
        }
      })
      .catch((err) => {
        const country = navigator.language.slice(-2).toUpperCase();
        const val = countries.find((elem) => elem.code === country);
        if (val) {
          setIcon(val);
          input_box.value = "+" + val.phone;
          prev = "+" + val.phone;
        }
      });

    select_box.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    selected_option.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    window.addEventListener("click", (e) => {
      select_box.classList.remove("active");
      selected_option.classList.remove("active");
      const opts = $(".options");
      opts.slideUp();
      search_box.value = "";
      select_box.querySelectorAll(".hide").forEach((el) => el.classList.remove("hide"));
    });

    for (country of countries) {
      const option = `
    <li class="option">
        <div>
            <img class="flag-icon" src="https://flagsapi.com/${country.code}/flat/64.png">
            <span class="country-name">${country.name}</span>
        </div>
        <strong>+${country.phone}</strong>
    </li> `;

      select_box.querySelector("ol").insertAdjacentHTML("beforeend", option);
      options = form_.querySelectorAll(".option");
    }

    function selectOption() {
      const icon = this.querySelector(".flag-icon").cloneNode(true),
        phone_code = this.querySelector("strong").cloneNode(true);

      selected_option.innerHTML = "";
      selected_option.append(icon);
      const arrow = document.createElement("span");
      arrow.innerHTML = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0884 16.5L15.5525 10.5H8.62428L12.0884 16.5Z" fill="#BAFF2A"/>
                </svg>`;
      selected_option.append(arrow);
      if (prev) {
        input_box.value = phone_code.innerText + input_box.value.replace(prev, "").replace("+", "");
      }

      prev = phone_code.innerText;
      select_box.classList.remove("active");
      selected_option.classList.remove("active");
      const opts = $(".options");
      opts.slideUp();

      search_box.value = "";
      select_box.querySelectorAll(".hide").forEach((el) => el.classList.remove("hide"));
    }

    function searchCountry() {
      let search_query = search_box.value.toLowerCase();
      for (option of options) {
        let is_matched = option.querySelector(".country-name").innerText.toLowerCase().includes(search_query);
        option.classList.toggle("hide", !is_matched);
      }
    }

    selected_option.addEventListener("click", () => {
      const opts = $(".options");
      opts.slideToggle();
      select_box.classList.toggle("active");
      selected_option.classList.toggle("active");
    });

    const setIcon = (exactMatch) => {
      selected_option.innerHTML = "";

      // Добавляем иконку флага
      const icon = document.createElement("img");
      icon.className = "flag-icon";
      icon.setAttribute("src", `https://flagsapi.com/${exactMatch.code.toUpperCase()}/flat/64.png`);
      selected_option.append(icon);
      const arrow = document.createElement("span");
      arrow.innerHTML = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0884 16.5L15.5525 10.5H8.62428L12.0884 16.5Z" fill="#BAFF2A"/>
            </svg>`;
      selected_option.append(arrow);
    };

    options.forEach((option) => option.addEventListener("click", selectOption));
    search_box.addEventListener("input", searchCountry);

    const inputChange = (e) => {
      const regex = /^\+\d*$/; // Разрешаем только "+" в начале и цифры после

      if (input_box.value === "") {
        input_box.value = "+";
      }

      if (!regex.test(input_box.value)) {
        e.preventDefault(); // Останавливаем ввод недопустимого символа
        input_box.value = input_box.value.replace(/[^\d+]/g, ""); // Удаляем недопустимые символы
      }

      let inputValue = input_box.value;
      let filteredCountries = countries.filter((country) => {
        return inputValue.startsWith(`+${country.phone.toString()}`);
      });

      // Сортируем по длине телефонного кода, чтобы найти самое точное совпадение
      filteredCountries.sort((a, b) => b.phone.toString().length - a.phone.toString().length);

      if (filteredCountries.length > 0) {
        const exactMatch = filteredCountries[0];
        // Найденная страна
        setIcon(exactMatch);
        prev = exactMatch.phone;
      } else {
        setIcon({ code: "xx" });
      }
    };

    // Добавляем обработку события на keypress, чтобы запретить ввод букв
    input_box.addEventListener("keypress", (e) => {
      if (!/[0-9+]/.test(e.key)) {
        e.preventDefault(); // Запрещаем ввод любых символов, кроме цифр и "+"
      }
    });

    input_box.addEventListener("input", inputChange);
    input_box.addEventListener("change", inputChange);
  };

  if (select_box && search_box && input_box && select_box) {
    initPhone(select_box, search_box, input_box, selected_option);

    input_box.addEventListener("input", () => {
      phoneError.style.display = "none";
    });
    input_box.addEventListener("change", () => {
      phoneError.style.display = "none";
    });
  }

  const form = $(form_);
  const phoneError = form_.querySelector(".phone-error");

  const requiredFields = form_.querySelectorAll('[data-required="true"]');

  requiredFields.forEach((elem) => {
    const input = elem.querySelector("input, textarea");
    const error = elem.querySelector(".invalid-msg");
    input?.addEventListener("input", () => {
      error.style.display = "none";
    });
  });

  const onValidation = () => {
    let check = true;
    let scrollTo;
    const parsed = libphonenumber.isValidNumber(form_.querySelector('input[type="tel"]').value);
    if (!parsed) {
      phoneError.style.display = "flex";
      check = false;
      if (!Number.isInteger(scrollTo)) {
        scrollTo = select_box?.offsetTop;
      }
    }
    requiredFields.forEach((elem) => {
      const input = elem.querySelector("input, textarea, select");
      const error = elem.querySelector(".invalid-msg");

      if (elem.hasAttribute("data-input-max") && input?.length > Number(elem.getAttribute("data-input-max"))) {
        error.style.display = "flex";
        error.textContent = `Max length is ${elem.getAttribute("data-input-max")}`;
        check = false;
        if (!Number.isInteger(scrollTo)) {
          scrollTo = elem?.offsetTop;
        }
      }

      if (
        elem.hasAttribute("data-input-website") &&
        input?.value?.length > 0 &&
        !urlPattern.test(input.value)
      ) {
        error.style.display = "flex";
        check = false;
        if (!Number.isInteger(scrollTo)) {
          scrollTo = elem?.offsetTop - 100;
        }
      }
      if (elem.hasAttribute("data-input-website")) {
        return;
      }
      if (!input.value || input.value?.length === 0) {
        error.style.display = "flex";
        check = false;
        if (!Number.isInteger(scrollTo)) {
          scrollTo = elem?.offsetTop;
        }
      }
    });
    if (Number.isInteger(scrollTo)) {
      form_.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
    return check;
  };

  form.submit((event) => {
    const valid = onValidation();
    if (valid) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submit",
        formName: form.attr("data-name") || "unnamed_form", // используем имя формы или fallback
      });
    }
    return valid;
  });
};
const initForms_ = () => {
  const referrers = document.querySelectorAll('[name="referrer"]');
  referrers.forEach((elem) => {
    elem.value = window.location.origin + window.location.pathname;
  });

  const forms = document.querySelectorAll("form");
  forms.forEach((elem) => initForm(elem));
};

initForms_();
