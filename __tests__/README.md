# Supabase Connection Testing Guide

## Overview
This directory contains comprehensive test cases for verifying Supabase connectivity and database operations.

## Test Files

### 1. `__tests__/supabase.test.ts`
Main Jest test suite with 7 comprehensive test cases:

- **Test 1**: Client Initialization
- **Test 2**: Basic Connection (Fetch Borrowers)
- **Test 3**: Specific Columns Selection
- **Test 4**: Error Handling
- **Test 5**: Data Structure Validation
- **Test 6**: Multiple Consecutive Requests
- **Test 7**: Pagination Support

### 2. `scripts/test-connection.js`
Standalone connection test script for quick verification

## Running Tests

### Option 1: Jest Test Suite
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Run only Supabase tests
npm test -- supabase.test
```

### Option 2: Direct Connection Test
```bash
npm run test:connection
```

This runs a standalone script that:
- Initializes Supabase client
- Fetches borrowers data
- Validates data structure
- Tests error handling
- Displays results in a formatted output

## What Gets Tested

### Connection Tests
✅ Client initialization  
✅ Database connectivity  
✅ Authentication keys validation  

### Data Retrieval Tests
✅ Fetch all records from borrowers table  
✅ Fetch specific columns  
✅ Apply limit and offset (pagination)  
✅ Count total records  

### Error Handling Tests
✅ Graceful error handling for invalid tables  
✅ Error message formatting  
✅ Connection error responses  

### Data Integrity Tests
✅ Valid data structure  
✅ Expected columns presence  
✅ Data type validation  
✅ Multiple concurrent requests stability  

## Expected Output

### Successful Connection
```
✓ Borrowers data fetched successfully
✓ Connection Successful!
📊 Found 12 borrowers
```

### Connection Failed
```
❌ Connection Failed!
  Error: Unauthorized
  Code: 401
```

## Database Schema Expected

The tests expect a `borrowers` table with at least these columns:
- `id` (primary key)
- `name` (text)
- `phone` (text)

## Troubleshooting

### "Cannot find module '@supabase/supabase-js'"
```bash
npm install
```

### "RLS Policy Error"
- Check Row Level Security (RLS) policies in Supabase dashboard
- Ensure the API key has appropriate permissions
- Verify the table exists and has correct permissions

### "Unauthorized" Error
- Verify Supabase URL and keys are correct
- Check if the publishable key is valid
- Ensure the table is accessible with the current permissions

## Environment Variables

Current configuration uses hardcoded Supabase credentials (suitable for development):
```javascript
const supabaseUrl = 'https://hstwznimpygzekinftpx.supabase.co'
const supabaseKey = 'sb_publishable_xojKY8lj4uVdZtBPiIRBuQ_2LwqT4de'
```

For production, use environment variables:
```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

## Manual Testing

Run the manual test function from `__tests__/supabase.test.ts`:

```typescript
import { testSupabaseConnection } from '@/__tests__/supabase.test'

testSupabaseConnection()
```

This will output:
- Connection status
- Number of borrowers found
- Sample data from the database
- Data structure information
