import { Pool, type QueryResult } from "pg";

type PostgresParameter = string | number | boolean | null | Date | Buffer;

type DefaultRow = Record<string, unknown>;

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl:
		process.env.NODE_ENV === "production"
			? {
					rejectUnauthorized: false,
				}
			: false,
});

export default async function sql<
	T extends Record<string, unknown> = DefaultRow,
>(query: string, params?: PostgresParameter[]): Promise<QueryResult<T>> {
	const client = await pool.connect();
	try {
		return await client.query<T>(query, params);
	} finally {
		client.release();
	}
}
