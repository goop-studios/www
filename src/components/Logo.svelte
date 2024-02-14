<script>
    export let text = "Goop Studios";
</script>

<a href="/">
    <div class="logo-container">
        <img src="/assets/favicon_green.svg" alt="Logo" class="logo-image" />
        <img src="/assets/favicon_purple.svg" alt="Logo" class="logo-image" />
    </div>
    {text}
</a>

<style lang="scss">
    a {
        @apply relative text-white text-2xl font-sauce flex gap-2 transition-all;
    
        div {
            @apply relative w-8 h-8;
            img {
                @apply absolute w-full h-full;
                @apply transition-opacity duration-300 ease-in-out;
            }
        }

        &:hover img:first-child {
            @apply opacity-100;
        }
        &:hover img:last-child {
            @apply opacity-0;
        }
    }
</style>