/*1)Написать асинхронную функцию, которая принимает массив объектов, и преобразует его
в объект с элементами. Ключом элементов будет имя покемона, мы знаем его url,
например:
beedrill: "https://pokeapi.co/api/v2/pokemon/15/"
blastoise: "https://pokeapi.co/api/v2/pokemon/9/"
*/

const baseUrl = "https://pokeapi.co/api/v2";

const getPokemons2 = async () => {
  try {
    const pokemons = await axios
      .get(`${baseUrl}/pokemon`)
      .then((response) => response.data.results);
    console.log(pokemons);
    const result = pokemons.reduce((result, pokemon) => {
      const { name, url } = pokemon;

      result[name] = url;
      return result;
    }, {});
    datalocal(result, "pokemons"); /// ????
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

//getPokemons2();

/*2) Данная функция применяестя в функции выше, она записывает данные в localStorage,
 с помощью метода stringify(это нужно для того, чтобы преобразовать все в JSON формат 
в виду строки), а затем снова преобразует данные к первоначальному виду*/
const datalocal = (data, key) => {
  localStorage.key = JSON.stringify(data);
  const pokemons = JSON.parse(localStorage.key);
  console.log(pokemons);
};

/* 3) Данная функция принимает массив и число. Затем пробегая по массиву она сравнивает
элементы массива и число, и если хотябы одни из элементов массива больше чем число,
она возвращает true, иначе false*/

const searchBigestNumber = (arr, b) => {
  const result = arr.every((elem) => {
    return elem < b;
  });
  console.log(!result);
};

//searchBigestNumber([100, 220, 400], 399);

/* 4) данная функция возвращает сумму элементов массива */
const array1 = [1, 2, 3, 4, 5, 6, 7];

const sumArray = (arr) => {
  const result = arr.reduce((resultSum, elem) => {
    return (resultSum += elem);
  }, 0);
  console.log(result);
};
//sumArray(array1);

// 5) Создать новый массив с числами больше 3:

const array2 = [1, 2, 3, 4, 56, 78, 9];

const arraySort = array2.filter((elem) => elem > 3);

//console.log(arraySort);

// 6) Отсортировать массив по возрастанию:

const array3 = [3, 6, 1, 8, 10, 2, 12];

const arraySortBig = array3.sort((currentElement, nextElement) => {
  return currentElement > nextElement ? 1 : -1;
});

//console.log(arraySortBig);

/* 7) Отфильтровать массив, взяв элементы со значением больше 4. А затем перевести все значения 
в формат строки */

const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 10];

const arraySortToString = array4.reduce((result, elem) => {
  if (elem > 4) {
    const stringeValue = elem.toString();
    result.push(stringeValue);
  }
  return result;
}, []);

//console.log(arraySortToString);

/* 8) написать функцию которая принимает двумерный массив, и возвращает определенное значение если встречает
слово 'good' один два и более раз */

const findGood = (arrOfArray) => {
  const newArr = arrOfArray.flat(); // склеивает друмерный массив в единый массив

  const filtered = newArr.filter((elem) => elem.toLowerCase() === "good");

  if (filtered.length === 0) {
    return "Fail!";
  } else if (filtered.length <= 2) {
    return "Publish!";
  }
  return "I feel a series...";
};
/*
console.log(
  findGood([
    ["bad", "bad", "bad"],
    ["bad", "bAd", "bad"],
    ["bad", "bad", "bad"],
  ])
);

console.log(
  findGood([
    ["bad", "bad", "bad"],
    ["bad", "GOOD", "bad"],
    ["bad", "bad", "bad"],
  ])
);
console.log(
  findGood([
    ["bad", "gOOd", "bad"],
    ["bad", "GOOD", "bad"],
    ["bad", "bad", "GOod"],
  ])
);
*/

// 9)функции-генераторы:

function* generator() {
  yield 1;

  yield 2;

  return 3;
}

const myGenerator = generator();

// console.log(myGenerator.next());
// console.log(myGenerator.next());
// console.log(myGenerator.next());
// console.log(myGenerator.next());

/* 10) дан массив, написать функцию, которая склеивает все его элементы в строку,
 все элементы должны быть в нижнемрегистре. Первая буква элементы должна 
быть заглавной. Вначале должен стоять #*/

const array5 = ["qwe", "aBC", "LOL"];

const addString = (arr) => {
  const prepared = arr.map((str) => {
    const lowerCased = str.toLowerCase();
    const firstBigChar = lowerCased[0].toUpperCase();

    return `${firstBigChar}${lowerCased.slice(1)}`;
  });
  return `#${prepared.join("")}`;
};
//console.log(addString(array5));

// 11)
