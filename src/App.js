import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">

{ <button type="button"

onClick={()=>{
  
  for (let i = 1; i <= 1000; i++) {
    for (let j = 1; j <= 100; j++) {
      
      
      if(i==135||i==549||i==601||i==611||i==643||i==721||i==756)
        {
        continue;

      }

      if(j==6||j==7||j==8||j==9||j==12||j==14||j==15||j==23||j==46||j==79||j==86)
        {
        continue;

      }
    console.log(`${i}*${j}=${i*j}`)
    //newTable.push(`${i} * ${j} = ${i * j}`);
    }}
}}
>For loop</button> }


{/*table.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      { <MultiplicationTable /> */}

      <button
      onClick={()=>{
        let x=1;
        while (x<=1000) {
          if(x==135||x==549||x==601||x==611||x==643||x==721||x==756)
            {
              x++;
             continue;
          }
          let y=1;
          while (y<=100) 
            {
             if(y==6||y==7||y==8||y==9||y==12||y==14||y==15||y==23||y==46||y==79||y==86)
              {
                y++
              continue;
      
            }
            console.log(`${x}*${y}=${x*y}`);

            y++
          }
          x++;
        }
        
      }}
      >While loop</button>

     <button 
     onClick={()=>{
      let x=0;
      let y=0;

      do{
        x++;

        if(x==135||x==549||x==601||x==611||x==643||x==721||x==756)
          {
             
           continue;
        }


        do{
          y++;
          
          if(y==6||y==7||y==8||y==9||y==12||y==14||y==15||y==23||y==46||y==79||y==86)
            {
               
            continue;
    
          }
          console.log(`${x}*${y}=${x*y}`);

        }while(y<100)
          y=0
      } while (x<1000) 

 
      }}
     
     >Do while</button>
    </div>
  );
}

export default App;



