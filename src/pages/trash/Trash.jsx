import { useEffect, useState } from "react";

import Header from "../../components/common/Header/Header";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import NoteCard from "../../components/common/NoteCard/NoteCard";

import noteService from "../../services/noteService";

import "./Trash.css";

function Trash() {

    const [notes, setNotes] = useState([]);

    const [loading, setLoading] = useState(true);

    const fetchTrashNotes = async () => {

        try {

            setLoading(true);

            const response = await noteService.getTrashNotes();

            setNotes(response);

        }
        catch (error) {

            console.error("Trash Error:", error);

        }
        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchTrashNotes();

    }, []);

    return (

        <>

            <Header />

            <Sidebar />

            <main className="dashboard-main">

                <div className="dashboard-content">

                    <h3 className="page-title">

                        Trash

                    </h3>

                    {

                        loading ?

                            (

                                <h3 className="empty-text">

                                    Loading...

                                </h3>

                            )

                            :

                            notes.length > 0 ?

                                (

                                    <div className="notes-grid">

                                        {

                                            notes.map((note) => (

                                                <NoteCard
                                                    key={note.id}
                                                    note={note}
                                                    page="trash"
                                                    onRefresh={fetchTrashNotes}
                                                />

                                            ))

                                        }

                                    </div>

                                )

                                :

                                (

                                    <h3 className="empty-text">

                                        No Notes in Trash

                                    </h3>

                                )

                    }

                </div>

            </main>

        </>

    );

}

export default Trash;