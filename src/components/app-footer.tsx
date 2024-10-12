import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function AppFooter() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm">
              We're dedicated to providing the best service for selling your
              items online. Our platform makes it easy to list and sell your old
              stuff.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  color="foreground"
                  className="text-sm hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  color="foreground"
                  className="text-sm hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  color="foreground"
                  className="text-sm hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  color="foreground"
                  className="text-sm hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm">123 Main St, Anytown, USA 12345</p>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm">
              Stay updated with our latest news and offers.
            </p>
            <form className="flex flex-col gap-2">
              <Input type="email" placeholder="Enter your email" size="sm" />
              <Button color="primary" size="sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <Divider className="my-8" />
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm">
            &copy; 2024 Your Company Name. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link
              href="#"
              color="foreground"
              className="text-gray-400 hover:text-gray-600"
            >
              <IconBrandFacebook size={20} />
            </Link>
            <Link
              href="#"
              color="foreground"
              className="text-gray-400 hover:text-gray-600"
            >
              <IconBrandTwitter size={20} />
            </Link>
            <Link
              href="#"
              color="foreground"
              className="text-gray-400 hover:text-gray-600"
            >
              <IconBrandInstagram size={20} />
            </Link>
            <Link
              href="#"
              color="foreground"
              className="text-gray-400 hover:text-gray-600"
            >
              <IconBrandLinkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
