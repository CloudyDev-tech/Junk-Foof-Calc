async function getdata(params) {
    try{
        let data;
        const alreadyPresentData = localStorage.getItem('fruitData');
        if (alreadyPresentData) {
            data = JSON.parse(alreadyPresentData);
        } else {
            const proxyUrl = 'https://api.allorigins.win/get?url=';
            const res = await fetch(proxyUrl + encodeURIComponent('https://www.fruityvice.com/api/fruit/all'));
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const response = await res.json();
            data = JSON.parse(response.contents);
            localStorage.setItem('fruitData', JSON.stringify(data));
        }

        // nutrient rich
        const nutrientRich = data.filter(fruit => fruit.nutritions.calories > 150 || fruit.nutritions.protein > 0);

        // random from this list
        const randomFruit = nutrientRich[Math.floor(Math.random() * nutrientRich.length)];
        document.getElementById('result').textContent = 
        `You should try this fruit instead of junk food: ${randomFruit.name}. 
        It has ${randomFruit.nutritions.calories} calories and ${randomFruit.nutritions.protein}g of protein.`;

    }
    catch (error) {
        console.error('Error fetching data:', error);
        }
}
getdata();