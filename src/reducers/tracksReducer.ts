
export {}
// import { types } from "../types/types";

// const initialState: TtrackState = {
//     tracks: [],
//     loading: true,
//     selected: null,
//     ok: true,
//     total: 0,
//     offset: 0,
//     limit: 0,
//     next: null,
//     previous: null
// }
// export const tracksReducer = (state = initialState, action: TtrackAction) => {

//     switch (action.type) {
//         case types.loadTracks:
//         case types.searchTracks:
//             console.log()
//             return {
//                 ...state,
//                 ...action.payload,
//                 tracks: [...state.tracks, ...action.payload.tracks],
//                 loading: false,
//                 ok: true

//             }
//         case types.cleanTracks:
//             return {
//                 ...state,
//                 tracks: [],
//                 loading: true,
//                 ok: true,
//             }
//         case types.startLoading: {
//             return {
//                 ...state,
//                 loading: true,
//                 ok: true,
//             }
//         }
//         case types.finishLoading: {
//             return {
//                 ...state,
//                 loading: false,
//                 ok: false,
//             }
//         }
//         case types.selectTrack: {
//             return {
//                 ...state,
//                 selected: {
//                     ...action.payload
//                 },
//             }
//         }
//         case types.cleanSelected: {
//             return {
//                 ...state,
//                 selected: null
//             }
//         }
//         default:
//             return state;
//     }
// }