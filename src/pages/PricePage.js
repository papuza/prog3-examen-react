import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import PriceData from "../components/PriceData/PriceData";
const PricePage = () => {
  const { id } = useParams();

  //Creo variable price
  const [price, setPrice] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(()=>{
    //Hago el fetch
    const fetchPrice = async () =>{
      setLoader(true)
      try {
        //Llamo a la url con el id correspondiente
        const priceFromAPI = await axios.get(`https://prog-3-leads-api-rest.vercel.app/price/${id}`);
        //Guardo la data en price
        setPrice(priceFromAPI.data)
        setLoader(false)
      } catch (error) {
        console.log(error)
        setLoader(false)
      }
    }
    //Ejecuto el fetch
    fetchPrice();

  }, [])

  return (
    <div>
      {!loader && <PriceData plan={price} />}
    </div>
      
  );
};

export default PricePage;
