import React from "react";

export default function Button({ btnText }: any) {
	return (
		<div className="btn-container">
			<button>{btnText}</button>
		</div>
	);
}
