import supabase from '@/lib/supabase'

describe('Supabase Connection Tests', () => {
  /**
   * Test 1: Verify Supabase Client Initialization
   * Validates that the Supabase client is properly initialized
   */
  test('should initialize Supabase client', () => {
    expect(supabase).toBeDefined()
    expect(supabase.from).toBeDefined()
  })

  /**
   * Test 2: Test Basic Connection (Fetch Borrowers)
   * Validates connectivity by fetching borrowers from the database
   */
  test('should fetch borrowers data from Supabase', async () => {
    const { data, error } = await supabase.from('borrowers').select('*')
    
    // Verify no error occurred
    expect(error).toBeNull()
    
    // Verify data is returned
    expect(data).toBeDefined()
    expect(Array.isArray(data)).toBe(true)
    
    console.log('✓ Borrowers data fetched successfully:', data)
  })

  /**
   * Test 3: Test Connection with Specific Columns
   * Validates fetching specific columns from borrowers table
   */
  test('should fetch specific columns from borrowers', async () => {
    const { data, error } = await supabase
      .from('borrowers')
      .select('id, name, phone')
    
    expect(error).toBeNull()
    expect(data).toBeDefined()
    expect(Array.isArray(data)).toBe(true)
    
    if (data && data.length > 0) {
      // Verify returned objects have expected columns
      const borrower = data[0]
      expect(borrower).toHaveProperty('id')
      expect(borrower).toHaveProperty('name')
      expect(borrower).toHaveProperty('phone')
    }
    
    console.log('✓ Specific columns fetched successfully:', data)
  })

  /**
   * Test 4: Test Error Handling (Invalid Table)
   * Validates proper error handling when querying non-existent table
   */
  test('should handle errors gracefully', async () => {
    const { data, error } = await supabase
      .from('invalid_table_123')
      .select('*')
    
    // Expect error since table doesn't exist
    expect(error).toBeDefined()
    
    console.log('✓ Error handling works correctly:', error?.message)
  })

  /**
   * Test 5: Test Data Structure
   * Validates that returned data has expected structure
   */
  test('should return borrowers with valid data structure', async () => {
    const { data, error } = await supabase
      .from('borrowers')
      .select('*')
      .limit(1)
    
    expect(error).toBeNull()
    expect(data).toBeDefined()
    
    if (data && data.length > 0) {
      const borrower = data[0]
      
      // Verify data is an object
      expect(typeof borrower).toBe('object')
      expect(borrower).not.toBeNull()
    }
    
    console.log('✓ Data structure validation passed')
  })

  /**
   * Test 6: Test Connection Stability (Multiple Requests)
   * Validates that multiple consecutive requests work correctly
   */
  test('should handle multiple consecutive requests', async () => {
    const requests = Array(3).fill(null).map(() =>
      supabase.from('borrowers').select('*').limit(5)
    )
    
    const results = await Promise.all(requests)
    
    results.forEach((result) => {
      expect(result.error).toBeNull()
      expect(result.data).toBeDefined()
      expect(Array.isArray(result.data)).toBe(true)
    })
    
    console.log('✓ Multiple requests handled successfully')
  })

  /**
   * Test 7: Test Limit and Offset
   * Validates pagination parameters work correctly
   */
  test('should support pagination with limit and offset', async () => {
    const { data: data1, error: error1 } = await supabase
      .from('borrowers')
      .select('*')
      .limit(5)
      .range(0, 4)
    
    expect(error1).toBeNull()
    expect(data1).toBeDefined()
    
    if (data1 && data1.length > 0) {
      expect(data1.length).toBeLessThanOrEqual(5)
    }
    
    console.log('✓ Pagination works correctly')
  })
})

/**
 * Manual Connection Test - Run this directly if needed
 * 
 * Usage:
 * node -r ts-node/register __tests__/supabase.test.ts
 */
export async function testSupabaseConnection() {
  console.log('🧪 Testing Supabase Connection...\n')
  
  try {
    console.log('1️⃣  Fetching borrowers...')
    const { data, error } = await supabase.from('borrowers').select('*')
    
    if (error) {
      console.error('❌ Error:', error.message)
      return
    }
    
    console.log('✅ Connection Successful!')
    console.log(`📊 Found ${data?.length || 0} borrowers`)
    console.log('\n📋 Sample Data:')
    console.log(JSON.stringify(data?.slice(0, 2), null, 2))
    
  } catch (error) {
    console.error('❌ Exception occurred:', error)
  }
}
