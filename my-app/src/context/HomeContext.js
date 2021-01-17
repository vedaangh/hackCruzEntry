import React, { createContext, useReducer } from 'react';
import { HomeReducer } from './Homereducer';
import { useHistory } from 'react-router-dom';

const initialState = {
  homePage: {
    forums: []
  },
  userAfterSignup: {
    profile: []
  },
  userViewForum: {
    topic: [],
    message: []
  },
  userViewEditForum: {
    message: []
  },
  userEditForumTopic: {
    forum: []
  },
  userViewProfile: {
    profile: [],
    forums: []
  },
  ViewOtherProfile: {
    profile: [],
    forums: [],
    all: []
  },
  viewChat: {
    chat: []
  }

};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const history = useHistory();
  const [state, dispatch] = useReducer(HomeReducer, initialState);

  const homeView = async () => {
    const config = {
      method: "GET"
    };
    const res = await (await fetch(`https://replicaback.herokuapp.com/home/homeview`, config)).json();
    if (res.status === 200) {
      dispatch({
        type: 'HOME',
        payload: res.data
      });
    }
  };

  const afterSignup = async (username) => {
    const config = {
      method: "GET"
    };
    const res = await (await fetch(`https://replicaback.herokuapp.com/user/aftersignup?username=${username}`, config)).json();
    if (res.status === 200) {
      dispatch({
        type: 'AFTER_SIGNUP',
        payload: res.data
      });
      localStorage.clear();
    }
  };

  const viewForum = async (tok, id) => {
    const config = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tok}`
      },
    };
    const res = await (await fetch(`https://replicaback.herokuapp.com/user/viewforum?id=${id}`, config)).json();
    if (res.status === 200) {
      dispatch({
        type: 'VIEW_FORUM',
        payload: res.data
      });
    }
    else if (res.status === 401) {
      history.push(`/`);
    }
  };

  const viewEditForum = async (id, token) => {
    const config = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    };
    const res = await (await fetch(`https://replicaback.herokuapp.com/user/viewEditForum?id=${id}`, config)).json();
    if (res.status === 200) {
      dispatch({
        type: 'VIEW_EDIT_FORUM',
        payload: res.data
      });
    }
    else if (res.status === 401) {
      history.push(`/`);
    }
  };

  const viewEditForumTopic = async (token, id) => {
    const config = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    };
    const res = await (await fetch(`https://replicaback.herokuapp.com/user/viewEditForumTopic?id=${id}`, config)).json();
    if (res.status === 200) {
      dispatch({
        type: 'VIEW_EDIT_FORUM_TOPIC',
        payload: res.data
      });
    }
    else if (res.status === 401) {
      history.push(`/`);
    }
  };

  const profile = async (token) => {
    const config = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    };
    const res = await (await fetch(`https://replicaback.herokuapp.com/user/viewProfile`, config)).json();
    if (res.status === 200) {
      dispatch({
        type: 'USER_VIEW_PROFILE',
        payload: res.data
      });
    }
    else if (res.status === 401) {
      history.push(`/`);
    }

  };

  const viewOther = async (token, username) => {
    const config = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    };
    const res = await (await fetch(`https://replicaback.herokuapp.com/user/viewOtherProfile?username=${username}`, config)).json();
    if (res.status === 200) {
      dispatch({
        type: 'USER_VIEW_OTHER_PROFILE',
        payload: res.data
      });
    }
    else if (res.status === 401) {
      history.push(`/`);
    }
  };

  const viewSentMessages = async (token, id) => {
    const config = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    };
    const res = await (await fetch(`https://replicaback.herokuapp.com/user/getUserMessage?id=${id}`, config)).json();
    if (res.status === 200) {
      dispatch({
        type: 'GET_USER_MESSAGES',
        payload: res.data
      });
    }
    else if (res.status === 401) {
      history.push(`/`);
    }
  };




  return (
    <UserContext.Provider value={{ ...state, homeView, afterSignup, viewForum, viewEditForum, viewEditForumTopic, profile, viewOther, viewSentMessages }}>
      {children}
    </UserContext.Provider>
  );
};