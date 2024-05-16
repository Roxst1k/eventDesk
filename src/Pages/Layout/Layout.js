// import React, {createContext, useState} from 'react';
// import EventsDesc from "../EventsDescr/EventsDesc";
// import Modal from "../../Components/Modal/Modal";
//
//
// export const MyContext = createContext([])
//
// const initialState = [
//     {id: 0, title: 'Hello 1', description: 'description 1', subscribe: []},
//     {id: 1, title: 'Hello 2', description: 'description 2', subscribe: []},
//     {id: 2, title: 'Hello 3', description: 'description 3', subscribe: []},
//     {id: 3, title: 'Hello 4', description: 'description 4', subscribe: []},
//     {id: 4, title: 'Hello 5', description: 'description 5', subscribe: []},
//     {id: 5, title: 'Hello 6', description: 'description 6', subscribe: []},
//     {id: 6, title: 'Hello 7', description: 'description 7', subscribe: []},
// ]
//
//
// const Layout = () => {
//     const [data, setData] = useState(initialState)
//     const [modal, setModal] = useState(true)
//
//     return (
//         <>
//             <MyContext.Provider value={MyContext}>
//                 <EventsDesc showModal={setModal}/>
//                 {modal && <Modal showModal={setModal}/>}
//             </MyContext.Provider>
//         </>
//     );
// };
//
// export default Layout;