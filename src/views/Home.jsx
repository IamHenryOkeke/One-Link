import { useEffect, useState } from "react"
import useUserStatus from "../utils/useUserStatus"
import { collection, getDocs } from "firebase/firestore"
import { userDataBase } from "../firebase"
import LoadingCard from "../components/Cards/LoadingCard"
import HomeLinkCard from "../components/Cards/HomeLinkCard"


const Home = () => {
  const [linkObjects, setLinkObjects] = useState([])
  const [loading, setLoading] = useState(true)
  const user = useUserStatus()

  const getData = async(docRef) => {
    setLoading(true)
    try {
        const response = await getDocs(docRef)
        let links = [];
        response.docs.forEach((doc) => {
          links.push({
                ...doc.data(), id: doc.id
            })
        })
        console.log(links)
        setLoading(false)
        setLinkObjects(links)
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
      {loading && <LoadingCard/>}
      {
        linkObjects.map((link) => (
          <HomeLinkCard key={link.id} {...link}/>
        ))
      }
    </div>
  )
}

export default Home
