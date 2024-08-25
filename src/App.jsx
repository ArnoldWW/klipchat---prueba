import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import PostForm from "./components/PostForm";
import Post from "./components/Post";
import PostListTopBar from "./components/PostListTopBar";
import Modal from "./components/Modal";
import EditModal from "./components/EditModal";
import GalleryModal from "./components/GalleryModal";

function App() {
  const { posts } = useContext(AppContext);

  return (
    <div className="py-5">
      <section className="w-[90%] max-w-[800px] mx-auto space-y-3">
        <h2 className="font-bold text-xl">KlipWall</h2>
        <div className="rounded-2xl p-5 bg-[#292927] flex justify-between gap-3">
          <PostForm />
        </div>
      </section>

      <section className="w-[90%] max-w-[800px] mx-auto mt-5">
        <PostListTopBar />
        <div className="space-y-3">
          {posts.map((post) => (
            <Post
              key={post.id}
              avartar={post.avartar}
              image={post.image}
              imgGallery={post.imgGallery}
              userName={post.userName}
              minutes={post.minutes}
              likes={post.likes}
              comments={post.comments}
              postText={post.postText}
            />
          ))}
        </div>
      </section>

      <Modal />
      <EditModal />
      <GalleryModal />
    </div>
  );
}

export default App;
