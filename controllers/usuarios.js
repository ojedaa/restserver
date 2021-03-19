const {response,request} =require('express');



const usuariosGet = (req=request, res=response) => {
    const {nombre,edad,appikey,ind=0,lastname='no last'} = req.query; //?nombre=allan&edad=10&appikey=12312312
    res.json({
        msg:'Get API - controlador',
        nombre,
        edad,
        appikey,
        ind,
        lastname
    });
    
}
const usuariosPut = (req, res=response) => {
    const {id} = req.params; //=> usuarios/10
    res.json({ //bad request, algo mandaste mal en el front
        msg:'Put API - controlador',
        id
    });
    
    
}
const usuariosPost = (req, res=response) => { //=> del post
    const {nombre,edad} = req.body; //leo y parseo lo que viene en un post

    res.status(201).json({
        msg:'Post API - controlador',
        nombre,
        edad
    });
    
}
const usuariosDelete = (req, res=response) => {
    const {id} = req.params;
    res.json({
        msg:'Delete API - controlador',
        id
    });
    
}
const usuariosPatch = (req, res=response) => {
    res.json({
        msg:'Patch API - controlador'
    });
    
}


module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}