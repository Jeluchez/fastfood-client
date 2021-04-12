export {};
// import { fetchData } from "../helpers/fetchData";
// import { mapDataToTrackItem } from "../helpers/mapData";
// import { AppThunk } from "../store/store";
// import { types } from "../types/types";

// // add state to the global state tracks
// export const loadTracks = (tracks: Itrack[], extra: any): TtrackAction => ({
//     type: types.loadTracks,
//     payload: {
//         tracks: [...tracks],
//         ...extra
//     }
// }
// )
// export const searchTracks = (search: any): AppThunk => {
//     return async (dispatch) => {
//         const body = await fetchData('search', search, 'POST');
//         if (body.ok) {
//             const tracks: Itrack[] = mapDataToTrackItem(body)
//             const { total,offset,limit,next,previous} = body.tracks;
//             // add to state Redux
//             dispatch(loadSearchedTracks(tracks,{ total,offset,limit,next,previous}))
//         } else {
//             // finish loading
//             dispatch(finishLoading());
//         }
//     }
// }
// export const cleanTracks = () => ({
//     type: types.cleanTracks
// })
// export const loadSearchedTracks = (tracks: Itrack[], extra: any) => ({
//     type: types.searchTracks,
//     payload: {
//         tracks: [...tracks],
//         ...extra
//     }
// })
// export const selectTrack = (track: Itrack) => ({
//     type: types.selectTrack,
//     payload:track
// })
// export const finishLoading = () => ({
//     type: types.finishLoading,
// })
// export const startLoading = () => ({
//     type: types.startLoading,
// })

// export const cleanSelected = () => ({
//     type: types.cleanSelected,
// })