import styles from "./Search.module.css"
import {FaSearch} from "react-icons/fa"
import {useEffect, useState} from 'react'
import { useHistory } from "react-router"
import { useQuery } from "../hooks/useQuery"

export function Search() {

    const query = useQuery()
    const search = query.get("search")

    const [searchText, setSearchText] = useState("")
    const history = useHistory();

    useEffect(() => {
        setSearchText(search || "")
    }, [search])
    
    const handleSubmit= function(e){
         e.preventDefault()

        history.push("/?search=" +  searchText)
           }

    /* history.push("/?search=" +  searchText) */

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>   
                <input className={styles.searchInput} type="text" value={searchText} onChange={function(e){
                    return setSearchText(e.target.value);
                }} placeholder="Search Movies"/>
                <button className={styles.searchButton} type="submit">
                    <FaSearch size={20} />
                </button>
               
            </div>
        </form>   
        
    )
}
