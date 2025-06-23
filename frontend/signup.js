import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ckmfybtgvhlgqgngstzs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrbWZ5YnRndmhsZ3FnbmdzdHpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1OTExMjYsImV4cCI6MjA1NDE2NzEyNn0.9d1ESKxj6Q3Hu5dx6bRl05i-M0QtsHSM7L4NZH5UoG8'
const supabase = createClient(supabaseUrl, supabaseKey)
 
async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: '${window.location.origin}/index.html',
    },
  })

  if (error) {
        console.error(error.message);
    } else {
        console.log('Sign-up successful, check your email!');
    }
}