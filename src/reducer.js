export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  
  token: 
  'BQCzSl7JH5PszjuUsiQ5lDrfEvIQ2-ez741VscYadixGozpMOkX62wL0VgG3wjPTmmSjPrfb_bcKc6zdAhReJe9qPhoHwaCpPwJacFbzD0MOU1eeAhQd6pbt-IgMrb4TbUkWkJKKBvLV4W9Er1vQnCaejZz8Dx3jZMwhzxtJfPfyHVkbqonX',
};

const reduser = (state, action) => {
 
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };

      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };

      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };

        case "SET_FEATUREDPLAYLISTS":
          return {
            ...state,
            featuredplaylists: action.featuredplaylists,
          };

          case "SET_SEARCHARTISTS":
          return {
            ...state,
            search: action.search,
          };

          case "SET_FEATUREDTRACKS":
          return {
            ...state,
            featuredtracks: action.featuredtracks,
          };

          case "SET_SEARCHPLAYLIST":
          return {
            ...state,
            searchplaylist: action.searchplaylist,
          };

      default:
        return state;
    }
}

export default reduser;