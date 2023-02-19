import React from 'react'
import { useEffect } from 'react'
import { useState } from "react"
import Clima from '../Clima'
import { Container, Input } from './style'
import { BsSearch } from "react-icons/bs";
const Home = () => {

    const [search, setSearch] = useState("")
    const [city, setCity] = useState([])
    const [infoCity, setInfoCity] = useState("")
    const [listOpen,setListOpen] = useState(false)

    const getSearch = async (e) => {
        e.preventDefault()
        const data = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=48f5183e19df5c55ce4df4ddb59d43f3&lang=pt_br`).then(resp => resp.json()).catch((error)=>alert('digite certo'))
        setCity(data)
        setListOpen(true)
        console.log(data)
    }

    const getCity = async (lat, lon) => {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=48f5183e19df5c55ce4df4ddb59d43f3&lang=pt_br`).then(resp => resp.json())
        setInfoCity(data)
        setListOpen(false)
        setSearch("")
        setCity([])
    }


    return (
        <Container listOpen={listOpen}>
                <div className='infoClima'>
                    <h1>Bem vindo ao consultor de Clima</h1>
                    <p>Consulte a previsão do dia na sua cidade!!</p>
                    <form onSubmit={getSearch} className="form">
                        <Input onClick={() => setListOpen(true)} borderOpen={city} type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Digite o nome da sua cidade" />
                        <button type='submit'> <BsSearch /></button>                        
                    </form>
                    {
                        city.length > 0 && (
                                <ul autoFocus>
                                    {
                                        city.map((item) => (
                                            <li key={item.lat} 
                                            onClick={() => getCity(item.lat, item.lon )
                                            }>
                                                {item.name}, {item.state}, {item.country}</li>
                                        ))
                                    }
                                </ul>
                            )
                        }
                </div>
                {infoCity && <Clima infoCity={infoCity} />}
            
        </Container>
    )
}

export default Home