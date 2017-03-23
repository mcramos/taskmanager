var templateDashboard;
var templateProjetos;
var templateDesenvolvedores;
var templateTarefaAtual;
var templateMinhasTarefas;
var flag = true;

$.get('tpl/dashboard.tpl').done(function(d){
	templateDashboard = d;
});

$.get('tpl/projetos.tpl').done(function(d){
	templateProjetos = d;
});

$.get('tpl/desenvolvedores.tpl').done(function(d){
	templateDesenvolvedores = d;
});
$.get('tpl/tarefaatual.tpl').done(function(d){
	templateTarefaAtual = d;
});
$.get('tpl/minhastarefas.tpl').done(function(d){
	templateMinhasTarefas = d;
});

/*debugger;
var templates = templateDashboard !== undefined && templateProjetos != undefined && templateDesenvolvedores !== undefined && templateTarefaAtual !== undefined && templateMinhasTarefas !== undefined;

setTimeout(function(){
	flag = false;
},10000);
while (flag || templates){

}*/
// templateDashboard = $.ajax({url:'tpl/dashboard.tpl', dataType:'text',  async:false}).responseText;
// templateProjetos = $.ajax({url:'tpl/projetos.tpl', dataType:'text', async:false}).responseText;
// templateDesenvolvedores = $.ajax({url:'tpl/desenvolvedores.tpl', dataType:'text', async:false}).responseText;
// templateTarefaAtual = $.ajax({url:'tpl/tarefaatual.tpl', dataType:'text', async:false}).responseText;
// templateMinhasTarefas = $.ajax({url:'tpl/minhastarefas.tpl', dataType:'text', async:false}).responseText;
