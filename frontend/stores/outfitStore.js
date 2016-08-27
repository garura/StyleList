import AppDispatcher from '../dispatcher/dispatcher'
import { Store } from 'flux/utils'

let _outfits = {
  ids: []
}

const outfitStore = new Store(AppDispatcher)

outfitStore.getOutfits = () => {
  return _outfits;
}

let resetOutfits = (outfits) => {
  _outfits = outfits.outfits
}

outfitStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case 'RECEIVE_OUTFITS':
      resetOutfits(payload.outfits)
      outfitStore.__emitChange()
      break;
    default:
      return;
  }
}
export default outfitStore
