const drinks = [
    {name: 'Diet Pepsi', calories: 0},
    {name: 'Zero Coke', calories: 1},
    {name: 'Secret Elixir', calories: 10}
]

export function getAllDrinks() {
    return drinks
}

export function addDrink(drink) {
    drinks.push(drink)

}