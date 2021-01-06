const { test, expect } = require('@jest/globals');
const content = require('./content');

test('#randomRgbColor', () => {
    //testando se a função foi chamada
    content.randomRgbColor();
    expect(content.randomRgbColor).toHaveBeenCalled();
});

test('#randomRgbColor mock', () => {
    // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Queremos saber se ela foi chamada e ponto final.
    content.randomRgbColor = jest.fn();
    
    content.randomRgbColor();
    expect(content.randomRgbColor).toHaveBeenCalled();
})