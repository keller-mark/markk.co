<template>
    <div class="theme-container">
        <Header :site="$site" />
        <div class="main">
            <div class="boxed">
                <Intro />
                <ClientOnly>
                    <Timeline :site="$site"/>
                </ClientOnly>
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
import Intro from '../components/Intro.vue';
import Timeline from '../components/Timeline.vue';

export default {
    components: {
        Header,
        Footer,
        Intro,
        Timeline
    },
    mounted() {
        console.log(this.$site)
    }
}
</script>

<style lang="scss" scoped>




</style>