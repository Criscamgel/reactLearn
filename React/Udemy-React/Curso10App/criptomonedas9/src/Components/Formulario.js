import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Criptomoneda from './Criptomoneda';
import Errores from './Errores';


function Formulario({guardarMoneda, guardarCriptomoneda}) {

    const [criptomonedas, guardarCriptomonedas] = useState([])
    const [monedaCotizar, guardarMonedaCotizar] = useState('')
    const [criptoCotizar, guardarCriptoCotizar] = useState('')
    const [error, guardarError] = useState(false)

    useEffect(() => {

        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const resultado = await axios.get(url)
            console.log(resultado)
            guardarCriptomonedas(resultado.data.Data)
        }
        consultarAPI()
    }, [])

    //Validando los campos
    const cotizarMoneda = (e) => {
        e.preventDefault()
        if(monedaCotizar === '' || criptoCotizar === ''){
            guardarError(true)
            return
        }

        guardarError(false)
        guardarMoneda(monedaCotizar)
        guardarCriptomoneda(criptoCotizar)
    }

    //Mostrar el error en el caso de que exista
    const componente= (error) ? <Errores mensaje="Ambos campos son obligatorios" /> : null

    return (
        <React.Fragment>
            <form 
                onSubmit={cotizarMoneda}
            >

            {componente}
            
                <div className="row">
                    <label htmlFor="">Elige tu moneda</label>
                    <select
                        className="u-full-width"
                        onChange={e => guardarMonedaCotizar(e.target.value)}
                        >
                        <option value="">- Elige tu moneda -</option>
                        <option value="USD">Dolar Estadounidense</option>
                        <option value="COP">Peso Colombiano</option>
                        <option value="GBP">Libras</option>
                        <option value="EUR">Euro</option>
                    </select>
                </div>

                <div className="row">
                    <label htmlFor="">Elige tu Criptomoneda</label>
                    <select
                        className="u-full-width"
                        onChange={e => guardarCriptoCotizar(e.target.value)}
                    >
                        
                        <option value="">- Elije una criptomoneda -</option>
                        {criptomonedas.map(criptomoneda => (
                            <Criptomoneda
                                key={criptomoneda.CoinInfo.Id}
                                criptomoneda={criptomoneda}
                            />
                        ))}
                    </select>
                </div>

                <button type="submit" className="button-primary u-full-width">Calcular</button>

            </form>
        </React.Fragment>
    )

}

export default Formulario;