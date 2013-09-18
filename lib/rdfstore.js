/*jshint node:true, bitwise:true, curly:true, immed:true, indent:2, latedef:true, newcap:true, noarg: true, noempty:true, nonew:true, quotmark:single, undef:true, unused: true, trailing:true, white:false */
/**
 * This code provides some samples how to use rdfstore.
 * Feel free to extend it and use code snippets in whatever you are working on.
 *
 */

'use strict';

var rdfstore = require('rdfstore'),
	fs = require('fs');

var store = rdfstore.create();

store.setPrefix('foaf', 'http://xmlns.com/foaf/0.1/');

var prefMap = store.rdf.createPrefixMap();


// Simple example loading a file from filesystem
//var graphturtle = fs.readFileSync('src/ktk.ttl');
var graphturtle = fs.readFileSync('src/freebase.ttl');

store.load('text/turtle',graphturtle.toString(), function(success, number){
	if(success) {
		console.log('Successfully parsed '+number+' triples');
		
		// now get the graph and do something with it
		store.graph(function _gotGraph(success, graph){
			
		var person = graph.filter(store.rdf.filters.describes('http://ktk.netlabs.org/foaf#me'));
		person.toArray().forEach(function _persontriples(triple){
			console.log(prefMap.shrink(triple.predicate.valueOf())+' und '+prefMap.shrink(triple.object.valueOf()));	
				
		});

			
	});	
		
	}else{
		console.log("Could not parse triples");
	}
});

