	{{#lanes}}
		<div class="lane" data-id="{{id}}">
			<div class="label-dash">
				<h2>{{titulo}}</h2>			
			</div>		
			<div class="inside-lane {{classe}}">

			{{#cartelas}}
				<div class="cartela" draggable="true" data-id="{{id}}" data-nome="{{nome}}">
					<p>{{id}}<br>
					{{nome}}</p>
				</div>
			{{/cartelas}}			

			</div>
		</div>
	{{/lanes}}