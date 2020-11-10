import * as types from "./constants"

const initialState = { nanoAPI: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.API_V1_CUSTOMTEXT_LIST:
    case types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_LIST_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_READ:
    case types.API_V1_CUSTOMTEXT_READ_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_READ_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_UPDATE:
    case types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_DISLIKE_LIST:
    case types.API_V1_DISLIKE_LIST_SUCCEEDED:
    case types.API_V1_DISLIKE_LIST_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_DISLIKE_CREATE:
    case types.API_V1_DISLIKE_CREATE_SUCCEEDED:
    case types.API_V1_DISLIKE_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_DISLIKE_READ:
    case types.API_V1_DISLIKE_READ_SUCCEEDED:
    case types.API_V1_DISLIKE_READ_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_DISLIKE_UPDATE:
    case types.API_V1_DISLIKE_UPDATE_SUCCEEDED:
    case types.API_V1_DISLIKE_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_DISLIKE_PARTIAL_UPDATE:
    case types.API_V1_DISLIKE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_DISLIKE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_DISLIKE_DELETE:
    case types.API_V1_DISLIKE_DELETE_SUCCEEDED:
    case types.API_V1_DISLIKE_DELETE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_LIST:
    case types.API_V1_HOMEPAGE_LIST_SUCCEEDED:
    case types.API_V1_HOMEPAGE_LIST_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_READ:
    case types.API_V1_HOMEPAGE_READ_SUCCEEDED:
    case types.API_V1_HOMEPAGE_READ_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_UPDATE:
    case types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED:
    case types.API_V1_HOMEPAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_INBOX_LIST:
    case types.API_V1_INBOX_LIST_SUCCEEDED:
    case types.API_V1_INBOX_LIST_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_INBOX_CREATE:
    case types.API_V1_INBOX_CREATE_SUCCEEDED:
    case types.API_V1_INBOX_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_INBOX_READ:
    case types.API_V1_INBOX_READ_SUCCEEDED:
    case types.API_V1_INBOX_READ_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_INBOX_UPDATE:
    case types.API_V1_INBOX_UPDATE_SUCCEEDED:
    case types.API_V1_INBOX_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_INBOX_PARTIAL_UPDATE:
    case types.API_V1_INBOX_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_INBOX_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_INBOX_DELETE:
    case types.API_V1_INBOX_DELETE_SUCCEEDED:
    case types.API_V1_INBOX_DELETE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_LIKE_LIST:
    case types.API_V1_LIKE_LIST_SUCCEEDED:
    case types.API_V1_LIKE_LIST_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_LIKE_CREATE:
    case types.API_V1_LIKE_CREATE_SUCCEEDED:
    case types.API_V1_LIKE_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_LIKE_READ:
    case types.API_V1_LIKE_READ_SUCCEEDED:
    case types.API_V1_LIKE_READ_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_LIKE_UPDATE:
    case types.API_V1_LIKE_UPDATE_SUCCEEDED:
    case types.API_V1_LIKE_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_LIKE_PARTIAL_UPDATE:
    case types.API_V1_LIKE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_LIKE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_LIKE_DELETE:
    case types.API_V1_LIKE_DELETE_SUCCEEDED:
    case types.API_V1_LIKE_DELETE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_LOGIN_CREATE:
    case types.API_V1_LOGIN_CREATE_SUCCEEDED:
    case types.API_V1_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_MATCH_LIST:
    case types.API_V1_MATCH_LIST_SUCCEEDED:
    case types.API_V1_MATCH_LIST_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_MATCH_CREATE:
    case types.API_V1_MATCH_CREATE_SUCCEEDED:
    case types.API_V1_MATCH_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_MATCH_READ:
    case types.API_V1_MATCH_READ_SUCCEEDED:
    case types.API_V1_MATCH_READ_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_MATCH_UPDATE:
    case types.API_V1_MATCH_UPDATE_SUCCEEDED:
    case types.API_V1_MATCH_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_MATCH_PARTIAL_UPDATE:
    case types.API_V1_MATCH_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_MATCH_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_MATCH_DELETE:
    case types.API_V1_MATCH_DELETE_SUCCEEDED:
    case types.API_V1_MATCH_DELETE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_MESSAGE_LIST:
    case types.API_V1_MESSAGE_LIST_SUCCEEDED:
    case types.API_V1_MESSAGE_LIST_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_MESSAGE_CREATE:
    case types.API_V1_MESSAGE_CREATE_SUCCEEDED:
    case types.API_V1_MESSAGE_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_MESSAGE_READ:
    case types.API_V1_MESSAGE_READ_SUCCEEDED:
    case types.API_V1_MESSAGE_READ_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_MESSAGE_UPDATE:
    case types.API_V1_MESSAGE_UPDATE_SUCCEEDED:
    case types.API_V1_MESSAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_MESSAGE_PARTIAL_UPDATE:
    case types.API_V1_MESSAGE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_MESSAGE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_MESSAGE_DELETE:
    case types.API_V1_MESSAGE_DELETE_SUCCEEDED:
    case types.API_V1_MESSAGE_DELETE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_PROFILE_LIST:
    case types.API_V1_PROFILE_LIST_SUCCEEDED:
    case types.API_V1_PROFILE_LIST_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_PROFILE_CREATE:
    case types.API_V1_PROFILE_CREATE_SUCCEEDED:
    case types.API_V1_PROFILE_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_PROFILE_READ:
    case types.API_V1_PROFILE_READ_SUCCEEDED:
    case types.API_V1_PROFILE_READ_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_PROFILE_UPDATE:
    case types.API_V1_PROFILE_UPDATE_SUCCEEDED:
    case types.API_V1_PROFILE_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_PROFILE_PARTIAL_UPDATE:
    case types.API_V1_PROFILE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_PROFILE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_PROFILE_DELETE:
    case types.API_V1_PROFILE_DELETE_SUCCEEDED:
    case types.API_V1_PROFILE_DELETE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_SETTING_LIST:
    case types.API_V1_SETTING_LIST_SUCCEEDED:
    case types.API_V1_SETTING_LIST_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_SETTING_CREATE:
    case types.API_V1_SETTING_CREATE_SUCCEEDED:
    case types.API_V1_SETTING_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_SETTING_READ:
    case types.API_V1_SETTING_READ_SUCCEEDED:
    case types.API_V1_SETTING_READ_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_SETTING_UPDATE:
    case types.API_V1_SETTING_UPDATE_SUCCEEDED:
    case types.API_V1_SETTING_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_SETTING_PARTIAL_UPDATE:
    case types.API_V1_SETTING_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_SETTING_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_SETTING_DELETE:
    case types.API_V1_SETTING_DELETE_SUCCEEDED:
    case types.API_V1_SETTING_DELETE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_SIGNUP_CREATE:
    case types.API_V1_SIGNUP_CREATE_SUCCEEDED:
    case types.API_V1_SIGNUP_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_USERPHOTO_LIST:
    case types.API_V1_USERPHOTO_LIST_SUCCEEDED:
    case types.API_V1_USERPHOTO_LIST_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_USERPHOTO_CREATE:
    case types.API_V1_USERPHOTO_CREATE_SUCCEEDED:
    case types.API_V1_USERPHOTO_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_USERPHOTO_READ:
    case types.API_V1_USERPHOTO_READ_SUCCEEDED:
    case types.API_V1_USERPHOTO_READ_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_USERPHOTO_UPDATE:
    case types.API_V1_USERPHOTO_UPDATE_SUCCEEDED:
    case types.API_V1_USERPHOTO_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_USERPHOTO_PARTIAL_UPDATE:
    case types.API_V1_USERPHOTO_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_USERPHOTO_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.API_V1_USERPHOTO_DELETE:
    case types.API_V1_USERPHOTO_DELETE_SUCCEEDED:
    case types.API_V1_USERPHOTO_DELETE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.REST_AUTH_LOGIN_CREATE:
    case types.REST_AUTH_LOGIN_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_LIST:
    case types.REST_AUTH_LOGOUT_LIST_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_LIST_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_CREATE:
    case types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_CREATE:
    case types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED:
    case types.REST_AUTH_REGISTRATION_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.REST_AUTH_USER_READ:
    case types.REST_AUTH_USER_READ_SUCCEEDED:
    case types.REST_AUTH_USER_READ_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.REST_AUTH_USER_UPDATE:
    case types.REST_AUTH_USER_UPDATE_SUCCEEDED:
    case types.REST_AUTH_USER_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        nanoAPI: [...state.nanoAPI, action.response]
      })
    default:
      return state
  }
}
