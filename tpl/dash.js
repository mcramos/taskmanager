var Jarves = this.Jarves || {};
(function(){

	Jarves = function(){
		var arrADesenvolver = [];
		var arrLanes = [];
		var dragging;
		var templateLane;
		var elementoMovido = {};

		function cache(){
			templateLane = templateDashboard;		
		}

		function bindEvents(){
			bindDragstart();
			bindDropAndDragover();
		}


		function bindDragstart(){
			$.each($("div[draggable*='true']"), function(key, value){
				$(this).on('dragstart',drag);
				// $(this).on('dragenter',dragEnter);
			});
		}

		function bindDropAndDragover(){
			var insideLanes = $(".inside-lane");
			$.each(insideLanes, function(key, value){
				$(this).on('drop',drop);
				$(this).on('dragover',allowDrop);
			});
		}

		function allowDrop(event){
			event.preventDefault();
		}

		function elemento_em_movimento_e_divDraggable(event){
			var target = $(event.target);
			return target.is("div");
		}

		function drag(event){
			event.originalEvent.dataTransfer.setData("text", event.target.id); // compatibilidade firefox			

			if (!elemento_em_movimento_e_divDraggable(event))
				return;

			console.log('dragging');
			dragging = event.target;
			elementoMovido = {
				id : $(dragging).data("id"),
				nome : $(dragging).data("nome"),
			}
		}


		function drop(event){
			console.log('dropping');
			event.preventDefault();
			var alvo = event.target;
			var lane = $(alvo).closest("div .lane");
			$(alvo).append(dragging);
			elementoMovido.lane = 'TE';
			$.post("changelane.php", {'data': elementoMovido}, function(data){
				// console.log(data);
			} );						
		}

		function dropTerminado(event){
			event.preventDefault();
			var alvo = event.target;
			$(alvo).append(dragging);
			elementoMovido.lane = 'TE';
			$.post("changelane.php", {'data': elementoMovido}, function(data){
				console.log(data);
			} );						
		}

		function dropedEmDesenvolvimento(event){
			event.preventDefault();
			var alvo = event.target;
			$(alvo).append(dragging);
			elementoMovido.lane = 'ED';
			$.post("changelane.php", {'data': elementoMovido}, function(data){
				console.log(data);
			} );
		}


		function setDropedElement(event){
			event.preventDefault();
			var alvo = event.target;
			$(alvo).append(dragging);
		}

		function renderLanes(){
			var rendered = Mustache.render(templateLane, {'lanes': arrLanes});
			$("#container").html(rendered);
		}

		function init(){
			arrLanes = mockLanes;
			cache();
			renderLanes();
			bindEvents();
		}

		return {
			init:init
		}
	}	
}());



$(".desenvolvedores").on('click', function(){
	var developers = [
		{id:1, nome:'marcos'},
		{id:2, nome:'joao'},
		{id:3, nome:'marcia'}
	];

	var rendered = Mustache.render(templateDesenvolvedores, {data:developers});
	$("#container").html(rendered);
});

$(".projetos").on('click', function(){
	var projetos = [
		{id:1, nome:'Projeto 1'},
		{id:2, nome:'Projeto ambicioso'},
		{id:3, nome:'Mais projetos'}
	];

	var rendered = Mustache.render(templateProjetos, {data:projetos});
	$("#container").html(rendered);
});

$(".currenttask").on('click', function(){
	var rendered = Mustache.render(templateTarefaAtual, mockCartelaAtual);
	$("#container").html(rendered);
});

$(".mytasks").on('click', function(){
	var rendered = Mustache.render(templateMinhasTarefas, {cartelas:mockMinhasCartelas});
	$("#container").html(rendered);
});

$(".dashboard").on('click', function(){
	var jarves = new Jarves();
	jarves.init();	
});


//CONTEUDO DO INIT DA FUNCAO
			// trazer as lanes com suas respectivas cartelas. Alterar o template mustache para se adequar ao json que está vindo do java.
			// descartar a abordagem php
			// implementar um request para lanes a cada 'x' segundos para manter a pagina sempre atualizada																																																								
/*			$.getJSON("http://localhost:3000/dashboard/lanes", function(data){
				arrLanes = data;
			}).done(function(){
				renderLanes();
				bindEvents();

				$.getJSON("cartelas.php", function(data){
					arrADesenvolver = data;
				}).done(function(){
					render();
					bindEvents();
				});			

			});*/