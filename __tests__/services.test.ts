import { LoanService } from '../services/loanService'
import { PaymentService } from '../services/paymentService'

describe('Service Layer Tests', () => {
  describe('LoanService', () => {
    test('should export LoanService class', () => {
      expect(LoanService).toBeDefined()
      expect(typeof LoanService.getLoanSummary).toBe('function')
      expect(typeof LoanService.getBorrowerLoans).toBe('function')
      expect(typeof LoanService.getLoanDetails).toBe('function')
    })

    test('should throw error for invalid borrower ID', async () => {
      await expect(LoanService.getBorrowerLoans('')).rejects.toThrow('Borrower ID is required')
    })

    test('should throw error for invalid loan ID', async () => {
      await expect(LoanService.getLoanDetails('')).rejects.toThrow('Loan ID is required')
    })
  })

  describe('PaymentService', () => {
    test('should export PaymentService class', () => {
      expect(PaymentService).toBeDefined()
      expect(typeof PaymentService.addPayment).toBe('function')
      expect(typeof PaymentService.getPaymentsByLoan).toBe('function')
    })

    test('should throw error for invalid loan ID', async () => {
      await expect(PaymentService.getPaymentsByLoan('')).rejects.toThrow('Loan ID is required')
    })

    test('should throw error for invalid payment amount', async () => {
      await expect(PaymentService.addPayment('valid-id', 0)).rejects.toThrow('Payment amount must be greater than 0')
      await expect(PaymentService.addPayment('valid-id', -100)).rejects.toThrow('Payment amount must be greater than 0')
    })

    test('should throw error for empty loan ID in addPayment', async () => {
      await expect(PaymentService.addPayment('', 100)).rejects.toThrow('Loan ID is required')
    })
  })
})