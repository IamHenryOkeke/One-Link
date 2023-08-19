import { useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { userDataBase } from "../../firebase"
import HomeLinkCard from "../../components/Cards/HomeLinkCard"

const UserLinks = () => {
    const [userLinks, setUserLinks] = useState([])
    const [paraText, setParaText] = useState("")
    const [userName, setUserName] = useState("")
    const [userLoading, setUserLoading] = useState(false)
    const [value, setValue] = useState("")

    const handleOnFetch = async() => {
        setUserLoading(true)
        setParaText("")
        setUserName("")
        try {
            const response = await getDocs(collection(userDataBase, value.toLowerCase().trim()))
            let links = [];
            response.docs.forEach((doc) => {
            links.push({
                    ...doc.data(), id: doc.id
                })
            });
            (links.length === 0) ? setParaText("No links found") : setUserName(value)
            setUserLoading(false)
            setUserLinks(links)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="mx-4">
            <div className="flex flex-col items-center lg:flex-row md:justify-center gap-4 md:text-xl mt-5">
                <input className='text-black  px-4 py-2 md:py-4 rounded-md w-[80%] lg:w-[50%]' type="url"  name="link" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter username" required/>
                <button onClick={handleOnFetch}  className="px-8 py-2 md:py-4 self-center bg-[#aca4a4] rounded-md text-white">Fetch links</button>
            </div>
            <div className="flex flex-col items-center mt-4">
                {userLoading && <p>Fetching user links...</p>}
                <p>{paraText}</p>
                <div className="flex flex-col gap-4 items-center w-full mt-4">
                    <h1 className="text-lg md:text-2xl">{userName}</h1>
                    {
                        (userLinks.map((link) => (
                            <HomeLinkCard key={link.id} {...link}/>
                        )))
                    }
                </div>
                
            </div>
             
            
        </div>
    )
}
  
  

export default UserLinks
