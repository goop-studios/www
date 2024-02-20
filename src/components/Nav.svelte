<script>
    import { getRelativeLocaleUrl } from 'astro:i18n';
    import Logo from "./Logo.svelte";
    import Socials from "./Socials.svelte";

    export let logo_text = "Goop Studios"
    export let fields    = []
    export let subfields = {
        "Crew": ["Oscar Sjödin Jansson", "Odin Larsson", "Liam Sporny", "Sepand Sadraei Javahery"],
    }

    function getRoute(field) {
        field = field.replace(/\s/g, '');
        field = field.replace(/ö/g, 'o');
        return `${lowerCase(field)}`
    }
 
    function checkForRouteInUrl() {
        const currentUrl = window.location.href;
        return currentUrl.includes("/en") ? "en" : "sv";
    }

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
            <li>
                <a href={`${getRelativeLocaleUrl(checkForRouteInUrl(), getRoute(field))}`}>{field}</a>
                {#if subfields[field]}
                    <ul>
                        {#each subfields[field] as subfield}
                            <li><a href={`${getRelativeLocaleUrl(checkForRouteInUrl(), getRoute(field))}${getRoute(subfield)}`}>{subfield}</a></li>
                        {/each}
                    </ul>
                {/if}
            </li>
        {/each}
        <li class="socials">
            <Socials />
        </li>
    </ul>
</nav>

<style lang="scss">
    nav {
        @apply relative w-screen z-40;
        ul {
            @apply flex flex-row gap-5 portrait:justify-evenly portrait:gap-0 drop-shadow-2xl bg-gray-900;
            li {
                @apply my-auto p-4 relative;
                a {
                    @apply text-xl;
                    @apply underline decoration-goop-purple underline-offset-4;
                    @apply hover:decoration-goop-green;
                    @apply transition-decoration ease-in-out duration-300;
                }
                ul {
                    @apply absolute left-0 top-full flex flex-col p-4 rounded-md drop-shadow-2xl;
                    @apply transition-opacity duration-300 ease-in-out;
                    @apply bg-gray-900;
                    @apply opacity-0 invisible;
                }

                &:hover ul {
                    @apply opacity-100 visible;
                }
            }
            .socials {
                @apply ml-auto portrait:hidden;
            }
        }
    }
</style>
