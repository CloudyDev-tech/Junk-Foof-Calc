const junkFoodData = {
    "pizza" : {"name": "Pizza (1 Slice)", "calories": 285 },
    "fries" : {"name": "Fries (1 Medium)", "calories": 365 },
    "burger" : {"name": "Burger (1 Patty)", "calories": 355 },
    "coke" : {"name": "Coke (1 can)", "calories": 145 },
    "wrap" : {"name": "Wrap (1 Medium)", "calories": 300 },
    "hotdog" : {"name": "Hot Dog (1 Medium)", "calories": 250 },
};

const foodItemButtons = document.querySelectorAll('.food-item-button');
const selectedItem = document.getElementById('selected-item');
const calories = document.getElementById('calories-count');
const quantity_ = document.getElementById('quantity');

let defaultFoodKey = null;

function updateCalorieStats(){
    if (defaultFoodKey) {
        const foodItem = junkFoodData[defaultFoodKey];
        const quantityFood = parseInt(quantity_.value) || 1; // default is 1
        const totalCalories = foodItem.calories * quantityFood;

        selectedItem.textContent = foodItem.name; 
        calories.textContent = `Total Calories: ${totalCalories} `;
}
else{
    selectedItem.textContent = "None";
    calories.textContent = "0";
}
}

foodItemButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        defaultFoodKey = button.dataset.food;
        quantity_.value = 1;  // reste krdo 1 par jab new select
        updateCalorieStats();
    });
});

quantity_.addEventListener('input', ()=>{
    updateCalorieStats();
});

updateCalorieStats();