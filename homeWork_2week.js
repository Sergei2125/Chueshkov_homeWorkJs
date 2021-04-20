/* TODO: #1. Функция принимает массив пользователей. 
Исходные данные см. ниже. Возвращает объект, состоящий из двух полей: women и men. 
Данные поля являются массивами, в которых содержаться пользователи, подходящие по 
категории gender соответственно.
Также, вместо двух полей first_name и last_name у каждого из объектов 
должнобыть поле fullName в котором будут объеденины убранные поля 
(first_name и last_name). Количество пользователей может быть не ограничено.
*/

const users = [
    {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'Female',
      ip_address: '26.58.193.2',
    },
    {
      id: 2,
      first_name: 'Petr',
      last_name: 'Jackson',
      email: 'gfrediani1@senate.gov',
      gender: 'Male',
      ip_address: '229.179.4.212',
    },
  ];
  
  const functionGenderSort = (users) =>{
          
      const newUsers = users.map((user) =>{
          user.fullName = `${user.first_name} ${user.last_name}`;
          // преобразуем внутренние объекты в массив
          const userMassiv = Object.entries(user);
          //Сортируем внутренние массивы, удаляем поле имя и фамилия
          const sortUserMassiv = userMassiv.filter(([key,value])=>{
              return key !== 'first_name' && key !== 'last_name';
          });
          //Возврыщаем объекты снова
          const backToObj = Object.fromEntries(sortUserMassiv)
          return backToObj;
      });
  
      const people = {
          men: [],
          women: []
          };
  
      const newAr = newUsers.map((user)=> {
  
              if(user.gender === 'Male') {
              people.men.push(user);
          } else {
              people.women.push(user);
          }
      });
      return people;
  };
  //console.log(functionGenderSort(users));
  
/*TODO: #2. Функция принимает массив объектов. 
Исходные данные представлены ниже. 
Возвращает массив пользователей, отсортированных по полю username в алфавитном
порядке и возраст которых начинается от 21 года. Количество пользователей может 
быть не ограничено. */
  
  const initialData = [
      {
        username: 'Maria',
        age: 25,
      },
      {
        username: 'Alex',
        age: 21,
      },
      {
        username: 'Oleg',
        age: 14,
      },
      {
        username: 'Dmitriy',
        age: 35,
      },
      {
        username: 'Oksana',
        age: 72,
      },
    ];
  
  const userNameSort = (initialData) => {
      const sortName = initialData.sort((a, b) => a.username > b.username ? 1 : -1);
  
      const sortAge = sortName.filter((user)=>{
          return user.age > 20;
      })
      return sortAge;
  
  };
  //console.log(userNameSort(initialData))
  
/* №3 Функция принимает массив объектов пользователей первым параметром,
вторым параметром принимает массив строк (id). Функция должна удалить
всех пользователей, чьи id будут найдены в массиве id, которые передаются
нашей функции вторым параметром и вернуть массив, с оставшимися пользователями*/
  
  const users2 = [
      {
          id: 1,
          name: 'Alex',
      },
      {
          id: 2,
          name: 'Tamara',
      },
      {
          id: 3,
          name: 'Max',
      },
  ];
  
  const removeUsers = (users2, removeUser) => {
      const newAr = users2.filter((elem)=>{
          const value = elem.id; // записываем элемент в value со значением id
          // Проверяем есть ли такое значение в массиве removeUser:
          return !removeUser.includes(value);
      })
      console.log(newAr)
  };
  
  //removeUsers(users2, [2,3]);
  //removeUsers(users2, [3]);
  
  /* TODO: #4. Функция принемает массив числовых и строчных значений, 
  результатом функции является НОВЫЙ массив объектов. 
  Каждый элемент массива должен содержать следующие поля: 
  elementValue - <значение элимента>, elementType - <тип элемента (number or string)>, 
  elementIndex - <индекс элемента>
   */
  
  const initialArray = [1, 'Hello', 3];
  
  const convertToMassivOfObj = (initialArray) =>{
      
      const newArray = initialArray.map((elem,index)=>{
          const Obj = {};
          Obj.elementValue = elem;
          if (typeof(elem) === 'string') {
              Obj.elementType = 'string';
          } else {
              Obj.elementType = 'number';
          }
          Obj.elementIndex = index;
          return Obj;
      });
      console.log(newArray);
  };
  //convertToMassivOfObj(initialArray)
  
  /* TODO: #5. Функция принемает строку и проверяет её на палиндром. 
  В случае если строка является палиндромом возвращает true иначе false*/
  
  const isPalindrome = (str) =>{
      
      const newArray = str.toLowerCase().split('');
      const reverseArray = [...newArray].reverse().join('');
      if (str === reverseArray) {
          console.log(true)
          } else console.log(false);
      //console.log(newArray)
      //console.log(reverseArray)
  };
  
  //isPalindrome('шалаш')
  //isPalindrome('Привет')
  
  // TODO: #6. Переделайте массив так, чтобы объекты были следующего вида { id: …, title: … }. Использовать функцию map
  
  const newReleases = [{
   id: 70111470,
   title: "Die Hard",
   boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
   uri: "http://api.netflix.com/catalog/titles/movies/70111470",
   rating: [4.0],
   bookmark: []
  }, {
   id: 654356453,
   title: "Bad Boys",
   boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
   uri: "http://api.netflix.com/catalog/titles/movies/70111470",
   rating: [5.0],
   bookmark: [{ id: 432534, time: 65876586 }]
  }, {
   id: 65432445,
   title: "The Chamber",
   boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
   uri: "http://api.netflix.com/catalog/titles/movies/70111470",
   rating: [4.0],
   bookmark: []
  }, {
   id: 675465,
   title: "Fracture",
   boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
   uri: "http://api.netflix.com/catalog/titles/movies/70111470",
   rating: [5.0],
   bookmark: [{ id: 432534, time: 65876586 }]
  }];
  
  const newReleasesUpdate = newReleases.map((elem)=>{
      const newElem = {};
      newElem.id = elem.id;
      newElem.title = elem.title;
      return newElem;
  });
  
  //console.log(newReleasesUpdate)
  
  /* TODO: #7. Выведите массив ids для видео у которых рейтинг 5.0. 
  //В качестве входных данных используйте newReleases из предыдущего задания.
  //
  [675465, …]*/
  
  const idsVideo = [];
  newReleases.forEach((elem)=>{
      if (Number(elem.rating.join('')) === 5) {
          idsVideo.push(elem.id)
      }
  });
  //console.log(idsVideo)
  
  // TODO: #8. Преобразуйте массив в объект используя функцию reduce.
  // 
  const videos = [{
   id: 65432445,
   title: "The Chamber"
  }, {
   id: 675465,
   title: "Fracture"
  }, {
   id: 70111470,
   title: "Die Hard"
  }, {
   id: 654356453,
   title: "Bad Boys"
  }];
  
  // Ожидаемый результат...
  //     {
  //         "65432445": "The Chamber",
  //         "675465": "Fracture",
  //         "70111470": "Die Hard",
  //         "654356453": "Bad Boys"
  //     }
  
  const newVideos = videos.reduce((result, elem)=>{
      //console.log(typeof(String(elem.id)))
      const Obj = `"${elem.id}"`;
      result[Obj] = elem.title;
      
      return result;
  },{});
  
  //console.log(newVideos)
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  