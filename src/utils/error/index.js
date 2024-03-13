module.exports.respuesta_envio_api = (bEstado, iCodigo, sRpta, obj,cuenta, score) => {
    return {
      bEstado: bEstado,
      iCodigo: iCodigo,
      sRpta: sRpta,
      obj: obj,
      cuenta: cuenta,
      score: score
    }
}