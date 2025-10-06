import styles from "./Home.module.css"
import IncidentList from "./IncidentList";
import data from "./incidents.json";
import { ThemeContext } from "./ThemeContext.js";
import Welcome from "./Welcome";
import { useState, useReducer, useContext } from "react";
import {Routes, Route, Link} from 'react-router-dom';
function Home({ toggleDarkMode }) {
    function incidentsReducer(state, action) {
        switch (action.type) {
            case 'add':
                return [action.payload, ...state];
            case 'sub':
                return state.filter(prev => prev.incident_id !== action.payload);
            case 'edit':
                return state.map((prev)=>prev.incident_id===action.payload.incident_id?{...action.payload}:prev);
            default:
                return state;
        }
    }
    const theme = useContext(ThemeContext);
    const [PageContent, setPageContent] = useState('Home');
    // const [Incidents, setIncidents] = useState(data);
    const [Incidents, dispatch] = useReducer(incidentsReducer, data);
    const user = {
        Prefix: "Mr.",
        LastName: "Ranjan"
    }
    const date = new Date();
    function handleClick(e) {
        setPageContent(e.target.innerText);
    }
    function handleDelete(id) {
        dispatch({ type: 'sub', payload: id });
    }
    function handleSave(incident) {
        // setIncidents((prev)=>[incident, ...prev]);
        dispatch({ type: 'add', payload: incident });
    }
    function handleEdit(incident){
        dispatch({type:'edit', payload:incident});
    }
    
    return (
        <>
            <header className={styles.header}>
                <p>Welcome {user.Prefix} {user.LastName}! Time since last incident: {date.getFullYear() - 1}</p>
                <div className={styles.rightSide}>
                    <nav className={styles.navBar}>
                        <Link to='/' onClick={handleClick}>Home</Link>
                        <Link to='/incidents' onClick={handleClick}>Incidents</Link>
                    </nav>
                    <button onClick={toggleDarkMode} className={`${styles.button} ${theme==='dark'?styles.darkButton:''}`}>{theme === 'dark' ? 'LightMode' : 'DarkMode'}</button>
                </div>
            </header>
            {/* {(PageContent === 'Home') ? <Welcome /> : <IncidentList incidents={Incidents} onDelete={handleDelete} onSave={handleSave} />} */}
            <Routes>
                <Route path='/' element={<Welcome />}/>
                <Route path='/incidents' element={<IncidentList incidents={Incidents} onDelete={handleDelete} onSave={handleSave} onEdit={handleEdit}/>}/>
            </Routes>
        </>
    )
}
export default Home;