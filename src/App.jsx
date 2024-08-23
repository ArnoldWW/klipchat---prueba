import PostForm from "./components/PostForm";
import Post from "./components/Post";
import PostListTopBar from "./components/PostListTopBar";

function App() {
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
          <Post
            userName="Camilo"
            minutes="5"
            likes={5}
            comments={10}
            postText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quisquam repellat perspiciatis nobis illo blanditiis, saepe ut pariatur quam molestias, possimus deleniti."
          />
        </div>
      </section>
    </div>
  );
}

export default App;
