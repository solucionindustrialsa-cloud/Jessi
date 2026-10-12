import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const updated = await db.update(products).set({
      name: body.name,
      description: body.description ?? "",
      price: Number(body.price) || 0,
      category: body.category ?? "bolsos",
      image: body.image ?? "",
      stock: Number(body.stock) ?? 0,
      featured: Boolean(body.featured),
      isActive: body.isActive !== false,
    }).where(eq(products.id, Number(id))).returning();
    if (!updated[0]) return NextResponse.json({ error: "No encontrado" }, { status: 404 });
    return NextResponse.json(updated[0]);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error al actualizar" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await db.delete(products).where(eq(products.id, Number(id)));
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error al eliminar" }, { status: 500 });
  }
}
