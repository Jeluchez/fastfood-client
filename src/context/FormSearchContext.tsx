export {};
// import React, { createContext, FC, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { cleanTracks, searchTracks } from '../actions/tracksActions';


// export const FormSearchContext = createContext({} as IContextProps);

// export interface ISearchForm {
//     yearText?: string;
//     searchText?: string;
// }
// // type setFormInputs = <T extends {}>(s: T) => T;

// interface IContextProps {
//     formInputs?: ISearchForm;
//     fillFields?: (formInputs: ISearchForm) => void;
//     handleSubmitSearchForm?: (form: ISearchForm) => void;
//     searchResult?:string;
// }

// const initialState = {
//     yearText: '',
//     searchText: ''
// }


// /* -------------------------------- PROVIDER -------------------------------- */

// export const FormSearchProvider: FC = ({ children }) => {

//     const dispatch = useDispatch();
//     const [formInputs, setFormInputs] = useState<ISearchForm>(initialState)
//     const [searchResult, setSearchResult] = useState('');
//     //Fill the search form state, recive a object ISearchForm
//     const fillFields = (fieldsText: ISearchForm) => {
//         setFormInputs({ ...formInputs, ...fieldsText });
//     }
//     // send form
//     const handleSubmitSearchForm = (form:ISearchForm) => {
        
//         // merge the new data with the old. This is well, aproch to keep the other values of the other fields
//         const {searchText,yearText} = {...formInputs,...form};

//         if (searchText!.trim().length > 0 || yearText !== "") {
//             // add the text to search; this variable will be shared when the user submit the form search, and show it in the 
//             // result to: {searchResult}
//             setSearchResult(searchText!);
//             // if exists year input text then add it to the url; else, not
//             const query = yearText ? `${searchText}%20year:${yearText}` : searchText;
//             // clean images
//             dispatch(cleanTracks());
//             // load the news imagenes 
//             dispatch(searchTracks({ q: query }))
//         }
//     }





//     return (
//         <FormSearchContext.Provider value={{
//             formInputs,
//             fillFields,
//             handleSubmitSearchForm,
//             searchResult,
//         }}>
//             { children}
//         </FormSearchContext.Provider >
//     )
// }



