import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState} from 'react';


const NotFound = () => {
  const navigate = useNavigate();
  const[count, setCount] = useState([5]);

  useEffect(() => {
    let contador =setTimeout(() => {
        setCount(count => count - 1);
    }, 1000); 
    
    if(count<1) clearTimeout(contador);
     
    setTimeout(() => {
      navigate('/');
    }, 5000);
  });

  return (
    <>
      <h1>404 nada por aqui</h1>
      <h2>Redirecionando em {count} segundos</h2>
    </>
  )
}
export default NotFound;