$(document).ready(function() {
    // Seleciona o botão "TO ADD" e adiciona um evento de clique
    $("button:contains('TO ADD')").click(function() {
      // Captura o valor do campo de entrada
      var taskText = $("input[type='text']").val();
  
      // Verifica se o campo de entrada não está vazio
      if (taskText !== '') {
        // Cria um novo elemento de lista com o texto da tarefa
        var listItem = $("<li>").text(taskText);
  
        // Adiciona um manipulador de evento de clique para alternar a classe "completed"
        listItem.click(function() {
          $(this).toggleClass("completed");
        });
  
        // Adiciona o novo elemento de lista à lista ordenada
        $("ol").append(listItem);
  
        // Limpa o campo de entrada após adicionar a tarefa
        $("input[type='text']").val('');
      }
    });
  });