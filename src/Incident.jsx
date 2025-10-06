import styles from "./Incident.module.css";
function Incident({ incident, onDelete, onEdit }) {
    const { incident_id, priority, severity, status } = incident;
    return (
        <>
            <div className={styles.card}>
                <p>ID: {incident_id}</p>
                <p>Priority: {priority}</p>
                <p>Severity: {severity}</p>
                <p>Status: {status}</p>
                <div className={styles.buttons}>
                    <button onClick={onDelete} className={styles.deleteButton}>Delete</button>
                    <button onClick={onEdit} className={styles.editButton}>Edit</button>
                </div>
            </div>
        </>
    )
}
export default Incident