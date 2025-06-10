function PokemonCardObject(name, imageUrl, id, type) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.isClicked = false;
  this.id = id;
  this.type = type;
}

export { PokemonCardObject };
