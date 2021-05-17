const active = document.querySelector('#active');
const confirmed = document.querySelector('#confirmed');
const recovered = document.querySelector('#recovered');



fetch('https://api.covid19india.org/state_district_wise.json')
  .then(response => response.json())
  .then(data => {
      
    var WBData = data['West Bengal']
    var value = WBData.districtData.Hooghly

    //console.log(value)

    active.innerHTML = `<br/>Active Cases <br/>${value.active}`;

    confirmed.innerHTML = `<br />Confiremed Cases <br/>${value.confirmed}`
    recovered.innerHTML = `<br />Recovered Cases <br />${value.recovered}`
    

  });

