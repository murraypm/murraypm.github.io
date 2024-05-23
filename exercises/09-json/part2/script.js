// https://api.openbrewerydb.org/breweries

const getBreweries = async() => {
    try {
        return (await fetch("https://api.openbrewerydb.org/breweries")).json();
    } catch (error) {
        console.log(error);
    }
};

const getMap = async(lat, long) => {
    try {
        return fetch(`https://maps.google.com/maps?q=${lat},${long}&t=&z=15&ie=UTF8&iwloc=&&output=embed`
        ).url;
    } catch (error) {
        console.log(error);
    }
};

// Displays breweries
(async() => {
    const breweries = await getBreweries();
    const section = document.getElementById("breweries-section");

    breweries.forEach(async(brewery) => {
        const section1 = document.createElement("section");
        section1.classList.add("brewery");
        const h3 = document.createElement("h3");
        const a = document.createElement("a");
        a.href = brewery.website_url;
        a.innerHTML = brewery.name;
        h3.append(a);
        section1.append(h3);
        const p = document.createElement("p");
        p.innerHTML = brewery.brewery_type;
        section1.append(p);

        // map
        const iframe = document.createElement("iframe");
        iframe.src = await getMap(brewery.latitude, brewery.longitude);
        section1.append(iframe);

        section.append(section1);
    });
})();