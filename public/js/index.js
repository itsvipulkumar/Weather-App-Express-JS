
const btn = document.getElementById("btn");
const cityname = document.getElementById("cityname");
const cityValue = document.getElementById("cityValue");
const tempVal = document.getElementById("tempValue");
const country = document.getElementById("country");
const Weatherstatus = document.getElementById("status");
// const api=
const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityname.value;
    // console.log(cityVal);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=e098cb9deaf5b4a9b774d6d808ccd785`;
    const res = await fetch(url);
    // console.log(res)
    const data = await res.json()
    // const arrData=dat
    // console.log(data.main.temp)
    // console.log(data[0].name)
    console.log(data.weather[0].main)
    console.log(data)
    tempVal.innerHTML = data.main.temp;
    cityValue.innerHTML = data.name;
    country.innerHTML = data.sys.country;
    Weatherstatus.innerHTML = data.weather[0].main;
};
// cityVal.innerHTML = <p>${data.cod}</p>;

// alert("Clikced");
// console.log(event.target.value)
const changeEvent = (event) => {
    // alert("Clikced");
    // console.log(event.target.value)
}
btn.addEventListener("click", getInfo)
// console.log(object)


// cityname.addEventListener("change", getInfo);