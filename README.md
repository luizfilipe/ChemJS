# ChemJS

ChemJS is a bare-bones Chemistry framework built on top of the GraphJS framework. ChemJS uses GraphJS to accomplish low-level representation and search algorithms. ChemJS is intended to be HTML5 WebWorker-compatible and NodeJS-compatible.

This project was inspired by the ChemDoodle WebComponents project from iChemLabs. ChemJS is a re-purposed version (written from the ground up) designed for more bare-bones, DOM-independent performance with molecular simulation in mind.

ChemJS is currently a work in progress and development will commence after the GraphJS project has been finished.

## Usage

Step 1: Download the source library (full or minified)
```bash
git clone git://github.com/ericjang/chemJS
```

Step 2: Include the source script in your html, your WebWorker, or NodeJS application.

Step 3: Create Graphs!
```JavaScript
var benzene = ChemJS.createMolecule();

```

## API

### Object Hierarchy (Summary):
```
GraphJS
└─┬ molecule
  ├── atoms
  ├── bonds
  ├── functional group (optional)
  └── rings (optional)
```
### ChemJS

The ChemJS object provides the highest level scope.

```JavaScript
//example:
var foo = ChemJS.createMolecule();
var bar = ChemJS.createMolecule();
ChemJS.molecules;//returns [foo,bar]
```

#### Functions:
- `createMolecule()`: creates a new molecule object and appends it to the molecules Array.
- `readMOL(string)`: reads in a MOL file and constructs a molecule.

### ChemJS.molecule

There are several ways to represent the graph abstract data type. Each vertex stores its incident edges, and each edge stores its incident vertices.

### Operations
```JavaScript
//more code goes here
```
### Extending ChemJS
//more code goes here
```JavaScript
//example of DockJS extending ChemJS
```
