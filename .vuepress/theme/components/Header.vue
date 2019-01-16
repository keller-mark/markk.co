<template>
    <div class="header">
        <div class="boxed">
            <a href="/">{{ site.title }}</a>
            <div class="header-right">
                <span>Student at the University of Maryland</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['site']
}
</script>

<style lang="scss" scoped>
.header {
    line-height: 3rem;
    border-bottom: 3px solid #EDF2F8;
    a {
        text-decoration: none;
        color: #333;
        font-weight: 600;
        font-size: 1.375rem;
    }
    .header-right {
        float: right;
        span {
            font-weight: 100;
            color: #555;
            line-height: 2.75rem;
            padding-top: 0.25rem;
            display: inline-block;
        }
    }
}

@media screen and (max-width: 40em) {
    .header .header-right {
        display: none;
    }
}
</style>
