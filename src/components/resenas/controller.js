const resenasDao = require('./dao')
const { respuesta_envio_api } = require('../../utils/error')
const axios = require('axios')

async function obtener_resenas_busqueda(param, pagina) {
  const resultado_lista = await resenasDao.obtener_resenas_busqueda(param, pagina)
  return respuesta_envio_api(true, 'SUCCESS', 'Se realizo correctamente', resultado_lista)
}

async function obtener_resenas_dominio(param, pagina) {
  let page = Number(pagina.pagina);
  let score=0;
  let resultado_lista = await resenasDao.obtener_resenas_dominio(param, 0)
  let cuenta = resultado_lista.length;
  for(average=0; average< cuenta; average++) {
    score = score + Number(resultado_lista[average].calificacionResena);
  }
  score = score/cuenta;
  score = score.toFixed(2);
  if(page>0) {
    resultado_lista = await resenasDao.obtener_resenas_dominio(param, pagina);
  }   
  return respuesta_envio_api(true, 'SUCCESS', 'Se realizo correctamente', resultado_lista)
}

async function obtener_resenas_cliente(param, pagina) {
  let page = Number(pagina.pagina);
  let score=0;
  let resultado_lista = await resenasDao.obtener_resenas_cliente(param, 0);
  let cuenta = resultado_lista.length;
  for(average=0; average< cuenta; average++) {
    score = score + Number(resultado_lista[average].calificacionResena);
  }
  score = score/cuenta;
  score = score.toFixed(2);
  if(page>0) {
    resultado_lista = await resenasDao.obtener_resenas_cliente(param, pagina);
  }   
  return respuesta_envio_api(true, 'SUCCESS', 'Se realizo correctamente', resultado_lista, cuenta, score)
}

async function obtener_resenas_status(param, pagina) {
  let page = Number(pagina.pagina);
  let score=0;
  let resultado_lista = await resenasDao.obtener_resenas_status(param, 0);
  let cuenta = resultado_lista.length;
  for(average=0; average< cuenta; average++) {
    score = score + Number(resultado_lista[average].calificacionResena);
  }
  score = score/cuenta;
  score = score.toFixed(2);
  if(page>0) {
    resultado_lista = await resenasDao.obtener_resenas_status(param, pagina);
  }     
  return respuesta_envio_api(true, 'SUCCESS', 'Se realizo correctamente', resultado_lista)
}

async function obtener_resenas_producto(param, pagina) {
  let page = Number(pagina.pagina);
  let score=0;
  let resultado_lista = await resenasDao.obtener_resenas_producto(param, 0);
  let cuenta = resultado_lista.length;
  for(average=0; average< cuenta; average++) {
    score = score + Number(resultado_lista[average].calificacionResena);
  }
  score = score/cuenta;
  score = score.toFixed(2);
  if(page>0) {
    resultado_lista = await resenasDao.obtener_resenas_producto(param, pagina);
  }  
  return respuesta_envio_api(true, 'SUCCESS', 'Se realizo correctamente', resultado_lista,cuenta,score)
}
 
async function obtener_resenas_general(param, pagina) {
  let page = Number(pagina.pagina);
  let score=0;
  let resultado_lista = await resenasDao.obtener_resenas_general(param, 0);
  let cuenta = resultado_lista.length;
 
  for(average=0; average< cuenta; average++) {
    score = score + Number(resultado_lista[average].calificacionResena);
  }
  score = score/cuenta;
  score = score.toFixed(2);
  if(page>0) {
    resultado_lista = await resenasDao.obtener_resenas_general(param, pagina);
  }
  return respuesta_envio_api(true, 'SUCCESS', 'Se consultó correctamente', resultado_lista, cuenta, score)
}

async function obtener_resenas_resumen(listaSku, dominio) {
  let resultado_lista = await resenasDao.obtener_resenas_resumen(listaSku, dominio);


  return respuesta_envio_api(true, 'SUCCESS', 'Se consultó correctamente', resultado_lista)
}

async function procesardata(resena){
  const datos = {
    skuProducto: resena.skuProducto,
    tipoDocumento: resena.tipoDocumento,
    numDocumento: resena.numDocumento,
    correo: resena.correo,
    nombres: resena.nombres,
    apellidos: resena.apellidos,
    detResena: resena.detResena,
    fecResena: resena.fecResena,
    statusResena: resena.statusResena,
    calificacionResena: resena.calificacionResena,
    numPedido: resena.numPedido,
    detProducto: resena.detProducto,
    dominio :resena.dominio
  }
  const datos_buscar = {
    skuProducto: resena?.skuProducto ?? '',
    tipoDocumento: resena?.tipoDocumento ?? '',
    numDocumento: resena?.numDocumento ?? '',
    dominio: resena?.dominio ?? ''
  }
  const existe = await resenasDao.existe_resena(datos_buscar);
    
    if(existe)
    {      
      const resultado_actualizar = await  resenasDao.actualizar_resena(datos_buscar, datos);
      if (!resultado_actualizar) {
        return respuesta_envio_api(false, 'ERROR_ACTUALILZAR_RESEÑA', 'No se logró actualizar reseña', []);
      } else {
        return respuesta_envio_api(true, 'SUCCESS', 'Se logró actualizar reseña', []);
      }
    } else {
      const resultado_crear = await resenasDao.crear_resena(datos);
      if (!resultado_crear) {
        return respuesta_envio_api(false, 'ERROR_CREAR_RESEÑA', 'No se logró crear reseña', []);
      }   
      return respuesta_envio_api(true, 'SUCCESS', 'Se logró crear reseña', []);
    }
}


module.exports = {
  async obtener_resenas_busqueda(req, res) {
    try {
      let param = req.body;
      const dominio={"dominio": req.query.dominio}
      const pagina ={"pagina": req.query.pagina}
      const info = await obtener_resenas_busqueda(param, dominio, pagina)
      return res.json(info)
    } catch (err) {
      console.error('[response error]', err.message)
      return res.status(500).send({
        bEstado: false,
        iCodigo: 0,
        sRpta: err.message,
        obj: []
      })
    }
  },

  async obtener_resenas_dominio(req, res) {
    try {
      const param = {"dominio" : req.query.dominio}
      const pagina ={"pagina": req.query.pagina}
      const info = await obtener_resenas_dominio(param, pagina)
      return res.json(info)
    } catch (err) {
      console.error('[response error]', err.message)
      return res.status(500).send({
        bEstado: false,
        iCodigo: 0,
        sRpta: err.message,
        obj: []
      })
    }
  },

  async obtener_resenas_cliente(req, res) {
    try {
      const param = {"tipoDocumento" : req.query.tipoDocumento, "numDocumento": req.query.numDocumento, "dominio": req.query.dominio}
      const pagina ={"pagina": req.query.pagina}
      const info = await obtener_resenas_cliente(param, pagina)
      return res.json(info)
    } catch (err) {
      console.error('[response error]', err.message)
      return res.status(500).send({
        bEstado: false,
        iCodigo: 0,
        sRpta: err.message,
        obj: []
      })
    }
  },

  async obtener_resenas_status(req, res) {
    try {
      const param = {"statusResena" : req.query.statusResena, "dominio": req.query.dominio}
      const pagina ={"pagina": req.query.pagina}
      const info = await obtener_resenas_status(param, pagina);
      return res.json(info)
    } catch (err) {
      console.error('[response error]', err.message)
      return res.status(500).send({
        bEstado: false,
        iCodigo: 0,
        sRpta: err.message,
        obj: [],
      })
    }
  },

  async obtener_resenas_producto(req, res) {
    try {
      const param = {"skuProducto" : req.query.skuProducto, "dominio": req.query.dominio}
      const pagina ={"pagina": req.query.pagina}
      const info = await obtener_resenas_producto(param, pagina)
      return res.json(info)
    } catch (err) {
      console.error('[response error]', err.message)
      return res.status(500).send({
        bEstado: false,
        iCodigo: 0,
        sRpta: err.message,
        obj: []
      })
    }
  },

  async obtener_resenas_general(req, res) {
    try {
      const param = {"dominio": req.query.dominio}
      const pagina = {"pagina": req.query.pagina}
      const info = await obtener_resenas_general(param, pagina)
      return res.json(info)
    } catch (err) {
      console.error('[response error]', err.message)
      return res.status(500).send({
        bEstado: false,
        iCodigo: 0,
        sRpta: err.message,
        obj: []
      })
    }
  },

  async obtener_resenas_resumen(req, res) {
    try {
      const listSku = req.query.listaSku
      const dominio = req.query.dominio

      if(dominio===null || dominio==="" || typeof dominio ==="undefined") {
        return res.status(400).send({
          bEstado: false,
          iCodigo: 0,
          sRpta: "Error, Debe proveerse DOMINIO",
          obj: []
        })        
      }

      if(listSku===null || listSku==="" || typeof listSku==="undefined") {
        return res.status(400).send({
          bEstado: false,
          iCodigo: 0,
          sRpta: "Debe proveerse SKUS",
          obj: []
        })        
      }
      const info = await obtener_resenas_resumen(listSku, dominio)

      if(info.obj.length==0) {
        return res.status(404).send({
          bEstado: false,
          iCodigo: 0,
          sRpta: "SKUS no encontrados",
          obj: []
        })         
          }


      return res.json(info)
    } catch (err) {
      console.error('[response error]', err.message)
      return res.status(500).send({
        bEstado: false,
        iCodigo: 0,
        sRpta: err.message,
        obj: []
      })
    }
  },

  async procesardata(req, res) {
    try {
      const valores = req.body
      const info = await procesardata(valores)
      return res.json(info)
    } catch (err) {
      console.error('[response error]', err.message)
      return res.status(500).send({
        bEstado: false,
        iCodigo: 0,
        sRpta: err.message,
        obj: []
      })
    }
  }
}
