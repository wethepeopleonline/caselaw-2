# Case Law modeling @ OKCon 2013

This is some very simple SKOS model of basic case law concepts. The concepts were developed by Christian Laux and triplified by myself.

The concepts are defined using the [SKOS vocabulary](http://www.w3.org/2009/08/skos-reference/skos.html). 

As you can see so far we only declare some simple relations between the different concepts. This has to be adjusted later but for the moment this must be enough. Note that skos:broader implies also skos:narrower in the other direction. The cool thing is that in RDF you do not have to declare all those relations directly as the machine can do that for you with some smart engines.

The RDF serialization in this example is called [Turtle](http://www.w3.org/TR/turtle/) and is quite human readable. RDF serializations can be converted without loss form one form to the other so you can choose whatever form you prefer.


## Working with triples (shell)

If you want to transform triples in some other RDF serialization you might want to work with [rapper](http://librdf.org/) from the Redland RDF Libraries.

Installation:

* Ubuntu: raptor2-utils
* Mac brew: raptor

You might for example plot the graph with dot (assuming you have dot installed):

    rapper -i guess -o dot case_law_resolution_model.ttl | dot -Tpdf -o case_law_resolution_model.pdf

## Working with triples in JavaScript

You should *not* try to parse the turtle file without a library which supports RDF, this would be no fun and a waste of time. If you want to work with it in JavaScript I recommend using the [rdfstore-js](https://github.com/antoniogarrote/rdfstore-js) library which can be used in both Node.js and web browser. I included a (not yet adjusted) example which loads a file form a URI in the /src directory in this repository. Also there is the (non minified) version of the library available in /lib. I will adjust the samples when I find some more time.

rdfstore-js implements the W3C [RDF Interfaces](http://www.w3.org/TR/rdf-interfaces/) which gives you a classical JavaScript oriented interface to work with graphs and triples. This can be used instead of writing SPARQL queries, which might be a bit too much for beginners. You might especially want to have a look at the [Triple filters](http://www.w3.org/TR/rdf-interfaces/#triple-filters) or at the [match](http://www.w3.org/TR/rdf-interfaces/#widl-Graph-match-Graph-any-subject-any-predicate-any-object-unsigned-long-limit) function in the RDF Graph object. This simplifies accessing triples quite a lot.

Note that RDF supports multiple languages by design and you really should access/filter those via the API/datastructures, otherwise you get mad. Once you get used to it you will love it ;)

If you are brave you might want to have a look at [SPARQL](http://www.w3.org/TR/sparql11-query/) but that might be a bit steep for a short hackaton. 

Hope this helps.

Adrian
