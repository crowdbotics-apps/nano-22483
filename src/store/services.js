import axios from "axios"
import {
  REGISTER_USERNAME,
  REGISTER_PASSWORD,
  PARENT_ONLY_USERNAME,
  PARENT_ONLY_PASSWORD
} from "react-native-dotenv"
const register = axios.create({
  baseURL: "https://app3.jackrabbitclass.com/regv2.asp?id=540191",
  auth: { username: REGISTER_USERNAME, password: REGISTER_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const parentOnly = axios.create({
  baseURL:
    "https://app.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgID=540191",
  auth: { username: PARENT_ONLY_USERNAME, password: PARENT_ONLY_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const nanoAPI = axios.create({
  baseURL: "https://nano-22483-prod.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list(action) {
  return nanoAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(action) {
  return nanoAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(action) {
  return nanoAPI.put(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customtext_partial_update(action) {
  return nanoAPI.patch(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_dislike_list(action) {
  return nanoAPI.get(`/api/v1/dislike/`)
}
function api_v1_dislike_create(action) {
  return nanoAPI.post(`/api/v1/dislike/`, null, { data: action.data })
}
function api_v1_dislike_read(action) {
  return nanoAPI.get(`/api/v1/dislike/${action.id}/`)
}
function api_v1_dislike_update(action) {
  return nanoAPI.put(`/api/v1/dislike/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_dislike_partial_update(action) {
  return nanoAPI.patch(`/api/v1/dislike/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_dislike_delete(action) {
  return nanoAPI.delete(`/api/v1/dislike/${action.id}/`)
}
function api_v1_homepage_list(action) {
  return nanoAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(action) {
  return nanoAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(action) {
  return nanoAPI.put(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_partial_update(action) {
  return nanoAPI.patch(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_inbox_list(action) {
  return nanoAPI.get(`/api/v1/inbox/`)
}
function api_v1_inbox_create(action) {
  return nanoAPI.post(`/api/v1/inbox/`, null, { data: action.data })
}
function api_v1_inbox_read(action) {
  return nanoAPI.get(`/api/v1/inbox/${action.id}/`)
}
function api_v1_inbox_update(action) {
  return nanoAPI.put(`/api/v1/inbox/${action.id}/`, null, { data: action.data })
}
function api_v1_inbox_partial_update(action) {
  return nanoAPI.patch(`/api/v1/inbox/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_inbox_delete(action) {
  return nanoAPI.delete(`/api/v1/inbox/${action.id}/`)
}
function api_v1_like_list(action) {
  return nanoAPI.get(`/api/v1/like/`)
}
function api_v1_like_create(action) {
  return nanoAPI.post(`/api/v1/like/`, null, { data: action.data })
}
function api_v1_like_read(action) {
  return nanoAPI.get(`/api/v1/like/${action.id}/`)
}
function api_v1_like_update(action) {
  return nanoAPI.put(`/api/v1/like/${action.id}/`, null, { data: action.data })
}
function api_v1_like_partial_update(action) {
  return nanoAPI.patch(`/api/v1/like/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_like_delete(action) {
  return nanoAPI.delete(`/api/v1/like/${action.id}/`)
}
function api_v1_login_create(action) {
  return nanoAPI.post(`/api/v1/login/`)
}
function api_v1_match_list(action) {
  return nanoAPI.get(`/api/v1/match/`)
}
function api_v1_match_create(action) {
  return nanoAPI.post(`/api/v1/match/`, null, { data: action.data })
}
function api_v1_match_read(action) {
  return nanoAPI.get(`/api/v1/match/${action.id}/`)
}
function api_v1_match_update(action) {
  return nanoAPI.put(`/api/v1/match/${action.id}/`, null, { data: action.data })
}
function api_v1_match_partial_update(action) {
  return nanoAPI.patch(`/api/v1/match/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_match_delete(action) {
  return nanoAPI.delete(`/api/v1/match/${action.id}/`)
}
function api_v1_message_list(action) {
  return nanoAPI.get(`/api/v1/message/`)
}
function api_v1_message_create(action) {
  return nanoAPI.post(`/api/v1/message/`, null, { data: action.data })
}
function api_v1_message_read(action) {
  return nanoAPI.get(`/api/v1/message/${action.id}/`)
}
function api_v1_message_update(action) {
  return nanoAPI.put(`/api/v1/message/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_message_partial_update(action) {
  return nanoAPI.patch(`/api/v1/message/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_message_delete(action) {
  return nanoAPI.delete(`/api/v1/message/${action.id}/`)
}
function api_v1_profile_list(action) {
  return nanoAPI.get(`/api/v1/profile/`)
}
function api_v1_profile_create(action) {
  return nanoAPI.post(`/api/v1/profile/`, null, { data: action.data })
}
function api_v1_profile_read(action) {
  return nanoAPI.get(`/api/v1/profile/${action.id}/`)
}
function api_v1_profile_update(action) {
  return nanoAPI.put(`/api/v1/profile/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_profile_partial_update(action) {
  return nanoAPI.patch(`/api/v1/profile/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_profile_delete(action) {
  return nanoAPI.delete(`/api/v1/profile/${action.id}/`)
}
function api_v1_setting_list(action) {
  return nanoAPI.get(`/api/v1/setting/`)
}
function api_v1_setting_create(action) {
  return nanoAPI.post(`/api/v1/setting/`, null, { data: action.data })
}
function api_v1_setting_read(action) {
  return nanoAPI.get(`/api/v1/setting/${action.id}/`)
}
function api_v1_setting_update(action) {
  return nanoAPI.put(`/api/v1/setting/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_setting_partial_update(action) {
  return nanoAPI.patch(`/api/v1/setting/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_setting_delete(action) {
  return nanoAPI.delete(`/api/v1/setting/${action.id}/`)
}
function api_v1_signup_create(action) {
  return nanoAPI.post(`/api/v1/signup/`, null, { data: action.data })
}
function api_v1_userphoto_list(action) {
  return nanoAPI.get(`/api/v1/userphoto/`)
}
function api_v1_userphoto_create(action) {
  return nanoAPI.post(`/api/v1/userphoto/`, null, { data: action.data })
}
function api_v1_userphoto_read(action) {
  return nanoAPI.get(`/api/v1/userphoto/${action.id}/`)
}
function api_v1_userphoto_update(action) {
  return nanoAPI.put(`/api/v1/userphoto/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_userphoto_partial_update(action) {
  return nanoAPI.patch(`/api/v1/userphoto/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_userphoto_delete(action) {
  return nanoAPI.delete(`/api/v1/userphoto/${action.id}/`)
}
function rest_auth_login_create(action) {
  return nanoAPI.post(`/rest-auth/login/`, null, { data: action.data })
}
function rest_auth_logout_list(action) {
  return nanoAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(action) {
  return nanoAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(action) {
  return nanoAPI.post(`/rest-auth/password/change/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_create(action) {
  return nanoAPI.post(`/rest-auth/password/reset/`, null, { data: action.data })
}
function rest_auth_password_reset_confirm_create(action) {
  return nanoAPI.post(`/rest-auth/password/reset/confirm/`, null, {
    data: action.data
  })
}
function rest_auth_registration_create(action) {
  return nanoAPI.post(`/rest-auth/registration/`, null, { data: action.data })
}
function rest_auth_registration_verify_email_create(action) {
  return nanoAPI.post(`/rest-auth/registration/verify-email/`, null, {
    data: action.data
  })
}
function rest_auth_user_read(action) {
  return nanoAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(action) {
  return nanoAPI.put(`/rest-auth/user/`, null, { data: action.data })
}
function rest_auth_user_partial_update(action) {
  return nanoAPI.patch(`/rest-auth/user/`, null, { data: action.data })
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_dislike_list,
  api_v1_dislike_create,
  api_v1_dislike_read,
  api_v1_dislike_update,
  api_v1_dislike_partial_update,
  api_v1_dislike_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_inbox_list,
  api_v1_inbox_create,
  api_v1_inbox_read,
  api_v1_inbox_update,
  api_v1_inbox_partial_update,
  api_v1_inbox_delete,
  api_v1_like_list,
  api_v1_like_create,
  api_v1_like_read,
  api_v1_like_update,
  api_v1_like_partial_update,
  api_v1_like_delete,
  api_v1_login_create,
  api_v1_match_list,
  api_v1_match_create,
  api_v1_match_read,
  api_v1_match_update,
  api_v1_match_partial_update,
  api_v1_match_delete,
  api_v1_message_list,
  api_v1_message_create,
  api_v1_message_read,
  api_v1_message_update,
  api_v1_message_partial_update,
  api_v1_message_delete,
  api_v1_profile_list,
  api_v1_profile_create,
  api_v1_profile_read,
  api_v1_profile_update,
  api_v1_profile_partial_update,
  api_v1_profile_delete,
  api_v1_setting_list,
  api_v1_setting_create,
  api_v1_setting_read,
  api_v1_setting_update,
  api_v1_setting_partial_update,
  api_v1_setting_delete,
  api_v1_signup_create,
  api_v1_userphoto_list,
  api_v1_userphoto_create,
  api_v1_userphoto_read,
  api_v1_userphoto_update,
  api_v1_userphoto_partial_update,
  api_v1_userphoto_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
