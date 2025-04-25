"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

// Define interfaces for laptop and filter options
interface Laptop {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  category: string;
  processor: string;
  ram: string;
  ssd: string;
  screenSize: string;
}

interface FilterOptions {
  categories: string[];
  processors: string[];
  ram: string[];
  ssd: string[];
  screenSize: string[];
}

interface Filters {
  category: string;
  processor: string;
  ram: string;
  ssd: string;
}

// Define laptop data
const laptops: Laptop[] = [
  {
    id: 1,
    name: "Dell XPS 13",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1611078489935-0cb2e84a8a88",
    description: '13.4" OLED, Intel i7, 16GB RAM, 512GB SSD',
    rating: 4.5,
    category: "Dell",
    processor: "12th Gen",
    ram: "16GB",
    ssd: "512GB",
    screenSize: "13.3",
  },
  {
    id: 2,
    name: "MacBook Pro 14",
    price: 1999.99,
    image: "https://images.unsplash.com/photo-1636113508990-1fdeb66d0a14",
    description: 'M1 Pro, 16GB RAM, 1TB SSD, 14" Mini-LED',
    rating: 4.8,
    category: "MacBook",
    processor: "M1 Pro",
    ram: "16GB",
    ssd: "1TB",
    screenSize: "14",
  },
  {
    id: 3,
    name: "Lenovo ThinkPad X1",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
    description: '14" 4K, Intel i7, 32GB RAM, 1TB SSD',
    rating: 4.3,
    category: "Lenovo",
    processor: "11th Gen",
    ram: "32GB",
    ssd: "1TB",
    screenSize: "14",
  },
  {
    id: 4,
    name: "HP Spectre x360",
    price: 1599.99,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: '13.5" OLED, Intel i7, 16GB RAM, 1TB SSD',
    rating: 4.6,
    category: "HP",
    processor: "12th Gen",
    ram: "16GB",
    ssd: "1TB",
    screenSize: "13.3",
  },
  {
    id: 5,
    name: "Asus ROG Zephyrus",
    price: 1799.99,
    image: "https://images.unsplash.com/photo-1629654297299-c0a7e3b51c73",
    description: '14" QHD, Ryzen 9, 16GB RAM, 1TB SSD',
    rating: 4.7,
    category: "HP",
    processor: "Ryzen 9",
    ram: "16GB",
    ssd: "1TB",
    screenSize: "14",
  },
  {
    id: 6,
    name: "Microsoft Surface Laptop 5",
    price: 1399.99,
    image: "https://images.unsplash.com/photo-1629131726692-1ae7b8d68f9d",
    description: '15" PixelSense, Intel i7, 16GB RAM, 512GB SSD',
    rating: 4.4,
    category: "Surface Book",
    processor: "12th Gen",
    ram: "16GB",
    ssd: "512GB",
    screenSize: "15.6",
  },
];

// Define filter options
const filterOptions: FilterOptions = {
  categories: ["HP", "Dell", "Lenovo", "MacBook", "Surface Book"],
  processors: [
    "5th Gen",
    "6th Gen",
    "7th Gen",
    "8th Gen",
    "9th Gen",
    "10th Gen",
    "11th Gen",
    "12th Gen",
    "13th Gen",
    "M1 Pro",
    "Ryzen 9",
  ],
  ram: ["8GB", "16GB", "32GB", "64GB"],
  ssd: ["256GB", "512GB", "1TB", "2TB"],
  screenSize: ["11.6", "13.3", "14", "15.6", "16", "17.3"],
};

// Define form schema with zod
const formSchema = z.object({
  ssd: z.string().min(1, { message: "Please select an SSD option." }),
  ram: z.string().min(1, { message: "Please select a RAM option." }),
});

export default function ProductListing() {
  const [filters, setFilters] = useState<Filters>({
    category: "all",
    processor: "all",
    ram: "all",
    ssd: "all",
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedLaptopId, setSelectedLaptopId] = useState<number | null>(null);
  const itemsPerPage = 4;

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ssd: "",
      ram: "",
    },
  });

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const filteredLaptops = laptops.filter((laptop) => {
    return (
      (filters.category === "all" || laptop.category === filters.category) &&
      (filters.processor === "all" || laptop.processor === filters.processor) &&
      (filters.ram === "all" || laptop.ram === filters.ram) &&
      (filters.ssd === "all" || laptop.ssd === filters.ssd)
    );
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredLaptops.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedLaptops = filteredLaptops.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleOrderNow = (laptopId: number) => {
    setSelectedLaptopId(laptopId);
    form.reset(); // Reset form when opening
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const laptop = laptops.find((l) => l.id === selectedLaptopId);
    if (!laptop) return;

    // Construct WhatsApp message
    const message = encodeURIComponent(
      `Hello! I'm interested in ordering the following laptop:\n\n` +
        `📱 *Model*: ${laptop.name}\n` +
        `🏷️ *Price*: $${laptop.price.toFixed(2)}\n` +
        `🏢 *Company*: ${laptop.category}\n` +
        `⚙️ *Processor*: ${laptop.processor}\n` +
        `💾 *RAM*: ${values.ram}\n` +
        `🗄️ *SSD*: ${values.ssd}\n` +
        `📏 *Screen Size*: ${laptop.screenSize}\n\n` +
        `Please provide details on availability and shipping. Thank you!`
    );

    // Redirect to WhatsApp
    const whatsappNumber = "+923079302311";
    window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Reset form and close
    setSelectedLaptopId(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        {/* Filter Sidebar */}
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem
            value="item-1"
            className="bg-white rounded-xl shadow-lg px-5"
          >
            <AccordionTrigger>Filters</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-row flex-wrap gap-4">
                {/* Category Filter */}
                <div className="flex-1 min-w-[150px]">
                  <Select
                    onValueChange={(value) =>
                      handleFilterChange("category", value)
                    }
                    value={filters.category}
                  >
                    <SelectTrigger className="border-deep-green focus:ring-deep-green w-full">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      {filterOptions.categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Processor Filter */}
                <div className="flex-1 min-w-[150px]">
                  <Select
                    onValueChange={(value) =>
                      handleFilterChange("processor", value)
                    }
                    value={filters.processor}
                  >
                    <SelectTrigger className="border-deep-green focus:ring-deep-green w-full">
                      <SelectValue placeholder="Select Processor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      {filterOptions.processors.map((processor) => (
                        <SelectItem key={processor} value={processor}>
                          {processor}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* RAM Filter */}
                <div className="flex-1 min-w-[150px]">
                  <Select
                    onValueChange={(value) => handleFilterChange("ram", value)}
                    value={filters.ram}
                  >
                    <SelectTrigger className="border-deep-green focus:ring-deep-green w-full">
                      <SelectValue placeholder="Select RAM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      {filterOptions.ram.map((ram) => (
                        <SelectItem key={ram} value={ram}>
                          {ram}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* SSD Filter */}
                <div className="flex-1 min-w-[150px]">
                  <Select
                    onValueChange={(value) => handleFilterChange("ssd", value)}
                    value={filters.ssd}
                  >
                    <SelectTrigger className="border-deep-green focus:ring-deep-green w-full">
                      <SelectValue placeholder="Select SSD" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      {filterOptions.ssd.map((ssd) => (
                        <SelectItem key={ssd} value={ssd}>
                          {ssd}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Product Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedLaptops.length > 0 ? (
              paginatedLaptops.map((laptop) => (
                <div
                  key={laptop.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden self-start transform transition duration-300 hover:shadow-xl"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1693206816374-c04522205b21?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      alt={laptop.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-opacity duration-300 hover:opacity-90"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {laptop.name}
                    </h3>
                    <p className="text-gray-600 h-[40px] text-sm mb-3">
                      {laptop.description}
                    </p>
                    <div className="text-sm text-gray-500 mb-3">
                      <p>
                        Company:{" "}
                        <span className="font-semibold">{laptop.category}</span>
                      </p>
                      <p>
                        Processor:{" "}
                        <span className="font-semibold">
                          {laptop.processor}
                        </span>{" "}
                      </p>
                      <p>
                        RAM: <span className="font-semibold">{laptop.ram}</span>{" "}
                      </p>
                      <p>
                        SSD: <span className="font-semibold">{laptop.ssd}</span>{" "}
                      </p>
                      <p>
                        Screen:{" "}
                        <span className="font-semibold">
                          {laptop.screenSize}
                        </span>{" "}
                      </p>
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="text-yellow-400">
                        {"★".repeat(Math.floor(laptop.rating))}
                      </span>
                      <span className="text-gray-400">
                        {"★".repeat(5 - Math.floor(laptop.rating))}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        ({laptop.rating})
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-dark-blue mb-4">
                      ${laptop.price.toFixed(2)}
                    </p>
                    <Button
                      onClick={() => handleOrderNow(laptop.id)}
                      className="w-full bg-deep-green text-white py-2 text-sm rounded-lg hover:bg-transparent border border-transparent hover:border-deep-green hover:text-deep-green transition cursor-pointer duration-200"
                    >
                      Order Now
                    </Button>
                    <AnimatePresence>
                      {selectedLaptopId === laptop.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="mt-4 overflow-hidden"
                        >
                          <Form {...form}>
                            <form
                              onSubmit={form.handleSubmit(onSubmit)}
                              className="space-y-4 relative"
                            >
                              <FormField
                                control={form.control}
                                name="ssd"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Select SSD</FormLabel>
                                    <Select
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger className="border-deep-green focus:ring-deep-green w-full">
                                          <SelectValue placeholder="Choose SSD" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {filterOptions.ssd.map((ssd) => (
                                          <SelectItem key={ssd} value={ssd}>
                                            {ssd}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="ram"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Select RAM</FormLabel>
                                    <Select
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger className="border-deep-green focus:ring-deep-green w-full">
                                          <SelectValue placeholder="Choose RAM" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {filterOptions.ram.map((ram) => (
                                          <SelectItem key={ram} value={ram}>
                                            {ram}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <Button
                                type="submit"
                                className="w-full bg-deep-green text-white py-2 text-sm rounded-lg hover:bg-transparent border border-transparent hover:border-deep-green hover:text-deep-green transition cursor-pointer duration-200"
                              >
                                Confirm
                              </Button>
                              <RxCross1
                                className="absolute top-0 right-2 text-gray-500 cursor-pointer hover:text-gray-700"
                                onClick={() => setSelectedLaptopId(null)}
                              />
                            </form>
                          </Form>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 col-span-full text-center">
                No laptops match your filters.
              </p>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`text-sm p-2 rounded-lg ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-deep-green text-white hover:bg-deep-green/80"
                } transition duration-200`}
              >
                <MdKeyboardArrowLeft className="text-lg" />
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 text-sm py-2 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-deep-green text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } transition duration-200`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 text-sm rounded-lg ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-deep-green text-white hover:bg-deep-green/80"
                } transition duration-200`}
              >
                <MdKeyboardArrowRight className="text-lg" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
