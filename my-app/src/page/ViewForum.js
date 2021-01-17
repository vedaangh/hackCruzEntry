/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/HomeContext';
import { useHistory } from 'react-router-dom';
// import { Insidenav } from '../Components/Insidenav';
import moment from 'moment';

const Comments = () => {
  const history = useHistory();
  const { userViewForum, viewForum } = useContext(UserContext);

  const [state, setState] = useState({
    comment: "",
    username: '',
    success: false,
    edit: false,
    newcomment: "",
    editSucces: false
  });


  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      const id = localStorage.getItem('f_id');
      const userName = localStorage.getItem('username');
      if (!token) {
        // history.push('/');
      }
      else {
        setState({ ...state, username: userName });
        await viewForum(token, id);
        document.title = "view forum";

      }

    })();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('f_id');
    const config = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(state)
    };
    const res = await (await fetch(`https://replicaback.herokuapp.com/user/createcomment?id=${id}`, config)).json();
    if (res.status === 200) {
      window.location.reload();
    }
    else if (res.status === 401) {
      localStorage.clear();
      history.push(`/`);
    }


  };
  const deleteComment = async (e, id) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },

    };
    const res = await (await fetch(`https://replicaback.herokuapp.com/user/deletecomment?id=${id}`, config)).json();
    if (res.status === 200) {
      setState({ ...state, success: true });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
    else if (res.status === 401) {
      localStorage.clear();
      history.push(`/`);
    }
  };

  const pushToEdit = (e, id) => {
    e.preventDefault();
    localStorage.setItem('edi_id', id);
    history.push(`/editForum/${id}`);
  };

  const viewUserProfile = async (e, username) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    };
    const res = await (await fetch(`https://replicaback.herokuapp.com/user/viewOtherProfile?username=${username}`, config)).json();
    if (res.status === 200) {
      localStorage.setItem('u_pro', res.username);
      history.push(`/U_profile/${res.username}`);
    }
    else if (res.status === 401) {
      localStorage.clear();
      history.push(`/`);
    }

  };


  return (
    <>
      <div>
        {/* <Insidenav /> */}
        {state.success ? <p style={{ color: "darkgreen" }}>Comment Deleted Succsefully</p> : ""}
        {state.editSucces ? <p style={{ color: "darkgreen" }}>Comment edited Succsefully</p> : ""}
        <div>
          <div>
            {userViewForum.topic.map(id => {
              return (
                <>
                  <div key={id.id} className="header">
                    <h4>Topic:{id.topic}</h4>
                    <p>brief:{id.content} </p>
                    <p>At:{moment(id.createdat).fromNow()} </p>
                  </div>
                </>
              );
            })}
          </div>
          <div >
            {userViewForum.message.length === 0 ? <p>No comments </p>
              : userViewForum.message.map(id => {
                return (
                  <>
                    <div key={id.id} className="u_comments">
                      {id.username === state.username ? <p className="viewp">{id.username} </p> : <p onClick={(e, f) => viewUserProfile(e, id.username)} className="viewpro"  >By : {id.username}</p>}
                      <p>{id.comment} </p>
                      <p>{moment(id.createdat).fromNow()} </p>
                      {id.username === state.username ? <button type="button" style={{ backgroundColor: "red" }} onClick={(e, v) => deleteComment(e, id.id)}  >Delete</button> : ""}
                      {id.username === state.username ? <button type="button" style={{ backgroundColor: "Yellow" }} onClick={(e, u) => { pushToEdit(e, id.id); }}  >Edit</button> : ""}
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="comment-form">
          <textarea cols='40' rows='10' required onChange={(e) => { setState({ ...state, comment: e.target.value }); }}></textarea>
          <button type="submit" className="comment-btn">Post</button>
        </form>
      </div>

    </>

  );
};

export default Comments;