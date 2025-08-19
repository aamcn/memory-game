// Card Constructor

//Create pokemon card object from input arguments.

class PokemonCardObject {
  
  constructor(name, imageUrl, id, type) {
    this.validateInputs(name, imageUrl, id, type);
    
    this.name = name;
    this.imageUrl = imageUrl;
    this.isClicked = false;
    this.id = id;
    this.type = type;

  }


  validateInputs(name, imageUrl, id, type) {
    if (!name || !imageUrl || id === undefined || !type) {
      throw new Error("Invalid input: all fields (name, imageUrl, id, type) are required");
    }
    
    if (typeof name !== 'string' || typeof imageUrl !== 'string' || typeof type !== 'string') {
      throw new Error("Invalid input: name, imageUrl, and type must be strings");
    }
    
    if ( id < 0) {
      throw new Error("Invalid input: id must be a positive number");
    }
  }

toggleClick() {
  this.isClicked = true;
}

}
export { PokemonCardObject };
