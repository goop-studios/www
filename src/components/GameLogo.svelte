<a href="https://github.com/goop-studios/game" target="_blank">
    <div class="logo-container">
        <img src="/assets/game_logo_green.svg" alt="Logo" class="logo-image" />
        <img src="/assets/game_logo_purple.svg" alt="Logo" class="logo-image" />
    </div>
</a>

<style lang="scss">
    a {
        @apply relative flex gap-2 transition-all select-none;
    
        div {
            @apply relative landscape:w-[32rem] portrait:w-80 h-fit;
            img {
                @apply absolute;
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