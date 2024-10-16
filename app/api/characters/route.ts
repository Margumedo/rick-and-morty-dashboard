import { prisma } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';



export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const data = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const character = await prisma.character.create({
            data: {
                // userId,
                ...data,
            }
        })

        return NextResponse.json(character)
    } catch (error) {
        console.log("[CHARACTERS]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}