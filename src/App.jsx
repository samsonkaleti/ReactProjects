import React, { useState } from 'react' 
import PeopleData from './components/MockData'

const App = () => {   
  const [peoples , setPeoples ] = useState(PeopleData)
  const handleDelete = () => {
    setPeoples([])
    
  }
  
  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center bg-pink-200  p-6'> 
     
      <div className=" bg-white w-6/12 h-screen rounded-lg flex flex-col  "> 
        <h1 className='p-2 m-4 text-3xl font-bold'> {peoples.length} Birthdays Today</h1>  
        
        <ul>
          
          {
            peoples.map((each) => {
              return (
                <div key={each.id}>
                  <div className="flex items-center p-2">
                    <img className='rounded-full  h-[75px] w-[76px] ' src={each.image} alt="ProfilePic" />
                 
                    <div className="flex flex-col ml-5">
                      <h1 className='text-2xl text-black font-semibold'>{each.name}</h1> 
                      <h1 className='text-gray-500 text-xl'>{each.age}</h1>
                    </div>
                    
                    
                  </div> 
                </div>
              )
            })
          }
        
        </ul> 
        <div className="flex justify-center">
          <button onClick={handleDelete} className="  bg-purple-500 w-[90%] text-white py-2 px-4 rounded-lg hover:bg-purple-700">
            Clear All
          </button> 
        
        </div>

             
      </div>
    </div>
  )
}

export default App
