import React from 'react'

type Props = {}

const Counter = (props: Props) => {
    const [count, setCout] = React.useState<number>(0);
    const [amount, setAmount] = React.useState<number>(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCout(count + 1)}>Increment</button>
            <input
                type="number"
                name='amount'
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
            />
            <button onClick={() => setCout(amount)}>Set</button>
        </div>
    )
}

export default Counter