// const popular_games = `games?ordering=-rating&page=4&key=fb0df88b342e47b7a731ecd5166ca2f5`;
// const upcoming_games = `games?dates=${currentDate}${nextYear}&ordering=-added&page-size=10&key=fb0df88b342e47b7a731ecd5166ca2f5`;
// const new_games = `games?tags=singleplayer&page-size=10&key=fb0df88b342e47b7a731ecd5166ca2f5`;


//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};
//Getting the date
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=fb0df88b342e47b7a731ecd5166ca2f5`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=fb0df88b342e47b7a731ecd5166ca2f5`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=fb0df88b342e47b7a731ecd5166ca2f5`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
//GAME DETAILS
export const gameDetailsURL = (game_id) => { return `${base_url}games/${game_id}?key=fb0df88b342e47b7a731ecd5166ca2f5`; }
//Game ScreenShots
export const gameScreenshotURL = (game_id) => { return `${base_url}games/${game_id}/screenshots?key=fb0df88b342e47b7a731ecd5166ca2f5`; }
//Searched game
export const searchGameURL = (game_name) => { return `${base_url}games?search=${game_name}&page_size=9&key=fb0df88b342e47b7a731ecd5166ca2f5`; }
