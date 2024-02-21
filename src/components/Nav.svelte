<script>
    import { getRelativeLocaleUrl } from 'astro:i18n';
    import Logo from "@components/Logo.svelte";
    import Socials from "@components/Socials.svelte";

    const routes = {
        "omoss": "about",
        "kontakt": "contact"
    }

    function localeToggle() {
        const currentLocale = checkForRouteInUrl();
        return currentLocale != "sv" ? "icon-[circle-flags--se]" : "icon-[circle-flags--uk]";
    }

    function localeRoute() {
        const currentUrl = window.location.pathname;
        const currentLocale = checkForRouteInUrl();
        const newLocale = currentLocale === "sv" ? "" : "sv";
        const pageRoute = currentUrl.match(currentLocale === "sv" ? /\/sv\/(.+)/ : /\/(.+)/);
        const route = pageRoute ? pageRoute[1] : '';
        return newLocale === "" ? `/${route}` : `/${newLocale}/${route}`;
    }

    function language() {;
        const currentLocale = checkForRouteInUrl();
        return currentLocale != "sv" ? "Switch to Swedish" : "Byt till Engelska";
    }

    function getRoute(field) {
        field = field.replace(/\s/g, '');
        field = field.replace(/ö/g, 'o');
        field = field.replace(/ä/g, 'a');
        field = field.replace(/å/g, 'a');
        field = field.toLowerCase();
        if (routes[field]) {
            return `${routes[field]}`
        } else {
            return field;
        }
    }

    function checkForRouteInUrl() {
        const currentUrl = window.location.pathname;
        return currentUrl.startsWith("/sv") ? "sv" : "en";
    }

    function language_fields() {
        return checkForRouteInUrl() != "sv" ? ["About"] : ["Om oss"];
    }

    export let logo_text = "Goop Studios"
    export let fields    = language_fields();

</script>

<nav>
    <ul>
        <li>
            <Logo lang={checkForRouteInUrl()} />
        </li>
        {#each fields as field}
            <li>
                <a href={`${getRelativeLocaleUrl(checkForRouteInUrl(), getRoute(field))}`}>{field}</a>
                <!--{#if subfields[field]}
                    <ul>
                        {#each subfields[field] as subfield}
                            <li><a href={`${getRelativeLocaleUrl(checkForRouteInUrl(), getRoute(field))}${getRoute(subfield)}`}>{subfield}</a></li>
                        {/each}
                    </ul>
                {/if}-->
            </li>
        {/each}
        <li class="togglelocale">
            <a title={language()} href={localeRoute()} aria-label="toggleLang"><span class={localeToggle()}></span></a>
        </li>
        <li class="socials">
            <Socials />
        </li>
    </ul>
</nav>

<style lang="scss">
    nav {
        @apply relative max-w-full z-40;
        ul {
            @apply flex flex-row gap-5 portrait:justify-evenly portrait:gap-0 drop-shadow-2xl bg-gray-900 align-middle;
            li {
                @apply p-4 text-nowrap relative items-center;
                a {
                    @apply text-xl flex text-center h-full items-center;
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
            .togglelocale {
                @apply ml-auto;
            }
            .socials {
                @apply portrait:hidden;
            }
        }
    }
</style>
