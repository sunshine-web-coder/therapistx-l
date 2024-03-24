import * as React from "react";

export default function MyComponent(props) {
  return (
    <span className="bg-neutral-100 flex flex-col pt-6">
      <div className="justify-between items-center self-center flex w-full max-w-[1312px] gap-5 max-md:max-w-full max-md:flex-wrap">
        <span className="items-stretch flex gap-2 my-auto px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d60052597ca6d46e8892c5aa16b883df6a026558ac37851d39458e11813b2feb?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
            className="aspect-[1.09] object-contain object-center w-[35px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-black text-xl self-center grow whitespace-nowrap my-auto">
            Therapist X
          </div>
        </span>
        <div className="items-center self-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <span className="items-start flex justify-between gap-5 my-auto px-5 py-0.5">
            <div className="text-zinc-800 text-base self-start">Home</div>
            <div className="text-zinc-800 text-base self-start">About</div>
            <div className="text-zinc-800 text-base self-stretch">Blog</div>
            <div className="text-zinc-800 text-base self-start">Cart(2)</div>
          </span>
          <span className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-teal-600 self-stretch grow px-8 py-4 rounded-[63px] max-md:px-5">
            Book an appointment{" "}
          </span>
        </div>
      </div>
      <div className="self-center w-full max-w-[1312px] mt-36 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="text-blue-800 text-8xl font-bold max-md:max-w-full max-md:text-4xl max-md:mt-10">
              <span className="font-semibold">
                Professional guidance for mental health
              </span>
              <span className="font-semibold text-blue-800">.</span>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch flex grow flex-col mt-28 max-md:max-w-full max-md:mt-10">
              <div className="text-zinc-800 text-xl font-medium max-md:max-w-full">
                Discover expert guidance for mental health, navigating the path
                to wellness with insightful and professional insights.
              </div>
              <div className="items-stretch flex justify-between gap-4 mt-6 max-md:max-w-full max-md:flex-wrap">
                <span className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-teal-600 grow px-16 py-8 rounded-[63px] max-md:px-6">
                  Book an appointment{" "}
                </span>
                <span className="text-zinc-800 text-base font-medium whitespace-nowrap justify-center items-stretch border grow px-16 py-8 rounded-[63px] border-solid border-teal-600 max-md:px-6">
                  Browse all specialties
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e197678ebba80b6b622c0978577282854f308161b1d1ff8cf961cd337dc5e3cd?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e197678ebba80b6b622c0978577282854f308161b1d1ff8cf961cd337dc5e3cd?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e197678ebba80b6b622c0978577282854f308161b1d1ff8cf961cd337dc5e3cd?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e197678ebba80b6b622c0978577282854f308161b1d1ff8cf961cd337dc5e3cd?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e197678ebba80b6b622c0978577282854f308161b1d1ff8cf961cd337dc5e3cd?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e197678ebba80b6b622c0978577282854f308161b1d1ff8cf961cd337dc5e3cd?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e197678ebba80b6b622c0978577282854f308161b1d1ff8cf961cd337dc5e3cd?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e197678ebba80b6b622c0978577282854f308161b1d1ff8cf961cd337dc5e3cd?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
        className="aspect-[3.07] object-contain object-center w-full overflow-hidden self-center max-w-[1312px] mt-20 max-md:max-w-full max-md:mt-10"
      />
      <div className="justify-between items-stretch self-center flex w-full max-w-[1312px] gap-5 mt-16 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <span className="items-stretch flex grow basis-[0%] flex-col">
          <div className="text-blue-800 text-6xl font-medium max-md:text-4xl">
            30<span className=" text-blue-800">+</span>
          </div>
          <div className="text-zinc-800 text-base whitespace-nowrap">
            Certificates in physiology
          </div>
        </span>
        <span className="items-stretch flex grow basis-[0%] flex-col">
          <div className="text-blue-800 text-6xl font-medium max-md:text-4xl">
            10<span className=" text-blue-800">+</span>
          </div>
          <div className="text-zinc-800 text-base whitespace-nowrap">
            Years of experience
          </div>
        </span>
        <span className="items-stretch flex grow basis-[0%] flex-col">
          <div className="text-blue-800 text-6xl font-medium whitespace-nowrap max-md:text-4xl">
            100<span className=" text-blue-800">%</span>
          </div>
          <div className="text-zinc-800 text-base whitespace-nowrap">
            Client satisfaction
          </div>
        </span>
        <span className="items-stretch flex grow basis-[0%] flex-col">
          <div className="text-blue-800 text-6xl font-medium whitespace-nowrap max-md:text-4xl">
            700<span className=" text-blue-800">+</span>
          </div>
          <div className="text-zinc-800 text-base whitespace-nowrap">
            Patient helped
          </div>
        </span>
      </div>
      <div className="bg-zinc-400 self-center z-[1] w-[1312px] shrink-0 max-w-full h-px mt-14 max-md:mt-10" />
      <div className="justify-center items-stretch bg-slate-200 self-stretch flex mt-0 w-full flex-col px-16 py-12 max-md:max-w-full max-md:mt-0 max-md:px-5">
        <div className="mt-[484px] mb-20 max-md:max-w-full max-md:mr-1 max-md:my-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1cecb8d4b595b11ccc1957a869b2760092028b49e1754f49e3615fa7ce8c2ada?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cecb8d4b595b11ccc1957a869b2760092028b49e1754f49e3615fa7ce8c2ada?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cecb8d4b595b11ccc1957a869b2760092028b49e1754f49e3615fa7ce8c2ada?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cecb8d4b595b11ccc1957a869b2760092028b49e1754f49e3615fa7ce8c2ada?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cecb8d4b595b11ccc1957a869b2760092028b49e1754f49e3615fa7ce8c2ada?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cecb8d4b595b11ccc1957a869b2760092028b49e1754f49e3615fa7ce8c2ada?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cecb8d4b595b11ccc1957a869b2760092028b49e1754f49e3615fa7ce8c2ada?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cecb8d4b595b11ccc1957a869b2760092028b49e1754f49e3615fa7ce8c2ada?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                className="aspect-[0.91] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
              <span className="flex flex-col my-auto items-start max-md:max-w-full max-md:mt-10">
                <span className="items-stretch flex justify-between gap-5">
                  <span className="items-stretch flex justify-between gap-5">
                    <div className="text-blue-800 text-base">01</div>
                    <div className="bg-blue-800 self-center w-10 shrink-0 h-px my-auto" />
                  </span>
                  <div className="text-blue-800 text-base">ABOUT</div>
                </span>
                <div className="text-zinc-800 text-6xl font-medium self-stretch mt-6 max-md:max-w-full max-md:text-4xl">
                  I’m Clara, a dedicated therapist with 10+ years of experience
                </div>
                <div className="text-zinc-800 text-base self-stretch mt-4 max-md:max-w-full">
                  Passionate about fostering mental well-being, I bring a wealth
                  of expertise to help individuals navigate their unique paths
                  towards healing and personal growth. Together, let's embark on
                  a journey to nurture your mental health and unlock your full
                  potential.
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="self-center z-[1] mt-0 w-full max-w-[1312px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <span className="flex flex-col my-auto px-5 items-start max-md:max-w-full max-md:mt-10">
              <span className="items-stretch flex justify-between gap-5">
                <span className="items-stretch flex justify-between gap-5">
                  <div className="text-blue-800 text-base">02</div>{" "}
                  <div className="bg-blue-800 self-center w-10 shrink-0 h-px my-auto" />
                </span>{" "}
                <div className="text-blue-800 text-base">WHY ME</div>
              </span>{" "}
              <div className="text-zinc-800 text-6xl font-medium self-stretch mt-6 max-md:max-w-full max-md:text-4xl">
                Affordable & private therapy
              </div>{" "}
              <div className="text-zinc-800 text-base self-stretch mt-4 max-md:max-w-full">
                Your mental health is our priority. With affordable and private
                therapy, we aim to empower you on your path to resilience,
                self-discovery, and lasting positive change.
              </div>{" "}
              <span className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-teal-600 mt-6 px-16 py-8 rounded-[63px] max-md:px-6">
                Book an appointment{" "}
              </span>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b47e0a319e1582aa97485e3d9fe720a7717e5e514e283bb3bb1c515f212e6e97?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47e0a319e1582aa97485e3d9fe720a7717e5e514e283bb3bb1c515f212e6e97?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47e0a319e1582aa97485e3d9fe720a7717e5e514e283bb3bb1c515f212e6e97?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47e0a319e1582aa97485e3d9fe720a7717e5e514e283bb3bb1c515f212e6e97?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47e0a319e1582aa97485e3d9fe720a7717e5e514e283bb3bb1c515f212e6e97?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47e0a319e1582aa97485e3d9fe720a7717e5e514e283bb3bb1c515f212e6e97?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47e0a319e1582aa97485e3d9fe720a7717e5e514e283bb3bb1c515f212e6e97?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47e0a319e1582aa97485e3d9fe720a7717e5e514e283bb3bb1c515f212e6e97?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
              className="aspect-[0.91] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>{" "}
      <span className="items-stretch self-center flex justify-between gap-5 mt-20 px-5 max-md:mt-10">
        <span className="items-stretch flex justify-between gap-5">
          <div className="text-blue-800 text-base">03</div>{" "}
          <div className="bg-blue-800 self-center w-10 shrink-0 h-px my-auto" />
        </span>{" "}
        <div className="text-blue-800 text-base">SERVICES</div>
      </span>{" "}
      <div className="text-zinc-800 text-center text-6xl font-medium self-center max-w-[587px] mt-6 max-md:max-w-full max-md:text-4xl">
        Experienced in different types of therapy
      </div>{" "}
      <div className="self-center w-full max-w-[1310px] mt-10 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="items-start flex grow flex-col max-md:max-w-full max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f1d4d355bb5ca31a4c4aa9d52c1a895d97625943b0b2bad2023acdb427909401?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1d4d355bb5ca31a4c4aa9d52c1a895d97625943b0b2bad2023acdb427909401?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1d4d355bb5ca31a4c4aa9d52c1a895d97625943b0b2bad2023acdb427909401?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1d4d355bb5ca31a4c4aa9d52c1a895d97625943b0b2bad2023acdb427909401?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1d4d355bb5ca31a4c4aa9d52c1a895d97625943b0b2bad2023acdb427909401?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1d4d355bb5ca31a4c4aa9d52c1a895d97625943b0b2bad2023acdb427909401?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1d4d355bb5ca31a4c4aa9d52c1a895d97625943b0b2bad2023acdb427909401?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1d4d355bb5ca31a4c4aa9d52c1a895d97625943b0b2bad2023acdb427909401?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                className="aspect-[0.87] object-contain object-center w-full overflow-hidden self-stretch max-md:max-w-full"
              />{" "}
              <div className="text-zinc-800 text-3xl font-semibold self-stretch mt-6 max-md:max-w-full">
                Personal therapy
              </div>{" "}
              <div className="text-zinc-800 text-base self-stretch mt-4 max-md:max-w-full">
                Experience personalized care with our individual therapy
                services. Tailored to your unique needs, our sessions...
              </div>{" "}
              <span className="justify-center items-center flex gap-2 mt-4 py-2 self-start">
                <div className="text-teal-600 text-base grow whitespace-nowrap my-auto">
                  Read more
                </div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/92d2769221dde90c7c05dae4538ca80d013297b2a34b2cdd26e59a27ee11c34c?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </span>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-start flex grow flex-col max-md:max-w-full max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c38eba4310cd8ab7cdc9dfadd0ed0c790c3bb87d38e93a7ee89d7380232faf9a?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c38eba4310cd8ab7cdc9dfadd0ed0c790c3bb87d38e93a7ee89d7380232faf9a?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c38eba4310cd8ab7cdc9dfadd0ed0c790c3bb87d38e93a7ee89d7380232faf9a?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c38eba4310cd8ab7cdc9dfadd0ed0c790c3bb87d38e93a7ee89d7380232faf9a?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c38eba4310cd8ab7cdc9dfadd0ed0c790c3bb87d38e93a7ee89d7380232faf9a?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c38eba4310cd8ab7cdc9dfadd0ed0c790c3bb87d38e93a7ee89d7380232faf9a?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c38eba4310cd8ab7cdc9dfadd0ed0c790c3bb87d38e93a7ee89d7380232faf9a?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c38eba4310cd8ab7cdc9dfadd0ed0c790c3bb87d38e93a7ee89d7380232faf9a?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                className="aspect-[0.87] object-contain object-center w-full overflow-hidden self-stretch max-md:max-w-full"
              />{" "}
              <div className="text-zinc-800 text-3xl font-semibold self-stretch mt-6 max-md:max-w-full">
                Couple therapy
              </div>{" "}
              <div className="text-zinc-800 text-base self-stretch mt-4 max-md:max-w-full">
                Strengthen your relationship with our couple therapy services.
                Our experienced therapists create a safe space for open
                communication and understanding....
              </div>{" "}
              <span className="justify-center items-center flex gap-2 mt-4 py-2 self-start">
                <div className="text-teal-600 text-base grow whitespace-nowrap my-auto">
                  Read more
                </div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/92d2769221dde90c7c05dae4538ca80d013297b2a34b2cdd26e59a27ee11c34c?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </span>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-start flex grow flex-col max-md:max-w-full max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7c1449115cdeffa70b4def971b1fd4f363808459359c8aa2f53337da677bbc2d?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c1449115cdeffa70b4def971b1fd4f363808459359c8aa2f53337da677bbc2d?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c1449115cdeffa70b4def971b1fd4f363808459359c8aa2f53337da677bbc2d?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c1449115cdeffa70b4def971b1fd4f363808459359c8aa2f53337da677bbc2d?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c1449115cdeffa70b4def971b1fd4f363808459359c8aa2f53337da677bbc2d?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c1449115cdeffa70b4def971b1fd4f363808459359c8aa2f53337da677bbc2d?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c1449115cdeffa70b4def971b1fd4f363808459359c8aa2f53337da677bbc2d?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c1449115cdeffa70b4def971b1fd4f363808459359c8aa2f53337da677bbc2d?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                className="aspect-[0.87] object-contain object-center w-full overflow-hidden self-stretch max-md:max-w-full"
              />{" "}
              <div className="text-zinc-800 text-3xl font-semibold self-stretch mt-6 max-md:max-w-full">
                Kids therapy
              </div>{" "}
              <div className="text-zinc-800 text-base self-stretch mt-4 max-md:max-w-full">
                Nurturing young minds with our kids' therapy services. Our
                compassionate therapists provide a supportive and engaging
                environment....
              </div>
              <span className="justify-center items-center flex gap-2 mt-4 py-2 self-start">
                <div className="text-teal-600 text-base grow whitespace-nowrap my-auto">
                  Read more
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/92d2769221dde90c7c05dae4538ca80d013297b2a34b2cdd26e59a27ee11c34c?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </span>
            </span>
          </div>
        </div>
      </div>
      <span className="text-zinc-800 text-base font-medium whitespace-nowrap justify-center items-stretch border self-center mt-10 px-16 py-8 rounded-[63px] border-solid border-teal-600 max-md:px-6">
        Browse all specialties
      </span>
      <div className="flex-col overflow-hidden self-center relative flex min-h-[647px] w-[1312px] max-w-full justify-center mt-36 pr-16 py-12 items-start max-md:mt-10 max-md:pr-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/692b732b32849ab864d4c996406c48f0b7f6e0fe4f96341c6ec666b652f7eebe?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/692b732b32849ab864d4c996406c48f0b7f6e0fe4f96341c6ec666b652f7eebe?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/692b732b32849ab864d4c996406c48f0b7f6e0fe4f96341c6ec666b652f7eebe?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/692b732b32849ab864d4c996406c48f0b7f6e0fe4f96341c6ec666b652f7eebe?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/692b732b32849ab864d4c996406c48f0b7f6e0fe4f96341c6ec666b652f7eebe?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/692b732b32849ab864d4c996406c48f0b7f6e0fe4f96341c6ec666b652f7eebe?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/692b732b32849ab864d4c996406c48f0b7f6e0fe4f96341c6ec666b652f7eebe?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/692b732b32849ab864d4c996406c48f0b7f6e0fe4f96341c6ec666b652f7eebe?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <span className="relative bg-teal-600 flex w-[821px] max-w-full flex-col pl-16 pr-20 py-12 rounded-none items-start max-md:px-5">
          <div className="text-neutral-100 text-6xl font-medium w-[636px] max-w-full mt-12 max-md:text-4xl max-md:mt-10">
            Schedule an in-person or virtual appointment today
          </div>
          <div className="text-neutral-100 text-xl w-[619px] max-w-full mt-4">
            Book your in-person or virtual session today and take the first step
            towards your well-being. Our flexible scheduling options ensure that
            you can access the support you need, whether it's face-to-face or
            from the comfort of your own space.
          </div>{" "}
          <div className="items-stretch flex gap-4 mt-6 mb-12 max-md:max-w-full max-md:flex-wrap max-md:mb-10">
            <span className="text-zinc-800 text-base font-bold whitespace-nowrap justify-center items-stretch bg-neutral-100 grow px-16 py-8 rounded-[63px] max-md:px-6">
              Book an appointment{" "}
            </span>{" "}
            <span className="text-neutral-100 text-base font-medium whitespace-nowrap justify-center items-stretch border grow px-16 py-8 rounded-[63px] border-solid border-neutral-100 max-md:px-6">
              Browse all specialties
            </span>
          </div>
        </span>
      </div>{" "}
      <div className="bg-slate-200 self-stretch flex w-full flex-col justify-center items-stretch mt-20 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="mt-4 mb-8 max-md:max-w-full max-md:mr-1.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
              <span className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <span className="items-stretch flex justify-between gap-5 self-start">
                  <span className="items-stretch flex justify-between gap-5">
                    <div className="text-blue-800 text-base">04</div>{" "}
                    <div className="bg-blue-800 self-center w-10 shrink-0 h-px my-auto" />
                  </span>{" "}
                  <div className="text-blue-800 text-base">TESTIMONIALS</div>
                </span>{" "}
                <div className="text-zinc-800 text-6xl font-medium self-stretch mt-6 max-md:max-w-full max-md:text-4xl">
                  Read the experience of my past clients
                </div>{" "}
                <div className="text-zinc-800 text-base self-stretch mt-4 max-md:max-w-full">
                  Your mental health is our priority. With affordable and
                  private therapy, we aim to empower you on your path to
                  resilience, self-discovery, and lasting positive change.
                </div>{" "}
                <span className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-teal-600 mt-6 px-16 py-8 rounded-[63px] self-start max-md:px-6">
                  Book an appointment{" "}
                </span>{" "}
                <div className="bg-zinc-400 self-stretch shrink-0 h-px mt-6 max-md:max-w-full" />{" "}
                <div className="justify-between items-stretch self-stretch flex gap-5 mt-10 max-md:max-w-full max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/81787362700ad6230cafb98d8fd50c16465ac345fa3b04cedc461d04953c2269?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a24ab700d98a139708b891a27a86127bce79d2c60eac277d8a5b818addaa2f4?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                  />
                </div>
              </span>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex-col justify-center items-center overflow-hidden relative flex min-h-[640px] grow px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ce824d5107bd4551c0d88a900fbb0871cfa4d575ddbe873cef32c48d9d53844?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ce824d5107bd4551c0d88a900fbb0871cfa4d575ddbe873cef32c48d9d53844?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ce824d5107bd4551c0d88a900fbb0871cfa4d575ddbe873cef32c48d9d53844?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ce824d5107bd4551c0d88a900fbb0871cfa4d575ddbe873cef32c48d9d53844?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ce824d5107bd4551c0d88a900fbb0871cfa4d575ddbe873cef32c48d9d53844?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ce824d5107bd4551c0d88a900fbb0871cfa4d575ddbe873cef32c48d9d53844?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ce824d5107bd4551c0d88a900fbb0871cfa4d575ddbe873cef32c48d9d53844?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ce824d5107bd4551c0d88a900fbb0871cfa4d575ddbe873cef32c48d9d53844?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />{" "}
                <span className="relative items-stretch bg-white flex w-[454px] max-w-full flex-col mt-72 mb-7 px-6 py-8 rounded-[30px] max-md:mt-10 max-md:px-5">
                  <div className="text-zinc-800 text-3xl font-semibold whitespace-nowrap">
                    “Clara listened carefully”
                  </div>{" "}
                  <div className="text-zinc-800 text-base mt-4">
                    {" "}
                    listened carefully, creating a safe space for open
                    expression and fostering a trusting therapeutic
                    relationship.
                  </div>{" "}
                  <span className="items-stretch flex justify-between gap-4 mt-4">
                    <div className="text-zinc-800 text-base font-medium">
                      Kyle Jacobs
                    </div>{" "}
                    <div className="text-zinc-800 text-base">New york, NY</div>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="self-center w-full max-w-[1312px] mt-24 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <span className="flex grow flex-col items-start max-md:max-w-full max-md:mt-10">
              <span className="items-stretch flex justify-between gap-5">
                <span className="items-stretch flex justify-between gap-5">
                  <div className="text-blue-800 text-base">05</div>{" "}
                  <div className="bg-blue-800 self-center w-10 shrink-0 h-px my-auto" />
                </span>{" "}
                <div className="text-blue-800 text-base">Blog</div>
              </span>{" "}
              <div className="text-zinc-800 text-6xl font-medium self-stretch mt-6 max-md:max-w-full max-md:text-4xl">
                Articles & resources
              </div>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <div className="text-zinc-800 text-base my-auto max-md:max-w-full max-md:mt-10">
              Dive into a wealth of knowledge with our collection of therapy
              articles and resources. Whether you're seeking insights on mental
              well-being, coping strategies, or expert advice, our curated
              content is designed to empower and support you on your journey to
              a healthier, happier life.
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1312px] mt-10 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <span className="items-stretch flex grow flex-col px-5 max-md:max-w-full max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1836404d6bdc1ab78a14ec25569e289761bdbf22e6630a0173c5bafcddb881fa?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1836404d6bdc1ab78a14ec25569e289761bdbf22e6630a0173c5bafcddb881fa?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1836404d6bdc1ab78a14ec25569e289761bdbf22e6630a0173c5bafcddb881fa?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1836404d6bdc1ab78a14ec25569e289761bdbf22e6630a0173c5bafcddb881fa?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1836404d6bdc1ab78a14ec25569e289761bdbf22e6630a0173c5bafcddb881fa?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1836404d6bdc1ab78a14ec25569e289761bdbf22e6630a0173c5bafcddb881fa?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1836404d6bdc1ab78a14ec25569e289761bdbf22e6630a0173c5bafcddb881fa?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1836404d6bdc1ab78a14ec25569e289761bdbf22e6630a0173c5bafcddb881fa?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                className="aspect-[1.32] object-contain object-center w-full overflow-hidden max-md:max-w-full"
              />
              <div className="text-zinc-800 text-3xl font-medium mt-6 max-md:max-w-full">
                Become a therapist: 14 courses and online options
              </div>
              <div className="items-center flex w-full justify-between gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <span className="items-center flex gap-4 my-auto">
                  <div className="text-zinc-800 text-base font-medium self-stretch grow whitespace-nowrap">
                    ARTICLES
                  </div>
                  <div className="bg-black w-6 shrink-0 h-px my-auto" />
                  <div className="text-zinc-800 text-base font-medium self-stretch grow whitespace-nowrap">
                    NOV 5, 2024
                  </div>
                </span>
                <span className="justify-between items-center self-stretch flex gap-2 py-2">
                  <div className="text-teal-600 text-base grow whitespace-nowrap my-auto">
                    Read more
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/92d2769221dde90c7c05dae4538ca80d013297b2a34b2cdd26e59a27ee11c34c?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </span>
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch flex grow flex-col px-5 max-md:max-w-full max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6d61d04fd371b3749a41fb281d143d0607830541460246dff93633549237c758?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d61d04fd371b3749a41fb281d143d0607830541460246dff93633549237c758?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d61d04fd371b3749a41fb281d143d0607830541460246dff93633549237c758?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d61d04fd371b3749a41fb281d143d0607830541460246dff93633549237c758?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d61d04fd371b3749a41fb281d143d0607830541460246dff93633549237c758?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d61d04fd371b3749a41fb281d143d0607830541460246dff93633549237c758?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d61d04fd371b3749a41fb281d143d0607830541460246dff93633549237c758?apiKey=a2c84c11612648b6af4990f4623d2ea1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d61d04fd371b3749a41fb281d143d0607830541460246dff93633549237c758?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                className="aspect-[1.32] object-contain object-center w-full overflow-hidden max-md:max-w-full"
              />
              <div className="text-zinc-800 text-3xl font-medium mt-6 max-md:max-w-full">
                How to support clients with jobs loss depression
              </div>
              <div className="justify-between items-center flex w-full gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <span className="items-center flex gap-4 my-auto">
                  <div className="text-zinc-800 text-base font-medium self-stretch grow whitespace-nowrap">
                    RESOURCES
                  </div>
                  <div className="bg-black w-6 shrink-0 h-px my-auto" />
                  <div className="text-zinc-800 text-base font-medium self-stretch grow whitespace-nowrap">
                    NOV 5, 2024
                  </div>
                </span>
                <span className="justify-between items-center self-stretch flex gap-2 py-2">
                  <div className="text-teal-600 text-base grow whitespace-nowrap my-auto">
                    Read more
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/92d2769221dde90c7c05dae4538ca80d013297b2a34b2cdd26e59a27ee11c34c?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
      <span className="text-zinc-800 text-base font-medium whitespace-nowrap justify-center items-stretch border self-center mt-10 px-16 py-8 rounded-[63px] border-solid border-teal-600 max-md:px-6">
        Browse all posts
      </span>
      <div className="items-stretch bg-teal-600 self-stretch flex w-full flex-col mt-20 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <span className="justify-center items-center border bg-neutral-100 flex flex-col mt-3.5 px-20 py-12 rounded-[30px] border-solid border-neutral-100 max-md:max-w-full max-md:px-5">
          <div className="text-zinc-800 text-6xl font-medium mt-8 max-md:max-w-full max-md:text-4xl">
            Book your first session today!
          </div>
          <div className="text-zinc-800 text-center text-base max-w-[603px] mt-4 max-md:max-w-full">
            Embark on your path to healing and personal growth by booking your
            first session today! Our compassionate and dedicated team is ready
            to support you on your journey to a happier and healthier life. Take
            the first step towards positive change – schedule your session now.
          </div>
          <div className="items-stretch flex gap-4 mt-6 mb-8 max-md:max-w-full max-md:flex-wrap">
            <span className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-teal-600 grow px-16 py-8 rounded-[63px] max-md:px-6">
              Book an appointment{" "}
            </span>
            <span className="text-zinc-800 text-base font-medium whitespace-nowrap justify-center items-stretch border grow px-16 py-8 rounded-[63px] border-solid border-teal-600 max-md:px-6">
              Browse all specialties
            </span>
          </div>
        </span>
        <div className="justify-between items-stretch flex gap-5 mt-10 px-px max-md:max-w-full max-md:flex-wrap">
          <span className="items-stretch flex grow basis-[0%] flex-col self-start">
            <div className="text-neutral-100 text-xl font-semibold leading-7 whitespace-nowrap">
              Quick links
            </div>
            <div className="text-neutral-100 text-base font-medium leading-6 whitespace-nowrap mt-6">
              Home
            </div>
            <div className="text-neutral-100 text-base font-medium leading-6 whitespace-nowrap mt-4">
              About
            </div>
            <div className="text-neutral-100 text-base font-medium leading-6 whitespace-nowrap mt-4">
              Blog
            </div>
            <div className="text-neutral-100 text-base font-medium leading-6 whitespace-nowrap mt-4">
              Cart
            </div>
          </span>
          <span className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-neutral-100 text-xl font-semibold leading-7 whitespace-nowrap">
              Therapy X
            </div>
            <div className="text-neutral-100 text-base font-medium leading-6 whitespace-nowrap mt-6">
              About us
            </div>
            <div className="text-neutral-100 text-base font-medium leading-6 whitespace-nowrap mt-4">
              FAQs
            </div>
            <div className="text-neutral-100 text-base font-medium leading-6 whitespace-nowrap mt-4">
              Privacy policy
            </div>
            <div className="text-neutral-100 text-base font-medium leading-6 whitespace-nowrap mt-4">
              Terms of use
            </div>
            <div className="text-neutral-100 text-base font-medium leading-6 whitespace-nowrap mt-4">
              Reviews
            </div>
          </span>
          <span className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-neutral-100 text-xl font-semibold leading-7 whitespace-nowrap">
              Services
            </div>
            <div className="text-neutral-100 text-base font-medium leading-6 whitespace-nowrap mt-6">
              Online therapy
            </div>
            <div className="text-neutral-100 text-base font-medium leading-6 whitespace-nowrap mt-4">
              Therapy and coaching
            </div>
            <div className="text-neutral-100 text-base font-medium leading-6 whitespace-nowrap mt-4">
              Resilience training
            </div>
            <div className="text-neutral-100 text-base font-medium leading-6 whitespace-nowrap mt-4">
              Trainings
            </div>
            <div className="text-neutral-100 text-base font-medium leading-6 whitespace-nowrap mt-4">
              Consultations
            </div>
          </span>
          <span className="items-stretch flex grow basis-[0%] flex-col self-start">
            <div className="text-neutral-100 text-xl font-semibold leading-7 whitespace-nowrap">
              Socials
            </div>
            <span className="items-stretch flex justify-between gap-2 mt-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c82201d0d444f4136962894efce281a319e7be4342b0e5f74a14c816a127ec2?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-neutral-100 text-base font-medium leading-6 grow whitespace-nowrap self-start">
                Facebook
              </div>
            </span>
            <span className="items-stretch flex justify-between gap-2 mt-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e0f556fa055211b642b1eb606aaf345ad60f96dba4e472ff516127e8882d467?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-neutral-100 text-base font-medium leading-6 grow whitespace-nowrap self-start">
                Instagram
              </div>
            </span>
            <span className="items-stretch flex justify-between gap-2 mt-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/47e36de2b4e85ba3fb48ea2fe2fc5d67c8500084cbc7df4704419daac2ee7eda?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-neutral-100 text-base font-medium leading-6 grow whitespace-nowrap self-start">
                Twitter
              </div>
            </span>
            <span className="items-stretch flex justify-between gap-2 mt-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c219a7411b0b6d38509294a2add5da7dd92eae072ff14535b0d32464b4f52916?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-neutral-100 text-base font-medium leading-6 grow whitespace-nowrap self-start">
                Linkedin
              </div>
            </span>
          </span>
          <span className="items-stretch flex grow basis-[0%] flex-col self-start">
            <div className="text-neutral-100 text-xl font-semibold leading-7 whitespace-nowrap">
              Contact
            </div>
            <span className="flex justify-between gap-2 mt-6 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f200d7dd46963264aa5ea355771cf293a8cbf1baeb3bdff8bd574035a6d82f7?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-neutral-100 text-base font-medium leading-6">
                17, kellington highway Lagos, Nigeria
              </div>
            </span>
            <span className="items-stretch flex justify-between gap-2 mt-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/545edc397e5385c19926f6078034ccdfef1170d2c78e18a69b67315436204f38?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-neutral-100 text-base font-medium leading-6 grow whitespace-nowrap self-start">
                +2348-96748011
              </div>
            </span>
            <span className="flex justify-between gap-2 mt-4 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/758d2003fc81d1eaa9c38862e70e789ada5847acb238c077cb9ca8b2529f9bed?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-neutral-100 text-base font-medium leading-6">
                tobiajayistephen2000@gmail.com
              </div>
            </span>
          </span>
        </div>
        <div className="items-stretch flex w-full justify-between gap-5 mt-24 mb-3.5 px-px max-md:max-w-full max-md:flex-wrap max-md:mr-1 max-md:mt-10">
          <span className="items-stretch flex justify-between gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cce77b391fd5589f413fdb4ce5ad4ee757ded5fb0b19208a896dd27fa34f7f88?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
              className="aspect-[1.09] object-contain object-center w-[35px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-neutral-100 text-xl self-center grow whitespace-nowrap my-auto">
              Therapist X
            </div>
          </span>
          <span className="items-stretch self-center flex gap-2.5 my-auto">
            <div className="text-neutral-100 text-base font-medium leading-6 grow whitespace-nowrap self-start">
              Copyright
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c00b895481445001494838a87761fef1148c3ab64342f2c773d9405a054170af?apiKey=a2c84c11612648b6af4990f4623d2ea1&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-neutral-100 text-base font-medium leading-6 grow whitespace-nowrap self-start">
              Therapist X
            </div>
          </span>
        </div>
      </div>
    </span>
  );
}
