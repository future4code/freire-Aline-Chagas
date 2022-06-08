import React, {Component} from 'react'
import styled from 'styled-components'

const Compartilhar = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`
const CompartilharImg= styled.img`
`

export class SecaoComentario extends Component {
	state = {
    comentario: ""
	}

	onChangeCompartilhar=(event) => {
		this.setState({comentario: event.target.value})

	}

	render() {
		return <Compartilhar>
			<img  />
		

			<button onClick={this.props.aoEnviar}>Enviar</button>
		</Compartilhar>
	}
}