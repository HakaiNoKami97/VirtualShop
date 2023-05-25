var Carrito = require('../models/carrito');
var Variedad = require('../models/variedad');

const crear_producto_carrito = async function(req,res){
    if(req.user){
        let data = req.body;

        var variedad = await Variedad.findById({_id:data.variedad}).populate('producto');

        if(data.cantidad <= variedad.stock){
            //
            if(variedad.producto.precio >= 1){
                //
                let carrito = await Carrito.create(data);
                res.status(200).send(carrito);
            }else{
                res.status(200).send({data:undefined,message: 'El producto tiene precio en 0'});
            }
        }else{
            res.status(200).send({data:undefined,message: 'Se supero el stock del producto'});
        }
    }else{
        res.status(500).send({data:undefined,message: 'ErrorToken'});
    }
}

module.exports = {
    crear_producto_carrito
}