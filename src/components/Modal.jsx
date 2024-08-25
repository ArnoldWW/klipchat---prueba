import { useContext } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle
} from "@headlessui/react";
import { XMarkIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import { AppContext } from "../context/AppContext";
import PostForm from "./PostForm";

export default function Modal() {
  const {
    image,
    imgGallery,
    openModal,
    setOpenModal,
    setOpenEditModal,
    setOpenGalleryModal,
    setImage,
    setImgGallery
  } = useContext(AppContext);

  const handleOnClose = () => {
    setImage("");
    setImgGallery([]);
    setOpenModal(false);
    document.getElementById("photo").value = "";
  };

  const openEditModal = () => {
    setOpenModal(false);
    setOpenEditModal(true);
  };

  const openGalleryModal = () => {
    setOpenModal(false);
    setOpenGalleryModal(true);
  };

  return (
    <Dialog open={openModal} onClose={handleOnClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-green-900/30" />
      <div className="fixed inset-0 w-screen overflow-y-auto p-4">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel className="w-[700px] border border-neutral-600 bg-[#292927] rounded-3xl text-slate-200">
            {/* ---- */}
            <div className="p-5 border-b border-neutral-600 flex justify-between items-center">
              <DialogTitle className="font-bold text-lg">
                Create Post
              </DialogTitle>
              <button
                className="p-1 hover:bg-neutral-700 rounded-full cursor-pointer"
                onClick={handleOnClose}
              >
                <XMarkIcon className="size-6 text-white block" />
              </button>
            </div>
            {/* ---- */}
            <div className="px-5 py-5 flex flex-col gap-5">
              {/* ---- */}
              <div
                className={`relative overflow-hidden ${
                  imgGallery?.length > 0
                    ? "grid grid-cols-2 gap-2 grid-flow-row"
                    : ""
                }`}
              >
                <div className="absolute top-0 left-0 w-full flex justify-between pt-3 px-3">
                  <div className="flex gap-2">
                    <button
                      className="p-2 bg-neutral-500/70  hover:bg-neutral-700/70 rounded-full cursor-pointer"
                      onClick={openGalleryModal}
                    >
                      <PlusIcon className="size-6 text-white block" />
                    </button>
                    <button
                      className="py-2 px-5 bg-neutral-500/70   hover:bg-neutral-700/70 rounded-full cursor-pointer flex gap-2"
                      onClick={openEditModal}
                    >
                      <PencilIcon className="size-6 text-white block" />
                      <span>Edit</span>
                    </button>
                  </div>
                  <div>
                    <button
                      className="p-2 bg-neutral-500/70  hover:bg-neutral-700/70 rounded-full cursor-pointer"
                      onClick={handleOnClose}
                    >
                      <XMarkIcon className="size-6 text-white block" />
                    </button>
                  </div>
                </div>

                <img
                  src={image}
                  className={`object-cover w-full rounded-xl ${
                    imgGallery?.length > 0 ? "h-[300px]" : "h-[500px]"
                  }`}
                />

                {imgGallery?.map((img) => (
                  <img
                    key={img.id}
                    src={img.src}
                    alt="img gallery"
                    className={`object-cover w-full rounded-xl h-[300px] ${
                      imgGallery?.length === 2
                        ? "last:col-span-2"
                        : "col-span-1"
                    }`}
                  />
                ))}
              </div>
              {/* ---- */}
              <div className="flex gap-2 justify-between">
                <PostForm />
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
