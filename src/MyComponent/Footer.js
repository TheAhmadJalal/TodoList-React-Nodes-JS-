import React from 'react'

export const Footer = () => {
  // can also make a .css file in MyComponent and write css code there
  let footerstyle={
    position:"relative",
    top:"91vh",
    width:"100%"
  }
  return (
    <footer className='bg-dark text-light text-center py-3' style={footerstyle}>
        CopyRight@2023 TodoApp.com

    </footer>
  )
}

export default Footer
