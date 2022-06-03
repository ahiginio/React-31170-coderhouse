import React from "react"
export default function PageLoading () {
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  },[])
  return (
    <div>
      {isLoading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <h1>Page loaded</h1>
        </div>
      )}
    </div>
  )
}