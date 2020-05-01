import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "Imagine", duration: "3:32" },
        { title: "Needy", duration: "2:51" },
        { title: "NASA", duration: "3:02" },
        { title: "Bloodline", duration: "3:36" },
        { title: "Fake Smile", duration: "3:28" },
        { title: "Bad Idea", duration: "4:27" },
        { title: "Make Up", duration: "2:20" },
        { title: "Ghostin", duration: "4:31" },
        { title: "In My Head", duration: "3:42" },
        { title: "7 Rings", duration: "2:58" },
        { title: "Thank U, Next", duration: "3:27" },
        { title: "Break Up with Your Girlfriend, I'm Bored", duration: "3:10" }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});