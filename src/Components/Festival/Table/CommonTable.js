import React from 'react';
import '../../../Style.css';
 
const CommonTable = props => {
  const { headersName, children } = props;
 
  return (
    <table className="common-table" style={{padding:"2% 0  2% 0"}}>
      <thead>
        <tr>
          {
            headersName.map((item, index) => {
              return (
                <td className="common-table-header-column" key={index}>{ item }</td>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          children
        }
      </tbody>
    </table>
  )
}
 
export default CommonTable;