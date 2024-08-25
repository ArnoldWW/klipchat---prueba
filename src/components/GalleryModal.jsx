import { useContext } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle
} from "@headlessui/react";
import {
  XMarkIcon,
  ChevronLeftIcon,
  PhotoIcon
} from "@heroicons/react/24/solid";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

export default function Edit() {
  const {
    image,
    imgGallery,
    openGalleryModal,
    setOpenModal,
    setOpenGalleryModal,
    setImgGallery,
    closeAllModals
  } = useContext(AppContext);

  const handleOnClose = () => {
    setOpenGalleryModal(false);
    setOpenModal(true);
  };

  const addImage = () => {
    const newImg = {
      id: uuidv4(),
      src: `/img/${imgGallery.length + 1}.jpg`
    };
    setImgGallery([...imgGallery, newImg]);
  };

  const deleteImage = (id) => {
    const updatedImgGallery = imgGallery.filter((img) => img.id !== id);
    setImgGallery(updatedImgGallery);
  };

  return (
    <Dialog
      open={openGalleryModal}
      onClose={closeAllModals}
      className="relative z-50"
    >
      <DialogBackdrop className="fixed inset-0 bg-green-900/30" />
      <div className="fixed inset-0 w-screen overflow-y-auto p-4">
        <div className="flex min-h-full items-center justify-center text-slate-200">
          <DialogPanel className="max-w-[1000px] w-[900px] border border-neutral-600 bg-[#292927] rounded-3xl">
            {/* - */}
            <div className="p-5 border-b border-neutral-600 flex justify-between items-center">
              <button
                className="p-1 hover:bg-neutral-700 rounded-full cursor-pointer"
                onClick={handleOnClose}
              >
                <ChevronLeftIcon className="size-6 text-white block" />
              </button>
              <DialogTitle className="font-bold text-lg">
                Photos/videos
              </DialogTitle>
              <button
                className="p-1 hover:bg-neutral-700 rounded-full cursor-pointer"
                onClick={handleOnClose}
              >
                <XMarkIcon className="size-6 text-white block" />
              </button>
            </div>
            {/* -image crop */}
            <div className="px-5 my-5 grid grid-cols-3 gap-3">
              <img
                src={image}
                className="object-cover w-full h-[300px] rounded-xl"
              />
              {imgGallery?.map((img) => (
                <div className="relative h-[300px]" key={img.id}>
                  <img
                    src={img.src}
                    alt="img gallery"
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <button
                    className="absolute top-1 right-1 p-1 bg-neutral-500/70 hover:bg-neutral-700/70 rounded-full cursor-pointer"
                    onClick={() => deleteImage(img.id)}
                  >
                    <XMarkIcon className="size-6 text-white block" />
                  </button>
                </div>
              ))}
            </div>
            {/* - */}
            <div className="px-5 py-5 flex justify-end gap-3">
              {imgGallery.length < 3 && (
                <button
                  className="btn-secondary flex justify-center items-center gap-2"
                  onClick={addImage}
                >
                  <PhotoIcon className="size-6 text-white block" />
                  Add Picture
                </button>
              )}
              <button className="btn" onClick={handleOnClose}>
                Done
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
