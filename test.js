let objects = [
{name: 'sadra', age: 25},
{name: 'ali', age: 30},
{name: 'reza', age: 20}

]


function remove(items,price){
    const index = items.findIndex(item => item.age === price);
    if (index !== -1) {
        items.splice(index, 1);
    }
    return items
}


console.log(remove(objects, 30))