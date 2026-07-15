import Header from "../../components/common/Header/Header";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import CreateNote from "../../components/common/CreateNote/CreateNote";
import NoteCard from "../../components/common/NoteCard/NoteCard";

import "./Dashboard.css";

function Dashboard() {
    return (
        <>
            <Header />

            <Sidebar />

            <main className="dashboard-main">

                <div className="dashboard-content">

                    <CreateNote />

                    <div className="notes-grid">

                        <NoteCard />

                    </div>

                </div>

            </main>
        </>
    );
}

export default Dashboard;