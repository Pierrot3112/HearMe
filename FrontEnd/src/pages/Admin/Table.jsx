import React from 'react';

const Table = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Date</th>
            <th>Vue</th>
            <th>Auteur</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Ajoutez vos données ici */}
          <tr>
            <td>125</td>
            <td>Lorem ipsum</td>
            <td>27 Apr</td>
            <td>219</td>
            <td>Cammy Hedling</td>
            <td>
              <button className="edit-btn">✏️</button>
              <button className="delete-btn">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
