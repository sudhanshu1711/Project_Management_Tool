import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient(); //will check whther prisma is already there in globalThis or not

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
s