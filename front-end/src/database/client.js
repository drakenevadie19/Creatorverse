import { createClient } from '@supabase/supabase-js';

// Supabase Project URL
const URL = "https://gxueozpglphhqjetzamn.supabase.co";
// Database API Key
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4dWVvenBnbHBoaHFqZXR6YW1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE0NTA5NDksImV4cCI6MjAzNzAyNjk0OX0.E_RJg5R54NV-DCqjcL5FOQElgPdqbuVjg85Yz9IAI2M";

// function to create access to database
export const supabase = createClient(URL, API_KEY);