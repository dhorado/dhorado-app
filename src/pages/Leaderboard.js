import styles from '../styles/leaderboard.module.css';
import React from 'react';
import leaderData from '../model/leaderboard.json'

// Placeholder to convert Lens response to iterable array object
function convertLensToJSON(obj) {
    return obj;
}

// Dynamically generate table rows
// Assumes rows are sorted already
function generateRows(rows) {
    return rows.map((row, i) => {
        return (
            <tr>
                <td># {i+1}</td>
                <td>{row.username}</td>
                <td>{row.treasuresFound}</td>
            </tr>
        );
    });
}

function Leaderboard() {
    // Placeholder for API request to Lens
    var sortedData = convertLensToJSON(leaderData.profiles).sort((a,b) => {
        return (a.treasuresFound > b.treasuresFound ? -1 : 1);
    });

    return (
        <div>
            <div className={styles.container}>
                <p>Global Leaderboard</p>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <th>Rank</th>
                            <th>User</th>
                            <th>Treasures captured</th>
                        </tr>
                        {generateRows(sortedData)}
                    </tbody>
                </table>
                <a href="/#/hunt">
                    <button className={styles.button}>Back to the hunt!</button>
                </a>
            </div>
        </div>
    );
}

export default Leaderboard;