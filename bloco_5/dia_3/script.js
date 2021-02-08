function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
      weekDaysList.appendChild(dayListItem);
    };
  };
  createDaysOfTheWeek();

function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.getElementById('days');
  for (index = 0; index < dezDaysList.length; index ++){
    const monthDayItem = document.createElement('li');
    monthDaysList.appendChild(monthDayItem);
    dayOfTheMonth = dezDaysList[index];        
    monthDayItem.innerHTML = dayOfTheMonth;    
    
    if(monthDayItem.innerHTML == 24 || monthDayItem.innerHTML == 31){
      monthDayItem.className = 'day holiday';
    } else if(monthDayItem.innerHTML == 4 || monthDayItem.innerHTML == 11 || monthDayItem.innerHTML == 18){
      monthDayItem.className = 'day friday';
    } else if (monthDayItem.innerHTML == 25){
      monthDayItem.className = 'day friday holiday';
    } else {
      monthDayItem.className = 'day';
    }
  } 
}
createDaysOfTheMonth();



function criaBotao(nomeDoBotao){
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerHTML = nomeDoBotao;
  button.addEventListener('click', coloreFeriados);
  document.getElementsByClassName('buttons-container')[0].appendChild(button);
}
criaBotao('Feriados');


function coloreFeriados(){  
  let feriados = document.getElementsByClassName('holiday');
  let cor = 'rgb(238,238,238)';
  for(let index = 0; index <feriados.length; index ++){
    feriados[index].style.backgroundColor = 'yellow'
   /* if(feriados[index].style.backgroundColor == 'yellow'){
      feriados[index].style.backgroundColor = cor;
    } 
    */
  }
  }

  
     
