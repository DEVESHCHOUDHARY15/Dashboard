import { useState } from "react";

function Analytics() {
  const [formFieldsData, setFormFieldsData] = useState({
    username: "",
    income: "",
    expense: "",
    expenseType: "",
    date: "",
  });

  const handleForm = async (e) => {
    e.preventDefault();

    const formData = { ...formFieldsData };

    const response = await fetch("https://moneytracker.free.beeceptor.com", {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify(formData),
    });

    const json = await response.json();
    console.log(json);

    setFormFieldsData({
      username: "",
      income: "",
      expense: "",
      expenseType: "",
      date: "",
    });
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormFieldsData((prevData) => ({
      ...prevData,
      [name]:
        type === "text" || type === "date"
          ? value
          : type === "radio"
          ? value
          : parseFloat(value),
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8 w-3/4">
      <h1 className="text-2xl font-semibold text-gray-800">Analytics Page</h1>
      <form
        onSubmit={handleForm}
        className="bg-white shadow-md rounded-lg mt-6"
      >
        {/* Form Fields */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
            <label className="block text-sm text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="w-full px-3 py-2 text-gray-700 border rounded-md "
              placeholder="Enter your username"
              required
              value={formFieldsData.username}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="monthlyIncome"
              className="block text-sm text-gray-700 font-medium mb-1"
            >
              Monthly Income
            </label>
            <input
              id="monthlyIncome"
              type="number"
              name="income"
              className="w-full px-3 py-2 text-gray-700 border rounded-md "
              placeholder="Enter your income"
              required
              value={formFieldsData.income}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="monthlyExpense"
              className="block text-sm text-gray-700 font-medium mb-1"
            >
              Monthly Expense
            </label>
            <input
              id="monthlyExpense"
              type="number"
              name="expense"
              className="w-full px-3 py-2 text-gray-700 border rounded-md "
              placeholder="Enter your expense"
              required
              value={formFieldsData.expense}
              onChange={handleChange}
            />
          </div>
          {/* Radio Button Group (Improved Layout) */}
          <div className="w-full px-3 mb-6">
            <label className="text-sm text-gray-700 font-medium mb-2">
              Expense Type
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center text-sm font-semibold">
                <input
                  type="radio"
                  name="expenseType"
                  value="daily"
                  className="mr-2 border border-gray-300 rounded "
                  checked={formFieldsData.expenseType === "daily"}
                  onChange={handleChange}
                />
                Daily Expenses
              </label>
              <label className="flex items-center text-sm font-semibold">
                <input
                  type="radio"
                  name="expenseType"
                  value="unplanned"
                  className="mr-2 border border-gray-300 rounded"
                  checked={formFieldsData.expenseType === "unplanned"}
                />
                Unplanned Expenses
              </label>
              <label className="flex items-center text-sm font-semibold">
                <input
                  type="radio"
                  name="expenseType"
                  value="emi"
                  className="mr-2 border border-gray-300 rounded "
                  checked={formFieldsData.expenseType === "emi"}
                />
                EMI Expenses
              </label>
            </div>
            <div>
              <label className="block text-sm text-gray-700 font-medium mb-1 py-2">
                Enter Date
              </label>
              <input
                className="mr-2 border border-gray-300  p-2 rounded-md -mt-3"
                name="date"
                type="date"
                required
                value={formFieldsData.date}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end ">
          <button
            type="submit"
            className="bg-rose-300 text-white p-2 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Analytics;
