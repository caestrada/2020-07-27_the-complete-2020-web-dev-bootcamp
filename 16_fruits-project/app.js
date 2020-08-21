const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Fruit
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
});
const Fruit = mongoose.model('Fruit', fruitSchema);
const fruit = new Fruit(
    { name: 'Apple', rating: 7, review: "Pretty solid of a fruit."}
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
});
const Person = mongoose.model('Person', personSchema);
const person = new Person(
    { name: 'Carlos Estrada', age: 34}
);
// person.save();

