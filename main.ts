// Question 46

let laptop_config = {
    make: "lenovo",
    model: "X1 Carbon",
    year : "2014",

    describe:function () {
        console.log(`This Laptop is ${this.make} ${this.model} ${this.year}`)
    }
}
laptop_config.describe()


// Question 47

let laptops = [
    {make:"dell", model: "latitude7250", year: "2020" },
    {make:"hp", model: "Pavilion", year: "2022" },
    {make:"lenovo", model: "thinkpad", year: "2023" },
]

let [laptop1, laptop2, laptop3] = laptops
console.log(laptop1)
console.log(laptop2)
console.log(laptop3)

//Question 48:

let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);