import { useEffect, useState } from "react";
import { Content } from "./components/Content";
import { Errora } from "./components/Errora";
import { Loading } from "./components/Loading";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import "./styles/global.scss"
export default function App() {
    const [darkTheme, setDarkTheme] = useState(true)
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setError] = useState(false)
    const search = async (word) => {
        let w = word.trim()
        if(isLoading || w.length === 0) return
        setLoading(true)
        try {
            let info = await fetch(" https://api.dictionaryapi.dev/api/v2/entries/en/" + w)
            let data = (await info.json())
            setData(data)
        } catch (error) {
            setError(true)
        } finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        document.body.classList.add("dark")

    }, [])
    return (
        <div className={"app "}>
            <Navbar darkTheme={darkTheme} toogleTheme={() => setDarkTheme(t => {
                if(!t) document.body.classList.add("dark")
                else document.body.classList.remove("dark")
                return !t
            })} />
            <Search search={search} />
            {isLoading ? <Loading /> : (
                <main>
                    {data && data.title && <Errora />}
                    {data && !data.title && <Content search={search} data={data} />}
                </main>
            )}
        </div>
    );
}
