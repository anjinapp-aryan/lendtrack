'use client'

import { useState } from 'react'
import { PaymentService } from '@/services/paymentService'

interface AddPaymentProps {
  loanId: string
  onSuccess: () => void
}

export default function AddPayment({ loanId, onSuccess }: AddPaymentProps) {
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const numAmount = parseFloat(amount)
    if (!amount || numAmount <= 0) {
      setMessage({ type: 'error', text: 'Please enter a valid amount greater than 0' })
      return
    }

    try {
      setLoading(true)
      setMessage(null)
      await PaymentService.addPayment(loanId, numAmount)
      setMessage({ type: 'success', text: 'Payment added successfully' })
      setAmount('')
      onSuccess()
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : 'Failed to add payment' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="number"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="px-2 py-1 border rounded text-sm w-24"
        disabled={loading}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-50"
      >
        {loading ? 'Adding...' : 'Add Payment'}
      </button>
      {message && (
        <span className={`text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message.text}
        </span>
      )}
    </form>
  )
}