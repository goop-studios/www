<script>
    export let title;
    export let href;
    export let body;
</script>

<li class="listcard">
    <a href={href} target="_blank">
        <h2>
            {title}
        </h2>
        <p>
            {body}
        </p>
</li>