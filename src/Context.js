import React,{createContext, useState} from 'react'
export const Data=createContext()


export default function Context({children}) {
   
  const[cart,setcart]=useState([])
  const[userdata,setuserdata]=useState([])
  const[itemNumber,setitemNumber]=useState(0)
  const[userimg,setuserimg]=useState('https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg')
  const [datalist, setDatalist] = useState({
    username: "",
    password: ""
  }); 
 

  return (
    <Data.Provider value={{cart,setcart,itemNumber,setitemNumber,userimg,setuserimg,datalist, setDatalist,userdata,setuserdata}}>
       {children}

    </Data.Provider>
    
  )
}
