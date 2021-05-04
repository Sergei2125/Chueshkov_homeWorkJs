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


async function getPokemons(urlAdress) {
    try{
        await axios.get(urlAdress)
        .then(response => {
            const pokemons = response.data;
            console.log(pokemons.results);
        });
    }
    catch(err){
        console.log('Ошибка!: '+ err);
    }
}

getPokemons("https://pokeapi.co/api/v2/pokemon")


/* 2.	Написать асинхронную функцию, которая в качестве параметра получает имя покемона, 
и делает запрос на получение подробной информации о нём. Как должен выглядеть запрос
 для получение данной информации вы сможете найти на сайте апишки покемонов.
    В случае, если покемон найден не будет, в консоль выводить сообщение
 ‘Покемон, по имени <имя запрошенного покемона> не найден.’ */

async function getPokemonName(name) {
    try{
        await axios.get("https://pokeapi.co/api/v2/pokemon/" + name)
        .then(response => {
            console.log('Покемон ' + name + ' : ', response.data);
        });
    }
    catch(err){
        console.log(`Покемон по имени ${name} не найден`)
    }
}
getPokemonName('charmander');


/* 3.	Написать асинхронную функцию которая делает запрос на адрес который предоставлен в первой задаче.
Как вы могли заметить, результатом этого запроса является массив объектов с двумя полями,
имя покемона и url. url каждого элемента массива позволит вам получить подробную информацию о покемоне.
Результатом выполнения вашей функции должен быть массив из объектов, в которых хранится подробная
 информация о покемоне.
 
HINT: Вам понадобиться метод Promise.all */

async function getPokemonsInfo(urlAdress) {
    try{
        await axios.get(urlAdress)
        .then(response => {
            const pokemons = response.data;
            Promise.all(pokemons.results)
                .then((responses) => {
                    const newArray = responses.map((response) => {
                        return axios(response.url);
                    });
                    return Promise.all(newArray);
                })
                .then((result) => console.log(result))
        });
    }
    catch(err){
        console.log(err);
    }

}
getPokemonsInfo("https://pokeapi.co/api/v2/pokemon");










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