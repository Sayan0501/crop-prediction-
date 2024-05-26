import React from "react";

function Blog() {
  return (
    <>
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold  text-green-700">Blog</h2>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col dark:bg-gray-50 shadow-xl">
              <a
                rel="noopener noreferrer"
                href=""
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?1"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>

                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Crop Rotation: A Key to Sustainable Agriculture
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  Read More
                </a>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-50 shadow-xl">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?2"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Embracing Technology for Efficient Crop Management
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  Read More
                </a>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-50 shadow-xl">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?3"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Climate Change and Its Effects on Crop Production
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  Read More
                </a>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-50 shadow-xl">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?4"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>

                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  The Rise of Organic Farming in Sustainable Agriculture
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  Read More
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
