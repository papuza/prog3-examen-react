import React, {useEffect, useState} from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Plan from '../Plan/Plan';
import axios from 'axios';

const PricesGrid = () => {

    //Creo mi variable prices para guardar los datos
    const [prices, setPrices] = useState([])
    const [loader, setLoader] = useState(true)

    //Para que se ejecute al cargar pricesgrid: useeffect
    useEffect(()=>{

        //Hago el fetch
        const fetchPrices = async () => {
            setLoader(true)
            try {
                //Llamo a la url con axios
                const pricesFromAPI = await axios.get(`https://prog-3-leads-api-rest.vercel.app/prices`)
                //Y guardo la data en prices
                setPrices(pricesFromAPI.data)
                setLoader(false)
            } catch (error) {
                console.log(error)
                setLoader(false)
            }
            
        }
        //Ejecuto el fetch
        fetchPrices()
    }, [])
    


    return (
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
                {/* ---------------INCLUIR EL MAP DE LOS PLANES AQUI----------------- */
                prices.map((one_price) => 
                <Plan tier={one_price} />)
                }
                
            </Grid>
        </Container>
    )
}

export default PricesGrid
