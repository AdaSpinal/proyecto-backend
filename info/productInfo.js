class productInfo{
    contructor() {
        this.products = [{
            id: 1,
            nombre: "Paleta Helada  de fresa",
            marca:"sarita",
            precio: "24 lps"
        },
        {
            id: 2,
            nombre: "Helado Napolitano",
            marca:"sarita",
            precio: "53 lps" 
        },
        {
            id: 3,
            nombre: "Helado Chocolate",
            marca:"sarita",
            precio: "55 lps"  
        }
        ]
    }

    getProducts(n){
        return this.products;
    }

    getProductsById(id){
        let returnProducts = {};
        this.products.forEach(products => {
            if (products.id == id) {
                returnProducts =  products;
            }
        });
        return returnProducts;
    }

    putProductsById(id){
    
    }


}

module.exports = new productInfo();

