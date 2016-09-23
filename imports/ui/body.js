import {Template} from 'meteor/templating';

import Items from '../api/items.js';

import './body.html';

import './header.html';

//import './modal.html';
import './modal.js';

Template.body.helpers({
	items() {
		return Items.find({});
	}
});


Template.body.events({
	'click .botonmodel' : (event) => {
		$("#myModal").addClass('modal active')
	}

});

Template.body.events({
	'click .closemod' : (event) => {
		$("#myModal").removeClass('modal active').addClass( "modal" )
	}
});

Template.body.events({
	'submit .input-group' : (event) => {

		 const target = event.target;
    	 const nombre = target.nombre.value;
    	 const cantidad = 0
    	 const referencia = target.referencia.value;
		 Items.insert({
      		nombre,
      		referencia,
      		cantidad,
      		createdAt: new Date(), // current time
    	});

		 target.nombre.value = '';
		 target.cantidad.value = '';
		 target.referencia.value = '';
		$("#myModal").removeClass('modal active').addClass( "modal" ) 

	}	
});
