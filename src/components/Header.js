import React from 'react';
 
const Header =({head,st,et,pt,vr}) =>{
  
  return(
    <div>
      <ol>
          <h3>{vr} {head}</h3>
          <h3>Timing of meeting -</h3><p>{st}-{et}</p>
          <h3>Participants-</h3>
          {pt.map(dta=>(
          <p>{dta}</p>
          ))}
          <br/>
      </ol>
    </div>
  );
  vr++;
}

export default Header;