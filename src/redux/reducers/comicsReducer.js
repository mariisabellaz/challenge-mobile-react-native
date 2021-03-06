import _ from 'lodash';
import {COMICS_FETCH, COMICS_CLEAR} from '../../constants/actionsType';

export default (state = {}, action) => {

    switch (action.type) {
        case COMICS_CLEAR :
            return {};
        case COMICS_FETCH :
            return _.mapKeys(action.payload, 'id');
        default:
            return state;
    }
};
