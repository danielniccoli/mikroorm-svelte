import { MikroORM } from "@mikro-orm/postgresql"
import config from '../mikro-orm.config.js';

export const orm = MikroORM.initSync(config);
export const em = orm.em;