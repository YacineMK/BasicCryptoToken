

export default function App() {
  const address: string = "0x1220309339040405"
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <div>
        <h1>SOY TOKEN </h1>
        <p>{address}</p>
      </div>
      <div>
        <h1>Transfer</h1>
        <form>
          <div>
            <p>Amount of SOY</p>
            <input type="text" className="border" />
          </div>
          <div>
            <p>Amount of SOY</p>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  )
}