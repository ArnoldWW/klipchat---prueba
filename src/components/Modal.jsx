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
  const { image, openModal, setOpenModal, setOpenModalEdit, setImage } =
    useContext(AppContext);

  const handleOnClose = () => {
    setImage("");
    setOpenModal(false);
  };

  const openModalEdit = () => {
    setOpenModal(false);
    setOpenModalEdit(true);
  };

  return (
    <Dialog open={openModal} onClose={handleOnClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-green-900/30" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 text-slate-200 overflow-y-auto">
        <DialogPanel className="min-w-[700px] border border-neutral-600 bg-[#292927] rounded-3xl">
          {/* ---- */}
          <div className="p-5 border-b border-neutral-600 flex justify-between items-center">
            <DialogTitle className="font-bold text-lg">Create Post</DialogTitle>
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
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full flex justify-between pt-3 px-3">
                <div className="flex gap-2">
                  <button className="p-2 bg-neutral-500/70  hover:bg-neutral-700/70 rounded-full cursor-pointer">
                    <PlusIcon className="size-6 text-white block" />
                  </button>
                  <button
                    className="py-2 px-5 bg-neutral-500/70   hover:bg-neutral-700/70 rounded-full cursor-pointer flex gap-2"
                    onClick={openModalEdit}
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

              <img src={image} className="object-cover w-full max-h-[500px]" />
            </div>
            {/* ---- */}
            <div className="flex gap-2 justify-between">
              <PostForm />
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
