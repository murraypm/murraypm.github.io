const toys = ["drum", "ball", "rope", "balloon", "tire"];
const toyPrices = [];
toyPrices["barbie"] = 7.54;
toyPrices["doll house"] = 86.23;
toyPrices["slide"] = 34.23;
toyPrices["ken"] = 2.30;
toyPrices["bike"] = 5.60;

const showToys = () => {
    const display = document.getElementById("toy-display");
    
    // for (let i in toys) {
    //     let p = document.createElement("p");
    //     p.innerHTML = toys[i];
    //     display.append(p);
    // }

    toys.forEach((item) => {
        let p = document.createElement("p");
        p.innerHTML = item;
        display.append(p);
    });
}

showToys();

(() => {
    const toyTable = document.getElementById("toy-table");

    for (let toy in toyPrices) {
        const row = document.createElement("tr");
        toyTable.append(row);

        const col1 = document.createElement("td");
        col1.innerHTML = toy;
        row.append(col1);

        const col2 = document.createElement("td");
        col2.innerHTML = "$" + toyPrices[toy];
        row.append(col2);

        row.onclick = () => {
            document.getElementById("details").innerHTML = `${toy} costs $${toyPrices[toy]}`;
        }
    }
})();