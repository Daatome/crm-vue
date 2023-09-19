import api from "../lib/axios"

export default{
    obtenerClientes(){
        return api.get('/clientes')
    },
    registrarCliente(cliente){
        return api.post('/clientes',cliente)
    },
    obtenerCliente(id){
        return api.get('/clientes/'+id)
    },
    actualizarCliente(id,data){
        return api.put('/clientes/'+id,data)
    },
    actualizarEstado(id,data){
        return api.patch('/clientes/'+id,data)
    },
    eliminarCliente(id){
        return api.delete('/clientes/'+id);
    }


}