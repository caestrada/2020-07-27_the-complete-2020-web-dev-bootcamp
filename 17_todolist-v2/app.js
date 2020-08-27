//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/todoListDB', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const itemsSchema = {name: String};
const Item = mongoose.model('Item', itemsSchema);

const item1 = new Item({
  name: 'Welcome to your todolist!',
});
const item2 = new Item({
  name: 'Hit the + button to add a new item.',
});
const item3 = new Item({
  name: '<-- Hit this to delete an item.',
});
const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema],
}
const List = mongoose.model('List', listSchema);


const workItems = [];

app.get("/", function(req, res) {

  Item.find({}, (err, items) => {
    if (err) {
      console.log(err);
      return;
    }

    if (items.length === 0) {
      Item.insertMany(defaultItems, (err) => {
        if (err) { console.log(err); }

        res.redirect('/');
      });
    } else {
      res.render("list", {listTitle: 'Today', newListItems: items});
    }
  })

});

app.get("/:customListName", function(req,res){
  const customListName = req.params.customListName;

  List.findOne({name: customListName}, (err, foundList) => {
    if (err) return;

    if(!foundList) {
      console.log(`Doesn't exist`);
      // Create a new list
      const list = new List({
        name: customListName,
        items: defaultItems,
      });
      list.save();
      res.redirect('/'+customListName);
    } else {
      console.log('Exists');
      // Show an existing list
      res.render('list', {listTitle: customListName, newListItems: foundList.items});
    }
  });
});

app.post("/", function(req, res){
  const itemName = req.body.newItem;
  const item = new Item({
    name: itemName,
  });
  item.save();

  res.redirect('/');
});

app.post('/delete', (req, res) => {
  console.log(req.body);
  const checkedItemId = req.body.checkbox;
  Item.findByIdAndRemove(checkedItemId, (err) => {
    if (!err) {
      console.log('Successfully deleted checked item.');
      res.redirect('/');
    }
  });
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
