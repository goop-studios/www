<script>
    import Socials from "@components/Socials.svelte";
    import contact from "@data/contact.json";

    export let text = "Goop Studios";
    export let lang = "en";
    export let current_year = new Date().getFullYear();
</script>

<footer>
    <ul>
        <li class="socials"> <Socials /> </li>
        <li> {text} &copy; <span class="first"> 2023 </span> - <span class="last"> {current_year} </span> </li>
        {#if lang !== "sv" }
        <li> Contact: <a href={`mailto:${contact.email}`} target="_blank">{contact.email}</a></li>
        <li> This website is <a href="https://github.com/goop-studios/www" target="_blank">open-source</a></li>
        {:else}
        <li> Kontakt: <a href={`mailto:${contact.email}`} target="_blank">{contact.email}</a></li>
        <li> Denna webbplats är under <a href="https://github.com/goop-studios/www" target="_blank">öppen-källkod</a></li>
        {/if}
    </ul>
</footer>

<style lang="scss">
    footer {
        @apply bg-gray-900 flex flex-row justify-center p-4 mt-auto;
        ul {
            @apply flex flex-col gap-4 justify-center items-center w-full;
            li {
                @apply my-auto;
                a {
                    @apply underline decoration-goop-purple underline-offset-4;
                    @apply hover:decoration-goop-green;
                    @apply transition-decoration ease-in-out duration-300;
                }

                .first {
                    @apply text-goop-purple;
                }

                .last {
                    @apply text-goop-green;
                }
            }
            .socials {
                @apply landscape:hidden w-fit;
            }
        }
    }
</style>
