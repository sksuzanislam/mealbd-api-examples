document.getElementById('error-message').style.display = 'none';
const searchName = () => {
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    //clear data
    inputField.value = '';
    document.getElementById('error-message').style.display = 'none';
    // console.log(inputFieldText)
    // if (inputFieldText.value == '') {
    //     alert("hlfdf");
    // }
    // else {
    //load data......
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFieldText}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchRusult(data.meals))
        .catch(error => displayError(error))
}

}

const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}
const displaySearchRusult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (meals.length == 0) {

        alert("hlfdf");
    }
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick ="loadMaleDetail(${meal.idMeal})" class="card h-100">
           <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
               <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
               <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
    </div>
        `;
        searchResult.appendChild(div);
    })

}
const loadMaleDetail = mealId => {
    // console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

    fetch(url)
        .then(res => res.json())
        .then(data => dispalyMealDetail(data.meals[0]))
}
const dispalyMealDetail = meal => {
    // console.log(meal)
    const melaDetails = document.getElementById('meal-detail');
    melaDetails.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    melaDetails.appendChild(div)

}