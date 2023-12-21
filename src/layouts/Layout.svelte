<script>
    export let title;
</script>

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>{title}</title>
        <link rel="stylesheet" href="/global.css">
        <link rel="stylesheet" href="/build/bundle.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>
        <slot />
    </body>
</html>