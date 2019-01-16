<template>
    <div class="theme-container">
        <Header :site="$site" />
        <div class="main">
            <div class="boxed">
                <h1>404 NOT FOUND</h1>
                <a href="/">&larr; Back to home</a>
            </div>
        </div>
        <ClientOnly>
            <Footer />     
        </ClientOnly>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="scss" scoped>

</style>