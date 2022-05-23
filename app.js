var city;

const infoGet = async (city) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=38edaa3cd387461ea5f72224222305&q=${city}&aqi=yes`
  );
  data = await response.json();
  return data;
};

async function getCity() {
  city = document.getElementById("city").value;
  data = await infoGet(city);
  console.log(data);
  console.log(data.location.country);
  displayInfo(data);
}
async function displayInfo() {
  document.getElementById("tem-in-celcius").innerHTML = data.current.temp_c;
  document.getElementById("tem-in-fahrenheit").innerHTML = data.current.temp_f;
  document.getElementById("country").innerHTML = data.location.country;
  document.getElementById("icon").src = data.current.condition.icon;
}
