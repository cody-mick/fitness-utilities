import React, { useState } from "react";
import Input from "../common/input/Input";
import Button from "../common/button/Button";

export default function CalorieCalculator() {
	const [weight, setWeight] = useState(0);
	const [age, setAge] = useState(0);
	const [height, setHeight] = useState(0);
	const [gender, setGender] = useState("male");

	const bmrMale = Math.round(
		10 * (weight / 2.205) + 6.25 * height - 5 * age + 5
	);

	const bmrFemale = Math.round(
		10 * (weight / 2.205) + 6.25 * height - 5 * age - 161
	);

	// Daily Maintenance Formula
	// MEN: BMR = 13.39W + 4.799H - 5.677A + 88.362
	// WOMEN: BMR = 9.247W + 3.098H - 4.330A + 447.593
	// Where W is body weight in kg, H is height in cm, A is age

	return (
		<div className="bmr-calculator-container">
			<h3>Base Metabolic Rate (BMR) Calculator</h3>
			<div>
				<input
					type="radio"
					name="age"
					id="male"
					value="male"
					checked={gender === "male"}
					onChange={() => setGender("male")}
				/>
				<label htmlFor="male">Male</label>
				<input
					type="radio"
					name="age"
					id="female"
					value="female"
					checked={gender === "female"}
					onChange={() => setGender("female")}
				/>
				<label htmlFor="female">Female</label>
			</div>
			<label htmlFor="weight">Body Weight</label>
			<input
				type="text"
				id="weight"
				value={weight}
				onChange={(e: any) => setWeight(e.target.value)}
			/>
			<label htmlFor="age">Age</label>
			<input
				type="text"
				id="age"
				value={age}
				onChange={(e: any) => setAge(e.target.value)}
			/>
			<label htmlFor="height">Height (cm)</label>
			<input
				type="text"
				id="height"
				value={height}
				onChange={(e: any) => setHeight(e.target.value)}
			/>
			<div className="bmr-container">
				<p className="bmr">
					BMR: {gender === "male" ? bmrMale : bmrFemale} cal/day
				</p>
			</div>
		</div>
	);
}
