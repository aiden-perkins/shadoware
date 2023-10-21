import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import data from '$lib/server/data/move_list.json';

export const GET: RequestHandler = async () => {
    return json(data);
};
