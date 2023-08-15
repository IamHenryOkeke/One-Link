import { useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { userDataBase } from "../../firebase"
import HomeLinkCard from "../../components/Cards/HomeLinkCard"

const UserLinks = () => {
    const [userLinks, setUserLinks] = useState([])
    const [userLoading, setUserLoading] = useState(false)
    const [value, setValue] = useState("")

    const handleOnFetch = async() => {
        setUserLoading(true)
        try {
            const response = await getDocs(collection(userDataBase, value))
            let links = [];
            response.docs.forEach((doc) => {
            links.push({
                    ...doc.data(), id: doc.id
                })
            })
            console.log(links)
            setUserLoading(false)
            setUserLinks(links)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="mx-4">
            <div className="flex flex-col items-center md:flex-row gap-4">
                <input className='text-black px-4 py-2 rounded-md w-[80%]' type="url"  name="link" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter username" required/>
                <button onClick={handleOnFetch}  className="px-8 py-2 self-center bg-[#aca4a4] rounded-md text-white">Fetch links</button>
            </div>
            <div className="flex flex-col items-center mt-4">
                {userLoading && <p>Fetching user links...</p>}
                { 
                    (userLinks.map((link) => (
                    <HomeLinkCard key={link.id} {...link}/>
                    )))
                }
            </div>
             
            
        </div>
    )
}
  
  

export default UserLinks
