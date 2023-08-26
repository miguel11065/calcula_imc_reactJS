import React, { useState } from "react"
import './index.css';

const Formulario = () => {
    const [altura, setAltura]=useState('')
    const [peso, setPeso]=useState('')
    const [imc, setImc]=useState('')
    const [mensagem, setMensagem]=useState('')
    
    let calculaIMC = (event) => {
        event.preventDefault();
        if (peso === 0 || altura === 0) {
            alert("Preencha o formulário")
        } else {
            let imc = (peso / (altura * altura))
            setImc (imc.toFixed(1))

            if (imc <= 16.9) {
                setMensagem('Você está muito abaixo do peso!')
            } else if (imc >= 17 && imc <= 18.4) {
                setMensagem('Você está abaixo do peso!')
            } else if (imc >= 18,5  && imc <= 24.9) {
                setMensagem('Você está com o peso normal!')
            } else if (imc >= 25 && imc <= 29.9) {
                setMensagem('Você está acima do peso!')
            } else if (imc >= 30 && imc <= 34.9) {
                setMensagem('Você está com obesidade I!')
            } else if (imc >= 35 && imc <= 40) {
                setMensagem('Você está com obesidade II!')
            } else if (imc > 40) {
                setMensagem('Você está com obesidade III!')
            }
        }
    }

    return (
        <div className="temp">
            <div className="container">
                <h2 className="centro">Calculadora de IMC</h2>
                <form onSubmit={calculaIMC}>
                    <div>
                        <label>Altura:</label>
                        <input type="number" value={altura} onChange={evento => setAltura(evento.target.value)} />
                    </div>
                    <div>
                        <label>Peso:</label>
                        <input type="number" value={peso} onChange={evento => setPeso(evento.target.value)} />
                    </div>
                    <button className="btn" type="submit">Calcular</button>
                </form>
                <div className="centro">
                    <h3>IMC: {imc}</h3>
                    <p>{mensagem}</p>
                </div>
            </div>
        </div>
    )
}


export default Formulario