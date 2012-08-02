var ChemJS = (function() {
	if (!GraphJS) {
		console.log("GraphJS seems to be missing. cannot proceed!");
		break;
	}
	
	var container = {};
	container.structures = {};
	container.algorithms = {};
	container.helperFunctions = {};
	container.graphs = [];//this is where we store the graphs
	
	//instead of graphics, write utilities to write to MOLfile, which you can then display using Avogadro
	
	var VERSION = '0.0.1';
	
	container.getVersion = function(){
		return VERSION;
	};
//code to build new graph
//	contai.atoms[i] = new structures.Atom();
	
	return container;
	
})();

//define the "algorithms" module
(function(g,algo,helper,structures) {
	
	algo.assignAtomTypes = function(Molecule,typeDef) {
		//assign atom type defined by typeDef to Molecule
	};
	
	algo.computeEnergy = function(forceField) {
		result = {};
		//calls appropriate energy function according to force field definition
		
		//var arguments is an array containing each of the Molecule objects that were passed into this function.
		
		/*sample return JSON object reflecting all internal Molecule effects + interactions between all pairs (combinations of two) of Molecules
		in kJ units
		energy = {
			total: 9001,
			nameOfMoleculeA: {
				bond: 10,
				angle: 10,
				torsion: 10,
				VDW: 10,
				Electrostatics: 10,
				subtotal: 50},	
			nameOfMoleculeB: {
				bond: 10,
				angle: 10,
				torsion: 10,
				VDW: 10,
				Electrostatics: 10,
				subtotal: 50}, 
			nameOfMoleculeC: {
				bond: 10,
				angle: 10,
				torsion: 10,
				VDW: 10,
				Electrostatics: 10,
				subtotal: 50},
			A-B: {
				VDW: 100,
				Electrostatics: 100 },
			A-C: {
				VDW: 100,
				Electrostatics: 100 },
			B-C: {
				VDW: 100,
				Electrostatics: 100 },
		}
		*/
	}

})(ChemJS, ChemJS.algorithms, ChemJS.helperFunctions, ChemJS.structures);

//defining the "helperFunctions"
(function(g,structures) {
	helper._AssignGasteigerPartialCharges = function(Molecule) {
		//see http://openbabel.org/dev-api/classOpenBabel_1_1OBAtomTyper.shtml
		//this time you have to get the SMILES parsing RIGHT! No more messy shit.
	}
})(ChemJS,ChemJS.structures,ChemJS.helperFunctions);

/*
Structures Modules
these are chained on top of GraphJS objects.

how to replace the name of an attribute?

graph -> Molecule
node -> atom
adj -> bond

perhaps we simply take in a graph and somehow change their names. can we do this through prototyping?

within the node/atom dictionary, the nodes are atom numbers within the Molecule and the attr_dict are actually the atom objects.

*/


//define the "structures.Molecule" module. 
(function(c,structures,g) {
	
	//constructor
	function Molecule() {
		this.atoms = this.node;
		this.bonds = this.adj;
	};
	
	Molecule.prototype = new g.classes.Graph();
	Molecule.prototype.constructor = Molecule;//otherwise instances of Molecule have GraphJS constructor
	
	structures.Molecule = function() {};
	
})(ChemJS, ChemJS.structures, GraphJS);

