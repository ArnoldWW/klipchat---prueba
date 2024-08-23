import toast from "react-hot-toast";

const STYLES = {
  background: "#292927",
  color: "#fff"
};

export function notificationError(text) {
  toast.error(text, {
    style: STYLES
  });
}

export function notificationSuccess(text) {
  toast.success(text, {
    style: STYLES
  });
}
