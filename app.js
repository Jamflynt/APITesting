async function randAdvice(){
    try {
        console.log(`Random Advice GET successful`);
        const randAdvice = await axios.get(`https://api.adviceslip.com/advice`);
        // console.log(randAdvice.data);
        const div1 = document.querySelector(`.advice`);
        div1.innerText = randAdvice.data.slip.advice;

    } catch (err){
        console.log(`Random Advice GET failed`);
        console.log(err);
    }
}
randAdvice();


let search;
async function searchAdvice() {
    const base = `https://api.adviceslip.com/advice/search`;
    const input = `/${search}`;
    const fullURL = base + input;
    const resultDiv = document.createElement(`p`);
    resultDiv.classList.add(`result`)
    form.append(resultDiv);
    try {
        console.log(`Searching Advice GET Successful`);
        const response = await axios.get(fullURL);
        console.log(response.data);
        const items = response.data.slips;
        resultDiv.innerText = response.data.slips[Math.floor(Math.random()*items.length)+1].advice;
        // Returns random index if there is more than one
        
    } catch (err){
        console.log(`Searching Advice Failed to GET`);
        console.log(err);
        resultDiv.innerText = `Nothing to find here, try searching again`
    }
}


const form = document.querySelector(`form`)
form.addEventListener(`submit`, (s) => {
    s.preventDefault();
    const searchParam = document.querySelector(`input`);
    search = searchParam.value;
    searchAdvice();
    searchParam.value = ``;
});