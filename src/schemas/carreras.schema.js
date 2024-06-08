const Joi = require("joi")
const materiasSchema= require("./materias.schemas")
const carreraSchema = Joi.object().keys(
    {
        grado: Joi.string().required().max(20).messages({
            "string.max": "el nombre no puede pasar los {#limit} caracteres",
            "string.empty": "no puede dejar vacio el campo grado",
            "any.required": "debe ingresar el grado"
        }),
        universidad: Joi.string().required().messages({
            "any.required": "debe ingresar la universidad",
            "string.empty": "no puede dejar vacio el campo universidad"
        }),
        materias: Joi.array().required().items(materiasSchema)
        
    }
)

module.exports= carreraSchema




