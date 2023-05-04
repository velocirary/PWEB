        function abrirJanela(obj)
        {
           document.getElementById("mensagem").innerHTML="Janela Aberta";           
            obj.src= "./janelaaberta.png";
        }

        function fecharJanela(obj)
        {
            document.getElementById("mensagem").innerHTML = "Abra a Janela";
            obj.src= "./janelafechada.png";
        }

        function quebrarJanela(obj)
        {
            document.getElementById("mensagem").innerHTML = "Janela Quebrada"
            obj.src= "./janelaquebra.png";
        }        