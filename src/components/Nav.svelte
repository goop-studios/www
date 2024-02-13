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
                    @apply text-xl hover:text-goop-green text-goop-purple transition-colors;
                    @apply ease-in-out duration-500;
                }
            }
            .socials {
                @apply ml-auto;
            }
        }
    }
</style>