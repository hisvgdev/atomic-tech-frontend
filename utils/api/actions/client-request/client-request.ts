'use server'

export async function clientRequest(data: FormData): Promise<any> {
  try {
    const request = {
      email: data.get("email"),
      tel: data.get("phone"),
      nickname: data.get("nickname")
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/services`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request),
    })
    const getResult = await res.json();
    return getResult;
  } catch (error) {
    console.error("Failed to send request:", error)
  }
}
