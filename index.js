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
      id: this.#getMaxId() + 1,
    };
    this.products.push(product);
  }

  #getMaxId() {
    let maxId = 0;
    this.products.map((product) => {
      if (product.id > maxId) maxId = product.id;
    });
    return maxId;
  }

  getProducts() {
    return this.products;
  }

  getProductById(idProduct) {
    ///debe buscar en el arreglo el producto que coincida con el id
    const product = this.products.find((product) => product.id === idProduct);
    /* En caso de no coincidir ningún id, mostrar en consola un error “Not found” */
    if (product) {
      products.id === idProduct();
      return console.log("Producto encontrado");
    } else {
      console.log(`Error: No se encontro el producto con el Id: ${idProduct}`);
    }
  }

    addProduct(code){
      const product = this.#getProducts(code);
      if (product) {
        !product.includes(code);
        product.push(code);
      } else {
        console.log(`This product already exist whit this code ${code}`);
      }
    }

    #getProducts(idProduct) {
      return this.products.find((product) => product.code === idProduct);
    }
  }


const productManager = new ProductManager();

productManager.addProduct(
  "producto Prueba",
  "Este es un producto prueba",
  200,
  "sin imagen",
  "abc123",
  25
);
productManager.addProduct(
  "producto Prueba2",
  "Este es un producto prueba 2",
  250,
  "sin imagen",
  "abc124",
  20
);
productManager.addProduct(
  "producto Prueba3",
  "Este es un producto prueba 3",
  300,
  "sin imagen",
  "abc125",
  10
);
/* productManager.addProduct(
  "producto Prueba4",
  "Este es un producto prueba 4",
  300,
  "sin imagen",
  "abc125",
  10
); */
productManager.getProductById( "producto Prueba5",
"Este es un producto prueba 5",
300,
"sin imagen",
"abc126",
10);
console.log(productManager.getProducts());
