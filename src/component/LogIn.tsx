import React from 'react'
import axios from 'axios'
const LogIn = () => {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phoneNum, setPhoneNum] = React.useState("")
    const [data, setData] = React.useState<any>([])
    const api="https://5fa6da9e085bf700163de946.mockapi.io/api/users/users" 

    React.useEffect(()=>{
        axios.get(api).then(res=>{
            console.log(res.data)
            setData(res.data)
        })
    },[])
    const postInfo =() =>{
        axios.post(api,{
            firstName,
            lastName,
            email,
            phoneNum
        }).then(res=> {
            console.log(res.data)
            setData(res.data)

    })
    // axios.get(api)
    }

    const deleteInfo = (id:string) =>{
        // console.log("Im jere")
        axios.delete(`https://5fa6da9e085bf700163de946.mockapi.io/api/users/users/${id}`).then(res=>{
            setData(data.filter((ele:any)=> {
                return(ele.id != id) 
            }))
        })
    }


  return (
    <div className='container'>
        بيانات التواصل 
        <input type="text" placeholder='الاسم الاول' 
        onChange={e=>setFirstName(e.target.value)} />
        <input type="text" placeholder='اسم العائله' 
        onChange={e=>setLastName(e.target.value)}/>
        <input type="email" placeholder='البريد الالكتروني'
        onChange={e=>setEmail(e.target.value)} />
        <input type="text" placeholder=' رقم التواصل'
        onChange={e=>setPhoneNum(e.target.value)} />
        <button onClick={postInfo}>تسجيل  البيانات</button>
        {data.map((element:any) =>{
            return(
                <div key={element.id}>
                    <span> مرحبا </span>
                    {element.firstName} {element.lastName}
                    <br />
                    <span>البريد الالكتروني المسجل: </span>
                    {element.email}
                    <br />
                    <span>رقم التواصل: </span>
                    {element.phoneNum}
                    <br />
                    <button onClick={()=>{deleteInfo(element.id)}}>حذف البيانات  </button>

                    <hr />
                </div>
            )
        
        })}
    </div>
  )
}

export default LogIn