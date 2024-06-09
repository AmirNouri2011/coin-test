import React from "react";
import Image from "next/image";
import { CoinData } from "@/app/entities/CoinData";

interface Props {
	coinData: CoinData;
}

const SearchResultsComp = ({ coinData }: Props) => {
	return (
		<div className="flex flex-col items-center justify-center w-[604px] h-[364px] bg-white rounded-3xl p-16 shadow-currency">
			<Image
				className="mb-2"
				src={coinData.image.large}
				alt="bitcoin"
				width="64"
				height="64"
				priority
			/>
			<div className="flex items-center justify-between w-[476px] text-sm my-4">
				<span className="font-normal text-[#757575]">Name</span>
				<span className="text-right font-semibold text-[#212121]">
					{coinData.name}
				</span>
			</div>
			<hr className=" w-full text-[#EEEEEE]" />
			<div className="flex items-center justify-between w-[476px] text-sm my-4">
				<span className="font-normal text-[#757575]">Symbol</span>
				<span className="text-right font-semibold text-[#212121]">
					{coinData.symbol}
				</span>
			</div>
			<hr className=" w-full text-[#EEEEEE]" />
			<div className="flex items-center justify-between w-[476px] text-sm my-4">
				<span className="font-normal text-[#757575]">ID</span>
				<span className="text-right font-semibold text-[#212121]">
					{coinData.id}
				</span>
			</div>
			<hr className=" w-full text-[#EEEEEE]" />
		</div>
	);
};

export default SearchResultsComp;
