"use client";
import React from "react";
import SearchInvalidComp from "./SearchInvalidComp";
import { usePathname } from "next/navigation";

const CoinNotFoundPage = () => {
	const coinId = usePathname().split("/").pop();
	return (
		<main className="flex justify-center items-center max-w-screen h-screen font-lexend">
			<SearchInvalidComp inputValue={coinId!} />
		</main>
	);
};

export default CoinNotFoundPage;
