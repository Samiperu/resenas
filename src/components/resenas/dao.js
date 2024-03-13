const {resenaModel} = require("./model");

module.exports = {

 

  async obtener_resenas_busqueda(param, pagina){
    page = Number(pagina.pagina);
    const options = {
      page: page,
      limit: 4
    }
    try {
      const datos_obtener = {
        skuProducto: 1,
        tipoDocumento: 1,
        numDocumento: 1,
        correo: 1,
        nombres: 1,
        apellidos: 1,
        detResena: 1,
        fecResena: 1,
        statusResena: 1,
        calificacionResena: 1,
        numPedido: 1,
        detProducto: 1,
        dominio :1
      }
      if(page>0) {
        const resultado_resenas = await resenaModel.paginate(param, options, datos_obtener);
        return resultado_resenas;
      } else {
        const resultado_resenas = await resenaModel.find(param, datos_obtener);
        return resultado_resenas;        
      }
    } catch (err) {
        throw new Error(err);
    }
    },
  async obtener_resenas_dominio(param, pagina){
    page = Number(pagina.pagina);
    const options = {
      page: page,
      limit: 4,
    }    
    try {
      const datos_obtener = {
        skuProducto: 1,
        tipoDocumento: 1,
        numDocumento: 1,
        correo: 1,
        nombres: 1,
        apellidos: 1,
        detResena: 1,
        fecResena: 1,
        statusResena: 1,
        calificacionResena: 1,
        numPedido: 1,
        detProducto: 1,
        dominio :1
      }
      if(page>0) {
        const resultado_resenas = await resenaModel.paginate(param, options,  datos_obtener);
        return resultado_resenas;
      } else {
        const resultado_resenas = await resenaModel.find(param, datos_obtener);
        return resultado_resenas;
      }
        
    } catch (err) {
        throw new Error(err);
    }
    },

  async obtener_resenas_cliente(param, pagina){
    page = Number(pagina.pagina);
    const options = {
      page: page,
      limit: 4
    }    
    try {
      const datos_obtener = {
        skuProducto: 1,
        tipoDocumento: 1,
        numDocumento: 1,
        correo: 1,
        nombres: 1,
        apellidos: 1,
        detResena: 1,
        fecResena: 1,
        statusResena: 1,
        calificacionResena: 1,
        numPedido: 1,
        detProducto: 1,
        dominio :1
      }
      if(page>0) {
        const resultado_resenas = await resenaModel.paginate(param, options,  datos_obtener);
        return resultado_resenas;
      } else {
        const resultado_resenas = await resenaModel.find(param, datos_obtener);
        return resultado_resenas;
      }
    } catch (err) {
        throw new Error(err);
    }
    },

  async obtener_resenas_status(param, pagina){
    page = Number(pagina.pagina);
    const options = {
      page: page,
      limit: 4
    }    
    try {
      const datos_obtener = {
        skuProducto: 1,
        tipoDocumento: 1,
        numDocumento: 1,
        correo: 1,
        nombres: 1,
        apellidos: 1,
        detResena: 1,
        fecResena: 1,
        statusResena: 1,
        calificacionResena: 1,
        numPedido: 1,
        detProducto: 1,
        dominio :1
      }
      if(page>0) {
        const resultado_resenas = await resenaModel.paginate(param, options,  datos_obtener); 
        return resultado_resenas;
      } else {
        const resultado_resenas = await resenaModel.find(param, datos_obtener);
        return resultado_resenas;      
      }
    } catch (err) {
        throw new Error(err);
    }
    },

  async obtener_resenas_producto(param, pagina){
    page = Number(pagina.pagina);
    const options = {
      page: page,
      limit: 4
    }
    try {
      const datos_obtener = {
        skuProducto: 1,
        tipoDocumento: 1,
        numDocumento: 1,
        correo: 1,
        nombres: 1,
        apellidos: 1,
        detResena: 1,
        fecResena: 1,
        statusResena: 1,
        calificacionResena: 1,
        numPedido: 1,
        detProducto: 1,
        dominio :1
      }
        if(page>0) {
        const resultado_resenas = await resenaModel.paginate(param, options, datos_obtener);
        return resultado_resenas;
        } else {
          const resultado_resenas = await resenaModel.find(param, datos_obtener);
          return resultado_resenas;          
        }
    } catch (err) {
        throw new Error(err);
    }
    },



  async obtener_resenas_general(param, pagina){
    page = Number(pagina.pagina);
    const options = {
      
      page: page,
      limit: 4
    }
    try {
      const datos_obtener = {
        skuProducto: 1,
        tipoDocumento: 1,
        numDocumento: 1,
        correo: 1,
        nombres: 1,
        apellidos: 1,
        detResena: 1,
        fecResena: 1,
        statusResena: 1,
        calificacionResena: 1,
        numPedido: 1,
        detProducto: 1,
        dominio :1
      }
        if(page>0) {
          
          const resultado_resenas = await resenaModel.paginate(param, options, datos_obtener);
          return resultado_resenas;
        } else {
          const resultado_resenas = await resenaModel.find(param, datos_obtener);
          return resultado_resenas;          
        }
        
    } catch (err) {
        throw new Error(err);
    }
    },

    async existe_resena(datos_buscar) { 
      try {
        const datos_obtener = {
          skuProducto: 1,
          tipoDocumento: 1,
          numDocumento: 1,
          correo: 1,
          nombres: 1,
          apellidos: 1,
          detResena: 1,
          fecResena: 1,
          statusResena: 1,
          calificacionResena: 1,
          numPedido: 1,
          detProducto: 1,
          dominio :1
        }
        const resultado_resena = await resenaModel.findOne(datos_buscar, datos_obtener).lean();
        return resultado_resena;
      } catch (error) {
        throw new Error(error);
      }
    },


    async crear_resena(datos){
        try {
            const variable_modelo = new resenaModel(datos);
            const resultado_modelo = await variable_modelo.save();
            return resultado_modelo;
        } catch (err) {
            throw new Error(err);
        }
    },

    async actualizar_resena(datos_buscar, datos_actualizar) {  
        try {
          const resultado = await resenaModel.updateOne(datos_buscar, {$set: datos_actualizar})
          if(resultado.acknowledged == true && resultado.modifiedCount > 0){
              return true;
          }
          return resultado;
        } catch (error) {
          throw new Error(error);
        }
      },    

    async obtener_resenas_resumen(param, dominio) {  

        const resumenes=[];
        try {
          let skus = String(param).split(",");
          // TODO: Optimizar Query en una sola llamada

          for(e=0; e<skus.length; e++) {
            
              producto = {"skuProducto": skus[e], "statusResena":"2", "dominio": dominio };

            const resultado_resumen = await resenaModel.find(producto, {calificacionResena: 1}).lean();
            let score=0;
            let cuenta=0;
            
            if(resultado_resumen!=null) {
              cuenta=resultado_resumen.length;
              //Se usa el mismo índice para los 2 porque el API los trae ordenados

              for(y=0; y<resultado_resumen.length; y++) {
                score = score + Number(resultado_resumen[y].calificacionResena);
              }
              
              if(cuenta>0) {
                  score=score/cuenta;
                  score = Math.floor(score*2) /2;
              }
                  
            } 
              resumenes.push({"sku": skus[e], "score": score, "cantidad": cuenta})
            
          }
          return resumenes;
        } catch (error) {
          throw new Error(error);
        }
      } 
    
}
