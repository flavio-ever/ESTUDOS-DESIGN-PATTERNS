// Esta classe é Cliente

// import { MealBox } from './classes/meal-box';
// import { Rice, Beans, Meat } from './classes/meals';

import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

// const rice = new Rice('Arroz', 5);
// const beans = new Beans('Feijão', 10);
// const meat = new Meat('Carne', 20);

// // Meal é um composite (design pattern), e precisa de outros objetos pra funcionar
// const mealBox = new MealBox();
// mealBox.add(rice, beans, meat);

// console.log(mealBox, mealBox.getPrice());

// Builder é um
const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();

// Meal
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());
mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

// Vegan
const veganDishBuilder = new VeganDishBuilder();
veganDishBuilder.makeMeal();

console.log(veganDishBuilder.getMeal());
console.log(veganDishBuilder.getPrice());
