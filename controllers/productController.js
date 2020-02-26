const productInfo = require("../info/productInfo")
class productController{
    
    async getProducts(req, res){
        let response = {
            success: true
        }
        const products = productInfo.getProducts(2);
        response.data = products;
        console.log('products');
        console.log(products);
        response.data = products;
      
        res.send(response);
    }

    getProductsById(req, res){
        const idParam = req.params.id;
        
        let response = {
            success: true
        }
        if (isNaN(idParam)) {
            response.success = false;
            response.message = 'Bad Request';
            response.code = 400;
            res.send(response);
        }

        try {
            const user = userService.getUserById(idParam);
            response.data = user;
        } catch (error) {
            response.success = false;
            response.message = error.message;
            response.code = 503;
        }
        res.send(response);
    }
}

module.exports = new productController();
