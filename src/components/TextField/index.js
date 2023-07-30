import './TextField.css'

const TextField = (props) => {



    const whenTyped = (evento) => {
        props.whenChange(evento.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.valor} onChange={whenTyped} required={props.mandatory} placeholder={props.placeholder} />
        </div>
    )
}

export default TextField