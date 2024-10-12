"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Tab, Tabs } from "@nextui-org/tabs";
import { IconHeart, IconShare } from "@tabler/icons-react";

// import { FaHeart, FaRegHeart, FaShare } from "react-icons/fa";

// Mock data for the item
const itemDetails = {
  id: 1,
  title: "Vintage Leather Jacket",
  price: 89.99,
  description:
    "This genuine leather jacket is in excellent condition, perfect for adding a classic touch to any outfit. Features a timeless design with a comfortable fit, suitable for various occasions.",
  images: [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ],
  category: "Clothing",
  condition: "Used - Like New",
  brand: "Classic Leathers",
  size: "Medium",
  color: "Brown",
  material: "Genuine Leather",
  seller: {
    name: "Alice Smith",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4.8,
    totalSales: 57,
    memberSince: "2021",
  },
  featured: true,
  likes: 24,
  views: 342,
  listedDate: "2023-11-15",
};

// Mock data for related items
const relatedItems = [
  {
    id: 2,
    title: "Denim Jacket",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    title: "Leather Boots",
    price: 79.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    title: "Vintage T-Shirt",
    price: 24.99,
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function ItemDetailsPage() {
  const router = useRouter();
  const [isLiked, setIsLiked] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    // Here you would typically update the like status on the server
  };

  const handleContact = () => {
    // Implement contact seller functionality
    console.log("Contacting seller...");
  };

  const handleShare = () => {
    // Implement share functionality
    console.log("Sharing item...");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        color="primary"
        variant="light"
        onPress={() => router.back()}
        className="mb-4"
      >
        ← Back to listings
      </Button>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Image Gallery */}
        <div>
          <Image
            src={itemDetails.images[currentImageIndex]}
            alt={itemDetails.title}
            className="mb-4 h-96 w-full rounded-lg object-cover shadow-lg"
          />
          <div className="flex justify-center gap-2">
            {itemDetails.images.map((img, index) => (
              <Button
                key={index}
                isIconOnly
                variant={currentImageIndex === index ? "solid" : "bordered"}
                onPress={() => setCurrentImageIndex(index)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-12 w-12 rounded object-cover"
                />
              </Button>
            ))}
          </div>
        </div>

        {/* Item Details */}
        <div>
          <h1 className="mb-2 text-3xl font-bold">{itemDetails.title}</h1>
          <div className="mb-4 flex items-center gap-2">
            <Chip color="primary" variant="flat">
              {itemDetails.category}
            </Chip>
            <Chip color="secondary" variant="flat">
              {itemDetails.condition}
            </Chip>
            {itemDetails.featured && (
              <Chip color="warning" variant="flat">
                Featured
              </Chip>
            )}
          </div>
          <p className="text-primary mb-4 text-2xl font-semibold">
            ${itemDetails.price.toFixed(2)}
          </p>
          <p className="mb-6 text-gray-600">{itemDetails.description}</p>

          <Tabs aria-label="Item details" className="mb-6">
            <Tab key="specs" title="Specifications">
              <Card>
                <CardBody>
                  <dl className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="font-semibold">Brand</dt>
                      <dd>{itemDetails.brand}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Size</dt>
                      <dd>{itemDetails.size}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Color</dt>
                      <dd>{itemDetails.color}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Material</dt>
                      <dd>{itemDetails.material}</dd>
                    </div>
                  </dl>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="seller" title="Seller Info">
              <Card>
                <CardBody>
                  <div className="mb-4 flex items-center gap-4">
                    <Avatar src={itemDetails.seller.avatar} size="lg" />
                    <div>
                      <h3 className="text-lg font-semibold">
                        {itemDetails.seller.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Member since {itemDetails.seller.memberSince}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">Rating</p>
                      <p>{itemDetails.seller.rating}/5</p>
                    </div>
                    <div>
                      <p className="font-semibold">Total Sales</p>
                      <p>{itemDetails.seller.totalSales}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>

          <div className="mb-6 flex gap-4">
            <Button color="primary" size="lg" onPress={handleContact}>
              Contact Seller
            </Button>
            <Button
              isIconOnly
              color="danger"
              variant="flat"
              aria-label="Like"
              onPress={handleLike}
            >
              {isLiked ? <IconHeart /> : <IconHeart />}
            </Button>
            <Button
              isIconOnly
              color="default"
              variant="flat"
              aria-label="Share"
              onPress={handleShare}
            >
              <IconShare />
            </Button>
          </div>

          <div className="text-sm text-gray-500">
            <p>Listed on: {itemDetails.listedDate}</p>
            <p>
              {itemDetails.views} views • {itemDetails.likes} likes
            </p>
          </div>
        </div>
      </div>

      <Divider className="my-8" />

      {/* Related Items */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Related Items</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {relatedItems.map((item) => (
            <Card
              key={item.id}
              isPressable
              //   fixing route issue
              onPress={() => router.push(`/sale/${item.id}`)}
            >
              <CardBody className="p-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
              </CardBody>
              <CardFooter className="flex-col items-start">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-primary">${item.price.toFixed(2)}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
