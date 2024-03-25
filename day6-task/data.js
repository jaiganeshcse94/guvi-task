let data = fetch('https://restcountries.com/v3.1/all');
let countryData;
setTimeout(() => {
    data.then(response => {
            return response.json();
        })
        .then(data => {
            countryData = data;
            // the countries from Asia continent /region using Filter function
            let country = countryData.filter((e) => {
                return e.continents == 'Asia';
            });
            console.log(country);
            //  the countries with a population of less than 2 lakhs using Filter function
            let population = countryData.filter((e) => {
                return e.population < 200000;
            });
            console.log(population);
            // the following details name, capital, flag, using forEach function
            let detail_arr = [];
            let pop = [];
            let detail = country.forEach(element => {
                detail_arr.push({ name: element.name, capital: element.capital, flag: element.flag });
                pop.push(element.population);
            });
            console.log(detail_arr);
            // the total population of countries using reduce function
            let totalPopulation = pop.reduce((acc, cv) => acc + cv, 0);
            console.log(`Total population: ${totalPopulation}`);
            // the the country that uses US dollars as currency.
            let currency = countryData.filter((e) => {
                let list = e.currencies;
                for (let x in list) {
                    if (x == "USD") {
                        return e.currencies;
                    }
                }
            });
            console.log(currency);
        })
        .catch(error => {
            console.error(error);
        });
}, 100);