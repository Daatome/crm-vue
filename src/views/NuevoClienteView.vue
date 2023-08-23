
<script setup>
import RouterLink from '../components/UI/RouterLink.vue';
import Heading from '../components/UI/Heading.vue';

import { FormKit } from '@formkit/vue';


defineProps({
    titulo:{
        type:String,
        required:true
    }
})

const handleSubmit=(data)=>{
    console.log(data);
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
                    submit-label="Agregar Cliente"
                    incomplete-message="No se pudo enviar revisa los mensajes"
                    @submit="handleSubmit"
                >
                    <FormKit
                        type="text"
                        label="Nombre"
                        name="nombre"
                        placeholder="Introduce el nombre del cliente"
                        validation="required"
                        :validation-messages="{required: 'El nombre es obligatorio'}"
                        validation-visibility="blur"
                    />
                    <FormKit
                        type="text"
                        label="Apellido"
                        name="apellido"
                        placeholder="Introduce el apellido del cliente"
                        validation="required"
                        :validation-messages="{required: 'El apellido es obligatorio'}"
                        validation-visibility="blur"
                    />

                    <FormKit
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Introduce el Email del cliente"
                        validation="required|email"
                        :validation-messages="{required: 'El email es obligatorio',email:'Coloca un email válido'}"
                        validation-visibility="blur"
                    />
                    <FormKit
                        type="text"
                        label="Telefono"
                        name="telefono"
                        placeholder="Telefono: XXX-XXX-XXXX"
                        validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{matches:'Coloca un teléfono válido'}"
                    />

                    <FormKit
                        type="text"
                        label="Empresa"
                        name="empresa"
                        placeholder="Introduce la empresa del cliente"
                    />
                    <FormKit
                        type="text"
                        label="Puesto"
                        name="puesto"
                        placeholder="Introduce el puesto del cliente"
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