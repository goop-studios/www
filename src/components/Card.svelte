<script>
    export let title;
    export let href = "";
    export let role = "";
    export let body;
    export let img = "";
</script>

<li>
    {#if href !== ""}
        <a href={href} target="_self">
            {#if img !== ""}
                <div>
                    <img src={img} alt={title} />
                </div>
            {/if}
            <h1>
                {title}
            </h1>
            {#if role !== ""}
            <p>
                {role}
            </p>
            {/if}
            {#if body !== ""}
            <p>
                {body}
            </p>
            {/if}
        </a>
    {:else}
        {#if img !== ""}
            <div>
                <img src={img} alt={title} />
            </div>
        {/if}
        <h1>
            {title}
        </h1>
        {#if role !== ""}
        <p>
            {role}
        </p>
        {/if}
        {#if body !== ""}
        <p>
            {body}
        </p>
        {/if}

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
        h1 {
            @apply text-xl font-sauce flex text-center justify-center;
        }
        p {
            @apply text-lg text-center;
        }
        div {
            @apply flex justify-center;
        }
        img {
            @apply w-32 h-32 rounded-full;
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
