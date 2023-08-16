import { useEffect, useState } from "react"
import useUserStatus from "../../utils/useUserStatus"
import { collection, getDocs } from "firebase/firestore"
import { userDataBase } from "../../firebase"
import LoadingCard from "../../components/Cards/LoadingCard"
import HomeLinkCard from "../../components/Cards/HomeLinkCard"


const AdminLinks = () => {
    const [adminLinks, setAdminLinks] = useState([])
    const [paraText, setParaText] = useState("")
    const [adminLoading, setAdminLoading] = useState(true)
    const user = useUserStatus()

    const getData = async(docRef) => {
        setAdminLoading(true)
        setParaText("")
        try {
            const response = await getDocs(docRef)
            let links = [];
            response.docs.forEach((doc) => {
                links.push({
                    ...doc.data(), id: doc.id
                })
            })
            if(links.length === 0){
                setParaText("No links found")
            }
            setAdminLoading(false)
            setAdminLinks(links)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
    if (user) {
        const colRef = collection(userDataBase, user.displayName)
        getData(colRef)
    }
    }, [user])

    return (
    <div className="flex gap-3 flex-col items-center">
        {
        user ? (<p className="mx-4 md:mx-8 lg:mx-32 text-xl md:text-4xl font-semibold mt-4">{user.displayName}</p>) : ( <h1 className="h-10 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>)
        }
        {adminLoading && <LoadingCard/>}
        <p>{paraText}</p>
        { 
            (adminLinks.map((link) => (
            <HomeLinkCard key={link.id} {...link}/>
            ))) 
        }
    </div>
    )
  
}
  
  

export default AdminLinks

