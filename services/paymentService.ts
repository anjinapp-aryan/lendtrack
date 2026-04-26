import supabase from '@/lib/supabase'

export interface Payment {
  id: string
  loan_id: string
  amount: number
  payment_date: string
  created_at: string
}

export class PaymentService {
  /**
   * Add a payment to the payments table (IMMUTABLE - only INSERT)
   */
  static async addPayment(loanId: string, amount: number): Promise<Payment> {
    if (!loanId) {
      throw new Error('Loan ID is required')
    }

    if (amount <= 0) {
      throw new Error('Payment amount must be greater than 0')
    }

    try {
      // Verify loan exists before adding payment
      const { data: loanData, error: loanError } = await supabase
        .from('loans')
        .select('id')
        .eq('id', loanId)
        .single()

      if (loanError || !loanData) {
        throw new Error('Invalid loan ID')
      }

      // Insert payment (payments table is immutable)
      const { data, error } = await supabase
        .from('payments')
        .insert({
          loan_id: loanId,
          amount: amount,
          payment_date: new Date().toISOString()
        })
        .select()
        .single()

      if (error) {
        throw new Error(`Failed to add payment: ${error.message}`)
      }

      return data
    } catch (error) {
      console.error('PaymentService.addPayment error:', error)
      throw error
    }
  }

  /**
   * Fetch all payments for a loan, sorted by date
   */
  static async getPaymentsByLoan(loanId: string): Promise<Payment[]> {
    if (!loanId) {
      throw new Error('Loan ID is required')
    }

    try {
      const { data, error } = await supabase
        .from('payments')
        .select('*')
        .eq('loan_id', loanId)
        .order('payment_date', { ascending: false })

      if (error) {
        throw new Error(`Failed to fetch payments: ${error.message}`)
      }

      return data || []
    } catch (error) {
      console.error('PaymentService.getPaymentsByLoan error:', error)
      throw error
    }
  }
}