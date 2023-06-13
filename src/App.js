
import { useState } from "react";

import Footer from "./components/Footer";
import Table from "./components/Table";
import Notes from "./components/Notes";
import Header from "./components/Header";
import ClientDetails from "./components/ClientDetails";
import MainDetails from "./components/MainDetails";
import Dates from "./components/Dates";


function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [bankName, setBankName] = useState("")
  const [account, setAccount] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [website, setWebsite] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")


  const handlePrint = () => {
    window.print()
  }
  return (
    <>
      <main className="m-5 p-5  xl: max-w-4xl xl:mx-auto bg-white rounded shadow">
        {showInvoice ? <div>

          <Header handlePrint={handlePrint} />
          <MainDetails name={name} address={address} />
          <ClientDetails clientName={clientName} clientAddress={clientAddress} />
          <Dates dueDate={dueDate} invoiceDate={invoiceDate} invoiceNumber={invoiceNumber} />

          <Table />
          <Notes notes={notes} />
          <Footer name={name} address={address} website={website} email={email} phone={phone} bankName={bankName} account={account} />

          <button onClick={() => setShowInvoice(false)} className=" mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"> Edit Info </button>
        </div> : (
          <>
            {/* name, invoice number, address, invoice number, invoice number, bank name, bank account number, */}
            <div className=" flex flex-col justify-col">
              <label htmlFor=" name" > Enter your name </label>
              <input
                type=" text"
                name="text"
                id="name"
                placeholder="Enter your name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor=" address" > Enter your address </label>
              <input
                type="address"
                name="address"
                id="address"
                placeholder="Enter your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor=" email" > Enter your email </label>
              <input
                type=" email"
                name="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor=" phone" > Enter your phone number </label>
              <input
                type="text"
                name="text"
                id="phone"
                placeholder="Enter your phone"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />


              <label htmlFor="bankName" > Enter your bank  </label>
              <input
                type="text"
                name="text"
                id="bank"
                placeholder="Enter your bank"
                autoComplete="off"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
              <label htmlFor="account" > Enter your account number </label>
              <input
                type="text"
                name="text"
                id="account"
                placeholder="Enter your account number"
                autoComplete="off"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              />
              <label htmlFor=" clientName" > Enter your Client name </label>
              <input
                type="text"
                name="text"
                id="clientName"
                placeholder="Enter your client name"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
              <label htmlFor=" clientAddress" > Enter your client address </label>
              <input
                type="text"
                name="text"
                id="clientAddress"
                placeholder="Enter your client address"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />
              <label htmlFor="website" > Enter your website </label>
              <input
                type="url"
                name="text"
                id="website"
                placeholder="Enter your  website"
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
              <label htmlFor=" invoiceNumber" > Enter your invoice number </label>
              <input
                type="text"
                name="text"
                id="invoiceNumber"
                placeholder="Enter your invoice number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
              <label htmlFor=" invoiceDate" > Enter your invoice date </label>
              <input
                type="date"
                name="text"
                id="invoiceDate"
                placeholder="Enter your invoice dater"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
              <label htmlFor=" dueDate" > Enter due date </label>
              <input
                type="date"
                name="text"
                id="dueDate"
                placeholder="Enter due date"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              <label htmlFor=" note" > Additional notes  </label>
              <input
                type="text"
                name="text"
                id="note"
                placeholder="Enter notes"
                autoComplete="off"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <button onClick={() => setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                Preview Invoice
              </button>


            </div>
          </>
        )}

      </main>
    </>
  )
}
export default App
