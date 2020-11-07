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
  
  //Exercicio 1
  function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDaysList = document.getElementById('days');

    for (let index =0; index < dezDaysList.length; index++) {
        const monthDay = dezDaysList[index];      
        const monthDayItem = document.createElement('li');
        monthDayItem.className = 'day';        
        monthDayItem.innerHTML = monthDay;
        if(monthDayItem.innerHTML == 24 || monthDayItem.innerHTML == 25 || monthDayItem.innerHTML == 31){
            monthDayItem.className = 'day holiday';
        }
        if(monthDayItem.innerHTML == 24 || monthDayItem.innerHTML == 25 || monthDayItem.innerHTML == 31)
        monthDaysList.appendChild(monthDayItem);

       
    }
  }  
  createDaysOfTheMonth();

  //Exercicio 2
  function criaBotao(nomeDoBotao){
      const button = document.createElement('button');
      button.innerHTML = nomeDoBotao;
      button.id = "btn-holiday";

      const btnsContainer = document.querySelector('.buttons-container');
      btnsContainer.appendChild(button);      
  }
  criaBotao("Feriados");

  //Exercicio 3
  function coloreFeriados(){
    let button = document.getElementById('btn-holiday');
    button.addEventListener('click', mudaCor)
    function mudaCor(){
      let feriados = document.getElementsByClassName('holiday');
      for (let index=0; index < feriados.length; index +=){
        if(feriados.style.backgroundColor= 'rgb(238,238,238)'){
          feriados.style.backgroundColor = 'yellow';
        }else {
          feriados.style.backgroundColor = 'rgb(238,238,238)';
        }
      }
  }
}
  
