

export default function App() {
  const address: string = "0x1220309339040405"
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">SOY TOKEN</h1>
        <p className="text-sm text-gray-500">{address}</p>
      </div>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold mb-4 text-gray-700">Transfer</h1>
        <form className="space-y-4">
          <div>
            <p className="text-gray-600 mb-2">Amount of SOY</p>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <p className="text-gray-600 mb-2">Recipient Address</p>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600">Transfer</button>
        </form>
      </div>
    </div>
  )
}