import { images } from "../assets/images/images";
import { useState } from "react";
import { BsChevronLeft as Left } from "react-icons/bs";
import { useProjectPicker } from "../utils/useProjectPicker";
import { Layout } from "../layout";
export default function Work() {
  const [index, setIndex] = useState(0);
  // const { project } = useProjectPicker();
  function handleBackward() {
    if (index !== 0) {
      setIndex((state) => state - 1);
    }
  }

  function handleForward() {
    if (index !== images.length - 1) {
      setIndex((state) => state + 1);
    }
  }

  function handleProject(e) {
    // useProjectPicker({image})
    console.log(e.target);
  }
  return (
    <Layout>
      <div className="h-screen w-full">
        <div className="absolute top-0 left-0 w-full h-full bg-secondary/40 z-10" />
        <div
          className="absolute top-0 left-0 w-full h-full"
          onClick={handleProject}
        >
          <img
            src={images[index].url}
            alt="project-image"
            className="w-full h-screen object-cover object-center"
          />

          <div className="absolute bottom-20 right-20 flex gap-x-4 z-50 items-center">
            {images.map((image, i) => (
              <div
                key={i}
                className="w-32 h-full rounded-md overflow-hidden cursor-pointer"
                onClick={() => setIndex(i)}
              >
                <img src={image.url} alt="project-image" />
              </div>
            ))}

            <div className="mt-4 rounded-3xl border-2 border-primary text-3xl text-primary grid place-items-center px-2 py-4 cursor-pointer">
              &darr;
            </div>
          </div>

          <div className="absolute top-64 left-0 h-fit text-primary z-50 flex justify-between w-screen px-20 ">
            <div
              className="w-12 h-12 rounded-full border-2 border-primary grid place-items-center cursor-pointer"
              onClick={handleBackward}
            >
              <Left className="text-xl" />
            </div>

            <div
              className="w-12 h-12 rounded-full border-2 border-primary grid place-items-center cursor-pointer"
              onClick={handleForward}
            >
              <Left className="text-xl rotate-180" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
