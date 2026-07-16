export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-3 bold">Wellcome to this mystry door!!</h1>
      <h2 className="text-2 font-semibold">
        Just a few question to open this door!
      </h2>
      <h3>Please Cooperate!</h3>

      <form>
        <p>what is your name?</p>
        <div>
          <label htmlFor="firstname">First name</label>
          <input type="text" name="firstname" id="firstname" />
        </div>
      </form>
    </div>
  )
}
