<template>
    <div class="page_container">
        <page-header></page-header>
        <h1>MENU PAGE</h1>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
    export default {
        components: {
            PageHeader
        }
    }
</script>

<style scoped>
    .page_container{ 
        display:grid;
        place-items:center;
    }
</style>