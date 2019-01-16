<template>
    <div class="theme-container">
        <Header :site="$site" />
        <div class="main">
            <div class="boxed">
                <div class="post-top">
                    <div class="post-top-left">
                        <h3>{{ $page.frontmatter.title }}</h3>
                        <div>{{ $page.frontmatter.subtitle }}</div>
                    </div>
                    <div class="post-top-right">
                        <div class="post-icon" :style="{'background-image': 'url(' + $page.frontmatter.icon + ')'}"></div>
                        <div>{{ $page.frontmatter.date | date }}</div>
                    </div>
                </div>
                <Content/>
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

import mixin from '../components/mixin.js';

export default {
    mixins: [mixin],
    components: {
        Header,
        Footer
    },
    mounted() {
        console.log(this.$site);
        console.log(this.$page);
    }
}
</script>

<style lang="scss" scoped>

.post-top {
    width: 100%;
    display: block;
    margin-bottom: 2.5rem;
    .post-top-left, .post-top-right {
        width: 50%;
        display: inline-block;
        position: relative;
    }
    .post-top-right {
        text-align: right;
        float: right;
        margin-top: 1rem;
        position: relative;
    }
    .post-icon {
        position: absolute;
        right: 0;
        top: 1rem;
        width: 100px;
        height: 100px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 1;
    }
}

</style>