const Fruit = require("../models/Fruit")

//index request
const index = async (req, res) => {
    try {
        const fruits = await Fruit.showAll();
        res.status(200).send(fruits);
    } catch (err) {
        res.status(500).send({"error" : "Server error"})
    }
}

//show request
const show = async (req, res) => {
    const name = req.params.name.toLowerCase();
    try {
        const fruit = await Fruit.showOne(name);
        res.status(200).send(fruit);
    } catch (err) {
        res.status(404).send({"error" : "Fruit not found"})
    }
}

//create request
const create = async (req, res) => {
    try {
        const fruitData = req.body;
        const newFruit = await Fruit.create(fruitData);
        res.status(201).send(newFruit);
    } catch (error) {
        res.status(409).send('Not able to add Fruit');
    }
}

const update = async (req, res) => {
    const name = req.params.name.toLowerCase();
    try {
        const fruit = await Fruit.showOne(name);
        const result = await fruit.update(req.body);
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send({"error" : "Fruit not found"})
    }
}

const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase();
    try {
        const fruit = await Fruit.showOne(name);
        fruit.completelyKill();
        res.status(200).send("Killed the entity");
    } catch (error) {
        res.status(404).send({"error" : "Fruit not found"})
    }
}


module.exports = {
    index, show, create, update, destroy
}