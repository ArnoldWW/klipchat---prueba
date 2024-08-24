import { useContext, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { AppContext } from "../context/AppContext";
import Cropper from "react-easy-crop";

export default function ModalEdit() {
  const {
    image,
    openModalEdit,
    setOpenModal,
    setOpenModalEdit,
    onCropDone,
    resetImages
  } = useContext(AppContext);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [croppedArea, setCroppedArea] = useState(null);
  /* const [aspectRadio, setAspectRadio] = useState(4 / 3); */

  const handleOnClose = () => {
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setOpenModal(true);
    setOpenModalEdit(false);
  };

  const handleOnCloseAll = () => {
    resetImages();
    setOpenModal(false);
    setOpenModalEdit(false);
  };

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  return (
    <Dialog
      open={openModalEdit}
      onClose={handleOnCloseAll}
      className="relative z-50"
    >
      <DialogBackdrop className="fixed inset-0 bg-green-900/30" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 text-slate-200 overflow-y-auto">
        <DialogPanel className="min-w-[700px] border border-neutral-600 bg-[#292927] rounded-3xl">
          {/* - */}
          <div className="p-5 border-b border-neutral-600 flex justify-between items-center">
            <DialogTitle className="font-bold text-lg">Edit image</DialogTitle>
            <button
              className="p-1 hover:bg-neutral-700 rounded-full cursor-pointer"
              onClick={handleOnClose}
            >
              <XMarkIcon className="size-6 text-white block" />
            </button>
          </div>
          {/* -image crop */}
          <div className="relative h-[500px]">
            <Cropper
              image={image}
              aspect={4 / 3}
              crop={crop}
              zoom={zoom}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          {/* - */}
          <div className="px-5 py-5 flex justify-end gap-3">
            <button className="btn-secondary" onClick={handleOnClose}>
              Cancel
            </button>
            <button
              className="btn"
              onClick={() => {
                onCropDone(croppedArea);
                handleOnClose();
              }}
            >
              Save
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
