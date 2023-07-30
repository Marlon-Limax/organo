import './Button.css'

const Button = (props) => {
    return (
        <div className='container'>
            <button className='button'> {props.children} </button>
        </div>)
}

export default Button