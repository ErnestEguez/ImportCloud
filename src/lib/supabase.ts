import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://neqhhmpvfiggevldfukf.supabase.co';
const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcWhobXB2ZmlnZ2V2bGRmdWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNDYxNDksImV4cCI6MjA4ODkyMjE0OX0.lwVxTdnje0w_k5v6QxXWhR_h5kIiD7ICETBTaKVQY0g';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
