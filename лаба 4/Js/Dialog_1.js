//список пациентов
var person = {
  "SNILS_1": ["Иванов","Иван","Иванович",15,"мая",1974,"м", "назначено"],
  "SNILS_2": ["Сидоров","Сидр","Сидорович",20,"мая",1980,"м", "исполнено"],
  "SNILS_3": ["Петрова","Мария","Ивановна",1,"июня",1975,"ж", "медотвод"],
};
console.log("Начальная База всех СНИЛС:\n");
console.log(person);
console.log("\n");
//функция поиска пациента по СНИЛС и добавление пациента по желанию пользователя
var searchAndAdding = function (person) {
    let SNILS;
    
  SNILS=prompt("Введите SNILS пациента","SNILS_");
  
  infoname=person[SNILS];
  


  if (infoname == undefined){
      if (confirm("Пациент не найден\nХотите добавить нового пациента?")){
          let infoPazient=[];
          

          let lastname;
          lastname=prompt("Введите фамилию пациента",lastname);
          infoPazient[0]=lastname;
          
          let firstname;
          firstname=prompt("Введите имя пациента",firstname);
          infoPazient[1]=firstname;
          
          let middlename;
          middlename=prompt("Введите отчество пациента",middlename);
          infoPazient[2]=middlename;
          
          let date;
          date=prompt("Введите дату рождения" ,date);
          infoPazient[3]=date;

          let month;
          month=prompt("Введите месяц",month);
          infoPazient[4]=month;

          let year;
          year=prompt("Введите год",year);
          infoPazient[5]=year;

          let gender;
          gender=prompt("Введите пол",gender);
          infoPazient[6]=gender;
          
          let phase;
          phase=prompt("Введите | медотвод или назначено или исполнено |", phase);
          infoPazient[7]=phase;

          person[SNILS]=infoPazient;
          console.log('Добавлен СНИЛС: "' + SNILS + '"\n ' + person[SNILS]);
          console.log("\n");
          if (person[SNILS][7] === "исполнено"){  
              alert('По номеру СНИЛС "' + SNILS + '" ДОБАВЛЕН пациент: \n\n'+ infoPazient + "\n\nПрививочный статус: Прививка исполнена");
          }   else if (person[SNILS][7] === "медотвод"){
              alert('По номеру СНИЛС "' + SNILS + '" ДОБАВЛЕН пациент: \n\n'+ infoPazient + "\n\nПрививочный статус: Отказано в прививке");
          }   else if (person[SNILS][7] === "назначено"){
              alert('По номеру СНИЛС "' + SNILS + '" ДОБАВЛЕН пациент: \n\n'+ infoPazient + "\n\nПрививочный статус: Исполнить прививку");
          }   else {
            alert('По номеру СНИЛС "' + SNILS + '" ДОБАВЛЕН пациент: \n\n'+ infoname + "\n\nПрививочный статус: Не определен");
            }

      }
      // alert("Пациент не найден\nВведите информацию о новом пациенте далее");
      
  }   else{
        console.log('Выведен СНИЛС: "' + SNILS + '"\n ' + person[SNILS]);
        console.log("\n");
        if (person[SNILS][7] === "исполнено"){
            alert('По номеру СНИЛС "' + SNILS + '" НАЙДЕН пациент: \n\n'+ infoname + "\n\nПрививочный статус: Прививка исполнена");
        }   else if (person[SNILS][7] === "медотвод"){
            alert('По номеру СНИЛС "' + SNILS + '" НАЙДЕН пациент: \n\n'+ infoname + "\n\nПрививочный статус: Отказано в прививке");
        }   else if (person[SNILS][7] === "назначено"){
            alert('По номеру СНИЛС "' + SNILS + '" НАЙДЕН пациент: \n\n'+ infoname + "\n\nПрививочный статус: Исполнить прививку");
        }   else {
            alert('По номеру СНИЛС "' + SNILS + '" НАЙДЕН пациент: \n\n'+ infoname + "\n\nПрививочный статус: Не определен");
        }
  }
}

searchAndAdding(person);

while (confirm("Продолжить проверку прививочного статуса?")) {
  searchAndAdding(person);
};

console.log("Конечная База всех СНИЛС:\n");
console.log(person);
console.log("\n");

console.log("Сеанс проверки прививочного статуса завершён...");