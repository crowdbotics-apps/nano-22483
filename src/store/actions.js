import * as types from "./constants"
export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST
})

export const api_v1_customtext_listSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_customtext_listFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  error,
  starter
})

export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ
})

export const api_v1_customtext_readSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_customtext_readFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  error,
  starter
})

export const api_v1_customtext_update = data => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE,
  data
})

export const api_v1_customtext_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_customtext_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_customtext_partial_update = data => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
  data
})

export const api_v1_customtext_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_customtext_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_dislike_list = () => ({ type: types.API_V1_DISLIKE_LIST })
export const api_v1_dislike_listSucceeded = (response, starter) => ({
  type: types.API_V1_DISLIKE_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_dislike_listFailed = (error, starter) => ({
  type: types.API_V1_DISLIKE_LIST_FAILED,
  error,
  starter
})

export const api_v1_dislike_create = data => ({
  type: types.API_V1_DISLIKE_CREATE,
  data
})

export const api_v1_dislike_createSucceeded = (response, starter) => ({
  type: types.API_V1_DISLIKE_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_dislike_createFailed = (error, starter) => ({
  type: types.API_V1_DISLIKE_CREATE_FAILED,
  error,
  starter
})

export const api_v1_dislike_read = () => ({ type: types.API_V1_DISLIKE_READ })
export const api_v1_dislike_readSucceeded = (response, starter) => ({
  type: types.API_V1_DISLIKE_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_dislike_readFailed = (error, starter) => ({
  type: types.API_V1_DISLIKE_READ_FAILED,
  error,
  starter
})

export const api_v1_dislike_update = data => ({
  type: types.API_V1_DISLIKE_UPDATE,
  data
})

export const api_v1_dislike_updateSucceeded = (response, starter) => ({
  type: types.API_V1_DISLIKE_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_dislike_updateFailed = (error, starter) => ({
  type: types.API_V1_DISLIKE_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_dislike_partial_update = data => ({
  type: types.API_V1_DISLIKE_PARTIAL_UPDATE,
  data
})

export const api_v1_dislike_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_DISLIKE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_dislike_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_DISLIKE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_dislike_delete = () => ({
  type: types.API_V1_DISLIKE_DELETE
})

export const api_v1_dislike_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_DISLIKE_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_dislike_deleteFailed = (error, starter) => ({
  type: types.API_V1_DISLIKE_DELETE_FAILED,
  error,
  starter
})

export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_homepage_listFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  error,
  starter
})

export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_homepage_readFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  error,
  starter
})

export const api_v1_homepage_update = data => ({
  type: types.API_V1_HOMEPAGE_UPDATE,
  data
})

export const api_v1_homepage_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_homepage_updateFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_homepage_partial_update = data => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
  data
})

export const api_v1_homepage_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_homepage_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_inbox_list = () => ({ type: types.API_V1_INBOX_LIST })
export const api_v1_inbox_listSucceeded = (response, starter) => ({
  type: types.API_V1_INBOX_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_inbox_listFailed = (error, starter) => ({
  type: types.API_V1_INBOX_LIST_FAILED,
  error,
  starter
})

export const api_v1_inbox_create = data => ({
  type: types.API_V1_INBOX_CREATE,
  data
})

export const api_v1_inbox_createSucceeded = (response, starter) => ({
  type: types.API_V1_INBOX_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_inbox_createFailed = (error, starter) => ({
  type: types.API_V1_INBOX_CREATE_FAILED,
  error,
  starter
})

export const api_v1_inbox_read = () => ({ type: types.API_V1_INBOX_READ })
export const api_v1_inbox_readSucceeded = (response, starter) => ({
  type: types.API_V1_INBOX_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_inbox_readFailed = (error, starter) => ({
  type: types.API_V1_INBOX_READ_FAILED,
  error,
  starter
})

export const api_v1_inbox_update = data => ({
  type: types.API_V1_INBOX_UPDATE,
  data
})

export const api_v1_inbox_updateSucceeded = (response, starter) => ({
  type: types.API_V1_INBOX_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_inbox_updateFailed = (error, starter) => ({
  type: types.API_V1_INBOX_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_inbox_partial_update = data => ({
  type: types.API_V1_INBOX_PARTIAL_UPDATE,
  data
})

export const api_v1_inbox_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_INBOX_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_inbox_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_INBOX_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_inbox_delete = () => ({ type: types.API_V1_INBOX_DELETE })
export const api_v1_inbox_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_INBOX_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_inbox_deleteFailed = (error, starter) => ({
  type: types.API_V1_INBOX_DELETE_FAILED,
  error,
  starter
})

export const api_v1_like_list = () => ({ type: types.API_V1_LIKE_LIST })
export const api_v1_like_listSucceeded = (response, starter) => ({
  type: types.API_V1_LIKE_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_like_listFailed = (error, starter) => ({
  type: types.API_V1_LIKE_LIST_FAILED,
  error,
  starter
})

export const api_v1_like_create = data => ({
  type: types.API_V1_LIKE_CREATE,
  data
})

export const api_v1_like_createSucceeded = (response, starter) => ({
  type: types.API_V1_LIKE_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_like_createFailed = (error, starter) => ({
  type: types.API_V1_LIKE_CREATE_FAILED,
  error,
  starter
})

export const api_v1_like_read = () => ({ type: types.API_V1_LIKE_READ })
export const api_v1_like_readSucceeded = (response, starter) => ({
  type: types.API_V1_LIKE_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_like_readFailed = (error, starter) => ({
  type: types.API_V1_LIKE_READ_FAILED,
  error,
  starter
})

export const api_v1_like_update = data => ({
  type: types.API_V1_LIKE_UPDATE,
  data
})

export const api_v1_like_updateSucceeded = (response, starter) => ({
  type: types.API_V1_LIKE_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_like_updateFailed = (error, starter) => ({
  type: types.API_V1_LIKE_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_like_partial_update = data => ({
  type: types.API_V1_LIKE_PARTIAL_UPDATE,
  data
})

export const api_v1_like_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_LIKE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_like_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_LIKE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_like_delete = () => ({ type: types.API_V1_LIKE_DELETE })
export const api_v1_like_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_LIKE_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_like_deleteFailed = (error, starter) => ({
  type: types.API_V1_LIKE_DELETE_FAILED,
  error,
  starter
})

export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_login_createFailed = (error, starter) => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  error,
  starter
})

export const api_v1_match_list = () => ({ type: types.API_V1_MATCH_LIST })
export const api_v1_match_listSucceeded = (response, starter) => ({
  type: types.API_V1_MATCH_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_match_listFailed = (error, starter) => ({
  type: types.API_V1_MATCH_LIST_FAILED,
  error,
  starter
})

export const api_v1_match_create = data => ({
  type: types.API_V1_MATCH_CREATE,
  data
})

export const api_v1_match_createSucceeded = (response, starter) => ({
  type: types.API_V1_MATCH_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_match_createFailed = (error, starter) => ({
  type: types.API_V1_MATCH_CREATE_FAILED,
  error,
  starter
})

export const api_v1_match_read = () => ({ type: types.API_V1_MATCH_READ })
export const api_v1_match_readSucceeded = (response, starter) => ({
  type: types.API_V1_MATCH_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_match_readFailed = (error, starter) => ({
  type: types.API_V1_MATCH_READ_FAILED,
  error,
  starter
})

export const api_v1_match_update = data => ({
  type: types.API_V1_MATCH_UPDATE,
  data
})

export const api_v1_match_updateSucceeded = (response, starter) => ({
  type: types.API_V1_MATCH_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_match_updateFailed = (error, starter) => ({
  type: types.API_V1_MATCH_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_match_partial_update = data => ({
  type: types.API_V1_MATCH_PARTIAL_UPDATE,
  data
})

export const api_v1_match_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_MATCH_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_match_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_MATCH_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_match_delete = () => ({ type: types.API_V1_MATCH_DELETE })
export const api_v1_match_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_MATCH_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_match_deleteFailed = (error, starter) => ({
  type: types.API_V1_MATCH_DELETE_FAILED,
  error,
  starter
})

export const api_v1_message_list = () => ({ type: types.API_V1_MESSAGE_LIST })
export const api_v1_message_listSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_message_listFailed = (error, starter) => ({
  type: types.API_V1_MESSAGE_LIST_FAILED,
  error,
  starter
})

export const api_v1_message_create = data => ({
  type: types.API_V1_MESSAGE_CREATE,
  data
})

export const api_v1_message_createSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_message_createFailed = (error, starter) => ({
  type: types.API_V1_MESSAGE_CREATE_FAILED,
  error,
  starter
})

export const api_v1_message_read = () => ({ type: types.API_V1_MESSAGE_READ })
export const api_v1_message_readSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_message_readFailed = (error, starter) => ({
  type: types.API_V1_MESSAGE_READ_FAILED,
  error,
  starter
})

export const api_v1_message_update = data => ({
  type: types.API_V1_MESSAGE_UPDATE,
  data
})

export const api_v1_message_updateSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_message_updateFailed = (error, starter) => ({
  type: types.API_V1_MESSAGE_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_message_partial_update = data => ({
  type: types.API_V1_MESSAGE_PARTIAL_UPDATE,
  data
})

export const api_v1_message_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_message_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_MESSAGE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_message_delete = () => ({
  type: types.API_V1_MESSAGE_DELETE
})

export const api_v1_message_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_message_deleteFailed = (error, starter) => ({
  type: types.API_V1_MESSAGE_DELETE_FAILED,
  error,
  starter
})

export const api_v1_profile_list = () => ({ type: types.API_V1_PROFILE_LIST })
export const api_v1_profile_listSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_profile_listFailed = (error, starter) => ({
  type: types.API_V1_PROFILE_LIST_FAILED,
  error,
  starter
})

export const api_v1_profile_create = data => ({
  type: types.API_V1_PROFILE_CREATE,
  data
})

export const api_v1_profile_createSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_profile_createFailed = (error, starter) => ({
  type: types.API_V1_PROFILE_CREATE_FAILED,
  error,
  starter
})

export const api_v1_profile_read = () => ({ type: types.API_V1_PROFILE_READ })
export const api_v1_profile_readSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_profile_readFailed = (error, starter) => ({
  type: types.API_V1_PROFILE_READ_FAILED,
  error,
  starter
})

export const api_v1_profile_update = data => ({
  type: types.API_V1_PROFILE_UPDATE,
  data
})

export const api_v1_profile_updateSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_profile_updateFailed = (error, starter) => ({
  type: types.API_V1_PROFILE_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_profile_partial_update = data => ({
  type: types.API_V1_PROFILE_PARTIAL_UPDATE,
  data
})

export const api_v1_profile_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_profile_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_PROFILE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_profile_delete = () => ({
  type: types.API_V1_PROFILE_DELETE
})

export const api_v1_profile_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_profile_deleteFailed = (error, starter) => ({
  type: types.API_V1_PROFILE_DELETE_FAILED,
  error,
  starter
})

export const api_v1_setting_list = () => ({ type: types.API_V1_SETTING_LIST })
export const api_v1_setting_listSucceeded = (response, starter) => ({
  type: types.API_V1_SETTING_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_setting_listFailed = (error, starter) => ({
  type: types.API_V1_SETTING_LIST_FAILED,
  error,
  starter
})

export const api_v1_setting_create = data => ({
  type: types.API_V1_SETTING_CREATE,
  data
})

export const api_v1_setting_createSucceeded = (response, starter) => ({
  type: types.API_V1_SETTING_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_setting_createFailed = (error, starter) => ({
  type: types.API_V1_SETTING_CREATE_FAILED,
  error,
  starter
})

export const api_v1_setting_read = () => ({ type: types.API_V1_SETTING_READ })
export const api_v1_setting_readSucceeded = (response, starter) => ({
  type: types.API_V1_SETTING_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_setting_readFailed = (error, starter) => ({
  type: types.API_V1_SETTING_READ_FAILED,
  error,
  starter
})

export const api_v1_setting_update = data => ({
  type: types.API_V1_SETTING_UPDATE,
  data
})

export const api_v1_setting_updateSucceeded = (response, starter) => ({
  type: types.API_V1_SETTING_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_setting_updateFailed = (error, starter) => ({
  type: types.API_V1_SETTING_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_setting_partial_update = data => ({
  type: types.API_V1_SETTING_PARTIAL_UPDATE,
  data
})

export const api_v1_setting_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_SETTING_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_setting_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_SETTING_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_setting_delete = () => ({
  type: types.API_V1_SETTING_DELETE
})

export const api_v1_setting_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_SETTING_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_setting_deleteFailed = (error, starter) => ({
  type: types.API_V1_SETTING_DELETE_FAILED,
  error,
  starter
})

export const api_v1_signup_create = data => ({
  type: types.API_V1_SIGNUP_CREATE,
  data
})

export const api_v1_signup_createSucceeded = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_signup_createFailed = (error, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  error,
  starter
})

export const api_v1_userphoto_list = () => ({
  type: types.API_V1_USERPHOTO_LIST
})

export const api_v1_userphoto_listSucceeded = (response, starter) => ({
  type: types.API_V1_USERPHOTO_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_userphoto_listFailed = (error, starter) => ({
  type: types.API_V1_USERPHOTO_LIST_FAILED,
  error,
  starter
})

export const api_v1_userphoto_create = data => ({
  type: types.API_V1_USERPHOTO_CREATE,
  data
})

export const api_v1_userphoto_createSucceeded = (response, starter) => ({
  type: types.API_V1_USERPHOTO_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_userphoto_createFailed = (error, starter) => ({
  type: types.API_V1_USERPHOTO_CREATE_FAILED,
  error,
  starter
})

export const api_v1_userphoto_read = () => ({
  type: types.API_V1_USERPHOTO_READ
})

export const api_v1_userphoto_readSucceeded = (response, starter) => ({
  type: types.API_V1_USERPHOTO_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_userphoto_readFailed = (error, starter) => ({
  type: types.API_V1_USERPHOTO_READ_FAILED,
  error,
  starter
})

export const api_v1_userphoto_update = data => ({
  type: types.API_V1_USERPHOTO_UPDATE,
  data
})

export const api_v1_userphoto_updateSucceeded = (response, starter) => ({
  type: types.API_V1_USERPHOTO_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_userphoto_updateFailed = (error, starter) => ({
  type: types.API_V1_USERPHOTO_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_userphoto_partial_update = data => ({
  type: types.API_V1_USERPHOTO_PARTIAL_UPDATE,
  data
})

export const api_v1_userphoto_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_USERPHOTO_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_userphoto_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_USERPHOTO_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_userphoto_delete = () => ({
  type: types.API_V1_USERPHOTO_DELETE
})

export const api_v1_userphoto_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_USERPHOTO_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_userphoto_deleteFailed = (error, starter) => ({
  type: types.API_V1_USERPHOTO_DELETE_FAILED,
  error,
  starter
})

export const rest_auth_login_create = data => ({
  type: types.REST_AUTH_LOGIN_CREATE,
  data
})

export const rest_auth_login_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_login_createFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST
})

export const rest_auth_logout_listSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response,
  starter
})

export const rest_auth_logout_listFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  error,
  starter
})

export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE
})

export const rest_auth_logout_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_logout_createFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_password_change_create = data => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE,
  data
})

export const rest_auth_password_change_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_password_change_createFailed = (error, starter) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_password_reset_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE,
  data
})

export const rest_auth_password_reset_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_password_reset_createFailed = (error, starter) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_password_reset_confirm_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
  data
})

export const rest_auth_password_reset_confirm_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_password_reset_confirm_createFailed = (
  error,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_registration_create = data => ({
  type: types.REST_AUTH_REGISTRATION_CREATE,
  data
})

export const rest_auth_registration_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_registration_createFailed = (error, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_registration_verify_email_create = data => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
  data
})

export const rest_auth_registration_verify_email_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_registration_verify_email_createFailed = (
  error,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response,
  starter
})

export const rest_auth_user_readFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  error,
  starter
})

export const rest_auth_user_update = data => ({
  type: types.REST_AUTH_USER_UPDATE,
  data
})

export const rest_auth_user_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_user_updateFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  error,
  starter
})

export const rest_auth_user_partial_update = data => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE,
  data
})

export const rest_auth_user_partial_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_user_partial_updateFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
