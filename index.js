const btnEl=document.getElementById("btn")

const apiKey="LVW0P+tDEAEBo8TLn7VStQ==p6EIFvMD60p3WCLM";
const jokeEl=document.getElementById("joke");

const options={
    method:"GET",
    headers:
    {
        "X-Api-Key":apiKey,
    },
};
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke()

{
    try {
        jokeEl.innerText="Unearthing a Classic Zinger";
    btnEl.disabled=true;
    btnEl.innerText="Prepare for a groaner!";
    const respone=await fetch( apiURL,options);
    const data=await respone.json();
    //console.log(data[0].joke);
    btnEl.disabled=false;
    btnEl.innerText="Quip";
    jokeEl.innerText=data[0].joke;
    } catch (error) {
        jokeEl.innerText="An error occured...try again later!";
        btnEl.disabled=false;
        btnEl.innerText="Quip";
        console.log(error);
    }
    

}
btnEl.addEventListener("click",getJoke)