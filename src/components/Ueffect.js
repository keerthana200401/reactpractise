import {useEffect,useState} from 'react'
import axios from 'axios'

function Ueffect() {

     let [user,setuser]=useState([])
     let[err,seterror]=useState('')
     useEffect(()=>{
         axios.get("https://jsonplaceholder.typicode.com/posts")
         .then(response=>setuser(response.data))
         .catch(err=>seterror(err.message))
     },[])

return(
   <div className="container">
       {err!==" " && <p>{err}</p>}
       {user.length===0 && <p>No user data</p>}
       {user.length!==0 && 
  <table>
       <thead>
           <tr>
               <th>userid</th>
               <th>id</th>
               <th>title</th>
           </tr>
       </thead>
       <tbody>
        {user.map((element,index)=><tr key={index}><td>{element.userId}</td>
    <td>{element.id}</td>
    <td>{element.title}</td></tr>)}
       </tbody>

   </table>
   }
</div> 

    
)






}
export default Ueffect