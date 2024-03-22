import { EntitySchema } from '@mikro-orm/core';

export const Book = new EntitySchema({
    name: "Book",
    properties: {
        id: { type: Number, primary: true },
        title: { type: String },
    },
});
