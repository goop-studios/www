<script>
    import socials from '../data/socials.json';
    function lowerCase(field) {
        return field.toLowerCase();
    }
    const logos = {
        "instagram": "icon-[ri--instagram-line]",
        "twitter":   "icon-[ri--twitter-x-line]",
        "github":    "icon-[ri--github-line]",
        "tiktok":    "icon-[ri--tiktok-line]",
    }

    function getLogo(social) {
        return logos[social.toLowerCase()];
    }

</script>

<ul>
    {#each socials as social}
        <li>
            <a href={social.url} target="_blank">
                <span class={getLogo(social.name)}></span>
            </a>
        </li>
    {/each}
</ul>

<style lang="scss">
    ul {
        @apply flex flex-row gap-3;
        li {
            a {
                @apply hover:text-goop-green text-goop-purple transition-colors;
                @apply ease-in-out duration-500;
                span {
                    @apply text-2xl;
                }
            }
        }
    }
</style>