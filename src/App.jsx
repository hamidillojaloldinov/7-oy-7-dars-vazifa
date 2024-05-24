import React, { useEffect, useState } from "react";
import api from "./api/api";

function App() {
  const [products, setproducts] = useState();
  async function data_funtion() {
    setproducts(await api.get("/products?featured=true"));
  }
  data_funtion();
  console.log(products);
  return (
    <>
      <header className="flex justify-center items-center">
        <div>
          <nav className="flex justify-center bg-base-200 ">
            <div className="flex justify-center navbar align-element">
              <div className="gap-20">
                <div className=" flex justify-center navbar-start">
                  <a
                    href="/"
                    className="hidden lg:flex btn btn-primary text-3xl items-center"
                  >
                    C
                  </a>
                  <div className="dropdown">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost lg:hidden"
                    ></label>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
                    >
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/products">products</a>
                      </li>
                      <li>
                        <a href="/card"></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal flex justify-center	">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/products">products</a>
                    </li>
                    <li>
                      <a href="/card"></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="navbar-end">
                <label className="swap swap-rotate">
                  <input type="checkbox" />
                </label>
                <a
                  href="/cart"
                  className="btn btn-ghost btn-circle btn-md ml-4"
                >
                  <div className="indicator">
                    <span className="badge badge-sm badge-primary indicator-item">
                      card
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </nav>
          <div>
            <div className="flex justify-center m-auto px-20 py-20">
              <div className="flex justify-center gap-20">
                <div className="2/5">
                  <h1 className=" max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
                    We are changing <br /> the way people <br /> shop
                  </h1>
                  <p className="mt-8 max-w-xl text-lg leading-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                    <br />
                    Tempore repellat explicabo enim soluta temporibus asperiores
                    <br />
                    aut obcaecati perferendis porro nobis.
                  </p>
                  <button className="mt-10">
                    <a className="btn btn-primary" href="/products">
                      OUR PRODUCTS
                    </a>
                  </button>
                </div>
                <div className="hidden h-[28rem] w-2/5 lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
                  {products?.data?.data?.map((item) => {
                    <div className="carousel-item">
                      <img
                        src={item.attributes.image}
                        className="rounded-box h-full w-80 object-cover"
                      />
                    </div>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex justify-center">
        <div>
          <div className="border-b border-base-300 pb-5 pr-96">
            <h2 className="text-3xl font-medium tracking-wider capitalize pr-96">
              Featured Products
            </h2>
          </div>
          <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products?.data?.data?.map((product) => {
              <a
                className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
                href={`/products/${product.id}`}
              >
                <figure class="px-4 pt-4">
                  <img
                    src={product.attributes.image}
                    alt=""
                    className="rounded-xl h-64 md:h-48 w-full object-cover"
                  />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title capitalize tracking-wider">
                    {product.attributes.title}
                  </h2>
                  <span class="text-secondary">
                    ${product.attributes.price}
                  </span>
                </div>
              </a>;
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

/// products?featured=true

const data2 = {
  data: [
    {
      id: 19,
      attributes: {
        title: "avant-garde lamp",
        company: "Modenza",
        description:
          "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        featured: true,
        createdAt: "2023-08-10T10:07:41.876Z",
        updatedAt: "2023-08-10T10:16:43.298Z",
        publishedAt: "2023-08-10T10:07:44.157Z",
        category: "Kids",
        image:
          "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600",
        price: "17999",
        shipping: false,
        colors: ["#33FF57", "#3366FF"],
      },
    },
    {
      id: 6,
      attributes: {
        title: "coffee table",
        company: "Modenza",
        description:
          "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        featured: true,
        createdAt: "2023-08-02T14:32:02.775Z",
        updatedAt: "2023-08-04T07:35:16.880Z",
        publishedAt: "2023-08-02T14:32:05.491Z",
        category: "Tables",
        image:
          "https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: "17999",
        shipping: false,
        colors: ["#FF5733", "#FFFF00"],
      },
    },
    {
      id: 7,
      attributes: {
        title: "comfy bed",
        company: "Homestead",
        description:
          "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        featured: true,
        createdAt: "2023-08-02T14:34:10.146Z",
        updatedAt: "2023-08-08T14:06:28.575Z",
        publishedAt: "2023-08-02T14:34:13.604Z",
        category: "Beds",
        image:
          "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600",
        price: "12999",
        shipping: false,
        colors: ["#FF5733"],
      },
    },
  ],
  meta: {
    pagination: { page: 1, pageSize: 10, pageCount: 1, total: 3 },
    categories: ["all", "Tables", "Chairs", "Kids", "Sofas", "Beds"],
    companies: ["all", "Modenza", "Luxora", "Artifex", "Comfora", "Homestead"],
  },
};
