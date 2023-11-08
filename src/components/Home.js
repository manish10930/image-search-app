import Head from './Head';
import ImgCard from './ImgCard'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { apiUrl } from '../constrants';

function Home() {
  const inputText = useSelector((state) => state.app.userInput)
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [inputText]);

  const getData = async () => {
    try {
      
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const result = await response.json();

      const filteredData = result.photos.photo.filter((photo) =>
        photo.title.toLowerCase().includes(inputText.toLowerCase())
      );
     
      setData(filteredData);
      console.log("filteredData",filteredData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  console.log("data is here ", data)

  return (
    <div>
      <Head />
      <ImgCard data={data} />
    </div>
  )
}

export default Home;
