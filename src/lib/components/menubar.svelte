<div class='menubar'>
    <div class='icon'>
        <a href='/' class='icon-link'><img src='shadow4.png' alt='icon' class='icon-image'></a>
    </div>
    <a href='/' class='title'>SHADOWARE</a>
    <div class='nav-links'>
        <a href='/table'>Metrics Table</a>
        <a href='/graphs'>Graphs</a>
        <!--<a>Current Shadows</a>-->
        <!--<a>My Pokemon</a>-->
    </div>
</div>

<style>
    .menubar {
        background-color: var(--b1);
        display: flex;
        align-items: center;
    }

    .icon-image {
        display: flex;
        width: 2.8em;
        margin: 0.5em;
    }

    .title {
        font-size: 2em;
        font-weight: bold;
        color: var(--p1);
        display: flex;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .nav-links {
        display: flex;
        margin-left: auto;
        align-items: center;
        gap: 1em;
        padding-right: 1em;
    }

    a {
        text-decoration: none;
    }
</style>
