// Contexto de Renderização em "2D" - Estrela
var estrela = document.getElementById('meu_canvas');
var context = estrela.getContext('2d');
// Iniciar o caminho (apaga desenhos anteriores)
context.beginPath();
// Desenhar uma estrela
context.moveTo(75, 250); // Ponto inicial
context.lineTo(150, 50);
context.lineTo(225, 250);
context.lineTo(50, 120);
context.lineTo(250, 120);
context.lineTo(75, 250); // Ponto Final

// Configurar a linha
context.lineWidth = 5;//Espessura da linha
context.strokeStyle = 'red'; // Cor da linha

//shadowBlur propriedade da API 2D do Canvas especifica a quantidade de desfoque aplicado às sombras
context.shadowBlur = 20; 
context.shadowColor = 'red' //Cor da sombra

// Traçar as linhas do caminho
context.stroke(); //.stroke()da API Canvas 2D contorna um determinado caminho ou o caminho atual com o estilo atual de traçado usando uma regra de controle diferente de zero.
