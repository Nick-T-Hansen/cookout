const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];
// This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.

// The grill() function. Copy this into your JavaScript as well.

function grill (currentObject) {
    currentObject.cooked = true;
    cookedFood.push(currentObject);
    return(cookedFood);
    
}

for (i = 0; i < uncookedFood.length; i++) {
    grill (uncookedFood[i])
}
console.log(cookedFood)
