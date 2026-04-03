const SUPABASE_URL = "https://gdjpwwmdfssvokuuibwz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkanB3d21kZnNzdm9rdXVpYnd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNjExMjUsImV4cCI6MjA5MDYzNzEyNX0.JAHc5TVF4lR34nQ2UluQvYFZP8gxOvVDnM8_7mhTxl4";

export const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
