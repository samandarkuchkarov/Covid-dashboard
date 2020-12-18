export async function list(cases) {
    document.querySelector('.list-block').innerHTML = ''
    const url = `https://corona.lmao.ninja/v2/countries`;
    const res = await fetch(url);
    const data = await res.json();
    const title_case = document.querySelector('.global-cases-title');
    let sum_cases = 0;
    if (cases === 'case') {
        data.sort((a, b) => {
            return b.cases - a.cases
        })
        title_case.textContent = 'Global Cases'
    } else if (cases == 'deaths') {
        data.sort((a, b) => {
            return b.deaths - a.deaths
        })
        title_case.textContent = 'Global Deaths'
    } else if (cases == 'recovered') {
        data.sort((a, b) => {
            return b.recovered - a.recovered
        })
        title_case.textContent = 'Amount of recovered'
    }
    let sum_deathes = 0;
    for (let i = 0; i < data.length; i++) {
        let country = document.createElement('div');
        country.className = 'list-block-item';
        document.querySelector('.list-block').appendChild(country);

        if (cases == 'case') {
            sum_cases += data[i].cases;
            country.innerHTML = `<i class = "cases">${data[i].cases}</i> <i class = "flag"></i><i class = "country_name">${data[i].country}</i>`
        } else if (cases == 'deaths') {
            sum_cases += data[i].deaths;
            country.innerHTML = `<i class = "cases">${data[i].deaths}</i> <i class = "flag"></i><i class = "country_name">${data[i].country}</i>`
        } else if (cases == 'recovered') {
            sum_cases += data[i].recovered;
            country.innerHTML = `<i class = "cases">${data[i].recovered}</i> <i class = "flag"></i><i class = "country_name">${data[i].country}</i>`
        }

        document.querySelectorAll('.flag')[i].style.backgroundImage = `url(${data[i].countryInfo.flag})`
        sum_cases += data[i].cases;
        sum_deathes += data[i].deaths;
    }
    document.querySelector('.global-cases').textContent = sum_cases;
    document.querySelector('.global-deathes').textContent = sum_deathes;
return data
}
