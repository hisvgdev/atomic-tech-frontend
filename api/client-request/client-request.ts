'use server'

export async function clientRequest(data: FormData): Promise<void> {
  try {
    const request = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message")
    }

    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/services`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request),
    })
  } catch (error) {
    console.error("Failed to send request:", error)
  }
}
