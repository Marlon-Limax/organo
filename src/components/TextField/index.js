import './TextField.css'

const TextField = (props) => {

    let value = 'Limax Silva'

    const whenTyped = (event) => {
        value = event.target.value
        console.log(value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={value} onChange={whenTyped} required={props.mandatory} placeholder={props.placeholder} />
        </div>
    )
}

export default TextField