import React, { useState, useEffect } from 'react'
import { dummyDashboardData, assets } from '../../assets/assets'
import Title from '../../components/owner/Title'

const Dashboard = () => {

  const currency = import.meta.env.VITE_CURRENCY || '$'

  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBooking: [],
    monthlyRevenue: 0,
  })

  useEffect(() => {
    setData(dummyDashboardData)
  }, [])

  const dashboardCards = [
    { title: "Total Cars", value: data.totalCars, icon: assets.carIconColored },
    { title: "Total Bookings", value: data.totalBookings, icon: assets.listIconColored },
    { title: "Pending", value: data.pendingBookings, icon: assets.cautionIconColored },
    { title: "Confirmed", value: data.completedBookings, icon: assets.listIconColored },
  ]

  return (
    <div className="px-4 pt-10 md:px-10 flex-1">

      <Title
        title="Admin Dashboard"
        subTitle="Monitor overall platform performance including total cars, bookings, revenue, and recent activities"
      />

      {/* Top cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-md border border-borderColor"
          >
            <div>
              <p className="text-xs text-gray-500">{card.title}</p>
              <p className="text-lg font-semibold">{card.value}</p>
            </div>

            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <img src={card.icon} alt="" className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

        {/* Recent Bookings */}
        <div className="lg:col-span-2 p-4 md:p-6 border border-borderColor rounded-md">
          <h1 className="text-lg font-medium">Recent Bookings</h1>
          <p className="text-gray-500">Latest customer bookings</p>

          {data.recentBooking?.length > 0 ? (
            data.recentBooking.map((booking, index) => (
              <div
                key={index}
                className="mt-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <img
                      src={assets.listIconColored}
                      alt=""
                      className="h-5 w-5"
                    />
                  </div>

                  <div>
                    <p className="font-medium">
                      {booking.car.brand} {booking.car.model}
                    </p>
                    <p className="text-sm text-gray-500">
                      {booking.createdAt?.split('T')[0]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-medium">
                  <p className="text-sm text-gray-500">
                    {currency}{booking.price}
                  </p>

                  <span
                    className={`px-3 py-0.5 rounded-full text-xs border
                      ${
                        booking.status === 'confirmed'
                          ? 'bg-green-400/15 text-green-600 border-green-300'
                          : 'bg-yellow-400/15 text-yellow-600 border-yellow-300'
                      }`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="mt-4 text-sm text-gray-500">
              No recent bookings
            </p>
          )}
        </div>

        {/* Monthly Revenue */}
        <div className="p-4 md:p-6 border border-borderColor rounded-md">
          <h1 className="text-lg font-medium">Monthly Revenue</h1>
          <p className="text-gray-500">Revenue for current month</p>

          <p className="text-3xl font-semibold text-primary mt-4">
            {currency}{data.monthlyRevenue}
          </p>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
