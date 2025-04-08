import "./styles.css"

interface Data {
    type: string,
    name: string,
    placeholder?: string
}

export default function Input(data: Data) {
    return <input type={data.type} name={data.name} placeholder={data.placeholder} />
}