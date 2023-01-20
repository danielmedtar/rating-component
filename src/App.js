import {useState} from "react"
import star from "./images/icon-star.svg"
import thanks from "./images/thank-you.svg"

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [items, setItems] = useState("")

  const Button = ({number}) => {
    return <button onClick={() => setItems(number)} className="numbers-button bg-gray-700 h-10 w-10 rounded-full pt-1">{number}</button>
  }

  return (
   <>
    {!submitted && (
      <div className="wrapper">
        <img src={star} alt="Star Icon" className="bg-gray-700 p-2 rounded-full" />

        <h2 className="text-gray-100 text-3xl my-6">How did we do?</h2>

        <p className="text-gray-400 mb-10">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <ul className="grid grid-cols-5 gap-3 mb-10">
          <li>
            <Button number={1} />
          </li>
          
          <li>
            <Button number={2} />
          </li>
          
          <li>
            <Button number={3} />
          </li>
          <li>
            <Button number={4} />
          </li>
          
          <li>
            <Button number={5} />
          </li>
        </ul>

        <div className="text-center">
          <button onClick={() => setSubmitted(true)} className="rating-button">Submit</button>
        </div>
      </div>
    )}

    {submitted && <ThankYouPage setSubmitted={setSubmitted} items={items} />}
   </>
  );
}

const ThankYouPage = ({setSubmitted, items}) => {
  return (
    <div className="wrapper">
      <img src={thanks} alt="Thank You" className="block mx-auto mb-7" />
      <div className="flex items-center justify-center">
        <p className="p-thanks text-center bg-gray-700 rounded-full px-5 pt-2 pb-1">You selected {items} of 5</p>
      </div>
      <h2 className="thanks-title text-3xl text-center mt-5 mb-4">Thank You!</h2>
      <p className="text-center">We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!</p>

      <div className="text-center mt-10">
        <button onClick={() => setSubmitted(false)} className="rating-button">Back</button>
      </div>
    </div>
  )
}

export default App;
