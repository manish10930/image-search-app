import Head from './Head';
import ImgCard from './ImgCard'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Home() {
  const inputText = useSelector((state) => state.app.userInput)
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [inputText]);

  const getData = async () => {
    try {
      const apiKey = '5c784f79431fb8b0c5b3aa31685f89f4';
      const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&format=json&nojsoncallback=1`;

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
