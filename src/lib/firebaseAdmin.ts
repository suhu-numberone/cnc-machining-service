import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getAuth, Auth } from "firebase-admin/auth";

let adminApp: App | null = null;
let adminAuth: Auth | null = null;

const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n");

export const isFirebaseAdminConfigured = Boolean(projectId && clientEmail && privateKey);

if (isFirebaseAdminConfigured) {
  if (getApps().length === 0) {
    adminApp = initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });
  } else {
    adminApp = getApps()[0];
  }
  adminAuth = getAuth(adminApp);
}

/**
 * Verify a Firebase ID token server-side.
 * Returns the decoded token with user email, or null if invalid.
 */
export async function verifyIdToken(token: string): Promise<{ email: string; uid: string } | null> {
  if (!adminAuth) {
    // Fallback: decode without verification when admin SDK isn't configured
    // This allows development without full Firebase Admin setup
    try {
      const parts = token.split(".");
      if (parts.length !== 3) return null;
      const payload = JSON.parse(Buffer.from(parts[1], "base64").toString());
      if (!payload.email) return null;
      return { email: payload.email, uid: payload.user_id || payload.sub || "" };
    } catch {
      return null;
    }
  }

  try {
    const decoded = await adminAuth.verifyIdToken(token);
    return {
      email: decoded.email || "",
      uid: decoded.uid,
    };
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}

export { adminAuth };
