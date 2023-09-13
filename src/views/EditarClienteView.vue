
<script setup>
import { onMounted, reactive } from 'vue';
import RouterLink from '../components/UI/RouterLink.vue';
import Heading from '../components/UI/Heading.vue';

import ClienteService from '../services/ClienteService';
import { FormKit } from '@formkit/vue';

import { useRouter, useRoute } from 'vue-router';

const router =useRouter()
const route = useRoute()


const {id}=route.params

const formData= reactive({
    nombre: '',
    apellido:'',
    email:'',
    telefono:'',
    empresa:'',
    puesto:'',
    estado: 1

})

onMounted(()=>{
    ClienteService.obtenerCliente(id)
    .then(({data})=>{
        formData.nombre=data.nombre
        formData.apellido=data.apellido
        formData.email=data.email
        formData.telefono=data.telefono
        formData.empresa=data.empresa
        formData.puesto=data.puesto
    })
    .catch(()=>console.log(console.error()))
})

defineProps({
    titulo:{
        type:String,
        required:true
    }
})


const handleSubmit=(data)=>{
    ClienteService.actualizarCliente(id,data)
    .then(()=> router.push({name:'inicio'}))
    .catch(error=> console.log(error))
}
</script>
<template>
    <div class="">
        <div class="flex justify-end">
            <RouterLink to="inicio">
                Volver
            </RouterLink>
        </div>
        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">

                <FormKit
                    type="form"
                    submit-label="Editar Cliente"
                    incomplete-message="No se pudo enviar revisa los mensajes"
                    @submit="handleSubmit"
                    :value="formData"
                >
                    <FormKit
                        type="text"
                        label="Nombre"
                        name="nombre"
                        placeholder="Introduce el nombre del cliente"
                        validation="required"
                        :validation-messages="{required: 'El nombre es obligatorio'}"
                        validation-visibility="blur"
                        v-model="formData.nombre"
                    />
                    <FormKit
                        type="text"
                        label="Apellido"
                        name="apellido"
                        placeholder="Introduce el apellido del cliente"
                        validation="required"
                        :validation-messages="{required: 'El apellido es obligatorio'}"
                        validation-visibility="blur"
                        v-model="formData.apellido"

                    />

                    <FormKit
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Introduce el Email del cliente"
                        validation="required|email"
                        :validation-messages="{required: 'El email es obligatorio',email:'Coloca un email válido'}"
                        validation-visibility="blur"
                        v-model="formData.email"

                    />
                    <FormKit
                        type="text"
                        label="Telefono"
                        name="telefono"
                        placeholder="Telefono"
                        validation="*matches:/^[0-9]{10}$/"
                        :validation-messages="{matches:'Coloca un teléfono válido'}"
                        v-model="formData.telefono"

                    />

                    <FormKit
                        type="text"
                        label="Empresa"
                        name="empresa"
                        placeholder="Introduce la empresa del cliente"
                        v-model="formData.empresa"

                    />
                    <FormKit
                        type="text"
                        label="Puesto"
                        name="puesto"
                        placeholder="Introduce el puesto del cliente"
                        v-model="formData.puesto"

                    />

                  
    
                </FormKit>
            </div>
        </div>

    </div>
</template>

<style>

.formkit-wrapper{
    max-width: 100%;
}
</style>