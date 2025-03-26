import { FC } from 'react';

const Blog: FC = () => {
  return (
    <section
      className="flex justify-center items-center mx-[10%] px-10 pt-10 h-fit pb-20 custom-flex-col"
      role="region"
      aria-label="Blog page content"
    >
      <h1
        className="text-9xl text-red-200 text-center w-fit"
        aria-label="Blog page coming soon"
      >
        COMING SOON
      </h1>
    </section>
  );
};

export default Blog;
