// app/actions/book.ts
"use server";

export async function bookTable(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  console.log("📩 New booking:", data);

  // Example: you could send to an API, email, or database here
  // await sendEmail(data);
  // await db.insert('bookings', data);

return { success: true}
}