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
});

test('#randomRgbColor with mock value "rgb(255, 255, 255)"', () => {
    //testando se a função foi chamada e o retorno da mesma
    content.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");

    content.randomRgbColor();
    expect(content.randomRgbColor).toHaveBeenCalled();
    expect(content.randomRgbColor()).toBe("rgb(255, 255, 255)");
})

test('#randomRgbColor with mock and times called', () => {
    //testando quantas vezes a função foi chamada e qual o seu retorno
    content.randomRgbColor = jest
        .fn()
        .mockReturnValue('default value')
        .mockReturnValueOnce('first call')
        .mockReturnValueOnce('second call')

    expect(content.randomRgbColor).toHaveBeenCalledTimes(0);

    expect(content.randomRgbColor()).toBe('first call');
    expect(content.randomRgbColor).toHaveBeenCalledTimes(1);

    expect(content.randomRgbColor()).toBe('second call');
    expect(content.randomRgbColor).toHaveBeenCalledTimes(2);

    expect(content.randomRgbColor()).toBe('default value');
    expect(content.randomRgbColor).toHaveBeenCalledTimes(3);
});