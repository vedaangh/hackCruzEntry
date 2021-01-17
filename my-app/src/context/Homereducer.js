export const HomeReducer = (state, action) => {
  switch (action.type) {
    case 'HOME':
      return {
        ...state,
        homePage: action.payload
      };
    case 'AFTER_SIGNUP':
      return {
        ...state,
        userAfterSignup: action.payload
      };
    case 'VIEW_FORUM':
      return {
        ...state,
        userViewForum: action.payload
      };
    case 'VIEW_EDIT_FORUM':
      return {
        ...state,
        userViewEditForum: action.payload
      };
    case 'USER_VIEW_PROFILE':
      return {
        ...state,
        userViewProfile: action.payload
      };
    case 'USER_VIEW_OTHER_PROFILE':
      return {
        ...state,
        ViewOtherProfile: action.payload
      };
    case 'GET_USER_MESSAGES':
      return {
        ...state,
        viewChat: action.payload
      };
    case 'VIEW_EDIT_FORUM_TOPIC':
      return {
        ...state,
        userEditForumTopic: action.payload
      };
    default:
      return null;
  }
}