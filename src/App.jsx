import Card from './Crad.jsx'
import {useState} from 'react'
function App() {
  let [count,setCount] = useState(0) 
  const data = [
    {
      plan:"FREE",
      price:"0",
      user:"Single User",
      usercheck:false,
      userEnabler:true,
      storage:"5GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:false,
      support:"Dedicated Phone Support",
      supportEnabler:false,
      subDomain:"Free Subdomain",
      subDomainEnabler:false,
      reports:"Monthly Status Reports",
      reportsEnabler:false
    },
    {
      plan:"PLUS",
      price:"9",
      user:"5 Users",
      usercheck:true,
      userEnabler:true,
      storage:"50GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      support:"Dedicated Phone Support",
      supportEnabler:true,
      subDomain:"Free Subdomain",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:false
    },
    {
      plan:"PRO",
      price:"49",
      user:"Unlimited Users",
      usercheck:true,
      userEnabler:true,
      storage:"150GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      support:"Dedicated Phone Support",
      supportEnabler:true,
      subDomain:"Unlimited Free Subdomains",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:true
    }
  ]
  return ( 
    <>  
      <section className="pricing py-5">
    <div className="container">
      <div className="row">
      {
        data.map((e,i)=>{
          return <Card data = {e} key = {i}/>
          {/* Sending data to card component via props */}
          
        })
      }
      </div>
      <button className='btn btn-danger'
      onClick={()=>{
        setCount(count+1)
        console.log(count)
      }}
      >Click Me, I was already clicked {count} times </button>
    </div>
  </section>
    </>
  )
}

export default App