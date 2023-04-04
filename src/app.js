function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "0f08f928cbdc9a8e6475f1d00f033762";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=New York&appid=0f08f928cbdc9a8e6475f1d00f033762&units=metric";

axios.get("${apiUrl}&appid=${apiKey}").then(displayTemperature);
