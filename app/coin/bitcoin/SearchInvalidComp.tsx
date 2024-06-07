import React from "react";
import Image from "next/image";
import dangerImg from "@/public/danger.png";

interface Props {
	inputValue: string;
}
const SearchInvalidComp = ({ inputValue }: Props) => {
	return (
		<div className="flex justify-start items-center w-[604px] h-[168px] bg-white rounded-3xl p-16 shadow-currency text-sm">
			<Image src={dangerImg} alt="danger" />
			<span className="ml-4">There is no result for “{inputValue}”!</span>
		</div>
	);
};

export default SearchInvalidComp;
