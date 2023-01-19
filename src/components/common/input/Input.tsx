import React from "react";

export default function Input({ inputType }: any) {
	return (
		<div className="input-container">
			<input className="input" type={inputType} />
		</div>
	);
}
