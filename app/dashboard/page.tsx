'use client'

import { useState, useEffect } from 'react'
import { LoanService, LoanSummary } from '@/services/loanService'
import { PaymentService } from '@/services/paymentService'
import AddPayment from '@/components/AddPayment'

export default function DashboardPage() {
  const [loanSummaries, setLoanSummaries] = useState<LoanSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchLoanSummaries = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await LoanService.getLoanSummary()
      setLoanSummaries(data ?? [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch loan summaries')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLoanSummaries()
  }, [])

  const handlePaymentSuccess = () => {
    fetchLoanSummaries() // Refresh data after payment
  }

  const totalLent = loanSummaries.reduce((sum, loan) => sum + loan.total_loan_amount, 0)
  const totalCollected = loanSummaries.reduce((sum, loan) => sum + loan.total_paid, 0)
  const totalPending = loanSummaries.reduce((sum, loan) => sum + loan.remaining_balance, 0)

  if (loading) {
    return <div className="p-6">Loading dashboard...</div>
  }

  if (error) {
    return <div className="p-6 text-red-600">Error: {error}</div>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Loan Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded">
          <h2 className="text-lg font-semibold">Total Lent</h2>
          <p className="text-2xl">₹{totalLent.toLocaleString('en-IN')}</p>
        </div>
        <div className="bg-green-100 p-4 rounded">
          <h2 className="text-lg font-semibold">Total Collected</h2>
          <p className="text-2xl">₹{totalCollected.toLocaleString('en-IN')}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded">
          <h2 className="text-lg font-semibold">Total Pending</h2>
          <p className="text-2xl">₹{totalPending.toLocaleString('en-IN')}</p>
        </div>
      </div>

      {/* Loan Table */}
      <div className="bg-white shadow rounded">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Borrower ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Borrower Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Paid Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Remaining Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loanSummaries.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                  No loans available
                </td>
              </tr>
            ) : (
              loanSummaries.map((loan) => (
                <tr key={loan.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {loan.borrower_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {loan.borrower_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹{loan.total_loan_amount.toLocaleString('en-IN')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹{loan.total_paid.toLocaleString('en-IN')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹{loan.remaining_balance.toLocaleString('en-IN')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {loan.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <AddPayment loanId={loan.id} onSuccess={handlePaymentSuccess} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}