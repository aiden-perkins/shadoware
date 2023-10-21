<script lang="ts">
    const typings = [
        "normal",
        "fighting",
        "flying",
        "poison",
        "ground",
        "rock",
        "bug",
        "ghost",
        "steel",
        "fire",
        "water",
        "grass",
        "electric",
        "psychic",
        "ice",
        "dragon",
        "dark",
        "fairy"
    ];
    let includeLegendaries = true;
    let includeUltraBeasts = true;
    let includeMythicals = true;
    let includeMegas = true;
    let includeShadows = true;
    let bestMoveSet = true;
    let available = false;
    let level = 40;

    let selectedType1 = '';
    let selectedType2 = '';

    let defenderDps = 900;
    let defenderDefense = 160;
</script>

<div class='options'>
    <div class='title'>Settings</div>
    <div class='includes'>
        <input type='checkbox' bind:checked={includeLegendaries} id="legend" class='labels'/>
        <label for='legend'>Legendaries</label>
        <input type='checkbox' bind:checked={includeUltraBeasts} id="ultraBeasts" class='labels'/>
        <label for='ultraBeasts'>Ultra Beasts</label>
        <input type='checkbox' bind:checked={includeMythicals} id="mythical" class='labels'/>
        <label for='mythical'>Mythical</label>
        <input type='checkbox' bind:checked={includeMegas} id="mega" class='labels'/>
        <label for='mega'>Megas & Primals</label>
        <input type='checkbox' bind:checked={includeShadows} id="shadows" class='labels'/>
        <label for='shadows'>Shadows</label>
        <input type='checkbox' bind:checked={available} id="available" class='labels'/>
        <label for='available'>Available</label>
        <input type='checkbox' bind:checked={bestMoveSet} id="bestMoveset" class='labels'/>
        <label for='bestMoveset'>Best Moveset</label>
    </div>
    <div class='slider-div'>
        <label class='slider-label'>
            <span>
                Pokemon Level
                <input class='num-input' type="number" bind:value="{level}" min="1" max="50">
            </span>
            <input type="range" bind:value={level} min="1" max="50" class="slider">
        </label>
    </div>
    <div class='title'>Defender</div>
    <div class='defender'>
        <select bind:value={selectedType1}>
            <option value="" disabled selected hidden="hidden">Type 1</option>
            <option value=''>None</option>
            {#each typings as type}
                <option value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
            {/each}
        </select>
        <select bind:value={selectedType2}>
            <option value="" disabled selected hidden="hidden">Type 2</option>
            <option value=''>None</option>
            {#each typings as type}
                <option value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
            {/each}
        </select>
    </div>
</div>

<style>
    .options {
        background-color: var(--b1);
        width: 60%;
        margin: 1.2em auto;
        padding: 1em;
        border-radius: 0.5em;
    }

    .title {
        text-align: center;
        font-weight: bold;
        font-size: 1.2em;
        color: var(--b5);
    }

    .includes, .defender, .slider-div {
        display: flex;
        font-size: 0.8em;
        justify-content: center;
    }

    .labels:not(:checked) + label {
        border: 0.2em solid var(--b3);
    }

    .num-input {
        -webkit-appearance: none;
        -moz-appearance: none;
        background-color: var(--b1);
        color: var(--b5);
        border-bottom: 0.2em solid var(--p1);
    }

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        text-align: center;
        margin: 0.2em;
        font-weight: bold;
        display: flex;
        padding: 0.5em;
        border-radius: 0.3em;
        border: 0.2em solid var(--p1);
        background-color: var(--b1);
        color: var(--b5);
    }

    select:focus {
        border: 0.2em solid var(--p1);
    }

    label {
        text-align: center;
        margin: 0.2em;
        font-weight: bold;
        display: flex;
        padding: 0.5em;
        border-radius: 0.3em;
        border: 0.2em solid var(--p1);
    }

    input[type="checkbox"] {
        display: none;
    }

    .slider-label {
        flex-direction: column;
    }

    .slider {
        -webkit-appearance: none;
        width: 30em;
        height: 1em;
        background-color: var(--b3);
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 0.5em;
        height: 1.5em;
        background: var(--p1);
        cursor: pointer;
    }

</style>