import { useState } from 'react'

type Props = {}

const Content = (props: Props) => {
    const [count1, setCount1] = useState<number>(0)
    const [count2, setCount2] = useState<number>(0)
    const [count3, setCount3] = useState<number>(0)
    const Counter1 = () => {
        setCount1(count1 + 1)
    }
    const Counter2 = () => {
        setCount2(count2 + 1)
    }
    const Counter3 = () => {
        setCount3(count3 + 1)
    }

    return (
        <div>
            <button onClick={() => Counter1()}>change count({count1})</button>
            <button onClick={() => Counter2()}>change count({count2})</button>
            <button onClick={() => Counter3()}>change count({count3})</button>
        </div>
    )
}
export default Content
