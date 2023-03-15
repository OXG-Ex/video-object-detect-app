import { all } from 'redux-saga/effects';

import { analyticEventsSagas } from '../sagas/analyticEventsSaga';

export default function* rootSaga(): Generator {
    yield all([
        ...analyticEventsSagas
    ]);
}
