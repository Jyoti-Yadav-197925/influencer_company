


import React from 'react'
import SubscriptionCard from '../../components/Membership/SubscriptionCard'
import ExpiredCards from '../../components/Membership/ExpiredCards'

function InfluencerMembership() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold mb-6 text-start">Subscription History</h1>

        {/* Grid Layout for Subscription Cards */}
        <div className="grid grid-cols-2 gap-6">
          {/* Active Subscription Cards */}
          <SubscriptionCard />
          <SubscriptionCard />

          {/* Expired Subscription Cards */}
          <ExpiredCards />
          <ExpiredCards />
          <ExpiredCards />
          <ExpiredCards />
          <ExpiredCards />
          <ExpiredCards />
        </div>
      </div>
    </div>
  )
}

export default InfluencerMembership