<script>
    import Socials from "@components/Socials.svelte";
    export let text = "Goop Studios";
    export let current_year = new Date().getFullYear();
</script>

<footer>
    <ul>
        <li> {text} &copy; <span class="first"> 2023 </span> - <span class="last"> {current_year} </span> </li>
        <li> This website is <a href="https://github.com/goop-studios/www">open-source</a></li>
        <li class="socials"> <Socials /> </li>
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