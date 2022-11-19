/*
Для задания вам понадобиться следующая ссылка, куда вы будете делать запросы 
https://pokeapi.co/api/v2   
Чтобы использовать axios добавте в head
 <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
Вашего index.html вот этот скрипт
Для того чтобы узнать какие данные приходят на запрос используйте https://pokeapi.co.
Там представлены возможные вариации запросов, можно поиграться и попробовать разные варианты,
 перед тем как приступать к заданию

В домашнем задании использовать исключительно async await подход

1.	Написать асинхронную функцию, которая делает запрос на https://pokeapi.co/api/v2/pokemon
и в консоль выводит массив полученых покемонов. */

const urlAdress = "https://pokeapi.co/api/v2/pokemon";

async function getPokemons() {
  try {
    const pokemonsResponse = await axios
      .get(urlAdress)
      .then((response) => response.data.results);
    console.log(pokemonsResponse);
  } catch (error) {
    console.log("Ошибка!: " + error);
  }
}

//getPokemons()

/* 2.	Написать асинхронную функцию, которая в качестве параметра получает имя покемона, 
и делает запрос на получение подробной информации о нём. Как должен выглядеть запрос
 для получение данной информации вы сможете найти на сайте апишки покемонов.
    В случае, если покемон найден не будет, в консоль выводить сообщение
 ‘Покемон, по имени <имя запрошенного покемона> не найден.’ */

async function getPokemonName(name) {
  try {
    await axios.get(`${urlAdress}/${name}`).then((response) => {
      console.log("Покемон " + name + " : ", response.data);
    });
  } catch (error) {
    console.log(`Покемон по имени ${name} не найден`);
  }
}
//getPokemonName('charmander');

/* 3.	Написать асинхронную функцию которая делает запрос на адрес который предоставлен в первой задаче.
Как вы могли заметить, результатом этого запроса является массив объектов с двумя полями,
имя покемона и url. url каждого элемента массива позволит вам получить подробную информацию о покемоне.
Результатом выполнения вашей функции должен быть массив из объектов, в которых хранится подробная
 информация о покемоне.
 
HINT: Вам понадобиться метод Promise.all */

const getPokemonsInfo = async () => {
  try {
    const pokeponsData = await axios
      .get(`${urlAdress}`)
      .then((response) => response.data.results);
    console.log(pokeponsData);
    const pokeponsUrl = pokeponsData.map((pokemon) => axios.get(pokemon.url));
    console.log(pokeponsUrl);
    const pokemonsResult = await Promise.all(pokeponsUrl).then((responses) =>
      responses.map((response) => response.data)
    );
    console.log(pokemonsResult);
  } catch (error) {
    console.log(error);
  }
};
//getPokemonsInfo();

/* Черновик:

const a = fetch("https://pokeapi.co/api/v2/pokemon")
console.log(a);


const value = fetch("https://pokeapi.co/api/v2/pokemon")
    .then((responce) => {
        return responce.json();
    })
    .then((data) => console.log(data));

const result = axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then(response => console.log(response.data));


async function test() {
    const result = await axios.get("https://pokeapi.co/api/v2/pokemon")
    //.then(dat => console.log(dat.data))
    //const a = await result(response => console.log(response.data))
    return result;
}


const a = test().then(response => {
    console.log(response.data);
    const b = response.data;
    return b;
    })
console.log(a)
*/
