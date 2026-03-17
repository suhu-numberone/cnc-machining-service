import { supabase, isSupabaseConfigured } from "./supabase";

const USERS_TABLE = "users";

export async function isUserAdmin(email: string): Promise<boolean> {
  if (!isSupabaseConfigured || !supabase || !email) {
    return false;
  }

  try {
    const { data, error } = await supabase
      .from(USERS_TABLE)
      .select("role, status")
      .eq("email", email.toLowerCase())
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return false;
      }
      console.error("Error checking admin status:", error);
      return false;
    }

    const isAdminRole = data.role === "admin" || data.role === "super_admin";
    const isActive = data.status === "active";
    return isAdminRole && isActive;
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
}
