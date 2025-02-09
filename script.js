//http://api.weatherapi.com/v1/current.json?key=8799107a874443c78bb70234250902&q=Mumbai&aqi=no

const tempField = document.querySelector(".temp");
const locationField = document.querySelector(".loc_time p");
const datentimeField = document.querySelector(".loc_time span");
const weatherField = document.querySelector(".weather p");
const searchField = document.querySelector(".search");
const formField = document.querySelector("form");

formField.addEventListener('submit', searchForLoc)

let target = "Lucknow";

const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=8799107a874443c78bb70234250902&q=${targetLocation}&aqi=no`;

    const res = await fetch(url);
    const data = await res.json(); // Convert response to JSON
    console.log(data);

    let loc = data.location.name
    let time = data.location.localtime
    let temp = data.current.temp_c
    let weathercondition = data.current.condition.text

    updateData(temp, loc, time, weathercondition)
}

function updateData(temp, loc, time, weathercondition) {
    tempField.innerText = temp
    locationField.innerText = loc
    datentimeField.innerText = time
    weatherField.innerText = weathercondition
}

function searchForLoc(e) {
    e.preventDefault()

    target = searchField.value

    fetchResults(target)

    document.querySelector(".container").classList.add("glow");

    // Remove glow after 2 seconds
    setTimeout(() => {
        document.querySelector(".container").classList.remove("glow");
    }, 2000);
}
fetchResults(target);
