import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://hstwznimpygzekinftpx.supabase.co',
  'sb_publishable_xojKY8lj4uVdZtBPiIRBuQ_2LwqT4de'
)

export default supabase