import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {
  PlayCircleIcon,
  MicrophoneIcon,
  TagIcon,
  FaceSmileIcon
} from "@heroicons/react/24/solid";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import Avatar from "./Avatar";
import Select from "./Select";
import FileInput from "./FileInput";
import { notificationError, notificationSuccess } from "./Toast";

export default function PostForm() {
  const { text, addPost, setText, setIsOpenModal, setImage } =
    useContext(AppContext);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addEmoji = (emoji) => {
    // Agregar emoji al textarea
    setText(text + emoji.native);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "")
      return notificationError("Escriba algo en su publicacion");

    addPost(text);
    notificationSuccess("Publicacion creada");
  };

  //funcion para dectectar cuando se seleccione una img
  const onImageSelected = (selectedImg) => {
    //Establecer la imagen
    setImage(selectedImg);

    //abrir el modal
    if (selectedImg) {
      setIsOpenModal(true);
    }
  };

  return (
    <>
      <Avatar />
      <form className="flex-1" onSubmit={handleSubmit}>
        <div className="w-full relative">
          <textarea
            name="text"
            className="h-32 w-full rounded-2xl cursor-pointer bg-[#383835] px-3 py-2 transition-colors flex-1 outline-none resize-none"
            placeholder="What are you thinking?"
            value={text}
            onChange={handleChange}
          />
          <button
            type="button"
            className="bottom-5 right-5 absolute block p-2 bg-neutral-700 rounded-full cursor-pointer hover:bg-neutral-600"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <FaceSmileIcon className="size-5 text-white block" />
          </button>
          {showEmojiPicker && (
            <div className="absolute bottom-[-10] right-0">
              <Picker data={data} onEmojiSelect={addEmoji} />
            </div>
          )}
        </div>

        <div className="flex mt-3 justify-between items-center">
          <div className="flex justify-between items-center gap-2 py-2 px-3 border-2 border-[#383835] rounded-3xl">
            <p>Agrega</p>

            <FileInput onImageSelected={onImageSelected} />

            <button
              type="button"
              className="block p-1 hover:bg-neutral-700 rounded-full cursor-pointer"
            >
              <PlayCircleIcon className="size-5 text-white block" />
            </button>

            <button
              type="button"
              className="block p-1 hover:bg-neutral-700 rounded-full cursor-pointer"
            >
              <MicrophoneIcon className="size-5 text-white block" />
            </button>

            <button
              type="button"
              className="block p-1 hover:bg-neutral-700 rounded-full cursor-pointer"
            >
              <TagIcon className="size-5 text-white block" />
            </button>
          </div>

          <div className="flex justify-between items-center gap-3">
            <Select />
            <button type="submit" className="btn">
              Post
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
