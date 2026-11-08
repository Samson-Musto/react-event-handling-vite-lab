

function PasswordInput() {
  function handleChange() {
    console.log('Entering password...')
  }

  return (
    <input
      type="password"
      onChange={handleChange}
      aria-label="Password"
    />
  )
}

export default PasswordInput
