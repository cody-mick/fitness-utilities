import React from "react";

export default function Input({ inputType }: any) {
	return (
		<div className="input-container">
			<label>Enter Food</label>
			<input className="input" type={inputType} />
		</div>
	);
}
