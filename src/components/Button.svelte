<script>
    export let text = "Sample text";
    export let href = "/";
</script>

<a {href}> {text} </a>

<style lang="scss">
    a {
        @apply w-36 h-12 text-center;
        @apply p-2 rounded-xl bg-inherit border-2 border-goop-purple bg-goop-purple2;
        @apply hover:border-goop-green hover:bg-goop-green2 whitespace-nowrap;
        @apply transition-colors ease-in-out duration-300;
        @apply text-lg font-sauce;
    }
</style>