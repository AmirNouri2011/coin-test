"use client";
import { CoinData } from "@/app/entities/CoinData";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosCloseCircleOutline } from "react-icons/io";
import SearchInvalidComp from "./SearchInvalidComp";
import SearchResultsComp from "./SearchResultsComp";
import { Spinner } from "@/app/components";

interface Coin {
	title: string;
}

const SearchInputComp = () => {
	const { register, handleSubmit, setFocus, setValue } = useForm<Coin>();
	const searchBoxRef = useRef<HTMLDivElement>(null);
	const [isInputClicked, setInputClicked] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [showClearBtn, setShowClearBtn] = useState(false);
	const [coinData, setCoinData] = useState<CoinData>();
	const [isSubmitting, setSubmitting] = useState(false);

	useEffect(() => {
		const handleClickOutSide = (e: MouseEvent) => {
			if (
				searchBoxRef.current &&
				!searchBoxRef.current.contains(e.target as Node)
			) {
				setInputClicked(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutSide);
		return () => {
			document.removeEventListener("mousedown", handleClickOutSide);
		};
	});

	useEffect(() => {
		if (isInputClicked) {
			setFocus("title");
		}
	}, [isInputClicked, setFocus]);
	return (
		<div className="flex flex-col justify-center items-center w-full h-full">
			<form
				className="flex flex-col justify-center items-center w-[604px] h-[280px] bg-white rounded-3xl p-16 shadow-currency hover:scale-105 transition-all mb-10"
				onSubmit={handleSubmit(async (data) => {
					try {
						setSubmitting(true);
						if (data.title.toLocaleLowerCase() === "bitcoin") {
							setInputValue("");
							const coinData = await axios
								.get<CoinData>("https://api.coingecko.com/api/v3/coins/bitcoin")
								.then((res) => res.data);

							setCoinData(coinData);
						} else {
							setInputValue(data.title);
							setSubmitting(false);
						}
					} catch (error) {
						console.log(error);
					} finally {
						setSubmitting(false);
					}
				})}
			>
				<div
					className="w-[476px] h-14 font-lexend font-normal mb-8"
					ref={searchBoxRef}
				>
					{!isInputClicked && (
						<div
							className="flex flex-row items-center justify-between w-full h-full border rounded-lg p-4"
							onClick={() => setInputClicked(true)}
						>
							<span className="w-full h-full outline-0">Currency Name</span>
						</div>
					)}
					{isInputClicked && (
						<div className="flex flex-row items-center justify-between w-full h-full rounded-lg p-4 border border-[#7631FE]">
							<input
								className="w-full h-full outline-0"
								placeholder="Currency Name"
								onFocus={() => setShowClearBtn(true)}
								required
								{...register("title", { required: true })}
							></input>
							{showClearBtn && (
								<span
									className="hover:scale-110 transition-all"
									onClick={() => {
										setValue("title", "");
										setInputValue("");
										setCoinData(undefined);
									}}
								>
									<IoIosCloseCircleOutline size={30} color="#7631FE" />
								</span>
							)}
						</div>
					)}
				</div>
				<button
					type="submit"
					className="w-[476px] h-16 bg-[#7631FE] text-white rounded-lg font-medium"
				>
					Search
					{isSubmitting && <Spinner />}
				</button>
			</form>
			{coinData && !inputValue && <SearchResultsComp coinData={coinData} />}
			{inputValue && <SearchInvalidComp inputValue={inputValue} />}
		</div>
	);
};

export default SearchInputComp;
