import React from 'react'

function Loader() {
  return (
    <button class="btn btn-warning" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
  )
}

export default Loader