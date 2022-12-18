import { createSignal } from "solid-js"

export default () => {
    const [count, setCount] = createSignal(0)
    const increment = () => {
        setCount(val => val + 1)
    }
    return (
        <button onClick={increment}>Click me: {count()}</button>
    )
}