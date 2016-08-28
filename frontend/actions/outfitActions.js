import AppDispatcher from '../dispatcher/dispatcher'

const OutfitActions = {
  receiveOutfits: (outfits) => {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_OUTFITS",
      outfits
    });
  }
}
export default OutfitActions
