import React from "react";
import { useSelector } from "react-redux";

const Layout = () => {
  const data = useSelector((state : any)=>state.income.incomeDetails);
  return (
    <div className="layout-container">

      {data.length > 0 && 
      <table>
        <thead>
          <tr>
          <th>Income Source</th>
          <th>date</th>
          <th>cost</th>
          <th>description</th>
          </tr>
        </thead>
        <tbody>
          {data&& data.map((item:any,index:number)=>{
           return( 
            <tr key={index}>
              <td>{item.incomeSource}</td>
              <td>{item.date}</td>
              <td>{item.cost}</td>
              <td>{item.description}</td>
            </tr>);
          })}
        </tbody>
      </table>
}
    </div>
  );
};

export default Layout;
