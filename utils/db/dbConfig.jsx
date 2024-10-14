//postgresql://zero2hero_owner:ycbnEjO3W4Jx@ep-floral-night-a5b71qo7.us-east-2.aws.neon.tech/zero2hero?sslmode=require

import { neon } from "@neondatabase/serverless";

import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL);

export const db = drizzle(sql, { schema });
