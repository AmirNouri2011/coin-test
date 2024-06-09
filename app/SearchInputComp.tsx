"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const SearchInputComp = () => {
	const router = useRouter();
	const inputBoxRef = useRef<HTMLInputElement>(null);
	const [isInputClicked, setInputClicked] = useState(false);
	const [showClearBtn, setShowClearBtn] = useState(false);

	useEffect(() => {
		if (isInputClicked) {
			inputBoxRef.current!.focus();
		}
	}, [isInputClicked]);
	return (
		<div className="flex flex-col justify-center items-center w-[604px] h-[280px] bg-white rounded-3xl p-16 shadow-currency hover:scale-105 transition-all mb-10">
			<div className="w-[476px] h-14 font-lexend font-normal mb-8">
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
							ref={inputBoxRef}
						></input>
						{showClearBtn && (
							<span
								className="hover:scale-110 transition-all"
								onClick={() => {
									inputBoxRef.current!.value = "";
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
				onClick={() => {
					router.push(
						"/coin/" + inputBoxRef.current?.value.toLocaleLowerCase()
					);
				}}
			>
				Search
			</button>
		</div>
	);
};

export default SearchInputComp;
