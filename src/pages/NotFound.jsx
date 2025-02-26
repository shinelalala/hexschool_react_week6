import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            <h1>404 不存在</h1>
            <Link to="/">回首頁</Link>
        </div>
    ) 
    
}