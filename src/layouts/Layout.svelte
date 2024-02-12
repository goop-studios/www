<script>
    import Nav from "../components/Nav.svelte";
    export let title;
</script>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Goop Studios - {title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/svg+xml" href="/favicon_green.svg" />
    </head>

    <body>
        <Nav fields={['About', 'Crew', 'Contact']} />
        <slot />
    </body>
</html>

<style lang="scss">
    @font-face {
        font-family: 'Sauce Code Pro NFP';
        src: 
            local("SauceCodePro NFP"),
            url('/fonts/SauceCodeProNFP-Regular.ttf') format("truetype");
    }

    @font-face {
        font-family: 'Ubuntu NFP';
        src:
            local("Ubuntu Nerd Font Propo"),
            url('/fonts/UbuntuNerdFontPropo-Regular.ttf') format("truetype");
    }
</style>