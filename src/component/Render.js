import { useState } from "react"

function Render(){
    const [value,setValue] = useState('')
    const [title,setTitle] = useState('')
    const [data,setData] = useState('')

    function oneHand(event) {
        setValue(event.target.value)
    }
    function twoHand(event) {
        setTitle(()=> {
            let obj = {
                title:title,
            }
            return obj = event.target.value
        })
    }

    function sreHand(event) {
        setData((prev) => {
           prev = event.target.value;
           return prev
        })
    }
    return (
        <form>
            <input value={value} onChange={oneHand} />
            <input value={title} onChange={twoHand} />
            <input value={data} onChange={sreHand} />
            <p>{value}</p>
            <p>{title}</p>
            <p>{data}</p>
        </form>
    )
}
export default Render