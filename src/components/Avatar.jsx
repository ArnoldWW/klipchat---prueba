export default function Avatar({ image = "/user.jpg" }) {
  return (
    <div className="rounded-full bg-red-500 self-start w-10 h-10 overflow-hidden">
      <img src={image} className="object-cover" alt="user" />
    </div>
  );
}
