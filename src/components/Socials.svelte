<script>
    import socials from '../data/socials.json';

    const logos = {
        "instagram": "icon-[ri--instagram-fill]",
        "twitter":   "icon-[ri--twitter-x-fill]",
        "github":    "icon-[ri--github-fill]",
        "tiktok":    "icon-[ri--tiktok-fill]",
        "discord":   "icon-[ri--discord-fill]",
    }

    function getLogo(social) {
        return logos[social.toLowerCase()];
    }

</script>

<ul>
    {#each socials as social}
        <li>
            <a aria-label={`${social.name} link`} href={social.url} target="_blank" title={social.name}>
                <span aria-label={`${social.name} logo`} class={getLogo(social.name)}></span>
            </a>
        </li>
    {/each}
</ul>

<style lang="scss">
    ul {
        @apply flex flex-row gap-3 align-middle h-full w-fit;
        li {
            @apply h-full flex align-middle;
            a {
                @apply text-white hover:text-goop-green flex transition-colors justify-center items-center;
                @apply ease-in-out duration-300;
                span {
                    @apply text-2xl align-middle;
                }
            }
        }
    }
</style>
