fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(function(countries) {
    console.log(countries);
    var htmlStr='';
    var totalArea = 0;
    var totalPopulation = 0;
    for(var i in countries){
      var country = countries[i];
      htmlStr += `<tr>
        <td>${ +i +1}</td>
        <td>${ country.name.official }</td>
        <td>${ country.population }</td>
        <td>${ country.region }</td>
        <td>${ country.area }</td>
        <td><img class="country-flag" src="${ country.flags.png }"></td>
      </tr>`;
      totalArea += country.area;
      totalPopulation += country.population;
    }
    htmlStr += `<tr class="bg-warning">
      <td colspan="2">Total</td>
      <td>${ totalPopulation }</td>
      <td></td>
      <td>${ totalArea.toFixed(0) }</td>
      <td></td>
    </tr>`

    document.getElementById('currencies-table').innerHTML = htmlStr;
  })
