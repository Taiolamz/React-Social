import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feeds from "../../components/feeds/Feeds.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import "./home.css"


export default function Home() {
    return (
    <>
        <Topbar />
        <div className="homeContainer">
        <Sidebar />
        <Feeds />
        <Rightbar />
        </div>
    </>
    )
}
