import { useEffect, useState } from "react";

function Body(){

const [profile,setProfile]=useState([]);
const [profileCount,setProfileCount]=useState("");

async function fetchProfile(){
    const randomNumber=Math.floor(Math.random()*10000+1);
   try{
     const response= await fetch(`https://api.github.com/users?since=${randomNumber}&per_page=${profileCount}`)
    const data =await response.json();
    setProfile(data);
   }
   catch(error){
    console.log(error);
   }
}


useEffect(()=>{
    fetchProfile(10);
},[]);

    return(
        <div>
            <div className="inputClass">
                <label>Number of Github profiles: </label>
            <input type="text" placeholder="Enter here" value={profileCount} onChange={(e)=>setProfileCount(e.target.value)}></input>
            </div>
            <button type="submit" onClick={(e)=>fetchProfile(Number(profileCount))}>Submit</button>
       <div className="profileCard">
            {
                profile.map((value)=>{
                    return <div key={value.id} className="card">
                        <img src={value.avatar_url}></img>
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="_blank">Profile</a>
                    </div>
                })
            }

       </div>
       </div>
    )
}


export default Body;