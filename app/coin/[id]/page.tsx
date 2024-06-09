import { CoinData } from "@/app/entities/CoinData";
import axios from "axios";
import SearchInvalidComp from "./SearchInvalidComp";
import SearchResultsComp from "./SearchResultsComp";

interface Props {
	params: { id: string };
}
const CoinDetailPage = async ({ params: { id } }: Props) => {
	const coin = await axios
		.get<CoinData>("https://api.coingecko.com/api/v3/coins/" + id)
		.then((res) => res.data)
		.catch((error) => {
			if (error.response.status === 404) {
				return undefined;
			}
		});

	return (
		<main className="flex justify-center items-center max-w-screen h-screen font-lexend">
			{coin !== undefined ? (
				<SearchResultsComp coinData={coin} />
			) : (
				<SearchInvalidComp inputValue={id} />
			)}
		</main>
	);
};

export default CoinDetailPage;
