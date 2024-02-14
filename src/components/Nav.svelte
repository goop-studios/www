<script>
    import Logo from "./Logo.svelte";
    import Socials from "./Socials.svelte";
    export let logo_text = "Goop Studios"
    export let fields    = []

    function lowerCase(field) {
        return field.toLowerCase();
    }
</script>

<nav>
    <ul>
        <li>
            <Logo text={logo_text} />
        </li>
        {#each fields as field}
            <li><a href={`/${lowerCase(field)}`}>{field}</a></li>
        {/each}
        <li class="socials">
            <Socials />
        </li>
    </ul>
</nav>

<style lang="scss">
    nav {
        ul {
            @apply flex flex-row gap-5 drop-shadow-2xl bg-gray-900;
            li {
                @apply my-auto p-4;
                a {
                    @apply text-xl;
                    @apply underline decoration-goop-purple underline-offset-4;
                    @apply hover:decoration-goop-green;
                    @apply transition-decoration ease-in-out duration-300;
                }
            }
            .socials {
                @apply ml-auto;
            }
        }
    }
</style>