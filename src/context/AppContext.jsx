import { createContext, useState } from "react";

export const AppContext = createContext(null);

const INITIALPOST = [
  {
    avartar: "/user2.jpg",
    userName: "Camilo",
    minutes: "5",
    likes: 5,
    comments: 10,
    postText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quisquam repellat perspiciatis nobis illo blanditiis, saepe ut pariatur quam molestias, possimus deleniti."
  }
];

function AppProvider({ children }) {
  const [posts, setPosts] = useState(INITIALPOST);

  /* Añadir una publicacion */
  const addPost = (text) => {
    const newPost = {
      userName: "Arnold",
      minutes: "0",
      likes: 0,
      comments: 0,
      shares: 0,
      postText: text
    };

    setPosts([...posts, newPost]);
  };

  return (
    <AppContext.Provider value={{ posts, addPost }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
