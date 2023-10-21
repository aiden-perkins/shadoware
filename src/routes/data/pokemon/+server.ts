import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { pokemonList } from "$lib/server/pokemon";

export const GET: RequestHandler = async () => {
    const data = pokemonList();
    return json(data);
};
