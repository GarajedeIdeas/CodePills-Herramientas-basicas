export async function downloadWeather() {
    const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=madrid,es&appid=04f4f8762b4ce35df1c074d18b1e84ab&units=metric');
    const json = await data.json();

    return json;
}