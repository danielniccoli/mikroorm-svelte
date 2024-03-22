import { RequestContext } from "@mikro-orm/core"
import { em } from "$lib/db"

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    return RequestContext.create(em, async () => {
        return await resolve(event)
    })
}
