<script>
    export let text = "Sample text";
    export let href = "/";
    export let target = "_blank";
    export let custom = "w-36 h-12";
</script>

<a class={custom} {href} {target}> {text} </a>

<style lang="scss">
    a {
        @apply text-center;
        @apply p-2 rounded-xl bg-inherit border-2 border-goop-purple bg-goop-purple2;
        @apply hover:border-goop-green hover:bg-goop-green2 whitespace-nowrap;
        @apply transition-colors ease-in-out duration-300;
        @apply text-lg font-sauce font-bold;
    }
</style>
