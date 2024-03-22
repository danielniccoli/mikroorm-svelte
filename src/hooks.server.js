import { RequestContext } from "@mikro-orm/core"
import { orm } from "$lib/db"

// Runs exactly once before the first request is handled
RequestContext.create(orm.em, () => [])

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const response = await resolve(event)

    // Runs for every request
    // (Alternative to above code)
    // RequestContext.create(orm.em, () => response)

    return response
}
