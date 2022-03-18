const blendName = document.getElementById('blendName');
const origin = document.getElementById('origin');
const variety = document.getElementById('variety');
const intens = document.getElementById('intens');

// For this example I used Random Data API 
// From https://random-data-api.com/documentation

const getDataFromDummyAPI = async () => {
  let responseObj = await fetch(
    'https://random-data-api.com/api/coffee/random_coffee'
  );
  let responseData = await responseObj.json();
  console.log(responseData);

  blendName.innerHTML = responseData.blend_name;
  origin.innerHTML = responseData.origin;
  variety.innerHTML = responseData.variety;
  intens.innerHTML = responseData.intensifier;
};

getDataFromDummyAPI();
