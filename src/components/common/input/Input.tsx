import React from "react";

export default function Input({ inputType, inputId, labelText, value }: any) {
	return (
		<div className="input-container">
			<label>
				{labelText}
				<input id={inputId} type={inputType} value={value} />
			</label>
		</div>
	);
}
