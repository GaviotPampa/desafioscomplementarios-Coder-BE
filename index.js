class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const product = {
      title: title, //(nombre del producto)
      description: description, //(descripción del producto)
      price: price, //(precio)
      thumbnail: thumbnail, //(ruta de imagen)
      code: code, //(código identificador)
      stock: stock, //(número de piezas disponibles)
      id: this.#getMaxId () + 1,
    };
    this.products.push(product);
  }

  #getMaxId (){
    let maxId = 0;
    this.products.map ((product) => {
        if (product.id > maxId)
        maxId = product.id
    })
    return maxId;
  }

  getProducts (){
    console.log(this.products);
    return this.products;
  }

  getProductById (idProduct){
    ///debe buscar en el arreglo el producto que coincida con el id
    const product = this.products.find (product => product.id === idProduct);
/* En caso de no coincidir ningún id, mostrar en consola un error “Not found” */
if (product) {products.id ===idProduct ()

  }else {
    console.log (`Error: Product Not Found`)}

  }

  

 addProduct (codeProduct){
     const product = this.#getProducts(codeProduct);
      if (product){
        (!product.includes(codeProduct)) 
        products.push (codeProduct);
     }
    else {(console.log ("This product already exist whit this code"))}
  };

#getProducts(codeProduct){
    
    return this.products.find (product => product.code === codeProduct);

}
}

const productManager = new ProductManager();


productManager.addProduct ("producto Prueba", "description", 200,"thumbnail","code", 25);
productManager.addProduct ();
productManager.addProduct ();
productManager.getProducts ();
(productManager.getProducts());