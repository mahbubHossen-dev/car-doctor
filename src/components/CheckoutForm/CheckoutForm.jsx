
'use client'
import React from 'react'

export default function CheckoutForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const date = form.date.value
        const email = form.email.value
        const dueAmount = form.dueAmount.value
        const phone = form.phone.value
        const address = form.address.value
        // console.log("Form Data:", formData);
        console.log({ name, date, email, dueAmount, phone, address })
    };


    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">User Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"

                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="date"
                    name="date"

                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"

                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="number"
                    name="dueAmount"
                    placeholder="Due Amount"

                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="text"
                    name="address"

                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
