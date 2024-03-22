import { defineConfig } from "@mikro-orm/postgresql"
import { Book } from './lib/book.js';

export default defineConfig({
    entities: [Book],
    dbName: "mikroorm_svelte",
});
