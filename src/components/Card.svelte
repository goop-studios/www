<script>
    export let title;
    export let href = "";
    export let body;
</script>

<li>
    {#if href !== ""}
        <a href={href} target="_self">
            <h2>
                {title}
            </h2>
            <p>
                {body}
            </p>
        </a>
    {:else}
        <h2>
            {title}
        </h2>
        <p>
            {body}
        </p>
    {/if}
</li>

<style lang="scss">
    li {
        @apply antialiased;
        @apply bg-gray-700 rounded-2xl p-4 list-none overflow-x-scroll;
        @apply border border-white w-80 h-80;
        a {
            @apply text-white;
        }
        h2 {
            @apply text-2xl font-sauce;
        }
        p {
            @apply text-lg;
        }
    }

    ::-webkit-scrollbar {
        @apply opacity-0;
        @apply bg-transparent;
    }
    ::-webkit-scrollbar-thumb {
        @apply text-white rounded-xl;
    }
    ::-webkit-scrollbar-track {
        @apply opacity-0;
    }
    ::-webkit-scrollbar-button {
        @apply opacity-0;
    }
    ::-webkit-scrollbar-track-piece {
        @apply opacity-0;
    }
    ::-webkit-scrollbar-corner {
        @apply bg-transparent;
    }

</style>
