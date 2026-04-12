let url = 'http://universities.hipolabs.com/search?name=';
let ip = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", async function () {
    let country = ip.value;
    console.log('searching for:' , country);
    await getData(country);
    ip.value = "";
});

async function getData(country) {
    try {
        let res = await axios.get(url + country);
        let college = res.data;

        ul.innerText = "";

        for(col of college) {
            let li = document.createElement("li");
            li.innerText = col.name;
            ul.appendChild(li);
        }
        if(college.length === 0) {
            let p = document.createElement("p");
            p.innerText = "No universities found for the specified country.";
            ul.appendChild(p);
        }    
    }catch (e) {
        console.log('error: ', e);
        p.innerText = "An error occurred while fetching data.";
    }
}
