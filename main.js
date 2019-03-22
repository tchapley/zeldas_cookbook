// Each ingredient contributes its bonus HP and/or time at most once per recipe
const zeldaData = [ 
    { name : "Palm Fruit", type : "None", category : "Fruit", price : 4, baseHP : 4, bonusHP : 0, baseTime : 30, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Apple", type : "None", category : "Fruit", price : 3, baseHP : 2, bonusHP : 0, baseTime : 30, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Wildberry", type : "None", category : "Fruit", price : 3, baseHP : 2, bonusHP : 0, baseTime : 30, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Hylian Shroom", type : "None", category : "Mushroom", price : 3, baseHP : 2, bonusHP : 0, baseTime : 30, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Hyrule Herb", type : "None", category : "Vegetable", price : 3, baseHP : 4, bonusHP : 0, baseTime : 30, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Raw Gourmet Meat", type : "None", category : "Meat", price : 35, baseHP : 12, bonusHP : 0, baseTime : 30, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Raw Prime Meat", type : "None", category : "Meat", price : 15, baseHP : 6, bonusHP : 0, baseTime : 30, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Raw Meat", type : "None", category : "Meat", price : 8, baseHP : 4, bonusHP : 0, baseTime : 30, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Raw Whole Bird", type : "None", category : "Poultry", price : 35, baseHP : 12, bonusHP : 0, baseTime : 30, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Raw Bird Thigh", type : "None", category : "Poultry", price : 15, baseHP : 6, bonusHP : 0, baseTime : 30, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Raw Bird Drumstick", type : "None", category : "Poultry", price : 8, baseHP : 4, bonusHP : 0, baseTime : 30, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Hyrule Bass", type : "None", category : "Fish", price : 6, baseHP : 4, bonusHP : 0, baseTime : 30, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Sanke Carp", type : "None", category : "Fish", price : 20, baseHP : 4, bonusHP : 0, baseTime : 30, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Hylian Rice", type : "None", category : "Spice", price : 3, baseHP : 4, bonusHP : 0, baseTime : 30, bonusTime : 30, critChance : 0, potency : 1 }, 
    { name : "Bird Egg", type : "None", category : "Egg", price : 3, baseHP : 4, bonusHP : 0, baseTime : 30, bonusTime : 60, critChance : .1, potency : 1 }, 
    { name : "Tabantha Wheat", type : "None", category : "Spice", price : 3, baseHP : 4, bonusHP : 0, baseTime : 30, bonusTime : 30, critChance : 0, potency : 1 }, 
    // Milk bonus applies only if the recipe contains no non-Milk ingredients 
    { name : "Fresh Milk", type : "None", category : "Milk", price : 3, baseHP : 2, bonusHP : 2, baseTime : 30, bonusTime : 50, critChance : 0, potency : 1 }, 
    // Nut bonus applies when cooked with at least one ingredient that is different from itself (combining both types of nut works, and gives both bonuses) 
    { name : "Acorn", type : "None", category : "Nut", price : 2, baseHP : 1, bonusHP : 2, baseTime : 30, bonusTime : 20, critChance : 0, potency : 1 }, 
    { name : "Chickaloo Tree Nut", type : "None", category : "Nut", price : 3, baseHP : 1, bonusHP : 2, baseTime : 30, bonusTime : 10, critChance : 0, potency : 1 }, 
    { name : "Cane Sugar", type : "None", category : "Spice", price : 3, baseHP : 0, bonusHP : 0, baseTime : 30, bonusTime :  50, critChance : .3, potency : 1 }, 
    { name : "Goat Butter", type : "None", category : "Spice", price : 3, baseHP : 0, bonusHP : 0, baseTime : 30, bonusTime :  50, critChance : .1, potency : 1 }, 
    { name : "Goron Spice", type : "None", category : "Spice", price : 4, baseHP : 0, bonusHP : 0, baseTime : 30, bonusTime : 60, critChance : .1, potency : 1 }, 
    { name : "Rock Salt", type : "None", category : "Spice", price : 2, baseHP : 0, bonusHP : 0, baseTime : 30, bonusTime : 30, critChance : 0, potency : 1 }, 
    { name : "Monster Extract", type : "None", category : "Spice", price : 3, baseHP : 0, bonusHP : 0, baseTime : 0, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Fairy", type : "None", category : "Fairy", price : 2, baseHP : 20, bonusHP : 0, baseTime : 30, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Silent Shroom", type : "Sneaky", category : "Mushroom", price : 3, baseHP : 2, bonusHP : 0, baseTime : 120, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Blue Nightshade", type : "Sneaky", category : "Vegetable", price : 4, baseHP : 0, bonusHP : 0, baseTime : 120, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Silent Princess", type : "Sneaky", category : "Vegetable", price : 10, baseHP : 4, bonusHP : 0, baseTime : 120, bonusTime : 0, critChance : 0, potency : 3 }, 
    { name : "Stealthfin Trout", type : "Sneaky", category : "Fish", price : 10, baseHP : 4, bonusHP : 0, baseTime : 120, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Sneaky River Snail", type : "Sneaky", category : "Seafood", price : 6, baseHP : 4, bonusHP : 0, baseTime : 120, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Sunset Firefly", type : "Sneaky", category : "Critter", price : 2, baseHP : 0, bonusHP : 0, baseTime : 120, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Ironshroom", type : "Tough", category : "Mushroom", price : 5, baseHP : 2, bonusHP : 0, baseTime : 50, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Fortified Pumpkin", type : "Tough", category : "Vegetable", price : 5, baseHP : 2, bonusHP : 0, baseTime : 50, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Armoranth", type : "Tough", category : "Vegetable", price : 5, baseHP : 0, bonusHP : 0, baseTime : 50, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Armored Carp", type : "Tough", category : "Fish", price : 10, baseHP : 4, bonusHP : 0, baseTime : 50, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Armored Porgy", type : "Tough", category : "Fish", price : 10, baseHP : 4, bonusHP : 0, baseTime : 50, bonusTime : 0, critChance : 0, potency : 3 }, 
    { name : "Ironshell Crab", type : "Tough", category : "Seafood", price : 8, baseHP : 4, bonusHP : 0, baseTime : 50, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Rugged Rhino Beetle", type : "Tough", category : "Critter", price : 4, baseHP : 0, bonusHP : 0, baseTime : 50, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Mighty Bananas", type : "Mighty", category : "Fruit", price : 5, baseHP : 2, bonusHP : 0, baseTime : 50, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Razorshroom", type : "Mighty", category : "Mushroom", price : 5, baseHP : 2, bonusHP : 0, baseTime : 50, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Mighty Thistle", type : "Mighty", category : "Vegetable", price : 5, baseHP : 0, bonusHP : 0, baseTime : 50, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Mighty Carp", type : "Mighty", category : "Fish", price : 10, baseHP : 4, bonusHP : 0, baseTime : 50, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Mighty Porgy", type : "Mighty", category : "Fish", price : 10, baseHP : 4, bonusHP : 0, baseTime : 50, bonusTime : 0, critChance : 0, potency : 3 }, 
    { name : "Razorclaw Crab", type : "Mighty", category : "Seafood", price : 8, baseHP : 4, bonusHP : 0, baseTime : 50, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Bladed Rhino Beetle", type : "Mighty", category : "Critter", price : 4, baseHP : 0, bonusHP : 0, baseTime : 50, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Smotherwing Butterfly", type : "Fireproof", category : "Critter", price : 2, baseHP : 0, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Fireproof Lizard", type : "Fireproof", category : "Critter", price : 5, baseHP : 0, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Voltfruit", type : "Electro", category : "Fruit", price : 4, baseHP : 2, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Zapshroom", type : "Electro", category : "Mushroom", price : 4, baseHP : 2, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Electric Safflina", type : "Electro", category : "Vegetable", price : 3, baseHP : 0, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Voltfin Trout", type : "Electro", category : "Fish", price : 6, baseHP : 4, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 3 }, 
    { name : "Thunderwing Butterfly", type : "Electro", category : "Critter", price : 2, baseHP : 0, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Electric Darner", type : "Electro", category : "Critter", price : 2, baseHP : 0, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Hydromelon", type : "Chilly", category : "Fruit", price : 4, baseHP : 2, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Chillshroom", type : "Chilly", category : "Mushroom", price : 4, baseHP : 2, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Cool Safflina", type : "Chilly", category : "Vegetable", price : 3, baseHP : 0, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Chillfin Trout", type : "Chilly", category : "Fish", price : 6, baseHP : 4, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 3 }, 
    { name : "Winterwing Butterfly", type : "Chilly", category : "Critter", price : 2, baseHP : 0, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Cold Darner", type : "Chilly", category : "Critter", price : 2, baseHP : 0, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 2 }, 
    /* Counterintuitively, Spicy Pepper is treated as a fruit in most recipes; the
        exceptions I have found are fruitcake, and any recipe that looks specifically
        for spicy pepper (pepper steak, pepper seafood, sauteed peppers 
    */
    { name : "Spicy Pepper", type : "Spicy", category : "Fruit", price : 3, baseHP : 2, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Sunshroom", type : "Spicy", category : "Mushroom", price : 4, baseHP : 2, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Warm Safflina", type : "Spicy", category : "Vegetable", price : 3, baseHP : 0, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Sizzlefin Trout", type : "Spicy", category : "Fish", price : 6, baseHP : 4, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 3 }, 
    { name : "Summerwing Butterfly", type : "Spicy", category : "Critter", price : 2, baseHP : 0, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Warm Darner", type : "Spicy", category : "Critter", price : 2, baseHP : 0, bonusHP : 0, baseTime : 150, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Fleet-Lotus Seeds", type : "Hasty", category : "Fruit", price : 5, baseHP : 2, bonusHP : 0, baseTime : 60, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Rushroom", type : "Hasty", category : "Mushroom", price : 3, baseHP : 2, bonusHP : 0, baseTime : 60, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Swift Carrot", type : "Hasty", category : "Vegetable", price : 4, baseHP : 2, bonusHP : 0, baseTime : 60, bonusTime : 0, critChance : 0, potency : 1 }, 
    { name : "Swift Violet", type : "Hasty", category : "Vegetable", price : 10, baseHP : 0, bonusHP : 0, baseTime : 60, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Hot-Footed Frog", type : "Hasty", category : "Critter", price : 2, baseHP : 0, bonusHP : 0, baseTime : 60, bonusTime : 0, critChance : 0, potency : 2 }, 
    { name : "Hightail Lizard", type : "Hasty", category : "Critter", price : 2, baseHP : 0, bonusHP : 0, baseTime : 60, bonusTime : 0, critChance : 0, potency : 1 },
    { name : "Bokoblin Horn",type : "Monster Pt", category : "Monster Pt", price : 3, baseHP : 0, bonusHP : 0, baseTime : 70, bonusTime : 0, critChance : 0 },
    { name : "Bokoblin Fang",type : "Monster Pt", category : "Monster Pt", price : 8, baseHP : 0, bonusHP : 0, baseTime : 110, bonusTime : 0, critChance : 0.1 },
    { name : "Bokoblin Guts",type : "Monster Pt", category : "Monster Pt", price : 20, baseHP : 0, bonusHP : 0, baseTime : 190, bonusTime : 0, critChance : 0.3 },
    { name : "Moblin Horn",type : "Monster Pt", category : "Monster Pt", price : 5, baseHP : 0, bonusHP : 0, baseTime : 70, bonusTime : 0, critChance : 0 },
    { name : "Moblin Fang",type : "Monster Pt", category : "Monster Pt", price : 12, baseHP : 0, bonusHP : 0, baseTime : 110, bonusTime : 0, critChance : 0.1 },
    { name : "Moblin Guts",type : "Monster Pt", category : "Monster Pt", price : 25, baseHP : 0, bonusHP : 0, baseTime : 190, bonusTime : 0, critChance : 0.3 },
    { name : "Lizalfos Horn",type : "Monster Pt", category : "Monster Pt", price : 10, baseHP : 0, bonusHP : 0, baseTime : 70, bonusTime : 0, critChance : 0 },
    { name : "Lizalfos Talon",type : "Monster Pt", category : "Monster Pt", price : 15, baseHP : 0, bonusHP : 0, baseTime : 110, bonusTime : 0, critChance : 0.1 },
    { name : "Lizalfos Tail",type : "Monster Pt", category : "Monster Pt", price : 28, baseHP : 0, bonusHP : 0, baseTime : 190, bonusTime : 0, critChance : 0.3 },
    { name : "Icy Lizalfos Tail",type : "Monster Pt", category : "Monster Pt", price : 35, baseHP : 0, bonusHP : 0, baseTime : 190, bonusTime : 0, critChance : 0.3 },
    { name : "Red Lizalfos Tail",type : "Monster Pt", category : "Monster Pt", price : 35, baseHP : 0, bonusHP : 0, baseTime : 190, bonusTime : 0, critChance : 0.3 },
    { name : "Yellow Lizalfos Tail",type : "Monster Pt", category : "Monster Pt", price : 35, baseHP : 0, bonusHP : 0, baseTime : 190, bonusTime : 0, critChance : 0.3 },
    { name : "Lynel Horn",type : "Monster Pt", category : "Monster Pt", price : 40, baseHP : 0, bonusHP : 0, baseTime : 70, bonusTime : 0, critChance : 0 },
    { name : "Lynel Hoof",type : "Monster Pt", category : "Monster Pt", price : 50, baseHP : 0, bonusHP : 0, baseTime : 110, bonusTime : 0, critChance : 0.1 },
    { name : "Lynel Guts",type : "Monster Pt", category : "Monster Pt", price : 200, baseHP : 0, bonusHP : 0, baseTime : 190, bonusTime : 0, critChance : 0.3 },
    { name : "Chuchu Jelly",type : "Monster Pt", category : "Monster Pt", price : 5, baseHP : 0, bonusHP : 0, baseTime : 70, bonusTime : 0, critChance : 0 },
    { name : "White Chuchu Jelly",type : "Monster Pt", category : "Monster Pt", price : 10, baseHP : 0, bonusHP : 0, baseTime : 110, bonusTime : 0, critChance : 0.1 },
    { name : "Red Chuchu Jelly",type : "Monster Pt", category : "Monster Pt", price : 10, baseHP : 0, bonusHP : 0, baseTime : 110, bonusTime : 0, critChance : 0.1 },
    { name : "Yellow Chuchu Jelly",type : "Monster Pt", category : "Monster Pt", price : 10, baseHP : 0, bonusHP : 0, baseTime : 110, bonusTime : 0, critChance : 0.1 },
    { name : "Keese Wing",type : "Monster Pt", category : "Monster Pt", price : 2, baseHP : 0, bonusHP : 0, baseTime : 70, bonusTime : 0, critChance : 0 },
    { name : "Ice Keese Wing",type : "Monster Pt", category : "Monster Pt", price : 6, baseHP : 0, bonusHP : 0, baseTime : 110, bonusTime : 0, critChance : 0.1 },
    { name : "Fire Keese Wing",type : "Monster Pt", category : "Monster Pt", price : 6, baseHP : 0, bonusHP : 0, baseTime : 110, bonusTime : 0, critChance : 0.1 },
    { name : "Electric Keese Wing",type : "Monster Pt", category : "Monster Pt", price : 6, baseHP : 0, bonusHP : 0, baseTime : 110, bonusTime : 0, critChance : 0.1 },
    { name : "Keese Eyeball",type : "Monster Pt", category : "Monster Pt", price : 20, baseHP : 0, bonusHP : 0, baseTime : 190, bonusTime : 0, critChance : 0.3 },
    { name : "Octorok Tentacle",type : "Monster Pt", category : "Monster Pt", price : 10, baseHP : 0, bonusHP : 0, baseTime : 70, bonusTime : 0, critChance : 0 },
    { name : "Octorok Eyeball",type : "Monster Pt", category : "Monster Pt", price : 25, baseHP : 0, bonusHP : 0, baseTime : 110, bonusTime : 0, critChance : 0.1 },
    { name : "Octo Balloon",type : "Monster Pt", category : "Monster Pt", price : 5, baseHP : 0, bonusHP : 0, baseTime : 70, bonusTime : 0, critChance : 0.3 },
    { name : "Molduga Fin",type : "Monster Pt", category : "Monster Pt", price : 30, baseHP : 0, bonusHP : 0, baseTime : 110, bonusTime : 0, critChance : 0.1 },
    { name : "Molduga Guts",type : "Monster Pt", category : "Monster Pt", price : 110, baseHP : 0, bonusHP : 0, baseTime : 190, bonusTime : 0, critChance : 0.3 },
    { name : "Hinox Toenail",type : "Monster Pt", category : "Monster Pt", price : 20, baseHP : 0, bonusHP : 0, baseTime : 70, bonusTime : 0, critChance : 0 },
    { name : "Hinox Tooth",type : "Monster Pt", category : "Monster Pt", price : 35, baseHP : 0, bonusHP : 0, baseTime : 110, bonusTime : 0, critChance : 0.1 },
    { name : "Hinox Guts",type : "Monster Pt", category : "Monster Pt", price : 80, baseHP : 0, bonusHP : 0, baseTime : 190, bonusTime : 0, critChance : 0.3 },
    { name : "Ancient Screw",type : "Monster Pt", category : "Monster Pt", price : 12, baseHP : 0, bonusHP : 0, baseTime : 70, bonusTime : 0, critChance : 0 },
    { name : "Ancient Spring",type : "Monster Pt", category : "Monster Pt", price : 15, baseHP : 0, bonusHP : 0, baseTime : 70, bonusTime : 0, critChance : 0 },
    { name : "Ancient Gear",type : "Monster Pt", category : "Monster Pt", price : 30, baseHP : 0, bonusHP : 0, baseTime : 110, bonusTime : 0, critChance : 0.1 },
    { name : "Ancient Shaft",type : "Monster Pt", category : "Monster Pt", price : 40, baseHP : 0, bonusHP : 0, baseTime : 110, bonusTime : 0, critChance : 0.1 },
    { name : "Ancient Core",type : "Monster Pt", category : "Monster Pt", price : 80, baseHP : 0, bonusHP : 0, baseTime : 190, bonusTime : 0, critChance : 0.3 },
    { name : "Giant Ancient Core",type : "Monster Pt", category : "Monster Pt", price : 200, baseHP : 0, bonusHP : 0, baseTime : 190, bonusTime : 0, critChance : 0.3 }
];

const counterTop = document.querySelector(".countertop");
zeldaData.sort((a,b) => a.name > b.name ? 1 : -1)
         .map(item => {
            const markup = `
                <div class="ingredient" data-item="${item.name}">
                    <img src="img/${item.name}.png" alt="${item.name}">
                </div>
            `;
            counterTop.innerHTML += markup;
         });

const potItems = document.querySelectorAll(".box");
const counterItems = document.querySelectorAll(".ingredient");
const result = document.querySelector(".dish");

const potArray = [];
for (const potItem of potItems) {
    potItem.addEventListener("dblclick", doubleClicked);
    potArray.push(potItem);
}
for (const counterItem of counterItems) counterItem.addEventListener("click", clicked);

function clicked() {
    for (const potItem of potArray) {
        if (potItem.classList.contains("empty")) {
            potItem.classList.replace("empty", "filled");
            potItem.setAttribute("data-item", this.getAttribute("data-item"));
            const item = zeldaData.find((item) => { return item.name === this.getAttribute("data-item")});
            potItem.innerHTML = `<img class="item-img" src="img/${item.name}.png" alt="${item.name}">`
            break;
        }
    };
    cook(); 
}

function doubleClicked() {
    if (this.classList.contains("filled")) {
        this.classList.replace("filled", "empty");
        this.removeAttribute("data-item");
        this.innerHTML = "";
    }
    cook();
}

function cook() {
    const ingredients = document.querySelectorAll('.filled');
    let baseHP = 0;
    let bonusHP = 0;
    const itemArray = [];
    const categoryArray = [];
    for (let i = 0; i < ingredients.length; i++) {
        const item = zeldaData.find((item) => { return item.name === ingredients[i].getAttribute("data-item") });
        baseHP += item.baseHP;
        if (itemArray.indexOf(item.name) == -1) {
            bonusHP += item.bonusHP;
        }
        console.log(bonusHP);
        itemArray.push(item.name);
        categoryArray.push(item.category);
    }
    // result.innerHTML = (2*baseHP) + bonusHP;
    // console.table(categoryArray);

    const critterIndex = categoryArray.indexOf("Critter");
    const monsterPartIndex = categoryArray.indexOf("Monster Pt");
    if ((critterIndex > -1 && monsterPartIndex < 0) || (critterIndex < 0 && monsterPartIndex > -1)) {
        result.innerHTML = "Dub";
    } else {
        result.innerHTML = (2*baseHP) + bonusHP;
    }
}


