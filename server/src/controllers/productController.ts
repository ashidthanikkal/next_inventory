import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const searchQuery = req.query.search?.toString();
    const products = await prisma.products.findMany();

    if (searchQuery) {
      const products = await prisma.products.findMany({
        where: {
          name: {
            contains: searchQuery,
            mode: "insensitive", //remove this if not needed
          },
        },
      });
      res.json(products);
      return;
    }
    
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, stockQuantity,rating,productId } = req.body;
    const newProduct = await prisma.products.create({
      data: {
        name,
        price,
        stockQuantity,
        productId,
        rating,
      },
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}   
