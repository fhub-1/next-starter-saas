import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { IconHeart } from "@tabler/icons-react";

// import { FaRegHeart } from "react-icons/fa";

// This would typically come from an API or database
const itemsForSale = [
  {
    id: 1,
    title: "Vintage Leather Jacket",
    price: 89.99,
    description:
      "Genuine leather jacket in excellent condition. Perfect for a classic look.",
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
    condition: "Used - Like New",
    seller: {
      name: "Alice Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
    },
    featured: true,
    likes: 24,
  },
  {
    id: 2,
    title: "MacBook Pro 2019",
    price: 999.99,
    description:
      "13-inch, 8GB RAM, 256GB SSD, like new. Includes charger and original box.",
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    condition: "Used - Excellent",
    seller: {
      name: "Bob Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
    },
    featured: false,
    likes: 18,
  },
  {
    id: 3,
    title: "Acoustic Guitar",
    price: 150.0,
    description:
      "Yamaha FG800, great for beginners. Comes with a case and extra strings.",
    image: "/placeholder.svg?height=300&width=300",
    category: "Musical Instruments",
    condition: "Used - Good",
    seller: {
      name: "Charlie Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.7,
    },
    featured: false,
    likes: 12,
  },
  {
    id: 4,
    title: "Mountain Bike",
    price: 350.0,
    description:
      "Trek Marlin 5, perfect for trails and city. Recently serviced, ready to ride.",
    image: "/placeholder.svg?height=300&width=300",
    category: "Sports & Outdoors",
    condition: "Used - Very Good",
    seller: {
      name: "Diana Prince",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.6,
    },
    featured: true,
    likes: 31,
  },
  {
    id: 1,
    title: "Vintage Leather Jacket",
    price: 89.99,
    description:
      "Genuine leather jacket in excellent condition. Perfect for a classic look.",
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
    condition: "Used - Like New",
    seller: {
      name: "Alice Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
    },
    featured: true,
    likes: 24,
  },
  {
    id: 2,
    title: "MacBook Pro 2019",
    price: 999.99,
    description:
      "13-inch, 8GB RAM, 256GB SSD, like new. Includes charger and original box.",
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    condition: "Used - Excellent",
    seller: {
      name: "Bob Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
    },
    featured: false,
    likes: 18,
  },
  {
    id: 3,
    title: "Acoustic Guitar",
    price: 150.0,
    description:
      "Yamaha FG800, great for beginners. Comes with a case and extra strings.",
    image: "/placeholder.svg?height=300&width=300",
    category: "Musical Instruments",
    condition: "Used - Good",
    seller: {
      name: "Charlie Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.7,
    },
    featured: false,
    likes: 12,
  },
  {
    id: 4,
    title: "Mountain Bike",
    price: 350.0,
    description:
      "Trek Marlin 5, perfect for trails and city. Recently serviced, ready to ride.",
    image: "/placeholder.svg?height=300&width=300",
    category: "Sports & Outdoors",
    condition: "Used - Very Good",
    seller: {
      name: "Diana Prince",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.6,
    },
    featured: true,
    likes: 31,
  },
  {
    id: 1,
    title: "Vintage Leather Jacket",
    price: 89.99,
    description:
      "Genuine leather jacket in excellent condition. Perfect for a classic look.",
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
    condition: "Used - Like New",
    seller: {
      name: "Alice Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
    },
    featured: true,
    likes: 24,
  },
  {
    id: 2,
    title: "MacBook Pro 2019",
    price: 999.99,
    description:
      "13-inch, 8GB RAM, 256GB SSD, like new. Includes charger and original box.",
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    condition: "Used - Excellent",
    seller: {
      name: "Bob Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
    },
    featured: false,
    likes: 18,
  },
  {
    id: 3,
    title: "Acoustic Guitar",
    price: 150.0,
    description:
      "Yamaha FG800, great for beginners. Comes with a case and extra strings.",
    image: "/placeholder.svg?height=300&width=300",
    category: "Musical Instruments",
    condition: "Used - Good",
    seller: {
      name: "Charlie Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.7,
    },
    featured: false,
    likes: 12,
  },
  {
    id: 4,
    title: "Mountain Bike",
    price: 350.0,
    description:
      "Trek Marlin 5, perfect for trails and city. Recently serviced, ready to ride.",
    image: "/placeholder.svg?height=300&width=300",
    category: "Sports & Outdoors",
    condition: "Used - Very Good",
    seller: {
      name: "Diana Prince",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.6,
    },
    featured: true,
    likes: 31,
  },
];

export default function ModernHomePageItemsGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Discover Amazing Deals
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {itemsForSale.map((item) => (
          <Card key={item.id} className="mx-auto max-w-sm">
            <CardBody className="overflow-hidden p-0">
              <Image
                src={item.image}
                alt={item.title}
                className="h-64 w-full transform object-cover transition-transform hover:scale-105"
              />
              {item.featured && (
                <Chip
                  color="warning"
                  variant="flat"
                  className="absolute left-2 top-2"
                >
                  Featured
                </Chip>
              )}
            </CardBody>
            <CardFooter className="flex-col items-start p-4">
              <div className="mb-2 flex w-full items-center justify-between">
                <Chip size="sm" variant="flat">
                  {item.category}
                </Chip>
                <Chip size="sm" variant="flat" color="secondary">
                  {item.condition}
                </Chip>
              </div>
              <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
              <p className="text-default-500 mb-3 text-sm">
                {item.description}
              </p>
              <div className="mb-3 flex w-full items-center justify-between">
                <span className="text-primary text-xl font-bold">
                  ${item.price.toFixed(2)}
                </span>
                <div className="flex items-center">
                  <IconHeart className="text-danger mr-1" />
                  <span className="text-default-500 text-sm">{item.likes}</span>
                </div>
              </div>
              <div className="mb-4 flex w-full items-center justify-between">
                <div className="flex items-center">
                  <Avatar src={item.seller.avatar} size="sm" className="mr-2" />
                  <div>
                    <p className="text-sm font-semibold">{item.seller.name}</p>
                    <p className="text-default-500 text-xs">
                      Rating: {item.seller.rating}/5
                    </p>
                  </div>
                </div>
                <Button
                  as={Link}
                  href={`/item/${item.id}`}
                  color="primary"
                  variant="flat"
                  size="sm"
                >
                  View Details
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
