import styles from "./Incident.module.css";
function Incident({incident, onDelete}){
    const { incident_id, priority, severity, status }= incident;
    return(
    <>
        <div className={styles.card}>
            <p>ID: {incident_id}</p>
            <p>Priority: {priority}</p>
            <p>Severity: {severity}</p>
            <p>Status: {status}</p>
            
            <button onClick={onDelete} className={styles.deleteButton}>Delete</button>
        </div>
    </>
    )
}
export default Incident