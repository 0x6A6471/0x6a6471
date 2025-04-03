import { NextResponse } from "next/server";

export async function GET() {
	try {
		const response = await fetch("https://api.strike.me/v1/rates/ticker", {
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${process.env.STRIKE_API_KEY}`,
			},
		});

		if (!response.ok) {
			return NextResponse.json({ error: "API error" }, { status: 500 });
		}

		const data = await response.json();

		return NextResponse.json(data[0]);
	} catch (err) {
		console.log(err);

		return NextResponse.json(
			{ error: "Failed to get fee rate" },
			{ status: 500 },
		);
	}
}
