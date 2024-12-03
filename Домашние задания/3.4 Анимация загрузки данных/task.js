const loader = document.getElementById("loader");
const itemsContainer = document.getElementById("items");

const currencyUrl =
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses";

function loadCurrencyData() {
  loader.classList.add("loader_active");

  fetch(currencyUrl)
    .then((response) => response.json())
    .then((data) => {
      loader.classList.remove("loader_active");
      localStorage.setItem("currencyData", JSON.stringify(data));
      updateCurrencyItems(data);
    })
    .catch((error) => {
      loader.classList.remove("loader_active");
      throw new Error(
        `Got bad response from server with ${error.name}: ${error.message}`
      );
    });
}

function updateCurrencyItems(data) {
  let valutes = data.response.Valute;
  itemsContainer.innerHTML = "";

  for (let key in valutes) {
    let currencyInfo = valutes[key];

    let itemDiv = document.createElement("div");
    itemDiv.className = "item";

    let codeDiv = document.createElement("div");
    codeDiv.className = "item__code";
    codeDiv.innerHTML = currencyInfo.CharCode;

    let valueDiv = document.createElement("div");
    valueDiv.className = "item__value";
    valueDiv.innerHTML = currencyInfo.Value;

    let currencyDiv = document.createElement("div");
    currencyDiv.className = "item__currency";
    currencyDiv.innerHTML = "руб.";

    itemDiv.append(codeDiv, valueDiv, currencyDiv);
    itemsContainer.append(itemDiv);
  }
}

if (localStorage.getItem("currencyData")) {
  let data = localStorage.getItem("currencyData");
  updateCurrencyItems(JSON.parse(data));
}

loadCurrencyData();
