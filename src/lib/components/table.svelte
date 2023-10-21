<script lang="ts">
    let filteredPokemonList = [
        {name: 'Pikachu', fastMove: 'Thunder Shock', chargedMove: 'Thunderbolt', dps: 10.5, tdo: 250, er: 80 },
        {name: 'Charizard', fastMove: 'Fire Spin', chargedMove: 'Blast Burn', dps: 15.8, tdo: 450, er: 90 },
        {name: 'Blastoise', fastMove: 'Water Gun', chargedMove: 'Hydro Pump', dps: 12.6, tdo: 350, er: 85 }
    ]; // createFilteredPokemonList();
</script>

<div class='table'>
    <table>
        <thead>
            <tr>
            <th>Name</th>
            <th style='width: 15%;'>Fast Move</th>
            <th style='width: 15%;'>Charged Move</th>
            <th style='width: 10%;'>ER</th>
            <th style='width: 10%;'>DPS</th>
            <th style='width: 10%;'>TDO</th>
            </tr>
        </thead>
        <tbody>
            {#each filteredPokemonList as pokemon}
            <tr>
                <td>{pokemon.name}</td>
                <td>{pokemon.fastMove}</td>
                <td>{pokemon.chargedMove}</td>
                <td>{pokemon.er}</td>
                <td>{pokemon.dps}</td>
                <td>{pokemon.tdo}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        flex: 1;
        border-radius: 0.3em;
        text-align: center;
    }

    thead, th {
        font-weight: bold;
        color: var(--b5);
        border: 0.2em solid var(--p1);
    }

    td {
        background-color: var(--b2);
        border: 0.2em solid var(--b4);
    }
    .table {
        background-color: var(--b1);
        width: 60%;
        margin: 1em auto;
        padding: 1em;
        border-radius: 0.5em;
        color: var(--b5);
    }
</style>