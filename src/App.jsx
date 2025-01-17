import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard.jsx/EmployeeDashboard'
import AdminDashboard from './components/Dashboard.jsx/AdminDashboard'
import { AuthContext } from './context/AuthProvider'


const App = () => {
   
  const [user, setuser] = useState(null)
  const authdata = useContext(AuthContext)
 
  useEffect(() => {
   if(authdata){
      const loggedInUser = localStorage.getItem("loggedInUser")
       if(loggedInUser){
        setuser(loggedInUser.role)
       }
   }
  
    
  }, [authdata])
  


   
const handleLogin = (email , password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setuser('admin')
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
    } else if (authdata && authdata.employees.find((e)=>email == e.email && e.password == password)){
      setuser('employee')
      localStorage.setItem("loggedInUser",JSON.stringify({role:'employees'}))

    }
    else{
    alert("Invalid Credentials")
    }
}


  return (
    <>
   {!user ? <Login handleLogin={handleLogin}/>: ''}
  {user == 'admin' ? <AdminDashboard/>: <EmployeeDashboard/>}
    </>
  )
}

export default App