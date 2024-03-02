import prisma from "@/prisma"
import { NextResponse } from "next/server";

const main = async () => {
    try {
        await prisma.$connect();
    } catch(err) {
        return Error("Database connection unsuccessfull");
    }
}

export const GET = async (req: Request, res: NextResponse) => {
    try {
        await main();
        const messages = await prisma.message.findMany();
        return NextResponse.json({ result: "Success", messages }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ result: "Error", err }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export const POST = async (req: Request, res: NextResponse) => {
    try {
        // Get data
        const { name, email, message } = await req.json();
        // Connect
        await main();
        // Add message 
        const messages = await prisma.message.create({ 
            data: { 
                name, 
                email, 
                message 
            }  
        });
        // 
        return NextResponse.json({ result: "Success", messages }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ result: "Error", err }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}