import Incident from "./Incident";
import styles from "./IncidentList.module.css";
import { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext.js";
function IncidentList({ incidents, onDelete, onSave }) {
    const theme = useContext(ThemeContext);
    const [form, setForm] = useState({
        incident_id: '',
        priority: 'low',
        severity: '4-critical',
        status: 'open'
    });
    function handleFormChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setForm(prev => {
            return { ...prev, [name]: value }
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        onSave(form);
    }
    return (
        <>
            <div className={`${theme==='dark'?styles.darkCard:''}`}>
                <div>
                    <form onSubmit={handleSubmit} className={styles.submitForm}>
                        <label htmlFor="incident_id">Incident ID: </label>
                        <input type="text" name='incident_id' placeholder="insert incident id" value={form.incident_id} onChange={handleFormChange} className={styles.input} />
                        <label htmlFor="priority">Priority: </label>
                        <select name='priority' value={form.priority} onChange={handleFormChange} className={styles.selection}>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="critical">Critical</option>
                        </select>
                        <label htmlFor="severity">Severity</label>
                        <select name="severity" value={form.severity} onChange={handleFormChange} className={styles.selection}>
                            <option value="minor">4 - Critical</option>
                            <option value="low">3 - Low</option>
                            <option value="high">2 - High</option>
                            <option value="critical">1 - Critical</option>
                        </select>
                        <label htmlFor="status">Status: </label>
                        <select name="status" value={form.status} onChange={handleFormChange} className={styles.selection}>
                            <option value="open">Open</option>
                            <option value="in-progress">In Progress</option>
                            <option value="on-hold">On Hold</option>
                            <option value="closed">Closed</option>
                        </select>
                        <button type="submit" className={styles.submitButton}>SAVE</button>
                    </form>
                </div>
                <div className={`${styles.cards}`}>
                    {incidents.map((incident) => <Incident key={incident.incident_id} incident={incident} onDelete={() => onDelete(incident.incident_id)}></Incident>)}
                </div>
                {/* <Incident props={props}/> */}
            </div>
        </>
    )
}
export default IncidentList