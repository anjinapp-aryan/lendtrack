import supabase from '@/lib/supabase'

export interface LoanSummary {
  id: string
  borrower_id: string
  borrower_name: string
  total_loan_amount: number
  total_paid: number
  remaining_balance: number
  status: string
  created_at: string
}

export interface Loan {
  id: string
  borrower_id: string
  amount: number
  interest_rate: number
  term_months: number
  status: string
  created_at: string
}

export interface Payment {
  id: string
  loan_id: string
  amount: number
  payment_date: string
  created_at: string
}

export interface LoanDetails {
  loan: Loan
  payments: Payment[]
}

export class LoanService {
  /**
   * Fetch loan summary from the loan_summary view (source of truth)
   */
  static async getLoanSummary(): Promise<LoanSummary[]> {
    try {
      const { data, error } = await supabase
        .from('loan_summary')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        throw new Error(`Failed to fetch loan summary: ${error.message}`)
      }

      return data || []
    } catch (error) {
      console.error('LoanService.getLoanSummary error:', error)
      throw error
    }
  }

  /**
   * Fetch loans for a specific borrower
   */
  static async getBorrowerLoans(borrowerId: string): Promise<Loan[]> {
    if (!borrowerId) {
      throw new Error('Borrower ID is required')
    }

    try {
      const { data, error } = await supabase
        .from('loans')
        .select('*')
        .eq('borrower_id', borrowerId)
        .order('created_at', { ascending: false })

      if (error) {
        throw new Error(`Failed to fetch borrower loans: ${error.message}`)
      }

      return data || []
    } catch (error) {
      console.error('LoanService.getBorrowerLoans error:', error)
      throw error
    }
  }

  /**
   * Fetch loan details including payment history
   */
  static async getLoanDetails(loanId: string): Promise<LoanDetails | null> {
    if (!loanId) {
      throw new Error('Loan ID is required')
    }

    try {
      // Fetch loan details
      const { data: loanData, error: loanError } = await supabase
        .from('loans')
        .select('*')
        .eq('id', loanId)
        .single()

      if (loanError) {
        throw new Error(`Failed to fetch loan: ${loanError.message}`)
      }

      if (!loanData) {
        return null
      }

      // Fetch payment history
      const { data: paymentData, error: paymentError } = await supabase
        .from('payments')
        .select('*')
        .eq('loan_id', loanId)
        .order('payment_date', { ascending: false })

      if (paymentError) {
        throw new Error(`Failed to fetch payments: ${paymentError.message}`)
      }

      return {
        loan: loanData,
        payments: paymentData || []
      }
    } catch (error) {
      console.error('LoanService.getLoanDetails error:', error)
      throw error
    }
  }
}