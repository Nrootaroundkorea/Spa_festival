import React from 'react';
import '../../../Style.css';
const CommonTableRow = ({ children }) => {
  return (
    <tr className="common-table-row">
      {
        children
      }
    </tr>
  )
}
 
export default CommonTableRow;