import { orm } from "$lib/db"

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const check = await orm.checkConnection()
    return {
        value: check.ok,
    }
}
