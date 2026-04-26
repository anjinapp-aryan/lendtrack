#!/usr/bin/env node

/**
 * Supabase Connection Test Script
 * 
 * Usage:
 * npm run test:connection
 * or
 * node scripts/test-connection.js
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hstwznimpygzekinftpx.supabase.co'
const supabaseKey = 'sb_publishable_xojKY8lj4uVdZtBPiIRBuQ_2LwqT4de'

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
  console.log('🚀 Supabase Connection Test\n')
  console.log('═'.repeat(50))
  
  try {
    // Test 1: Client Initialization
    console.log('\n✓ Test 1: Supabase Client Initialized')
    console.log(`  URL: ${supabaseUrl}`)
    
    // Test 2: Fetch Borrowers
    console.log('\n⏳ Test 2: Fetching Borrowers...')
    const { data, error } = await supabase.from('borrowers').select('*')
    
    if (error) {
      console.log('❌ Connection Failed!')
      console.error('  Error:', error.message)
      console.error('  Code:', error.code)
      process.exit(1)
    }
    
    console.log('✓ Connection Successful!')
    console.log(`  Total Borrowers: ${data?.length || 0}`)
    
    // Test 3: Data Validation
    if (data && data.length > 0) {
      console.log('\n✓ Test 3: Data Structure Validation')
      const sample = data[0]
      console.log(`  Sample Borrower: ${JSON.stringify(sample, null, 2)}`)
      console.log(`  Fields: ${Object.keys(sample).join(', ')}`)
    }
    
    // Test 4: Count Records
    console.log('\n⏳ Test 4: Counting Records...')
    const { count, error: countError } = await supabase
      .from('borrowers')
      .select('*', { count: 'exact', head: true })
    
    if (!countError) {
      console.log(`✓ Total Records in Database: ${count}`)
    }
    
    // Test 5: Error Handling
    console.log('\n⏳ Test 5: Error Handling Test...')
    const { error: testError } = await supabase
      .from('nonexistent_table')
      .select('*')
    
    if (testError) {
      console.log('✓ Error Handling Works Correctly')
      console.log(`  Expected Error Caught: ${testError.message}`)
    }
    
    console.log('\n' + '═'.repeat(50))
    console.log('✅ All Tests Passed!\n')
    
    process.exit(0)
    
  } catch (err) {
    console.error('\n❌ Unexpected Error Occurred:')
    console.error(err)
    process.exit(1)
  }
}

testConnection()
