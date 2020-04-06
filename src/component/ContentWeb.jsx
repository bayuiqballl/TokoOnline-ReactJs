import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Slider.jsx";

export const ContentWeb = (props) => {
  return (
    <div className="container">
      <div className="row  mt-5">
        <div className="col">
          <div className="">
            <Slider
              url1="https://cf.shopee.co.id/file/ede49f39dd2b728610ffdd49986f5100"
              url2="https://cf.shopee.co.id/file/8748fe395b33dc55e1739729d67b5131"
              url3="https://cf.shopee.co.id/file/f45c529bd0824aebb7990a2b26d75fa0"
              alt1="First Slide"
              alt2="Second Slide"
              alt3="Third Slide"
              tinggi="334px"
            />
          </div>
          <div className="mt-5">
            <h2>
              <u>{props.title}</u>
            </h2>
          </div>
          <Content />
        </div>
      </div>
    </div>
  );
};

export const Content = () => {
  const barang = [
    {
      id: 1,
      nama: "Sepatu Nike",
      price: "Rp 1.920.000",
      photo:
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      nama: "Sepatu Vans",
      price: "Rp.980.000",
      photo:
        "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      nama: "Sepatu Adiddas",
      price: "Rp.2.200.000",
      photo:
        "https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 4,
      nama: "Stater Pack Fullset Edition One",
      price: "Rp.4.180.000",
      photo:
        "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 5,
      nama: "Stater Pack Fullset Edition Two",
      price: "Rp.5.120.000",
      photo:
        "https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 6,
      nama: "Stater Pack Fullset Edition Third",
      price: "Rp.10.980.000",
      photo:
        "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

  const listBarang = barang.map((itemBarang) => (
    <div class="col-md-4 my-5">
      <div class="card">
        <img src={itemBarang.photo} class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">{itemBarang.nama}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{itemBarang.price}</h6>
          <br></br>
          <a href="#" class="btn btn-primary">
            Cek Detail
          </a>
        </div>
      </div>
    </div>
  ));

  return <div class="row">{listBarang}</div>;
};

export default ContentWeb;
