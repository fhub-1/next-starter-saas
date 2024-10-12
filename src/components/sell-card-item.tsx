"use client";

import React, { useState } from "react";

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";

export default function ImprovedSellItemCard() {
  const [itemImage, setItemImage] = useState(
    "/placeholder.svg?height=300&width=300"
  );

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setItemImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted");
  };

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader className="flex flex-col items-start px-6 pb-0 pt-6">
        <h4 className="text-primary text-2xl font-bold">Sell Your Item</h4>
        <p className="text-default-500 text-sm">List your old stuff for sale</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div className="md:col-span-2">
            <Divider className="my-4" />
          </div>
          <div className="flex flex-col items-center justify-center md:col-span-1">
            <Image
              alt="Item preview"
              className="rounded-xl object-cover"
              src={itemImage}
              width={300}
              height={300}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="text-default-500 mt-4 text-sm"
            />
          </div>
          <div className="flex flex-col gap-4 md:col-span-1">
            <Input
              label="Item Name"
              placeholder="Enter item name"
              variant="bordered"
            />
            <Select
              label="Category"
              placeholder="Select a category"
              variant="bordered"
            >
              <SelectItem key="electronics" value="electronics">
                Electronics
              </SelectItem>
              <SelectItem key="clothing" value="clothing">
                Clothing
              </SelectItem>
              <SelectItem key="books" value="books">
                Books
              </SelectItem>
              <SelectItem key="other" value="other">
                Other
              </SelectItem>
            </Select>
            <Input
              label="Price"
              placeholder="Enter price"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
              type="number"
              variant="bordered"
            />
            <Textarea
              label="Description"
              placeholder="Describe your item"
              variant="bordered"
            />
          </div>
          <div className="md:col-span-2">
            <Divider className="my-4" />
          </div>
        </form>
      </CardBody>
      <CardFooter className="flex justify-end px-6 pb-6 pt-0">
        <Button color="primary" size="lg" type="submit">
          List for Sale
        </Button>
      </CardFooter>
    </Card>
  );
}
