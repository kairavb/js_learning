const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".city")
const card = document.querySelector(".card")
const apikey = "";

weatherForm.addEventListener("submit", async event =>{
    event.preventDefault();
    const city = cityInput.value
    if (city){
        try{
            const weatherData = await getData(city)
            display(weatherData)
        }
        catch(error){
            console.log(error)
            error(error)
        }
    }
    else{
        error("Please enter a city")
    }
})

async function getData(city){
    const apiurl = ``

    const response = await fetch(apiurl)
    
    if (!response.ok){
        throw new Error("Could not fetch data")
    }
    return await response.json()
}

function display(data){
    const {name: city,
        main: {temp, humidity,
        weather: [{description, id}]}} = data

        card.textContent = ""
        card.style.display = "flex"

        const cityDisplay = document.createElement("h1")
        const tempDisplay = document.createElement("p")
        const humidDisplay = document.createElement("p")
        const descDisplay = document.createElement("p")
        const emoji = document.createElement("p")

        cityDisplay.textContent = city
        tempDisplay.textContent = `${temp}°K`
        humidDisplay.textContent = `humidity: ${humidity}`
        descDisplay.textContent = description
        emoji.textContent = getEmoji(id)

        cityDisplay.classList.add("city")
        tempDisplay.classList.add("temp")
        humidDisplay.classList.add("humid")
        descDisplay.classList.add("desc")
        emoji.classList.add("emoji")

        card.appendChild(cityDisplay)
        card.appendChild(tempDisplay)
        card.appendChild(humidDisplay)
        card.appendChild(descDisplay)
        card.appendChild(emoji)
}

function getEmoji(id){
    switch(true){
        case (id >= 200 && id < 300):
            return '⛈️'
        case (id >= 300 && id < 400):
            return '🌧️'
        case (id >= 500 && id < 600):
            return '🌦️'
        case (id >= 600 && id < 700):
            return '❄️'
        case (id >= 700 && id < 800):
            return '🍃'
        case (id === 800):
            return '☀️'
        case (id > 800 && id < 810):
            return '☁'
        default:
            return '？'
    }
}

function error(msg){
    const errorDisplay = document.createElement("p")
    errorDisplay.textContent = msg
    errorDisplay.classList.add("error")

    card.textContent = ""
    card.style.display = "flex"
    card.appendChild(errorDisplay)
}