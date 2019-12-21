<template>
    <button  class="g-button" :class="[iconPosition ? `icon-${iconPosition}` : '']" @click="$emit('click')">
        <g-icon v-if="loading" class="icon loading" icon="loading"></g-icon>
        <g-icon v-if="!loading && icon" :icon="icon"></g-icon>
        <div>
            <slot />
        </div>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: ''
        },
        loading: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: '',
            validator: function (value) {
                return ['', 'left', 'right'].indexOf(value) !== -1
            }
        }
    }
}
</script>
 
<style lang="scss" scoped>
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .icon {
            margin-right: .1em;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1em;
            }
        }
        > .loading {
            animation: spin 2s infinite linear;
        }
    }
</style>