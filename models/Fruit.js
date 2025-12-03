const fruits = require('../fruits.json');

class Fruit{
    constructor({genus, name, id, family, order, nutritions}){
        this.genus = genus;
        this.name = name;
        this.id = id;
        this.family = family;
        this.order = order;
        this.nutritions = nutritions;
    }

    static showAll = () => {
        return fruits.map(fruit => new Fruit(fruit));
    }

    static showOne = (name) => {
        const fruit = fruits.filter(fruit => fruit.name.toLowerCase() == name);
        if (fruit.length == 1){
            //first element of fruit list 
            return new Fruit(fruit[0]);
        } else {
            throw Error('The fruit does not exist')
        }
    }

    static create = (data) => {
        const newFruit = data;
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() == newFruit.name.toLowerCase());
        if (!updatedFruit) {
            console.log(newFruit);
            newFruit["id"] = fruits.length + 1;
            fruits.push(newFruit);
            return new Fruit(newFruit);
        } else {
            throw Error('Fruit already exists')
        }
        
    }

    //must define methods like this
    update(data){
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase())
        if (updatedFruit) {
            updatedFruit.name = data.name;
            return new Fruit(updatedFruit);
        } else {
            throw Error('We cannot find your fruit.')
        }
    }

    completelyKill(){
        delete this.genus;
        delete this.name;
        delete this.family;
        delete this.order;
        delete this.nutritions;
        delete this.id;
    }
}

module.exports = Fruit