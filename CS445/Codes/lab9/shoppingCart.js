// This is a module design pattern which is an IIFE function, uses private instance through closure
// all the returns are public
const ShoppingCart = (function () {
    let basket = []; // This is a private instance
    return {
        upsertItem: function (product) {
            if (basket.length === 0) {
                basket.push(product);
            } else {
                for (let i = 0; i < basket.length; i++) {
                    if (basket[i].id === product.id) {
                        basket[i] = product;
                        return;
                    }                       
                }
                basket.push(product);
            }
            
        },
        getItemsCount: function(){
            return basket.length;
        },
        getTotalPrice: function () {
          return basket.reduce((total,prod) => total + prod.price * prod.count , 0);  
        },
        removeItemById: function (id) {
            basket = basket.filter(prod => prod.id !== id);
        }
    };
})();

