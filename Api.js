/* Api requests from: https://www.themealdb.com/api.php */

const mealDbUrl = "https://www.themealdb.com/api/json/v1/1/"

//search meal by name
export async function searchMealByName(searchQuery){
    const response = await fetch(`${mealDbUrl}search.php?s=${searchQuery}`);
    if (!response.ok) {
        throw new Error("Error in fetching meal data: " + response.statusText);
    }
    return await response.json();
}

//single random meal
export function getRandomMeal(){
    return fetch(`${mealDbUrl}random.php`)
    .then(response => {
        if(!response.ok)
            throw new Error("Error in fetching random meal: ", response.statusText)
        return response.json()
    })
}