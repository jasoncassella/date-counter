import { useState } from 'react';

export default function App() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);
	const [date, setDate] = useState(new Date());

	function decreaseCount() {
		setCount(c => c - step);
		date.setDate(date.getDate() - step);
	}

	function increaseCount() {
		setCount(c => c + step);
		date.setDate(date.getDate() + step);
	}

	return (
		<>
			<div>
				<button onClick={() => setStep(s => s - 1)}>-</button>
				<span>Step: {step}</span>
				<button onClick={() => setStep(s => s + 1)}>+</button>
			</div>

			<div>
				<button onClick={decreaseCount}>-</button>
				<span>Count: {count}</span>
				<button onClick={increaseCount}>+</button>
			</div>

			<br />

			<div>
				<span>
					{count === 0 ? 'Today is' : `${count} days from today is`}{' '}
					{date.toDateString()}
				</span>
			</div>
		</>
	);
}
