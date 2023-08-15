import {useState, useEffect} from 'react'
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore"; 
import { userDataBase } from "../firebase"
import useUserStatus from "../utils/useUserStatus"
import ManageLinkCard from '../components/Cards/ManageLinkCard';


const ManageLinks = () => {
    const [formData, setFormData] = useState({
        title : "",
        link : "",
    })
    const [adminLinks, setAdminLinks] = useState([])
    const [showInputField, setShowInputField] = useState(false)
    const user = useUserStatus()
    
    const handleDelete = (id) => {
      const docRef = doc(userDataBase, user.displayName, id)
        deleteDoc(docRef).then(() => {
          alert("Deleted successfully")
      })
      getData(collection(userDataBase, user.displayName))
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
    
    const handleOnClick = async (e) => {
      e.preventDefault();
      try {
        console.log(formData)
        await addDoc(collection(userDataBase, user.displayName), {
          title: formData.title,
          link: formData.link
        });
        setShowInputField(!showInputField)
        getData(collection(userDataBase, user.displayName))
      } catch (error) {
        console.error("Error adding document: ", error) 
      }
    }

    const getData = async(docRef) => {
      try {
          const response = await getDocs(docRef)
          let links = [];
          response.docs.forEach((doc) => {
            links.push({
                  ...doc.data(), id: doc.id
              })
          })
          console.log(links)
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
      <div className='flex flex-col gap-3 items-center'>
        <h1 className='text-center text-xl md:text-4xl font-semibold mt-4'>Manage Links</h1>
        {
          adminLinks.map((link) => (
            <ManageLinkCard key={link.id} {...link} handleDelete={handleDelete}/>
          ))
        }
        <button  onClick={() => setShowInputField(!showInputField)}  className="px-8 py-2 bg-[#aca4a4] rounded-md text-white">Add Link</button>
        {showInputField && 
          <form className='w-[100%] flex flex-col items-center justify-center md:gap-2 gap-3 text-lg'>
              <label htmlFor="title">Title:</label>
              <input className='text-black px-4 py-2 rounded-md w-[50%]' type="text" name="title" value={formData.title} onChange={handleOnChange} placeholder="Enter title" required/>
              <label htmlFor="title">Link:</label>
              <input className='text-black px-4 py-2 rounded-md w-[50%]' type="url"  name="link" value={formData.link} onChange={handleOnChange} placeholder="Enter url" required/>
              <button onClick={handleOnClick}  className="px-8 py-2 bg-[#aca4a4] rounded-md text-white">Add</button>
          </form>
        }
      </div>
      
    )
}

export default ManageLinks
