import toast from "react-hot-toast";

const STYLES = {
  background: "#292927",
  color: "#fff"
};

export function notificationError(text, duration = "500") {
  toast.error(text, {
    style: STYLES,
    duration
  });
}

export function notificationSuccess(text, duration = "500") {
  toast.success(text, {
    style: STYLES,
    duration
  });
}
