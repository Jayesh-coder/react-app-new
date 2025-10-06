import styles from './Welcome.module.css'
import { useState, useEffect, useContext} from 'react';
import { ThemeContext } from './ThemeContext.js';
import axios from 'axios';
function Welcome() {
    // const theme = useContext(ThemeContext);
    const theme = useContext(ThemeContext);
    const [joke, setJoke] = useState({jokes:'', img:''});
    useEffect(()=>{
        const controller= new AbortController();
        const signal = controller.signal;
        
        async function fetchData(){
            let results = await axios.get('https://api.chucknorris.io/jokes/random', {signal});
            // let parsedData = await results.json();
            let {icon_url, value} = results.data;
            setJoke({jokes: value, img: icon_url});
            
        }
        fetchData();
        return  ()=> controller.abort();
    },[]);
    return (
        <div className={`${styles.welcomePage} ${theme==='dark'?styles.darkWelcome:''}`}>
            <div className={styles.welcomeText}>
                <h1>Welcome</h1>
                <p>{joke.jokes}</p>
                <img src={joke.img} alt="chuck norris" />
            </div>
        </div>
    )
}
export default Welcome;