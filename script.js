let mainContainer = headDiv("div", "class", "container");
document.body.append(mainContainer);

let headingDiv = headDiv("h1", "class", "row");
headingDiv.innerHTML = "RestCountries & Weather";

let countryBox = mainDiv("div", "class", "row", "id", "cuntryList");

mainContainer.append(headingDiv, countryBox);

function headDiv(eleName, atrName, atrValue) {
  let div = document.createElement(eleName);
  div.setAttribute(atrName, atrValue);
  return div;
}
function mainDiv(eleName, atrName, atrValue, atrName1, atrValue1) {
  let div = document.createElement(eleName);
  div.setAttribute(atrName, atrValue);
  div.setAttribute(atrName1, atrValue1);
  return div;
}

let cunAPI = fetch("https://restcountries.com/v2/all");
cunAPI
  .then((data) => data.json())
  .then((data1) => {
    for (let i = 0; i < data1.length; i++) {
        console.log(data1[i])
      let card = document.createElement("div");
      card.setAttribute("class", "col-lg-4");
      card.setAttribute("id", "card");
      card.innerHTML = `<div class="card" style="width: 18rem;">
      <h2 class="card-header">${data1[i].name}</h2>
        <img src="${data1[i].flag}" class="card-img-top" alt="${data1[i].name} flag">
        <div class="card-body">
          <h5 class="card-title">Capital : ${data1[i].capital}</h5>
          <h5 class="card-title">Region :${data1[i].region}</h5>
          <h5 class="card-title">Country Code : ${data1[i].cioc}</h5>
          
          <a href="#" class="btn btn-primary">Click for Weather</a>
        </div>
      </div>`;
      countryBox.append(card)
    }
  });
