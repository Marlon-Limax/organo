import './DropdownList.css'

const DropdownList = (props) => {
    console.log(props.itens)

    return (
        <div className='DropdownList'>
            <label>{props.label} </label>
            <select onChange={evento => props.whenChange(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item} </option>)}
            </select>
        </div>
    )
}

export default DropdownList