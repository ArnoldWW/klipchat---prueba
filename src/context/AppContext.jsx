import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const INITIALPOSTS = [
  {
    id: uuidv4(),
    avartar: "/user2.jpg",
    userName: "Camilo",
    minutes: "5",
    likes: 5,
    comments: 10,
    postText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quisquam repellat perspiciatis nobis illo blanditiis, saepe ut pariatur quam molestias, possimus deleniti."
  }
];

export const AppContext = createContext(null);

function AppProvider({ children }) {
  const [posts, setPosts] = useState(INITIALPOSTS);
  const [text, setText] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [image, setImage] = useState("");

  /* Añadir una publicacion */
  const addPost = (text) => {
    const newPost = {
      id: uuidv4(),
      image,
      userName: "Arnold",
      minutes: "0",
      likes: 0,
      comments: 0,
      shares: 0,
      postText: text
    };

    setPosts([...posts, newPost]);
    setText("");
    setImage("");
    setOpenModal(false);
  };

  /* Guardar el recorte de la imagen */
  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

    const context = canvasEle.getContext("2d");

    let imageObj = new Image();
    imageObj.src = image;
    imageObj.onload = function () {
      context.drawImage(
        imageObj,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );

      const dataUrl = canvasEle.toDataURL("image/jpg");
      setImage(dataUrl);
    };
  };

  return (
    <AppContext.Provider
      value={{
        posts,
        text,
        openModal,
        openModalEdit,
        image,
        addPost,
        setText,
        setOpenModal,
        setOpenModalEdit,
        setImage,
        onCropDone
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
