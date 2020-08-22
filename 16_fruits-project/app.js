const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Fruit
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please check your data entry, no name specified.'],
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    review: String,
});
const Fruit = mongoose.model('Fruit', fruitSchema);
const fruit = new Fruit(
    { name: 'Apple', rating: 10, review: "Pretty solid of a fruit."}
);
// fruit.save();
Fruit.find((err, fruits) => {
    if (err) {
        console.log(err);
        return;
    } 

    mongoose.connection.close();
    // console.log(fruits);
    fruits.forEach(fruit => {
        console.log(fruit.name);
    })
})

// Person
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema,
});
const Person = mongoose.model('Person', personSchema);
const person = new Person(
    { name: 'Amy', age: 12, favoriteFruit: fruit}
);
// person.save();

