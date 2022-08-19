import React, { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom';
import Response from './Response';
import axios from 'axios';

export default function Resdata() {
  const location=useLocation();
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

const fetchProducts = () => {
    axios
      .get(`${location.state.data}`)
      .then((res) => {
        console.log(res);
        setAnswer(res.data.items);
        console.log(res.data.items); 
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div>
    <h1>Ansers With Link</h1>
    {answer.map((item) => (
      <div>
      <h1>{item.title}</h1>
      <a href={item.link}>Answers LINK</a>
      <a href={item.owner.link}><img src={item.owner.profile_image} alt="Image"/></a>
      <h2>{item.view_count}</h2>
      </div>
    ))}
  </div>
  );
}
