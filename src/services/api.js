const KEY = '812b59417c404711946150835220706';

const fetchData = async (city) => {
  // Remove acentos do input
  const cityname = city.normalize('NFD').replace(/[^a-zA-Zs]/g, '');

  const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${cityname}&aqi=no`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();
  return data;
};

export default fetchData;
