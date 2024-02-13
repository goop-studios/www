<script>
    export let title;
    export let href;
    export let body;
</script>

<li>
    <a href={href} target="_self">
        <h2>
            {title}
        </h2>
        <p>
            {body}
        </p>
</li>

<style lang="scss">
    li {
        @apply antialiased;
        @apply bg-gray-700 rounded-2xl p-4 w-1/2 h-1/4 list-none shadow-black;
        @apply hover:-translate-y-1 hover:scale-105;
        @apply transition-all duration-300 ease-in-out;
        a {
            @apply text-white;
        }
        h2 {
            @apply text-2xl font-sauce;
        }
        p {
            @apply text-lg;
        }
    }
</style>