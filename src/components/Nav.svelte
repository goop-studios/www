<script>
    export let logo_text = "Goop Studios"
    export let fields    = []

    function toRoute(field) {
        return field.toLowerCase();
    }
</script>

<nav>
    <ul>
        <li class="logo">
            <a href="/">
                <div class="logo-container">
                    <img src="/favicon_green.svg" alt="Logo" class="logo-image" />
                    <img src="/favicon_purple.svg" alt="Logo" class="logo-image" />
                </div>
                {logo_text}
            </a>
        </li>
        {#each fields as field}
            <li><a href={`/${toRoute(field)}`}>{field}</a></li>
        {/each}
    </ul>
</nav>

<style lang="scss">
    nav {
        @apply bg-gray-400;
        ul {
            @apply flex flex-row gap-5;
            li.logo a {
                @apply relative text-white text-2xl font-sauce flex gap-2 align-middle transition-all;
                
                .logo-container {
                    @apply relative w-8 h-8;
                    img.logo-image {
                        @apply absolute top-0 left-0 w-full h-full;
                        transition: opacity  0.3s ease-in-out;
                    }
                }
                &:hover .logo-image:first-child {
                    @apply opacity-100;
                }
                &:hover .logo-image:last-child {
                    @apply opacity-0;
                }
            }
            li {
                @apply cursor-pointer ease-in-out duration-300;
            }
            li:not(.logo) {
                @apply text-lg hover:text-green-500 transition-colors;
            }
        }
    }
</style>