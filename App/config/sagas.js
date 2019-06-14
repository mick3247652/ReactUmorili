import { takeEvery, call, put } from "redux-saga/effects";

import {
  GET_POSTS,
  POST_RESULT,
  POST_ERROR
} from "../actions/posts";

const getLatestPosts = () =>
  fetch(`https://umorili.herokuapp.com/api/get`);

function* fetchLatestPosts(action) {
  try {
    const response = yield call(getLatestPosts);
    const result = yield response.json();

    if(result.error){
        yield put({type: CONVERSION_ERROR, error: result.error})
    } else {
        yield put({type: POST_RESULT, result})
    }
  } catch (e) {
    yield put({type: POST_ERROR, error: e.message})
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_POSTS, fetchLatestPosts);
}
