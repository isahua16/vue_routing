<template>
    <nav class="header_nav">
        <router-link class="link" to="/">HOME</router-link>
        <router-link class="link" to="/menu">MENU</router-link>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .header_nav{
        display:grid;
        place-items: center;
        grid-auto-flow: column;
        column-gap: 25px;
    }
    .link {
        text-decoration: none;
        color: black;
        font-size: 1.2rem;
        letter-spacing: 5px;
        transition: transform 0.2s ease-in;
    }

    .link:hover {
        transform: scale(1.1);
    }
</style>