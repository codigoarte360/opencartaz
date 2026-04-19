document.addEventListener("DOMContentLoaded", fillFieldsFromURL);

function fillFieldsFromURL() {
  var params = new URLSearchParams(window.location.search);

  var title = params.get("title");
  var product = params.get("product");
  var description = params.get("description");
  var price_int = params.get("price_int");
  var price_cents = params.get("price_cents");
  var unit = params.get("unit");

  if (title == "1") {
    document.getElementById("title").textContent = "PROMOÇÃO";
  } else if (title == "2") {
    document.getElementById("title").textContent = "OFERTA";
  } else {
    document.getElementById("title").textContent = "";
    document.getElementById('mainTitle').style.borderBottom = 'none';
  }

  if (product) {
    document.getElementById("product").textContent = product;
  }

  if (description) {
    document.getElementById("description").textContent = description;
  }

  if (price_int) {
    document.getElementById("price_int").textContent = price_int;
  }

  if (price_cents !== null) {
    document.getElementById("price_cents").textContent = price_cents;
  }

  if (unit) {
    document.getElementById("unit").textContent = unit;
  }
}
