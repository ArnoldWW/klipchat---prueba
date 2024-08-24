import { useRef } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";

export default function FileInput({ onImageSelected }) {
  const inputRef = useRef(null);

  //detectar cuando un archivo esta seleccionado
  const handleOnChage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }
  };

  const onChooseImg = () => {
    inputRef.current.click();
  };

  return (
    <button
      type="button"
      className="block p-1 hover:bg-neutral-700 rounded-full cursor-pointer"
      onClick={onChooseImg}
    >
      <input
        type="file"
        accept="image/png, image/jpeg"
        id="photo"
        className="hidden"
        ref={inputRef}
        onChange={handleOnChage}
      />
      <PhotoIcon className="size-5 text-white block" />
    </button>
  );
}
