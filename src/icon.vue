<template>
    <svg class="icon">
        <use :xlink:href="`#i-${icon}`"></use>
    </svg>    
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .icon {
        width: 1em;
        height: 1em;
    }
</style>