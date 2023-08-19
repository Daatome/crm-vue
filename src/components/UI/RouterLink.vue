
<script setup>
    import { RouterLink } from 'vue-router';


    defineProps({
        to:{
            type:String
        }
    })
</script>
<template>
    <RouterLink :to="{name: to}" class="block md:inline-block bg-blue-600 py-2 px-3 rounded-lg text-white font-bold hover:text-gray-100 hover:bg-blue-500">
        <slot></slot>
    </RouterLink>
</template>
