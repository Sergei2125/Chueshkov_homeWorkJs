/* Написать свою реализацию методов map, filter которые будут полностью
 повторять функционал существующих. Данные функции записать в прототип.

Пример:
Array.prototype.customMap = function () {
  // your implementation here
}
*/
arr = [1,2,3,4,5];

Array.prototype.customMap = function (callback) {
    if(!Array.isArray(this)) return console.log('Ошибка');

    const newArray = []
    for(let index = 0; index < this.length ; index ++){
        const valueFromCallback = callback(this[index],index, this);
        newArray.push(valueFromCallback);
    }
    return newArray;
}

const result = arr.customMap((item,index)=>{
    return item * 3;
})
console.log(result);


// теперь для метода Filter:

Array.prototype.customFilter = function (callback) {
    if(!Array.isArray(this)) return console.log('Error');

    const newArray = [];
    for(let index = 0; index < this.length; index++){
        if (callback(this[index],index, this)) {
            newArray.push(this[index])
        }
    }
    return newArray;
}

const resultFilter = arr.customFilter((elem,index)=>{
    return elem>2;
})
console.log(resultFilter)

