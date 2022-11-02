import Image from "next/image";
export default function Page() {
  return (
    <>
      <section className="px-6 sm:px-8 lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-12">
        <div className="lg:mb-10 lg:w-1/2">
          <div className="lg:mx-auto lg:max-w-2xl">
            <h2 className="text-m-h1 sm:text-d-h2 xl:text-d-j font-futura font-extrabold text-white lg:text-[length:64px] lg:leading-[56px] ">
              <span className="text-blue-2">Aesthetic </span>
              <span>Sense of </span>
              <span className="text-green-1">Creativity </span>
              <span>and </span>
              <span className="text-yellow-1">Design</span>
            </h2>
            <div className="h-6"></div>
            <p className="text-m-p-lg lg:text-d-p-lg xl:pr-56">
              Aspiring full-stack developer with a passion for creating
              beautiful and functional websites and applications.
            </p>
            <div className="h-9 xl:h-10"></div>
            <div className="xl: flex flex-col gap-4 xl:flex-row">
              <a
                x-comp="PrimaryButtonLink"
                className="xl:text-d-p-lg bg-blue-brand box-border inline-flex h-14 w-full items-center justify-center rounded px-8 text-white transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-transparent xl:order-1 xl:h-16 xl:w-60"
                href="/docs/en/v1/tutorials/blog"
              ></a>
            </div>
          </div>
        </div>
        <div className="relative -mx-6 mt-6 overflow-hidden p-4 sm:-mx-8 sm:p-8 md:p-10 lg:mt-0 lg:h-[51rem] lg:w-1/2 lg:rounded-l-2xl lg:p-8">
          <div className="relative h-full w-full">
            <Image
              src="/me.jpg"
              alt="Picture of the author"
              quality={100}
              fill={true}
              className={"object-cover"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
