import ExpiredPage from "./components/Expired/Expired"
import HomeForm from "./components/HomeForm/HomeForm"

export default function Home() {
  const now = new Date()

  // Months are 0-based, so July = 6
  const expiryDate = new Date(now.getFullYear(), 6, 20)

  const isExpired = now > expiryDate

  return isExpired ? <ExpiredPage /> : <HomeForm />
}
