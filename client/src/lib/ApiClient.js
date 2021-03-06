import axios from "axios";
import * as routes from "../constants/ApiRoutes";
import { fetchCard } from "../features/cards/cards";

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Accept"] = "application/json";

const apiClient = {
  getBoards: async () => {
    try {
      const { data } = await axios.get(routes.BOARDS_INDEX_URL);
      return data;
    } catch (e) {
      logError(e);
    }
  },
  createBoard: async (board) => {
    try {
      const { data } = await axios.post(routes.CREATE_BOARD_URL, { board });
      return data;
    } catch (e) {
      logError(e);
    }
  },
  createList: async (boardId, list) => {
    try {
      const { data } = await axios.post(routes.CREATE_LIST_URL, { boardId, list });
      return data;
    } catch (e) {
      logError(e);
    }
  },
  getBoard: async (id) => {
    try {
      const { data } = await axios.get(routes.GET_BOARD_URL + id);
      return data;
    } catch (e) {
      logError(e)
    }
  },
  editListTitle: async (id, updatedList) => {
    try {
      const { data } = await axios.put(routes.EDIT_LIST_URL + id, { title: updatedList.title });

      return data;
    } catch (e) {
      logError(e);
    }
  },
  createCard: async (listId, card) => {
    try {
      const { data } = await axios.post(routes.CREATE_CARD_URL, { listId, card });

      return data;
    } catch (e) {
      logError(e);
    }
  },
  fetchCard: async (cardId) => {
    try {
      const { data } = await axios.get(routes.GET_CARD_URL + cardId);
      return data;
    } catch (e) {
      logError(e);
    }
  },
  updateCard: async (cardId, cardUpdates) => {
    try {
      const { data } = await axios.put(routes.UPDATE_CARD_URL + cardId, { card: cardUpdates });
      return data;
    } catch (e) {
      logError(e);
    }
  },
  createComment: async (cardId, comment) => {
    try {
      const { data } = await axios.post(routes.CREATE_COMMENT_URL, { cardId, comment });
      return data;
    } catch (e) {
      logError(e);
    }
  }
};

export default apiClient;
