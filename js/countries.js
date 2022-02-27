const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()
const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country)
    // }
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        console.log(country)
        const div = document.createElement('div')
        div.classList.add('country');
        div.innerHTML = `
        <h>${country.continents}</h>
        <p>${country.capital}</p>
        <button onclick="loadContrybyName">Details</button>
        `
        // const h3 = document.createElement('h3')
        // h3.innerText = country.continents;
        // div.appendChild(h3)
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // console.log(country.capital);
        // div.appendChild(p);
        countriesDiv.appendChild(div);


    })
    const loadContrybyName = name => {
        console.log(name)
    }
};