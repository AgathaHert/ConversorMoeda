const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

async function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(".currency-value");

  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,JPY-BRL,GBP-BRL,CHF-BRL,ZAR-BRL,CNY-BRL,BTC-BRL"
  ).then((response) => response.json());

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / data.USDBRL.ask);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / data.EURBRL.ask);
  }

  if (currencySelect.value == "iene") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrencyValue / data.JPYBRL.ask);
  }

  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / data.GBPBRL.ask);
  }

  if (currencySelect.value == "franco") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CHF",
    }).format(inputCurrencyValue / data.CHFBRL.ask);
  }

  if (currencySelect.value == "rand") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "ZAR",
    }).format(inputCurrencyValue / data.ZARBRL.ask);
  }

  if (currencySelect.value == "yuan") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CNY",
    }).format(inputCurrencyValue / data.CNYBRL.ask);
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML =
      (inputCurrencyValue / data.BTCBRL.ask).toFixed(5) + " BTC";
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-dolar");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dolar Americano";
    currencyImage.src = "./assets/dolar.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
  }

  if (currencySelect.value == "iene") {
    currencyName.innerHTML = "Iene";
    currencyImage.src = "./assets/yene.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/libra.png";
  }

  if (currencySelect.value == "franco") {
    currencyName.innerHTML = "Franco Suíço";
    currencyImage.src = "./assets/franco-suico.png";
  }

  if (currencySelect.value == "rand") {
    currencyName.innerHTML = "Rand";
    currencyImage.src = "./assets/rand.png";
  }

  if (currencySelect.value == "rand") {
    currencyName.innerHTML = "Rand";
    currencyImage.src = "./assets/rand.png";
  }

  if (currencySelect.value == "yuan") {
    currencyName.innerHTML = "Yuan";
    currencyImage.src = "./assets/yuan.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./assets/bitcoin.png";
  }

  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
