<script>
    import crew from "@data/crew.json";
    import Card from "@components/Card.svelte";

    export let lang = "en"; 
</script>

{#each crew[lang] as person}
    <Card
        title={person.name}
        role={person.role}
        body={person.body}
        img={person.img}
    />
{/each}
