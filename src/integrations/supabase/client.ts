
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://zlmtknhvwsdxtltokdwm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsbXRrbmh2d3NkeHRsdG9rZHdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NjA0MzUsImV4cCI6MjA1NjAzNjQzNX0.6E4HToiVO9KsZYVffUBp_cPLUCKrITRulkIaREelyNE";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
