

const regenerate = document.querySelector(".regenerate")
    regenerate.addEventListener("click", () => {
    profileRefresh();
})



const profileRefresh = async () => {     
    const API = "https://randomuser.me/api/"
    console.log("loading1")
    const response = await fetch(API);

    const resultArray = await response.json();
    const data = resultArray.results[0];
    console.log(data);
    console.log("loading2");
    passIntoCard(data);

}

//

const passIntoCard = (data) => { 

    //passing name into card
    const name = document.querySelector(".name")
    const title =  `${data.name.title}`;
    const firstName = `${data.name.first}`
    const lastName = `${data.name.last}`
    name.innerHTML = title + " " + firstName + " " + lastName

    //passing gender into card

    const gender = document.querySelector(".gender")
    gender.innerHTML = `${data.gender}` 

    //passing username

    const username = document.querySelector(".username")
    username.innerText = `@${data.login.username}`

    //passing timezone
    const timezone = document.querySelector(".timezone")
    let offset = `${data.location.timezone.offset}`
    let description = `${data.location.timezone.description}`
    timezone.innerHTML = offset + " " + description

    //passing location
    const location = document.querySelector(".location")
    location.innerHTML = `${data.location.city}, ${data.location.country}`

    //passing email and phone number and photo
    const email = document.querySelector(".email")
    const number = document.querySelector(".number")
    email.innerText = `${data.email}`
    number.innerText = `${data.phone}`


    const photo = document.querySelector(".photo")

    photo.setAttribute('src', `${data.picture.large}` )

    //passing age

    const age = document.querySelector(".age")
    age.innerText = `Age: ${data.dob.age}`

    //location hyperlink
    location.setAttribute('href', `https://maps.google.com/?q=${data.location.coordinates.latitude},${data.location.coordinates.longitude}`)

}