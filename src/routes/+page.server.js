import { orm, em } from "$lib/db"
import { Book } from "$lib/book"

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const check = await orm.checkConnection();
    const books = await em.findAll(Book);
    console.log(`loading books via EM fork ${em.id}`, books);
    return {
        value: check.ok,
    }
}
