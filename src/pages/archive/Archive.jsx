import { useEffect, useState } from "react";

import Header from "../../components/common/Header/Header";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import NoteCard from "../../components/common/NoteCard/NoteCard";

import noteService from "../../services/noteService";

import "./Archive.css";

function Archive() {

    const [notes, setNotes] = useState([]);

    const [loading, setLoading] = useState(true);

    const fetchArchiveNotes = async () => {

        try {

            setLoading(true);

            const response = await noteService.getAllNotes();

            const archivedNotes = response.filter(
                note => note.isArchived && !note.isDeleted
            );

            setNotes(archivedNotes);

        }
        catch (error) {

            console.error(error);

        }
        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchArchiveNotes();

    }, []);

    return (

        <>

            <Header />

            <Sidebar />

            <main className="dashboard-main">

                <div className="dashboard-content">

                    <h3 className="page-title">

                        Archive

                    </h3>

                    {

                        loading ?

                            <h3 className="empty-text">

                                Loading...

                            </h3>

                            :

                            notes.length > 0 ?

                                <div className="notes-grid">

                                    {

                                        notes.map(note => (

                                            <NoteCard
                                                key={note.id}
                                                note={note}
                                                onRefresh={fetchArchiveNotes}
                                            />

                                        ))

                                    }

                                </div>

                                :

                                <h3 className="empty-text">

                                    No Archived Notes

                                </h3>

                    }

                </div>

            </main>

        </>

    );

}

export default Archive;