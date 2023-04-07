import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import React from "react";
import { nanoid } from "nanoid";

const sublinks = [
  {
    pageId: nanoid(),
    page: "products",
    links: [
      {
        id: nanoid(),
        label: "payment",
        icon: <FaCreditCard />,
        url: "/products",
      },
      {
        id: nanoid(),
        label: "terminal",
        icon: <FaCreditCard />,
        url: "/products",
      },
      {
        id: nanoid(),
        label: "connect",
        icon: <FaCreditCard />,
        url: "/products",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "developers",
    links: [
      { id: nanoid(), label: "plugins", icon: <FaBook />, url: "/products" },
      { id: nanoid(), label: "libraries", icon: <FaBook />, url: "/products" },
      { id: nanoid(), label: "help", icon: <FaBook />, url: "/products" },
      { id: nanoid(), label: "billing", icon: <FaBook />, url: "/products" },
    ],
  },
  {
    pageId: nanoid(),
    page: "company",
    links: [
      { id: nanoid(), label: "about", icon: <FaBriefcase />, url: "/products" },
      {
        id: nanoid(),
        label: "customers",
        icon: <FaBriefcase />,
        url: "/products",
      },
    ],
  },
];

export default sublinks;
