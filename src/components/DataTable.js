import React from 'react';

const DataTable = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Heart Rate</th>
        <th>Glucose Level</th>
      </tr>
    </thead>
    <tbody>
      {data.map((entry, idx) => (
        <tr key={idx}>
          <td>{entry.date}</td>
          <td>{entry.heartRate}</td>
          <td>{entry.glucose}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;
