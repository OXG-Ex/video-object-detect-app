import { all } from 'redux-saga/effects';

import { analyticSagas } from '../sagas/analyticSaga';

export default function* rootSaga(): Generator {
    yield all([
        ...analyticSagas
    ]);
}
