import axios from "axios"
import { useEffect, useState } from "react"

const useQuran = (url) => {
    const [aayat, setAayat] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try { 
            const response = await axios.get(url) 
            setAayat(response.data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return {aayat, loading, error}
}

export default useQuran;


export const API = "https://api.alquran.cloud/v1/quran/en.asad"