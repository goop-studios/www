<script>
    import crew from "../data/crew.json";
    import Card from "./Card.svelte";
    for (let person of crew) {
        console.log(person.name);
    }
</script>

{#each crew as person}
    <Card
        title={person.name}
        href={person.route}
        body={person.role}
    />
{/each}