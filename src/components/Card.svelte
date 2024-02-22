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
            <p class="role">
                {role}
            </p>
        {/if}
        {#if body !== ""}
            <p class="body">
                {body}
            </p>
        {/if}

    {/if}
</li>

<style lang="scss">
    li {
        @apply antialiased;
        @apply bg-gray-700 rounded-2xl p-4 list-none overflow-x-scroll;
        @apply border border-white w-80 h-80 flex flex-col gap-2;
        a {
            @apply text-white;
        }
        h1 {
            @apply text-xl font-sauce flex text-center justify-center;
            @apply underline decoration-goop-purple underline-offset-4;
            @apply hover:decoration-goop-green;
            @apply transition-decoration ease-in-out duration-300;
        }
        p.role {
            @apply text-center m-0;
        }
        p.body {
            @apply text-base p-2; 
        }
        div {
            @apply flex justify-center;
        }
        img {
            @apply w-24 h-24 rounded-full;
        }
    }

    ::-webkit-scrollbar {
        @apply bg-transparent;
    }
    ::-webkit-scrollbar-thumb {
        @apply bg-gray-400 hover:bg-gray-300 rounded-xl;
    }
    ::-webkit-scrollbar-track {
        @apply bg-transparent;
    }
    ::-webkit-scrollbar-button {
        @apply bg-transparent;
    }
    ::-webkit-scrollbar-track-piece {
        @apply hidden;
    }
    ::-webkit-scrollbar-corner {
        @apply hidden;
    }

</style>
