<script>
    import crew from "../data/crew.json";
</script>

{#each crew as person}
    <div class="crewcard">
        <img src={person.image} alt={person.name} />
        <h2>{person.name}</h2>
        <p>{person.role}</p>
        <a href={person.route}> {person.name}'s page </a>
    </div>
{/each}

<style lang="scss">
    .crewcard {
        @apply flex flex-col gap-2;
        img {
            @apply w-32 h-32 rounded-full;
        }
        h2 {
            @apply text-2xl font-sauce;
        }
        p {
            @apply text-lg;
        }
    }
</style>