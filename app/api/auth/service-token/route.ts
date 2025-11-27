import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = `${process.env.KEYCLOAK_SERVER_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`;

    const body = new URLSearchParams();
    body.append("grant_type", "client_credentials");
    body.append("client_id", process.env.KEYCLOAK_CLIENT_ID!);
    body.append("client_secret", process.env.KEYCLOAK_CLIENT_SECRET!);

    const tokenResp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (!tokenResp.ok) {
      const err = await tokenResp.text();
      return NextResponse.json({ error: err }, { status: tokenResp.status });
    }

    const { access_token } = await tokenResp.json();

    return NextResponse.json(access_token, { status: tokenResp.status });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}