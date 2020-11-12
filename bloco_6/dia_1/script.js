
  function createStateOptions(){
    let states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
    for (let index = 0; index < states.length; index += 1){
      let option = document.createElement('option');
      let comboBox = document.getElementById('input-state');
      option.value = states[index];
      option.innerText =states[index];
      comboBox.appendChild(option);
    }
  }
  createStateOptions();
