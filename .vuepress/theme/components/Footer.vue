<template>
    <div class="footer">
        <div class="footer-top"></div>
        <div class="footer-image" :style="{'height': imageHeight + 'px'}"></div>
        <a class="flickr-link" title="View more on Flickr" href="https://www.flickr.com/photos/83712651@N04/">View more on Flickr</a>
    </div>
</template>

<script>
const IMAGE_ASPECT_RATIO = 1.5;
export default {
    data() {
        return {
            imageHeight: 0
        };
    },
    mounted() {
        this.updateImageHeight(window.innerWidth);
        window.addEventListener('resize', () => {
            this.updateImageHeight(window.innerWidth);
        });
    },
    methods: {
        updateImageHeight(windowWidth) {
            this.imageHeight = windowWidth / IMAGE_ASPECT_RATIO;
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
    position: relative;
    .footer-top {
        display: block;
        width: 100%;
        height: 200px;
        background: rgb(237,242,248);
        background: linear-gradient(0deg, rgba(237,242,248,1) 0%, rgba(255,255,255,1) 100%);
    }
    .footer-image {
        display: block;
        width: 100%;
        background-image: url('/DSCF4612.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
        background-color: rgb(237,242,248);
    }

    .flickr-link {
        display: inline-block;
        bottom: 2rem;
        right: 2rem;
        color: rgb(237,242,248);
        font-size: 24px;
        position: absolute;
    }
}
</style>
