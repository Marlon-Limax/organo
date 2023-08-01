import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const whenSave = (event) => {
        event.preventDefault()
        props.theRegisteredEmployee({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setTime('')
    }


    return (
        <section className="formulario">
            <form onSubmit={whenSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    mandatory={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    whenChange={valor => setNome(valor)}
                />
                <TextField
                    mandatory={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    whenChange={valor => setCargo(valor)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    whenChange={valor => setImagem(valor)}
                />
                <DropdownList
                    mandatory={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    whenChange={valor => setTime(valor)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Formulario