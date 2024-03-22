import { MikroORM, EntitySchema } from "@mikro-orm/core"
import { PostgreSqlDriver } from "@mikro-orm/postgresql"

const Book = new EntitySchema({
    name: "Book",
    properties: {
        id: { type: Number, primary: true },
        title: { type: String },
    },
})

export const orm = MikroORM.initSync({
    entities: [Book],
    dbName: "mikroorm_svelte",
    driver: PostgreSqlDriver,
    user: "postgres",
    password: "postgres"
})
