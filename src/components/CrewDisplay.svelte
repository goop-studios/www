<script>
    import crew from "@data/crew.json";
    import Card from "@components/Card.svelte";
</script>

{#each crew as person}
    <Card
        title={person.name}
        href={person.route}
        body={person.role}
    />
{/each}
