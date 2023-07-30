import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Formulario.css'

const Formulario = () => {

    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const whenSave = (event) => {
        event.preventDefault()
        console.log('Form foi submetido')
    }


    return (
        <section className="formulario">
            <form onSubmit={whenSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField mandatory={true} label="Nome" placeholder="Digite seu nome" />
                <TextField mandatory={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropdownList mandatory={true} label="Time" itens={teams} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Formulario