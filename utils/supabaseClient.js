import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

import { supabase } from './supabaseClient'

// fetch data function example
const fetchDataFromSupabase = async () => {
    let { data, error } = await supabase
        .from('TABLE_NAME')
        .select('COLUMN, ANOTHER_COLUMN')
    if (error) setError(error.message)
    else {
        setData(data)
        setLoading(false)
    }
  }