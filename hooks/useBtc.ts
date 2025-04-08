import { useState, useEffect } from "react";

type Rate = {
	amount: string;
	sourceCurrency: "string";
	targetCurrency: "string";
};

export default function useBtc() {
	const [btc, setBtc] = useState<Rate | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		let isMounted = true;
		let intervalId = null;

		const fetchRates = async () => {
			try {
				setLoading(true);
				const response = await fetch("/api/rates");

				if (!response.ok) {
					setError(true);
				}

				const data = await response.json();

				if (isMounted) {
					setBtc(data);
					setError(false);
				}
			} catch (err) {
				console.log(err);
				setError(true);
			} finally {
				if (isMounted) {
					setLoading(false);
				}
			}
		};

		fetchRates();

		intervalId = setInterval(fetchRates, 3000);

		return () => {
			isMounted = false;
			if (intervalId) {
				clearInterval(intervalId);
			}
		};
	}, []);

	return { btc, loading, error };
}
